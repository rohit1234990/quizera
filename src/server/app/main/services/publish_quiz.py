from app.main import db
from app.main.models.quizset import Quizset
from app.main.models.teacher import Teacher
from flask import jsonify


def publish_quiz(data):
    """method to get all the quizset list to the model Quizset
    Args:
        data (dict): data which will be fetched from the quizset table
                    using Quizset model
    Returns:
        dict, int: response object containing appropriate response based on the response from save changes,
                    http response code specifying the success of getting data from table
    """
    teacher = db.session.query(Teacher).filter_by(teacher_id=data['teacher_id']).first()
    if teacher:
        teacher_id = data['teacher_id']
        test_id = data['test_id']
        db.session.query(Quizset).filter_by(teacher_id=teacher_id).filter_by(
            test_id=test_id).update({Quizset.flag_publish_test: 1})
        db.session.commit()
        response_object = jsonify({"response": "successfully Publish Quiz"})
        return response_object, 200
    else:
        response_object = jsonify({"response": "Authentication Required"})
        return response_object, 407
