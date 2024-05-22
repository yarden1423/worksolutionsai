from flask import Flask, request, jsonify
from pymongo import MongoClient
from geminiservice.gemini_functions import user_skills, user_themes
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin, LoginManager, login_user, logout_user, login_required, current_user

app = Flask(__name__)
app.config['SECRET_KEY'] = 'TodaBoreOlamAlHanitzachon14573@!$!@'  # You should use a secure, unique secret key!

# Environment variables for security
MONGO_URI = "mongodb+srv://owner:hirmi1423@cluster0.ubhawwh.mongodb.net/"

# Setup MongoDB connection
client = MongoClient(MONGO_URI)
db = client['worksolutions']  # Database name
work_collection = db['workplaces']  # Collection name
theme_collection = db['themes']  # Collection theme
skills_collection = db['skills']  # Collection theme
users_collection = db['users']


class User(UserMixin):
    def __init__(self, id_number, name, phone_number, email):
        self.id_number = id_number
        self.name = name
        self.phone_number = phone_number
        self.email = email

    @staticmethod
    def get_by_id_number(id_number):
        user_data = users_collection.find_one({"id_number": id_number})
        if user_data:
            return User(id_number=user_data['id_number'], name=user_data['name'], phone_number=user_data['phone_number'], email=user_data['email'])
        return None

    def get_id(self):
        return self.id_number


@app.route('/register', methods=['POST'])
def register():
    id_number = request.json.get('id_number')
    name = request.json.get('name')
    password = request.json.get('password')
    phone_number = request.json.get('phone_number')
    email = request.json.get('email')

    # Validate required fields
    if not all([id_number, name, password, phone_number, email]):
        return jsonify({"error": "All fields are required"}), 400

    # Check if user already exists
    if users_collection.find_one({"id_number": id_number}):
        return jsonify({"error": "User with this ID number already exists"}), 409

    # Hash the password
    hashed_password = generate_password_hash(password)

    # Insert new user
    users_collection.insert_one({
        "id_number": id_number,
        "name": name,
        "password": hashed_password,
        "phone_number": phone_number,
        "email": email
    })
    return jsonify({"message": "User registered successfully"}), 201


@app.route('/login', methods=['POST'])
def login():
    id_number = request.json.get('id_number')
    password = request.json.get('password')
    user_document = users_collection.find_one({"id_number": id_number})

    if user_document and check_password_hash(user_document['password'], password):
        user = User(id_number=id_number, name=user_document['name'], phone_number=user_document['phone_number'], email=user_document['email'])
        login_user(user)
        return jsonify({"message": "Logged in successfully"}), 200

    return jsonify({"error": "Invalid ID number or password"}), 401


def select_specific_fields(collection, query={}, fields=None):
    documents = collection.find(query, fields)
    document_list = list(value for d in documents for value in d.values())
    return document_list


@app.route('/')
def hello_world():
    return 'Hello, World!'


@app.route('/add_workplace', methods=['POST'])
@login_required
def add_workplace():
    if request.method == 'POST':
        workplace_data = request.json
        result = work_collection.insert_one(workplace_data)
        return jsonify({"message": "Workplace added successfully", "id": str(result.inserted_id)}), 201


@app.route('/find_workplace', methods=['GET'])
def find_workplace():
    if request.method == 'GET':
        max_matches = 0
        selected_name = None
        final_work_places = []
        find_workplace_str = request.get_data(as_text=True)
        # function calls gemini api to get all themes based on given cv
        final_themes = user_themes(find_workplace_str, "\n".join(get_all_themes()))

        work_places = get_work_places_from_themes(final_themes)
        skills_list = [skill['name'] for item in work_places for skill in item['demandedSkills']]

        # call to gemini api to get cv skills
        final_skills = user_skills(find_workplace_str, "\n".join(skills_list))

        for workplace in work_places:
            matches = sum(1 for skill in workplace['demandedSkills'] if skill['name'] in final_skills)
            matches_percentage = (matches / len(final_skills)) * 100
            if matches_percentage > 25:
                final_work_places.append({workplace['name']: matches_percentage})

        return final_work_places


def get_work_places_from_themes(themes_list):
    query = {"theme.name": {"$in": themes_list}}
    fields = {"_id": 0, "demandedSkills.name": 1, "name": 1}
    # Find documents in MongoDB based on the query
    documents = work_collection.find(query, fields)
    work_places = list(documents)
    return work_places


def get_all_themes():
    # query[] = request.args.to_dict()
    query = {}  # Replace with your query criteria if needed

    # Define the fields to project (0 excludes the field, 1 includes it)
    fields = {"name": 1, "_id": 0}  # Include 'name' field, exclude '_id' field

    # Call the function to select and print specific fields
    return select_specific_fields(theme_collection, query, fields)


def get_all_skills():
    # query[] = request.args.to_dict()
    query = {}  # Replace with your query criteria if needed

    # Define the fields to project (0 excludes the field, 1 includes it)
    fields = {"name": 1, "_id": 0}  # Include 'name' field, exclude '_id' field

    # Call the function to select and print specific fields
    return select_specific_fields(skills_collection, query, fields)


# Press the green button in the gutter to run the script.
if __name__ == '__main__':
    app.run(debug=True)
