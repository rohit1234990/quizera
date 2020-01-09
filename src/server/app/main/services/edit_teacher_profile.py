from app.main import db
from app.main.models.teacher import Teacher
from flask import jsonify
import json

def edit_teacher_profile(data):
    """method to edit teacher profile to the model Teacher

    Args:
        data (dict): data which needs to be stored into teacher table
                    using Teacher model

    Returns:
        dict, int: response object containing appropriate response based on the response from save changes,
                    http response code specifying the success of updating data into table
    """
    teacher = db.session.query(Teacher).filter_by(teacher_id=data['teacher_id']).first()
    if teacher:
        teacher_id = data['teacher_id']
        teacher_gender = data['teacher_gender']
        teacher_department = data['teacher_department']
        teacher_location = data['teacher_location']
        teacher_contact_number = data['teacher_contact_number']
        db.session.query(Teacher).filter_by(teacher_id=teacher_id).update(
            {Teacher.teacher_gender: teacher_gender, Teacher.teacher_department: teacher_department, Teacher.teacher_location: teacher_location, Teacher.teacher_contact_number: teacher_contact_number})
        db.session.commit()
        response_object = jsonify(
            {"response": "Successfully Update details"})
        return response_object, 200
    else:
        response_object = jsonify({"response": "Authentication Required"})
        return response_object, 407
