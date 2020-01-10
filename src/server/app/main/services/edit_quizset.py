from app.main import db
from app.main.models.quizset import Quizset
from app.main.models.teacher import Teacher
from flask import jsonify


def edit_quizset(data):
    """[summary]

    Args:
        data ([type]): [description]

    Returns:
        [type]: [description]
    """
    teacher = db.session.query(Teacher).filter_by(teacher_id=data['teacher_id']).first()
    if teacher:
        test_id = data["test_id"]
        time_full_test = data["time_full_test"]
        test_name = data["test_name"]
        db.session.query(Quizset).filter_by(test_id=test_id).update(
            {Quizset.time_full_test: time_full_test, Quizset.test_name: test_name})
        db.session.commit()
        response_object = jsonify({"response": "Successfully Edited"})
        return response_object, 200
    else:
        response_object = jsonify({"response": "Authentication Required"})
        return response_object, 407
