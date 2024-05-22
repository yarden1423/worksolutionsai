from flask import Flask, request, jsonify
from pymongo import MongoClient
import os

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
        final_themes = None#TODO send the CV to gimenay function and get themes
        work_places = get_work_places_from_themes(final_themes)
        skills_list = [skill['name'] for item in documents for skill in item['demandedSkills']]
        final_skills = None #TODO send the skills to gimenay function and get the matching skills

        for workplace in work_places:
            matches = sum(1 for skill in workplace['demandedSkills'] if skill['name'] in final_skills)
            matches_percentage = (matches/len(final_skills))*100
            if matches_percentage > 70:
                final_work_places.append({workplace['name'] : matches_percentage})


def get_work_places_from_themes(themes_list):
    query = {"theme": {"$in": themes_list}}
    fields = {"name": 1, "demandedSkills.$.name": 1}
    # Find documents in MongoDB based on the query
    documents = work_collection.find(query, fields)
    return documents

[{name: "dan", demandedSkills: [{name: "hey"}]}]
    # Convert the cursor to a list of document values


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
    #app.run(debug=True)
    themes()
    skills()
