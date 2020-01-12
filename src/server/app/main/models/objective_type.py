from .. import db


class ObjectiveType(db.Model):
    """SQLAlchemy model for ObjectiveType
    containing fileds objective_type_id and objective_type 
    objective_type_id: unique identifier
    objective_type: objective type used to differentiate the question type for the test creation by admin

    Args:
        db (object): SQLAlchemy object imported from main 
    """
    __tablename__ = 'objective_type'
    objective_type_id = db.Column(
        db.Integer, primary_key=True, autoincrement=True)
    objective_type = db.Column(db.String(250), unique=True, nullable=False)
