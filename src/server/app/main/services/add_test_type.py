from app.main import db
from app.main.models.test_type import TestType
from app.main.models.admin import Admin
from flask import jsonify


def add_new_test_type(data):
    """method to add test type to the model TestType
    Args:
        data (dict): data which needs to be stored into test_type table
                    using TestType model
    Returns:
        dict, int: response object containing appropriate response based on the response from save changes,
                    http response code specifying the success of storing data into table
    """
    admin = db.session.query(Admin).filter_by(admin_id=data['admin_id']).first()
    if admin:
        test_type = TestType(
            test_type_name = data['test_type_name']
        )
        db.session.add(test_type)
        db.session.commit()
        response_object = jsonify({"response": "Successfully added"})
        return response_object, 200
    else:
        response_object = jsonify({"response": "Authentication Required"})
        return response_object, 407
