from app.main.models.admin import User
from app.main import login_manager, db
import uuid

@login_manager.user_loader
def load_user(user_id):
    """
    [summary]
    
    Args:
        user_id ([type]): [description]
    
    Returns:
        [type]: [description]
    """
    return User.query.get(int(user_id))

def save_new_user(data):
    user = User.query.filter_by(admin_email=data['admin_email']).first()
    if not user:
        new_user = User(
            admin_email=data['admin_email'],            
            password=data['admin_password']            
        )
        save_changes(new_user)
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
    return User.query.all()

def login(email, password):
    user =  User.query.filter_by(email=email).first()
    
def get_one_user(public_id):
    return User.query.filter_by(public_id=public_id).first()


def save_changes(data):
    db.session.add(data)
    db.session.commit()