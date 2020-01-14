from app.main.routes.auth_controller import UserLogin, LogoutAPI, UserSignUp, get_user_id, TeacherSignUp, StudentSignUp, TeacherLogin, StudentLogin
from app.main import api
from app.main.routes.leaderboard import Leaderboard
from .blueprint_admin import admin
from .blueprint_student import student
from .blueprint_teacher import teacher

def add_resources(app):
    api.add_resource(UserSignUp, '/admin/register')
    api.add_resource(UserLogin, '/admin/login')
    api.add_resource(TeacherSignUp, '/teacher/register')
    api.add_resource(TeacherLogin, '/teacher/login')
    api.add_resource(StudentSignUp, '/student/register')
    api.add_resource(StudentLogin, '/student/login')
    api.add_resource(LogoutAPI, '/logout')
    api.add_resource(Leaderboard, '/leaderboard')

def register_blueprints(app):
    app.register_blueprint(admin, url_prefix="/admin")
    app.register_blueprint(student, url_prefix="/student")
    app.register_blueprint(teacher, url_prefix="/teacher")