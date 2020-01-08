from flask import request
from flask_restful import Resource
from ..services.admin_service import save_new_admin, get_all_users
from ..services.teacher_service import save_new_teacher
from ..services.student_service import save_new_student
import requests
from app.main.services.auth_helper import Auth
from app.main.utils.oauth_utils import github, oauth, facebook, g


class AdminSignUp(Resource):
    """
    [summary]
    
    Args:
        Resource ([type]): [description]
    """
    def post(self):
        """Creates a new User """
        data = request.json
        return save_new_admin(data=data)

class TeacherSignUp(Resource):
    """
    [summary]
    
    Args:
        Resource ([type]): [description]
    """
    def post(self):
        """Creates a new Teacher """
        data = request.json
        return save_new_teacher(data=data)


class StudentSignUp(Resource):
    """
    [summary]
    
    Args:
        Resource ([type]): [description]
    """
    def post(self):
        """Creates a new Student """
        data = request.json
        return save_new_student(data=data)


class AdminLogin(Resource):
    """
        User Login Resource
    """
    def post(self):        
        post_data = request.json
        return Auth.login_user(data=post_data)

class TeacherLogin(Resource):
    """
        Teacher Login Resource
    """
    def post(self):        
        post_data = request.json
        return Auth.login_teacher(data=post_data)

class StudentLogin(Resource):
    """
        Student Login Resource
    """
    def post(self):        
        post_data = request.json
        return Auth.login_student(data=post_data)


class LogoutAPI(Resource):
    """
    Logout Resource
    """
    def post(self):        
        auth_header = request.headers.get('Authorization')
        return Auth.logout_user(data=auth_header)


class get_user_id(Resource):
    """
    Token Decode Resource
    """
    def post(self):        
        auth_header = request.headers.get('Authorization')
        return Auth.get_user_id(data=auth_header)
