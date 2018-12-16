from webservice.base import Base
from sqlalchemy import Column, String, Integer, Date, DateTime, ForeignKey, Boolean
from sqlalchemy.orm import relationship

from webservice.model.assoc_table import association_table


class Email(Base):
    __tablename__ = 'email'

    id = Column(Integer, primary_key=True)
    text = Column(String(8192), unique=True)
    phishing = Column(Boolean)
    accuracy = Column(Integer)

    training_sessions = relationship(
        "TrainingSession",
        secondary=association_table,
        back_populates="emails")

    def __init__(self, text, phishing, accuracy):
        self.text = text
        self.phishing = phishing
        self.accuracy = accuracy
