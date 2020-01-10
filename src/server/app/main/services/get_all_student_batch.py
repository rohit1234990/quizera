from app.main import db
from app.main.models.batch import Batch
from app.main.models.student import Student
from flask import jsonify


def get_all_students_batch(data):
    """method to get all the batch list to the model Batch
    Args:
        data (dict): data which will be fetched from the batch table
                    using Batch model
    Returns:
        dict, int: response object containing appropriate response based on the response from save changes,
                    http response code specifying the success of getting data from table
    """
    batch_id = data['batch_id']
    query = db.session.query(Student, Batch).join(
        Batch, Student.student_batch_id == Batch.batch_id).filter_by(batch_id=batch_id)
    items = []
    for i in query:
        items.append({"student_id": i.Student.student_id,
                      "student_name": i.Student.student_name, "batch_name": i.Batch.batch_name})
    response_object = jsonify({"data": items})
    return response_object, 200