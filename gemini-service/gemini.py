from fields_model import fields_chat_session
from traits_model import traits_model


def get_user_traits(user_details: str, traits):
    m = traits_model(traits=traits)
    response = m.send_message(user_details)
    return response


def get_user_fields(user_details: str):
    response = fields_chat_session.send_message(user_details)
    return response
