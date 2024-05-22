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


def get_user_traits_from_gemini(text_data):
    print("sending request to gemini api")
    response = None
    try:
        response = gemini.get_user_traits(text_data)
    except Exception as e:
        print(e)
    if response is not None:
        print(response.text)
    else:
        print("received no response from the api")
    return response


print("processing traits from json")
with open("../data/skills/skills_he.json", "r", encoding='utf-8') as f:
    traits_json = f.read()
    traits = process_traits(traits_json)


with open("../data/cv_examples/construction_he.txt", "r", encoding='utf-8') as f:
    user_cv = f.read()
    response = get_user_traits_from_gemini(user_cv)

    print("done")
