from sqlalchemy import func
from sqlalchemy.exc import IntegrityError

from webservice.base import engine, Base, Session
from webservice.model.result import Result


class ResultDAO():

    @classmethod
    def initDAO(cls):
        Base.metadata.create_all(engine)

    @classmethod
    def getResultByID(cls, id):
        cls.initDAO()
        session = Session()
        return session.query(Result).filter(Result.id == id).limit(1).first()

    @classmethod
    def getAggregatedResultForUser(cls, user):
        cls.initDAO()
        session = Session()
        return session.query(func.sum(Result.correct).label("total_correct"),
                             func.sum(Result.wrong).label("total_wrong")).filter(Result.user_id == user).first()

    @classmethod
    def createResult(cls, result):
        cls.initDAO()
        session = Session()
        try:
            session.add(result)
            session.flush()
            session.commit()
        except IntegrityError as err:
            return cls.getTrainingSessionByID(result.id)

        session.close()
        return result

    @classmethod
    def createMultipleResults(cls, results):
        for result in results:
            cls.createResult(result)