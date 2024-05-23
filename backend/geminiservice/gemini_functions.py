import geminiservice.gemini as gemini
import json


def get_user_fields_from_gemini(text_data, fields):
    """
    given a cv from the user, get the relevant fields (tech, teaching, construction, etc.)
    """
    print("sending request to gemini api [themes]")
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
    print("sending request to gemini api [skills]")
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


def clean_output(generated_list, source_list):
    output_list = []
    if generated_list is not None:
        for item in generated_list:
            if item in source_list:
                output_list.append(item)
    return output_list


def user_skills(user_cv, skills):
    """
    function uses the user cv and traits given to it to make a request to the gemini api
    it receives what gemini perceives as the key skills in the worker's cv
    :param user_cv: string of worker's full cv
    :param traits: list of strings (traits)
    :return: a list of traits that were cleaned to only include what were in the original list supplied
    """
    traits_response = get_user_traits_from_gemini(user_cv, traits=skills)
    print(process_gemini_json(traits_response.text))
    generated_traits = process_gemini_json(traits_response.text)['תכונות']
    traits = clean_output(generated_traits, skills)
    return traits


def user_themes(user_cv, fields):
    """
    function sends the worker's cv and fields (professions). the function makes an api request to find the most relevant
    jobs based on the worker's cv. the fields returned are then processed so only those in the original list provided are returned
    :param user_cv: string of worker's full cv
    :param fields: list of strings (fields/professions)
    :return: a list of fields that were cleaned to only include what were in the original list supplied
    """
    fields_response = get_user_fields_from_gemini(user_cv, fields=fields)
    generated_fields = process_gemini_json(fields_response.text)
    fields = clean_output(generated_fields, fields)
    return fields

