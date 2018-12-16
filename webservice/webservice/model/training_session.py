from webservice.base import Base
from sqlalchemy import Column, String, Integer, Date, DateTime, ForeignKey, Table
from sqlalchemy.orm import relationship, backref
from _datetime import datetime

from webservice.model.assoc_table import association_table


class TrainingSession(Base):
    __tablename__ = 'training_session'

    id = Column(Integer, primary_key=True)
    created = Column(DateTime)
    user_id = Column(Integer, ForeignKey('user.id'))

    emails = relationship(
        "Email",
        secondary=association_table,
        back_populates="training_sessions")

    def __init__(self, user_id):
        self.created = datetime.now()
        self.user_id = user_id
        self.emails = []

    def add_emails(self, emails):
        for email in emails:
            print(email.text)
            self.emails.append(email)