from geminiservice.fields_model import fields_model
from geminiservice.traits_model import traits_model


def get_user_traits(user_details: str, traits):
    m = traits_model(traits=traits)
    response = m.send_message(user_details)
    return response


def get_user_fields(user_details: str, fields):
    m = fields_model(fields=fields)
    response = m.send_message(user_details)
    return response
