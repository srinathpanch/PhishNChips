from sqlalchemy.exc import IntegrityError

from webservice.base import engine, Base, Session
from webservice.model.user import User


class UserDAO():

    @classmethod
    def initDAO(cls):
        Base.metadata.create_all(engine)

    @classmethod
    def getUserByID(cls, id):
        cls.initDAO()
        session = Session()
        return session.query(User).filter(User.id == id).limit(1).first()

    @classmethod
    def getAllUsers(cls):
        cls.initDAO()
        session = Session()
        return session.query(User).all()

    @classmethod
    def createUser(cls, user):
        cls.initDAO()
        session = Session()
        try:
            session.add(user)
            session.flush()
            session.commit()
        except IntegrityError as err:
            return cls.getUserByID(user.id)

        return user
