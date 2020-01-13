from flask import Blueprint, request
from app.main.services.edit_student_profile import edit_student_profile
from app.main.services.show_quizset_student import show_quizset_student
from app.main.services.take_test import take_test
from app.main.services.update_response import update_response
from app.main.services.get_scores import get_scores


student = Blueprint("student", __name__)


@student.route("/edit_student_profile", methods=['PUT'])
def editStudentProfile():
    """[summary]
    Returns:
        [type]: [description]
    """
    data = request.headers
    return edit_student_profile(data)


@student.route("/show_quizset", methods=['GET'])
def showQuizset():
    """[summary]
    
    Returns:
        [type]: [description]
    """
    data = request.headers
    return show_quizset_student(data)

@student.route("/take_test", methods=['POST'])
def takeTest():
    """[summary]
    
    Returns:
        [type]: [description]
    """
    data = request.headers
    return take_test(data)


@student.route("/update_response", methods=['POST'])
def updateResponse():
    """[summary]
    
    Returns:
        [type]: [description]
    """
    data = request.headers
    return update_response(data)


@student.route("/get_score", methods=['GET'])
def getScore():
    """[summary]
    
    Returns:
        [type]: [description]
    """
    data = request.headers
    return get_scores(data)

