from app.main.models.student import Student
from app.main import login_manager, db

@login_manager.user_loader
def load_user(user_id):
    """
    [summary]
    
    Args:
        user_id ([type]): [description]
    
    Returns:
        [type]: [description]
    """
    return Student.query.get(int(user_id))

def save_new_student(data):
    user = Student.query.filter_by(student_email=data['student_email']).first()
    if not user:
        new_student = Student(            
            student_batch_id=data['student_batch_id'],
            student_name=data['student_name'],
            student_email=data['student_email'],            
            password=data['student_password']
        )
        save_changes(new_student)
        response_object = {
            'status': 'success',
            'message': 'Successfully registered.'
        }
        return response_object, 201
    else:
        response_object = {
            'status': 'fail',
            'message': 'User already exists. Please Log in.',
        }
        return response_object, 409


def get_all_users():
    return Student.query.all()

def login(email, password):
    user =  Student.query.filter_by(teacher_email=email).first()
    
def get_one_user(public_id):
    return Student.query.filter_by(public_id=public_id).first()


def save_changes(data):
    db.session.add(data)
    db.session.commit()