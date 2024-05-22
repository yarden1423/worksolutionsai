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


@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route('/add_workplace', methods=['POST'])
def add_workplace():
    if request.method == 'POST':
        workplace_data = request.json
        result = work_collection.insert_one(workplace_data)
        return jsonify({"message": "Workplace added successfully", "id": str(result.inserted_id)}), 201


# Press the green button in the gutter to run the script.
if __name__ == '__main__':
    app.run(debug=True)
