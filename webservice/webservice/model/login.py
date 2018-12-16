from webservice.base import Base
from sqlalchemy import Column, String, Integer, Date, DateTime, ForeignKey
from sqlalchemy.orm import relationship

class Login(Base):
    __tablename__ = 'login'

    id = Column(Integer, primary_key=True)
    username = Column(String(48), unique=True)
    password = Column(String(48))
    user_id = Column(Integer, ForeignKey('user.id'))
    user = relationship("User", back_populates="login")


    def __init__(self, username, password):
        self.username = username
        self.password = password