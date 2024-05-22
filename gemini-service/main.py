import gemini

import json


def process_traits(skills_json):
    """
    this function gets the set list of traits from the db
    skills_json: json string of traits and subtraits
    :return:
    traits: dict of all traits
    """
    traits = json.loads(skills_json)
    return traits


def get_user_fields_from_gemini(text_data):
    """
    given a cv from the user, get the relevant fields (tech, teaching, construction, etc.)
    """
    print("sending request to gemini api")
    response = None
    try:
        response = gemini.get_user_fields(text_data)
    except Exception as e:
        print(e)
    if response is None:
        print("received no response from the api")
    return response


def get_user_traits_from_gemini(text_data):
    """
    given a cv from the user, get the traits of the individual
    """
    print("sending request to gemini api")
    response = None
    try:
        response = gemini.get_user_traits(text_data)
    except Exception as e:
        print(e)
    if response is None:
        print("received no response from the api")
    return response


def process_gemini_json(gemini_str: str):
    if "```json" in gemini_str:
        print("theres a json")
        return json.loads(gemini_str[8:-4])
    return None


print("processing traits from json")
with open("../data/skills/skills_he.json", "r", encoding='utf-8') as f:
    traits_json = f.read()
    traits_db = process_traits(traits_json)

with open("../data/cv_examples/embedded_he.txt", "r", encoding='utf-8') as f:
    user_cv = f.read()
    traits_response = get_user_traits_from_gemini(user_cv)
    traits = process_gemini_json(traits_response.text)

    fields_response = get_user_fields_from_gemini(user_cv)
    fields = process_gemini_json(fields_response.text)
    print(traits)
    print(fields)
