from _datetime import datetime, date
from webservice.base import Base
from sqlalchemy import Column, String, Integer, Date, DateTime, ForeignKey, Boolean


class Result(Base):
    __tablename__ = 'result'

    id = Column(Integer, primary_key=True)
    datetime = Column(DateTime)
    correct = Column(Integer)
    wrong = Column(Integer)
    user_id = Column(Integer, ForeignKey('user.id'))


    def __init__(self, correct, wrong, user_id):
        self.datetime = datetime.now()
        self.correct = correct
        self.wrong = wrong
        self.user_id = user_id