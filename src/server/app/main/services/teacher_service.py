from app.main.models.teacher import Teacher
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
    return Teacher.query.get(int(user_id))

def save_new_teacher(data):
    user = Teacher.query.filter_by(teacher_email=data['teacher_email']).first()
    if not user:
        new_teacher = Teacher(            
            teacher_name=data['teacher_name'],
            teacher_email=data['teacher_email'],            
            password=data['teacher_password']
        )
        save_changes(new_teacher)
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
    return Teacher.query.all()

def login(email, password):
    user =  Teacher.query.filter_by(teacher_email=email).first()
    
def get_one_user(public_id):
    return Teacher.query.filter_by(public_id=public_id).first()


def save_changes(data):
    db.session.add(data)
    db.session.commit()