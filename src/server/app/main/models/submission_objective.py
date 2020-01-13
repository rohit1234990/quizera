from .. import db
import datetime

class SubmissionObjective(db.Model):
    """SQLAlchemy model for SubmissionObjective
    containing fileds question_id ,question,answer ,marks,teacher_id, quiz_test_id
    submission_id: unique identifier
    response: response to be added to the database
    marks: marks which will be added to database
    submission_time:submission_time which will be added to database
    Args:
        db (object): SQLAlchemy object imported from main 
    """
    __tablename__ = 'submission_objective'
    submission_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    student_id = db.Column(db.Integer,db.ForeignKey('student.student_id'),nullable=False)    
    question_id = db.Column(db.Integer,db.ForeignKey('objective_questions.question_id'),nullable=False)
    quiz_test_id = db.Column(db.Integer,db.ForeignKey('quizset.test_id'),nullable=False)
    response = db.Column(db.Text,default=None, nullable=True)
    marks = db.Column(db.Integer,default=None,nullable=False)
    submission_time = db.Column(db.DateTime,onupdate=datetime.datetime.now())
    students = db.relationship('Student',backref=db.backref('objective_question', lazy=True))
    quizset = db.relationship('Quizset',backref=db.backref('objective_question', lazy=True))
    objective_question = db.relationship('ObjectiveQuestions',backref=db.backref('objective_question', lazy=True))