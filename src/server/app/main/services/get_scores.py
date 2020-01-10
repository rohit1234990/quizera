from app.main import db
from app.main.models.submission_objective import SubmissionObjective
from flask import jsonify


def get_scores(data):
    """method to get all the submission_objective list to the model SubmissionObjective

    Args:
        data (dict): data which will be fetched from the submission_objective table
                    using SubmissionObjective model

    Returns:
        dict, int: response object containing appropriate response based on the response from save changes,
                    http response code specifying the success of getting data from table
    """
    student_id = data['student_id']
    quiz_test_id = data['quiz_test_id']
    correct = 0
    incorrect = 0
    not_attempted = 0
    query = db.session.query(SubmissionObjective).filter_by(
        student_id=student_id).filter_by(quiz_test_id=quiz_test_id).all()
    for i in query:
        if i.marks == 'None':
            not_attempted += 1
        elif i.marks == 0:
            incorrect += 1
        else:
            correct += 1
    response_object = jsonify(
        {"correct": correct, "incorrect": incorrect, "not_attempted": not_attempted})
    return response_object, 200
