import gemini

with open("../data/cv_examples/agriculture_he.txt", "r", encoding='utf-8') as f:
    user_cv = f.read()
    print("sending request to gemini api")
    response = None
    try:
        response = gemini.get_response(user_cv)
    except Exception as e:
        print(e)
    if response is not None:
        print(response.text)
    else:
        print("received no response from the api")
