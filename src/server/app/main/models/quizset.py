from .. import db

class Quizset(db.Model):
    """SQLAlchemy model for Quizset   
    containing fileds test_id ,test_name, teacher_id ,time_full_test, test_type_id, student_section_id,student_batch_id,flag_publish_test,flag_jumble_question and test_open 
    test_id: unique identifier
    test_name: test name to be added to the database by teacher
    teacher_id: unique identifier from the teacher table used as a foreign key
    time_full_test: test time to be added to the database by teacher
    test_type_id: unique identifier from the test_type table used as a foreign key
    student_section_id: unique identifier from the section table used as a foreign key
    student_batch_id: unique identifier from the batch table used as a foreign key
    flag_publish_test: flag value of publish test will be added to the database for the quiz by teacher
    flag_jumble_question: flag value of jumble question will be added to the database for the quiz by teacher
    test_open: flag value of open/close quiz will be added to the database for the quiz by teacher
    Args:
        db (object): SQLAlchemy object imported from main 
    """
    __tablename__ = 'quizset'
    
    test_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    test_name = db.Column(db.String(250), unique=True, nullable=False)
    teacher_id = db.Column(db.Integer,db.ForeignKey('teacher.teacher_id'),nullable=False)
    time_full_test = db.Column(db.String(250), nullable=False)
    test_type_id = db.Column(db.Integer, db.ForeignKey('test_type.type_id'),nullable=False)
    student_section_id = db.Column(db.Integer,db.ForeignKey('section.section_id'),default = None,nullable=True)
    student_batch_id = db.Column(db.Integer,db.ForeignKey('batch.batch_id'),nullable=False)
    flag_publish_test = db.Column(db.Integer,default = 0,nullable = True)
    flag_jumble_question = db.Column(db.Integer, nullable=False)
    test_open = db.Column(db.Integer,default = 1, nullable=True)
    teachers = db.relationship('Teacher',backref=db.backref('quizset', lazy=True))
    batches = db.relationship('Batch',backref=db.backref('quizset', lazy=True))
    test_types = db.relationship('TestType',backref=db.backref('quizset', lazy=True))
    sections = db.relationship('Section',backref=db.backref('quizset', lazy=True))
