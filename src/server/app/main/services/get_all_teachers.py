from app.main import db
from app.main.models.teacher import Teacher
from flask import jsonify


def get_all_teachers():
    """method to get all the teacher list to the model Teacher
    Args:
        data (dict): data which will be fetched from the teacher table
                    using Teacher model
    Returns:
        dict, int: response object containing appropriate response based on the response from save changes,
                    http response code specifying the success of getting data from table
    """

    query = db.session.query(Teacher).all()
    items = []
    for i in query:
        items.append({"teacher_id": i.Teacher.teacher_id,
                      "teacher_name": i.Teacher.teacher_name})
    response_object = jsonify({"data": items})
    return response_object, 200