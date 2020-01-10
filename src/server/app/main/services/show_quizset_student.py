from app.main import db
from app.main.models.quizset import Quizset
from app.main.models.batch import Batch
from app.main.models.section import Section
from app.main.models.test_type import TestType
from app.main.models.teacher import Teacher
from flask import jsonify


def show_quizset_student(data):
    """[summary]

    Returns:
        [type]: [description]
    """
    section_id = data["section_id"]
    query = db.session.query(Quizset, Batch, Section, TestType, Teacher).filter_by(flag_publish_test=1).join(Batch, Quizset.student_batch_id == Batch.batch_id).join(
        TestType, Quizset.test_type_id == TestType.type_id).join(Teacher, Quizset.teacher_id == Teacher.teacher_id).join(Section, Quizset.student_section_id == Section.section_id).filter_by(section_id=section_id)
    items = []
    for i in query:
        items.append({"test_id": i.Quizset.test_id, "test_name": i.Quizset.test_name, "flag_publish_test": i.Quizset.flag_publish_test, "flag_jumble_question": i.Quizset.flag_jumble_question,
                      "batch_name": i.Batch.batch_name, "test_type_name": i.TestType.test_type_name, "teacher_name": i.Teacher.teacher_name, "section_name": i.Section.section_name})
    response_object = jsonify({"data": items})
    return response_object, 200