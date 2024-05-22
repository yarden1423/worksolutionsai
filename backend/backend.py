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

def themes():
    # query[] = request.args.to_dict()
    query = {}  # Replace with your query criteria if needed

    # Define the fields to project (0 excludes the field, 1 includes it)
    fields = {"name": 1, "_id": 0}  # Include 'name' field, exclude '_id' field

    # Call the function to select and print specific fields
    names = select_specific_fields(theme_collection, query, fields)
    print (names)


def skills():
    # query[] = request.args.to_dict()
    query = {}  # Replace with your query criteria if needed

    # Define the fields to project (0 excludes the field, 1 includes it)
    fields = {"name": 1, "_id": 0}  # Include 'name' field, exclude '_id' field

    # Call the function to select and print specific fields
    names = select_specific_fields(skills_collection, query, fields)
    print (names)


# Press the green button in the gutter to run the script.
if __name__ == '__main__':
    #app.run(debug=True)
    themes()
    skills()
