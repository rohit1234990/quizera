""" Model for teacher """

from app.main import flask_bcrypt, db
import datetime
import jwt
from app.main.settings import key
# from .. import db, flask_bcrypt, login_manage

class Teacher(db.Model):
    """SQLAlchemy model for Teacher
    containing fileds teacher_id ,teacher_name, teacher_email,password_hash,teacher_img, teacher_gender,teacher_department,teacher_location amd teacher_contact_number
    teacher_id: unique identifier
    teacher_name: name to be added to the database by teacher
    teacher_email: email to be added to the database by teacher
    password_hash: password which will be added to database after hasing
    teacher_img: image to be added to the database to teacher
    teacher_gender: gender to be added to the database to teacher
    teacher_mobile: contact number to be aaded to the database to teacher

    Args:
        db (object): SQLAlchemy object imported from main 
    """
    __tablename__ = 'teacher'
    teacher_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    teacher_name = db.Column(db.String(250), nullable=False)
    teacher_email = db.Column(db.String(250), unique=True, nullable=False)
    password_hash = db.Column(db.String(100))
    teacher_img = db.Column(db.Text, nullable=True)
    teacher_gender = db.Column(db.String(50), nullable=True)
    teacher_department = db.Column(db.String(250), nullable=True)
    teacher_location = db.Column(db.String(250), nullable=True)
    teacher_contact_number = db.Column(db.Integer, nullable=True)

    @property
    def password(self):
        raise AttributeError('password: write-only field')

    @password.setter
    def password(self, password):
        self.password_hash = flask_bcrypt.generate_password_hash(password).decode('utf-8') if password else None

    def check_password(self, password):
        return flask_bcrypt.check_password_hash(self.password_hash, password)
    
    @staticmethod
    def encode_auth_token(teacher_id):
        """
        Generates the Auth Token
        :return: string
        """
        try:
            payload = {
                'exp': datetime.datetime.utcnow() + datetime.timedelta(days=1, seconds=5),
                'iat': datetime.datetime.utcnow(),
                'sub': teacher_id
            }
            return jwt.encode(
                payload,
                key,
                algorithm='HS256'
            )
        except Exception as e:
            return e

    @staticmethod
    def decode_auth_token(auth_token):
        """
        Decodes the auth token
        :param auth_token:
        :return: integer|string
        """
        try:
            payload = jwt.decode(auth_token, key)
            # is_blacklisted_token = BlacklistToken.check_blacklist(auth_token)
            # if is_blacklisted_token:
            #     return 'Token blacklisted. Please log in again.'
            # else:
            #     return payload['sub']
        except jwt.ExpiredSignatureError:
            return 'Signature expired. Please log in again.'
        except jwt.InvalidTokenError:
            return 'Invalid token. Please log in again.'


    # def __repr__(self):
    #     return "<User '{}'>".format(self.admin_email)
