import random
from app.main import db
from app.main.models.objective_questions import ObjectiveQuestions
from app.main.models.student_questions_map import StudentQuestionMap
from app.main.models.student import Student
from flask import jsonify


def get_question_student(data):
    """[summary]

    Returns:
        [type]: [description]
    """
    student = db.session.query(Student).filter_by(
        student_id=data['student_id']).first()
    if student:
        items = list()
        query = db.session.query(StudentQuestionMap, ObjectiveQuestions).filter_by(quiz_id=data['quiz_test_id']).join(
            StudentQuestionMap, ObjectiveQuestions.question_id == StudentQuestionMap.question_id).filter_by(student_id=data["student_id"]).all()
        for i in query:
            items.append({"question_id": i.ObjectiveQuestions.question_id, "question": i.ObjectiveQuestions.question, "option_1": i.ObjectiveQuestions.option_1,
                          "option_2": i.ObjectiveQuestions.option_2, "option_3": i.ObjectiveQuestions.option_3, "option_4": i.ObjectiveQuestions.option_4})
        db.session.commit()
        response_object = jsonify(items)
        return response_object, 200
    else:
        response_object = jsonify({"response": "Authentication Required"})
        return response_object, 407 
