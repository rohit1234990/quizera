from app.main import db
from app.main.models.section import Section
from flask import jsonify


def add_new_section(data):
    """method to add new section to the model Section
    Args:
        data (dict): data which needs to be stored into section table
                    using Section model
    Returns:
        dict, int: response object containing appropriate response based on the response from save changes,
                    http response code specifying the success of storing data into table
    """
    section = Section(
        section_name=data['section_name'],
        batch_id=data['batch_id']
    )
    db.session.add(section)
    db.session.commit()
    response_object = jsonify({"response": "successfully added Batch"})
    return response_object, 200