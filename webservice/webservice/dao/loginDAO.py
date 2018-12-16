from sqlalchemy import and_

from webservice.base import engine, Base, Session
from webservice.model.login import Login


class LoginDAO():

    @classmethod
    def initDAO(cls):
        Base.metadata.create_all(engine)

    @classmethod
    def getLogin(cls, login):
        cls.initDAO()
        session = Session()
        return session.query(Login).filter(Login.username == login.username).first()
