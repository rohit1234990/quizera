from app.main import db
from app.main.models.quizset import Quizset
from flask import jsonify
import json

def close_test(data):
    """
    Args:
        data([type]): [description]
    Returns:
        [type]: [description]
    """
    test_id = data['test_id']
    query = db.session.query(quizset).filter_by(
        test_id=test_id)
    print(query)
    db.session.query(quizset).filter_by(test_id=test_id).update(
        {quizset.test_open: 0})
    db.session.commit()
    response_object = jsonify({"response": "Successfully Closed"})
    return response_object, 200