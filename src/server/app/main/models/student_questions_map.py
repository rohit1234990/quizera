from .. import db

class StudentQuestionMap(db.Model):
    """SQLAlchemy model for Batch
    containing fileds batch_id ,batch_name
    map_id: unique identifier
    quiz_id: unique identifier from the quizset table used as a foreign key
    student_id: unique identifier from the student table used as a foreign key
    question_id:  unique identifier from the objective_question table used as a foreign key
    Args:
        db (object): SQLAlchemy object imported from main 
    """

    __tablename__ = 'student_question_map'

    map_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    quiz_id = db.Column(db.Integer, db.ForeignKey('quizset.test_id'), nullable=False)
    student_id = db.Column(db.Integer,db.ForeignKey('student.student_id'),nullable=False)
    question_id = db.Column(db.Integer,db.ForeignKey('objective_questions.question_id'),nullable=False)
    quiz = db.relationship('Quizset',backref=db.backref('student_question_map', lazy=True))
    student = db.relationship('Student',backref=db.backref('student_question_map', lazy=True))
    question = db.relationship('ObjectiveQuestions',backref=db.backref('student_question_map', lazy=True))

