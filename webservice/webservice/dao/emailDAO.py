from sqlalchemy import func
from sqlalchemy.exc import IntegrityError

from webservice.base import engine, Base, Session
from webservice.model.email import Email


class EmailDAO():

    @classmethod
    def initDAO(cls):
        Base.metadata.create_all(engine)

    @classmethod
    def getEmailByID(cls, id):
        cls.initDAO()
        session = Session()
        return session.query(Email).order_by().limit(1)

    @classmethod
    def getRandomNEmails(cls, n):
        cls.initDAO()
        session = Session()
        return session.query(Email).order_by(func.random()).limit(5)

    @classmethod
    def getAllEmails(cls):
        cls.initDAO()
        session = Session()
        return session.query(Email).all()

    @classmethod
    def createEmail(cls, email):
        cls.initDAO()
        session = Session()
        try:
            session.add(email)
            session.flush()
            session.commit()
        except IntegrityError as err:
            return cls.getEmailByID(email.id)

        session.close()
        return email