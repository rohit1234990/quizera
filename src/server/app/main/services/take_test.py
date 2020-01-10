from app.main import db
from app.main.models.objective_questions import ObjectiveQuestions
from app.main.models.submission_objective import SubmissionObjective
from app.main.models.student import Student
from flask import jsonify


def take_test(data):
    """[summary]

    Returns:
        [type]: [description]
    """
    student = db.session.query(Student).filter_by(student_id = data['student_id']).first()
    if student:
        student_id = int(data["student_id"])
        quiz_test_id = data["test_id"]
        query = db.session.query(ObjectiveQuestions).filter_by(
            quiz_test_id=quiz_test_id)
        items = []
        for i in query:
            items.append({"student_id": student_id, "quiz_test_id": i.quiz_test_id,
                        "question_id": i.question_id, "marks": i.marks})
        for i in range(len(items)):
            new_submission = SubmissionObjective(
                student_id=items[i]['student_id'],
                question_id=items[i]['question_id'],
                quiz_test_id=items[i]['quiz_test_id'],
                marks=items[i]['marks']
            )
            db.session.add(new_submission)
            db.session.commit()
        response_object = jsonify({"response": "successfully added"})
        return response_object, 200
    else:
        response_object = jsonify({"response": "Authentication Required"})
        return response_object, 407