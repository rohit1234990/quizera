from app.main import db
from app.main.models.student import Student
from flask import jsonify
import json

def edit_student_profile(data):
    """
    Args:
        data([type]): [description]
    Returns:
        [type]: [description]
    """
    student = db.session.query(Student).filter_by(student_id = data['student_id']).first()
    if student:
        student_id = data['student_id']
        student_gender = data['student_gender']
        student_email = data["student_email"]
        student_contact_number = data['student_contact_number']
        db.session.query(Student).filter_by(student_id=student_id).update(
            {Student.student_gender: student_gender, Student.student_contact_number: student_contact_number, Student.student_email: student_email})
        db.session.commit()
        response_object = jsonify({"response": "Successfully Updated"})
        return response_object, 200
    else:
        response_object = jsonify({"response": "Authentication Required"})
        return response_object, 407        