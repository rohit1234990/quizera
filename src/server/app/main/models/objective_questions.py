from .. import db


class ObjectiveQuestions(db.Model):
    """SQLAlchemy model for ObjectiveQuestions
    containing fields question_id ,question, option_1 ,option_2, option_3, option_4,answer,marks,teacher_id, quiz_test_id and objective_type_id 
    question_id: unique identifier
    question: question to be added to the database by teacher
    option_1: option 1 to be added to the database by teacher for MCQ queston set
    option_2: option 1 to be added to the database by teacher for MCQ queston set
    option_3: option 1 to be added to the database by teacher for MCQ queston set
    option_4: option 1 to be added to the database by teacher for MCQ queston set
    answer: answer to be added to the database by teacher for the particular question
    marks: marks will be added to the database for the question
    teacher_id: unique identifier from the teacher table used as a foreign key
    quiz_test_id: unique identifier from the quizset table used as a foreign key

    Args:
        db (object): SQLAlchemy object imported from main 
    """
    __tablename__ = 'objective_questions'
    question_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    question = db.Column(db.Text, nullable=False)
    option_1 = db.Column(db.Text, nullable=True)
    option_2 = db.Column(db.Text, nullable=True)
    option_3 = db.Column(db.Text, nullable=True)
    option_4 = db.Column(db.Text, nullable=True)
    answer = db.Column(db.Text, nullable=False)
    marks = db.Column(db.Integer, nullable=False)
    teacher_id = db.Column(db.Integer, db.ForeignKey(
        'teacher.teacher_id'), nullable=False)
    quiz_test_id = db.Column(db.Integer, db.ForeignKey(
        'quizset.test_id'), nullable=False)
    objective_type_id = db.Column(db.Integer, db.ForeignKey(
        'objective_type.objective_type_id'), nullable=False)
    teachers = db.relationship('Teacher', backref=db.backref(
        'objective_questions', lazy=True))
    quizset = db.relationship('Quizset', backref=db.backref(
        'objective_questions', lazy=True))
    objective_type = db.relationship(
        'ObjectiveType', backref=db.backref('objective_questions', lazy=True))
