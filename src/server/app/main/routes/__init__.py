from app.main.routes.auth_controller import AdminLogin, LogoutAPI, AdminSignUp, get_user_id, TeacherSignUp, StudentSignUp, TeacherLogin, StudentLogin
# from .blueprint_admin import admin
# from .blueprint_student import student
# from .blueprint_teacher import teacher
from app.main import api

def add_resources(app):
    """
    Method to add resources to app context
    
    Args:
        app (object): object of Flask representing the app in context
    """
    
      
    
    api.add_resource(get_user_id, '/get_id')
    api.add_resource(TeacherSignUp, '/teacher/register')
    api.add_resource(StudentSignUp, '/student/register')
    api.add_resource(TeacherLogin, '/teacher/login')
    api.add_resource(StudentLogin, '/student/login')
    api.add_resource(AdminSignUp, '/admin/register')
    api.add_resource(AdminLogin, '/admin/login')
    api.add_resource(LogoutAPI, '/logout')

def register_blueprints(app):
    """
    Method to add blueprints to app context
    
    Args:
        app (object): object of Flask representing the app in context
    """
    # app.register_blueprint(admin, url_prefix="/admin")
    # app.register_blueprint(student, url_prefix="/student")
    # app.register_blueprint(teacher, url_prefix="/teacher")