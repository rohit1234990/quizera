from app.main import db
from app.main.models.test_type import TestType
from flask import jsonify


def get_all_test_types():
    """[summary]
        
    Returns:
        [type]: [description]
    """
    test_type = TestType.query.all()
    db.session.commit()
    response_object = jsonify(test_type)
    return response_object, 200