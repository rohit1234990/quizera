from app.main.models.submission_objective import SubmissionObjective
from app.main import db
from flask import jsonify

def get_new_leaderboard(data):
    leaderboard = db.engine.execute("select student.student_name as name, sum(marks) as marks from submission_objective left join student on submission_objective.student_id = student.student_id where quiz_test_id = :quiz_test_id group by submission_objective.student_id order by marks desc", data)
    response_object = {
        "status" : 200,
        'response': [dict(row) for row in leaderboard]
    
    }
   
    return response_object, 200
    