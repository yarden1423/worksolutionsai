import gemini
import json


def get_user_fields_from_gemini(text_data, fields):
    """
    given a cv from the user, get the relevant fields (tech, teaching, construction, etc.)
    """
    print("sending request to gemini api")
    response = None
    try:
        response = gemini.get_user_fields(text_data, fields)
    except Exception as e:
        print(e)
    if response is None:
        print("received no response from the api")
    return response


def get_user_traits_from_gemini(text_data, traits):
    """
    given a cv from the user, get the traits of the individual
    """
    print("sending request to gemini api")
    response = None
    try:
        response = gemini.get_user_traits(text_data, traits=traits)
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


with open("../data/skills/traits_he.txt", "r", encoding='utf-8') as f:
    source_traits = f.read()

with open("../data/skills/fields_he.txt", "r", encoding='utf-8') as f:
    source_fields = f.read()


def user_traits(user_cv, traits):
    traits_response = get_user_traits_from_gemini(user_cv, traits=traits)
    traits = process_gemini_json(traits_response.text)
    return traits['תכונות']


def user_fields(user_cv, fields):
    fields_response = get_user_fields_from_gemini(user_cv, fields=fields)
    fields = process_gemini_json(fields_response.text)
    return fields['תכונות']


def clean_output(generated_list, source_list):
    output_list = []
    if generated_list is not None:
        for item in generated_list:
            if item in source_list:
                output_list.append(item)
    return output_list


with open("../data/cv_examples/manufacturing_he.txt", "r", encoding='utf-8') as f:
    user_cv = f.read()
    traits = clean_output(user_traits(user_cv, traits=source_traits), source_traits)
    fields = clean_output(user_fields(user_cv, source_fields), source_fields)

    print(traits)
    print(fields)
