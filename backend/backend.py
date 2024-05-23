from flask import Flask, request, jsonify
from pymongo import MongoClient
from geminiservice.gemini_functions import user_skills, user_themes
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin, LoginManager, login_user, logout_user, login_required, current_user
import re
from flask_cors import CORS, cross_origin
from bson import json_util, ObjectId
import json

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

app = Flask(__name__)
app.config['SECRET_KEY'] = 'TodaBoreOlamAlHanitzachon14573@!$!@'  # You should use a secure, unique secret key!

login_manager = LoginManager()
login_manager.init_app(app)

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
    def __init__(self, taz, name, phoneNumber, gmail):
        self.taz = taz
        self.name = name
        self.phoneNumber = phoneNumber
        self.gmail = gmail

    @staticmethod
    def get_by_taz(taz):
        user_data = users_collection.find_one({"taz": taz})
        if user_data:
            return User(taz=user_data['taz'], name=user_data['name'], phoneNumber=user_data['phoneNumber'], gmail=user_data['gmail'])
        return None

    def get_id(self):
        return self.taz

@login_manager.user_loader
def load_user(username):
    return User.get_by_taz(username)

def validate_password(password):
    if len(password) < 8:
        return "Password must be at least 8 characters long."
    if not re.search("[a-z]", password):
        return "Password must contain at least one lowercase letter."
    if not re.search("[A-Z]", password):
        return "Password must contain at least one uppercase letter."
    if not re.search("[0-9]", password):
        return "Password must contain at least one digit."
    if not re.search("[!@#$%^&*(),.?\":{}|<>]", password):
        return "Password must contain at least one special character."

    return "Password is strong."
@app.route('/register', methods=['POST'])
def register():
    taz = request.json.get('taz')
    name = request.json.get('name')
    password = request.json.get('password')
    phoneNumber = request.json.get('phoneNumber')
    gmail = request.json.get('gmail')

    # Validate required fields
    if not all([taz, name, password, phoneNumber, gmail]):
        return jsonify({"error": "All fields are required"}), 400

    # Check if user already exists
    if users_collection.find_one({"taz": taz}):
        return jsonify({"error": "User with this ID number already exists"}), 409

    password_validation = validate_password(password)
    if password_validation != "Password is strong.":
        return jsonify({"error": password_validation}), 400

    # Hash the password
    hashed_password = generate_password_hash(password)

    # Insert new user
    users_collection.insert_one({
        "taz": taz,
        "name": name,
        "password": hashed_password,
        "phoneNumber": phoneNumber,
        "gmail": gmail
    })
    return jsonify({"message": "User registered successfully"}), 201


@app.route('/login', methods=['POST'])
def login():
    taz = request.json.get('taz')
    password = request.json.get('password')
    user_document = users_collection.find_one({"taz": taz})

    if user_document and check_password_hash(user_document['password'], password):
        user = User(taz=taz, name=user_document['name'], phoneNumber=user_document['phoneNumber'], gmail=user_document['gmail'])
        login_user(user)
        return jsonify({"message": "Logged in successfully"}), 200

    return jsonify({"error": "Invalid ID number or password"}), 401

@app.route('/logout')
@login_required
def logout():
    logout_user()
    return jsonify({"message": "Logged out successfully"}), 200


def select_specific_fields(collection, query={}, fields=None):
    documents = collection.find(query, fields)
    document_list = list(value for d in documents for value in d.values())
    return document_list

@app.route('/add_workplace', methods=['POST'])
@cross_origin()
@login_required
def add_workplace():
    if request.method == 'POST':
        workplace_data = request.json
        result = work_collection.insert_one(workplace_data)
        return jsonify({"message": "Workplace added successfully", "id": str(result.inserted_id)}), 201

@app.route('/find_workplace', methods=['POST'])
@cross_origin()
def find_workplace():
    if request.method == 'POST':
        max_matches = 0
        selected_name = None
        final_work_places = []
        print(request.json['cv'])

        find_workplace_str = request.json['cv']
        # function calls gemini api to get all themes based on given cv
        final_themes = user_themes(find_workplace_str, "\n".join(get_all_themes()))

        work_places = get_work_places_from_themes(final_themes)
        skills_list = [skill['name'] for item in work_places for skill in item['demandedSkills']]

        # call to gemini api to get cv skills
        final_skills = user_skills(find_workplace_str, "\n".join(skills_list))
        if len(final_skills) != 0:
            for workplace in work_places:
                matches = sum(1 for skill in workplace['demandedSkills'] if skill['name'] in final_skills)
                matches_percentage = (matches / len(final_skills)) * 100
                print(matches_percentage)
                if matches_percentage > 10:
                    final_work_places.append({'obj': workplace ,'match': matches_percentage })

        return final_work_places


@app.route('/get_all_workplace', methods=['GET'])
@cross_origin()
def get_all_workflows():
    return get_all_workflows_from_db()


@app.route('/getWorkplaceByTaz', methods=['GET'])
@cross_origin()
def get_workplace_by_taz():
    data = request.json
    return get_workplace_by_taz_from_db(data["taz"])


@app.route('/editWorkplace',  methods=['GET'])
@cross_origin()
def edit_workplace():
    name = request.json['name']
    new_data = request.json['new_data']
    if edit_workplace_db(name, new_data):
        return 'sucess'


def edit_workplace_db(name, new_data):
    work_collection1 = db['workplaces']
    result = work_collection1.update_many({'name': name},{'$set': new_data})
    return result.modified_count > 0

def get_workplace_by_taz_from_db(taz):
    current_work_collection = db['workplaces']
    pipeline =  [{'$lookup': {'from': 'users', 'localField': 'owners', 'foreignField': '_id', 'as': 'joined_data'}}]

    results = list(current_work_collection.aggregate(pipeline))

    return [a['name'] for a in results if len(a['joined_data']) == 1 and a['joined_data'][0]['taz'] == str(taz)]

def get_all_workflows_from_db():
    current_work_collection = db['workplaces']
    return list(json.loads(json_util.dumps(current_work_collection.find({}))))


def get_work_places_from_themes(themes_list):
    query = {"theme.name": {"$in": themes_list}}
    # Find documents in MongoDB based on the query
    documents = work_collection.find(query)
    work_places = list(json.loads(json_util.dumps(documents)))
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
    app.run(host='0.0.0.0', debug=True)
