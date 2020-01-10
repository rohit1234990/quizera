from app.main import db
from app.main.models.student import Student
from app.main.models.admin import Admin
from flask import jsonify


def add_student_to_section(data):
    """method to update student's section to the model Student
    Args:
        data (dict): data which needs to be stored into student table
                    using Student model
    Returns:
        dict, int: response object containing appropriate response based on the response from save changes,
                    http response code specifying the success of storing data into table
    """
    admin = db.session.query(Admin).filter_by(admin_id=data['admin_id']).first()
    if admin:
        student_id = data['student_id']
        section_id = data['section_id']
        db.session.query(Student).filter_by(student_id=student_id).update(
            {Student.student_section_id: section_id})
        db.session.commit()
        response_object = jsonify(
            {"response": "successfully added Student to section"})
        return response_object, 200
    else:
        response_object = jsonify({"response": "Authentication Required"})
        return response_object, 407