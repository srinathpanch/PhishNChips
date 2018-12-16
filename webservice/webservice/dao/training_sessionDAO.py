from sqlalchemy.exc import IntegrityError, InvalidRequestError

from webservice.base import engine, Base, Session
from webservice.model.training_session import TrainingSession
from webservice.model.user import User


class TrainingSessionDAO():

    @classmethod
    def initDAO(cls):
        Base.metadata.create_all(engine)

    @classmethod
    def getTrainingSessionByID(cls, id):
        cls.initDAO()
        session = Session()
        return session.query(TrainingSession).filter(TrainingSession.id == id).limit(1).first()

    @classmethod
    def createTrainingSession(cls, training_session):
        cls.initDAO()
        session = Session()
        try:
            session.add(training_session)
            session.flush()
            print("ID is")
            print(training_session.id)
            session.commit()
        except IntegrityError as err:
            return cls.getTrainingSessionByID(training_session.id)
        except InvalidRequestError as ierr:
            print(ierr)
            l = session.merge(training_session)
            session.add(l)
            session.flush()
            print("ID is")
            print(training_session.id)
            session.commit()

        session.close()
        return training_session
