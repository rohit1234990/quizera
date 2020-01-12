from app.main import db
from app.main.models.quizset import Quizset
from app.main.models.batch import Batch
from app.main.models.section import Section
from app.main.models.test_type import TestType
from app.main.models.teacher import Teacher
from flask import jsonify


def show_quizset(data):
    """method to get all the quiz set as per the teacher who has created batch, section and test_type wise to the model Student,Batch,Section,TestType and Teacher
    Args:
        data (dict): data which will be fetched from the test_type, batch, quizset, section and teacher table
                    using Student,Batch,Section,TestType and Teacher
    Returns:
        dict, int: response object containing appropriate response based on the response from save changes,
                    http response code specifying the success of getting data from table
    """
    teacher_id = data['teacher_id']
    query = db.session.query(Quizset, Batch, Section, TestType, Teacher).join(Batch, Quizset.student_batch_id == Batch.batch_id).join(TestType, Quizset.test_type_id == TestType.type_id).join(
        Section, Quizset.student_section_id == Section.section_id).join(Teacher, Quizset.teacher_id == Teacher.teacher_id).filter_by(teacher_id=teacher_id)
    items = []
    for i in query:
        items.append({"test_id": i.Quizset.test_id, "test_name": i.Quizset.test_name, "flag_publish_test": i.Quizset.flag_publish_test, "flag_jumble_question": i.Quizset.flag_jumble_question,
                      "batch_name": i.Batch.batch_name, "test_type_name": i.TestType.test_type_name, "teacher_name": i.Teacher.teacher_name, "section_name": i.Section.section_name})
    response_object = jsonify({"data": items})
    return response_object, 200