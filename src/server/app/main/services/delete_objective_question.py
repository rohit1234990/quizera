from app.main import db
from app.main.models.objective_questions import ObjectiveQuestions
from app.main.models.teacher import Teacher
from flask import jsonify


def delete_objective_question(data):
    """[summary]
      
    Args:
        data ([type]): [description]
    
    Returns:
        [type]: [description]
    """

    teacher = db.session.query(Teacher).filter_by(teacher_id=data['teacher_id']).first()
    if teacher:
        question = ObjectiveQuestions.query.get(int(data["question_id"]))
        db.session.delete(question)
        db.session.commit()
        response_object = jsonify({"response": "Successfully Delete"})
        return response_object, 200
    else:
        response_object = jsonify({"response": "Authentication Required"})
        return response_object, 407      
