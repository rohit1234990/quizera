from app.main import db
from app.main.models.objective_questions import ObjectiveQuestions
from app.main.models.teacher import Teacher
from flask import jsonify


def add_objective_question(data):
    """method to add objective question to the model ObjectiveQuestions
    Args:
        data (dict): data which needs to be stored into objective_questions table
                    using ObjectiveQuestions model
    Returns:
        dict, int: response object containing appropriate response based on the response from save changes,
                    http response code specifying the success or failure of storing data into table
    """
    teacher = db.session.query(Teacher).filter_by(teacher_id=data['teacher_id']).first()
    if teacher:
        new_question = ObjectiveQuestions(
            question=data['question'],
            option_1=data['option_1'],
            option_2=data['option_2'],
            option_3=data['option_3'],
            option_4=data['option_4'],
            answer=data['answer'],
            marks=data['marks'],
            teacher_id=data['teacher_id'],
            quiz_test_id=data['quiz_test_id'],
            objective_type_id=data['objective_type_id']
        )
        db.session.add(new_question)
        db.session.commit()
        response_object = jsonify({"response": "successfully added Question"})
        return response_object, 200   
    else:
        response_object = jsonify({"response": "Authentication Required"})
        return response_object, 407