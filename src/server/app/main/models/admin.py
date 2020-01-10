""" Model for user """

from app.main import flask_bcrypt, db
import datetime
import jwt
from app.main.settings import key
# from .. import db, flask_bcrypt, login_manage

class Admin(db.Model):
    """
    [summary]
    
    Args:
        UserMixin ([type]): [description]
        db ([type]): [description]
    """
    __tablename__ = "admin"

    admin_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    admin_email = db.Column(db.String(100), unique=True, nullable=False)
    password_hash = db.Column(db.String(100))

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
        except jwt.ExpiredSignatureError:
            return 'Signature expired. Please log in again.'
        except jwt.InvalidTokenError:
            return 'Invalid token. Please log in again.'


    def __repr__(self):
        return "<User '{}'>".format(self.admin_email)
