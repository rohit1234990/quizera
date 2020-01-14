from flask import Blueprint, request
from app.main.services.edit_teacher_profile import edit_teacher_profile
from app.main.services.add_quizset import add_quizset
from app.main.services.show_quizset_teacher import show_quizset
from app.main.services.edit_quizset import edit_quizset
from app.main.services.add_objective_question import add_objective_question
from app.main.services.edit_objective_question import edit_objective_question
from app.main.services.delete_objective_question import delete_objective_question
from app.main.services.publish_quiz import publish_quiz
from app.main.services.close_test import close_test
from app.main.services.get_quizset_report import get_quizset_report



teacher = Blueprint("teacher", __name__)


@teacher.route("/edit_teacher_profile", methods=['POST'])
def addProfileTeacher():
    """[summary]
    Returns:
        [type]: [description]
    """
    data = request.headers
    return edit_teacher_profile(data)


@teacher.route("/add_quiz_details", methods=['POST'])
def addQuiz():
    """[summary]
    
    Returns:
        [type]: [description]
    """
    data = request.headers
    return add_quizset(data)


@teacher.route("/edit_quiz_details", methods=['PUT'])
def editQuiz():
    """[summary]
    
    Returns:
        [type]: [description]
    """
    data = request.headers
    return edit_quizset(data)


@teacher.route("/show_quiz_details", methods=['GET'])
def showQuizset():
    """[summary]
    
    Returns:
        [type]: [description]
    """
    data = request.headers
    return show_quizset(data)


@teacher.route("/add_objective_question", methods=['POST'])
def addObjectiveQuestion():
    """[summary]
    
    Returns:
        [type]: [description]
    """
    data = request.headers
    return add_objective_question(data)


@teacher.route("/edit_objective_question", methods=['PUT'])
def editObjectiveQuestion():
    """[summary]
    
    Returns:
        [type]: [description]
    """
    data = request.headers
    return edit_objective_question(data)


@teacher.route("/delete_objective_question", methods=['DELETE'])
def deleteObjectiveQuestion():
    """[summary]
    
    Returns:
        [type]: [description]
    """
    data = request.headers
    return delete_objective_question(data)


@teacher.route("/publish_quiz", methods=['POST'])
def publishQuiz():
    """[summary]
    
    Returns:
        [type]: [description]
    """
    data = request.headers
    return publish_quiz(data)


@teacher.route("/close_test", methods=['PUT'])
def closeTest():
    """[summary]

    Returns:
        [type]: [description]
    """
    data = request.headers
    return close_test(data)


@teacher.route("/get_quizset_report", methods=['GET'])
def getQuizsetReport():
    """[summary]
    Returns:
        [type]: [description]
    """
    data = request.headers
    return get_quizset_report(data)