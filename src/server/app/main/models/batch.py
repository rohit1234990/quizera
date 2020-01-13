from .. import db


class Batch(db.Model):
    """SQLAlchemy model for Batch
    containing fileds batch_id and batch_name 
    batch_id: unique identifier
    batch_name: the batch name to be added to the database by admin

    Args:
        db (object): SQLAlchemy object imported from main 
    """
    __tablename__ = 'batch'
    batch_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    batch_name = db.Column(db.String(250), unique=True, nullable=False)
