from flask import Flask, request, jsonify
from pymongo import MongoClient
from geminiservice.gemini_functions import user_skills, user_themes

app = Flask(__name__)

# Environment variables for security
MONGO_URI = "mongodb+srv://owner:hirmi1423@cluster0.ubhawwh.mongodb.net/"

# Setup MongoDB connection
client = MongoClient(MONGO_URI)
db = client['worksolutions']  # Database name
work_collection = db['workplaces']  # Collection name
theme_collection = db['themes']  # Collection theme
skills_collection = db['skills']  # Collection theme


def select_specific_fields(collection, query={}, fields=None):
    documents = collection.find(query, fields)
    document_list = list(value for d in documents for value in d.values())
    return document_list


@app.route('/')
def hello_world():
    return 'Hello, World!'


@app.route('/add_workplace', methods=['POST'])
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


@app.route('/get_all_workplace', methods=['GET'])
def get_all_workflows():
    return get_all_workflows_from_db()


@app.route('/getWorkplaceByTaz', methods=['GET'])
def get_workplace_by_taz():
    data = request.json
    return get_workplace_by_taz_from_db(data["taz"])


@app.route('/editWorkplace',  methods=['GET'])
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


@app.route('/get_all_workplace', methods=['GET'])
def login():
    return get_all_workflows_from_db()

def get_all_workflows_from_db():
    current_work_collection = db['workplaces']
    return list(current_work_collection.find())


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
    app.run(host='0.0.0.0', debug=True)
