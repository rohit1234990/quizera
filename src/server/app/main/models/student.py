""" Model for student """

from app.main import flask_bcrypt, db
import datetime
import jwt
from app.main.settings import key

class Student(db.Model):
    """SQLAlchemy model for Student
    containing fileds student_id ,student_name, student_email,password_hash,student_img, student_batch_id,student_gender,student_mobile amd student_section_id
    student_id: unique identifier
    student_name: name to be added to the database by student
    student_email: email to be added to the database by student
    password_hash: password which will be added to database after hasing
    student_img: image to be added to the database to student
    student_gender: gender to be added to the database to student
    student_mobile: contact number to be aaded to the database to student

    Args:
        db (object): SQLAlchemy object imported from main 
    """

    __tablename__ = 'student'
    student_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    student_name = db.Column(db.String(250), nullable=False)
    student_email = db.Column(db.String(250), unique=True, nullable=False)
    password_hash = db.Column(db.String(250), nullable=False)
    student_img = db.Column(db.Text, nullable=True)
    student_batch_id = db.Column(db.Integer,db.ForeignKey('batch.batch_id'),nullable=False)
    student_gender = db.Column(db.String(50), nullable=True)
    student_mobile = db.Column(db.Integer, nullable=True)    
    student_section_id = db.Column(db.Integer,db.ForeignKey('section.section_id'),nullable=True)
    batch = db.relationship('Batch',backref=db.backref('student', lazy=True))
    section = db.relationship('Section',backref=db.backref('student', lazy=True))
    
    

    @property
    def password(self):
        raise AttributeError('password: write-only field')

    @password.setter
    def password(self, password):
        self.password_hash = flask_bcrypt.generate_password_hash(password).decode('utf-8') if password else None

    def check_password(self, password):
        return flask_bcrypt.check_password_hash(self.password_hash, password)
    
    @staticmethod
    def encode_auth_token(admin_id):
        """
        Generates the Auth Token
        :return: string
        """
        try:
            payload = {
                'exp': datetime.datetime.utcnow() + datetime.timedelta(days=1, seconds=5),
                'iat': datetime.datetime.utcnow(),
                'sub': admin_id
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


    def __repr__(self):
        return "<User '{}'>".format(self.admin_email)
