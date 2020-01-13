from .. import db


class TestType(db.Model):
    """SQLAlchemy model for TestType
    containing fileds type_id ,test_type_name
    type_id: unique identifier
    test_type_name: objective,subjective etc name to be added to the database by admin
    Args:
        db (object): SQLAlchemy object imported from main 
    """
    
    __tablename__ = 'test_type'

    type_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    test_type_name = db.Column(db.String(250), unique=True, nullable=False)