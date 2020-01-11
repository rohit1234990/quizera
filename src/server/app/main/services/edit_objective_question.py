from app.main import db
from app.main.models.objective_questions import ObjectiveQuestions
from flask import jsonify

def edit_objective_question(data):
    """method to edit a question set in the test in model ObjectiveQuestions
    Args:
        data (dict): data which needs to be edited in objective_questions table
        using ObjectiveQuestions model
    Returns:
        dict, int: response object containing appropriate response based on the response from saved changes,
        http response code specifying the success of updating data into table.
    """
    teacher_id = data['teacher_id']
    question_id = data['question_id']
    question = data['question']
    db.session.query(ObjectiveQuestions).filter_by(teacher_id=teacher_id).filter_by(question_id=question_id).update({ObjectiveQuestions.question:question})
    db.session.commit()
    response_object = jsonify({"response": "successfully added"})
    return response_object, 200