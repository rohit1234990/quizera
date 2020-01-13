from .. import db

class SubjectiveQuestions(db.Model):
    """SQLAlchemy model for SubjectiveQuestions
    containing fileds question_id ,question,answer ,marks,teacher_id, quiz_test_id
    question_id: unique identifier
    question: name to be added to the database
    answer: email to be added to the database
    marks: password which will be added to database after hasing

    Args:
        db (object): SQLAlchemy object imported from main 
    """
    __tablename__ = 'subjective_questions'
    question_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    question = db.Column(db.Text, nullable=False)
    answer = db.Column(db.Text,nullable=False)
    marks = db.Column(db.Integer,nullable=False)
    teacher_id = db.Column(db.Integer,db.ForeignKey('teacher.teacher_id'),nullable=False)
    quiz_test_id = db.Column(db.Integer,db.ForeignKey('quizset.test_id'),nullable=False)
    teachers = db.relationship('Teacher',backref=db.backref('subjective_questions', lazy=True))
    quizset = db.relationship('Quizset',backref=db.backref('subjective_questions', lazy=True))