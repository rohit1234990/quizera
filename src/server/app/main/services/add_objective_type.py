from app.main import db
from app.main.models.objective_type import ObjectiveType
from app.main.models.admin import Admin
from flask import jsonify

def add_new_objective_type(data):
    """method to add objective type to the model ObjectiveType
    Args:
        data (dict): data which needs to be stored into objective_type table
                    using ObjectiveType model
    Returns:
        dict, int: response object containing appropriate response based on the response from save changes,
                    http response code specifying the success of storing data into table
    """
    admin = db.session.query(Admin).filter_by(admin_id=data['admin_id']).first()
    if admin:
        objective_test_type = ObjectiveType(
            objective_type = data['objective_type'],
            test_type_id = data['test_type_id']
        )
        db.session.add(objective_test_type)
        db.session.commit()
        response_object = jsonify({"response": "successfully added"})
        return response_object, 200
    else:
        response_object = jsonify({"response": "Authentication Required"})
        return response_object, 407