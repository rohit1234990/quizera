from .. import db


class Section(db.Model):
    """SQLAlchemy model for Section
    containing fields section_id, section_name, batch_id, section_name,  and todo_item 
    id: unique identifier
    todo_item: the todo item to be added to the database

    Args:
        db (object): SQLAlchemy object imported from main 
    """
    __tablename__ = 'section'
    section_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    section_name = db.Column(db.String(250), unique=True, nullable=False)
    batch_id = db.Column(db.Integer, db.ForeignKey(
        'batch.batch_id'), nullable=False)
    batch = db.relationship('Batch', backref=db.backref('section', lazy=True))
