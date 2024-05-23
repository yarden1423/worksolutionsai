from gemini import get_user_fields, get_user_traits, get_cv_improvement
import json


def get_user_fields_from_gemini(text_data, fields):
    """
    given a cv from the user, get the relevant fields (tech, teaching, construction, etc.)
    """
    print("sending request to gemini api [themes]")
    response = None
    try:
        response = get_user_fields(text_data, fields)
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
        response = get_user_traits(text_data, traits=traits)
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


def gemini_improve_cv(name, employment_history, qualifications):
    """
    aim of this function is to receive basic details about a user's employment history and qualifications and return
    a basic but quick and easy version of a cv
    :param name: user's first and surname
    :param employment_history: list of employment, dates, description [[], []]
    :param qualifications: qualifications - degrees, courses, etc
    :return: free text CV template
    """
    employment_history_str = []
    for history in employment_history:
        employment_history_str.append(
            "עבודה ראשונה: " + history[0] + " בין תאריכים " + history[1] + ". תיאור: " + history[1] + "\n")
    employment_history_str = "".join(employment_history_str)
    qualifications_str = []
    for i, qual in enumerate(qualifications):
        qualifications_str.append(f"{i+1}. {qual}\n")
    qualifications_str = "".join(qualifications_str)
    input_format = f"שם: {name}\nעבודות: {employment_history_str}\n השכלה: {qualifications_str}"
    cv_response = get_cv_improvement(input_format)
    return cv_response


# if __name__ == "__main__":
#     name = "נמרוד ויין"
#     empl = [["מהנדס מערכת", "2021-2022", "עבד בתור מהנדס מערכת לשעה וחתי ביום"],
#             ["מפתח פול-סטאק", "2022-2023", "עישתי עבודה אחושיללינג תאמין לי אחי"],
#             ["חוקר מדעי הנתונים", "2023-2024", "אחי אני יודע דאטא כמו אלוהים"]]
#     quals = ["תואר ראשון מדעי המחשב", "תואר שני מדעי המחשב", "קורס דב-אופס"]
#     print(gemini_improve_cv(name, empl, quals))
