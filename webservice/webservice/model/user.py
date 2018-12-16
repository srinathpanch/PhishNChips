from webservice.base import Base
from sqlalchemy import Column, String, Integer, Date, DateTime, ForeignKey
from sqlalchemy.orm import relationship
from webservice.model.training_session import TrainingSession

class User(Base):
    __tablename__ = 'user'

    id = Column(Integer, primary_key=True)
    firstname = Column(String(48), unique=True)
    lastname = Column(String(48))
    login = relationship("Login", uselist=False, back_populates="user")

    def __init__(self, firstname, lastname, login):
        self.firstname = firstname
        self.lastname = lastname
        self.login = login