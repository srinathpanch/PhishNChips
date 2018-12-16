from webservice.dao.emailDAO import EmailDAO
from webservice.dao.training_sessionDAO import TrainingSessionDAO
from webservice.dao.userDAO import UserDAO
from webservice.model.training_session import TrainingSession


class TrainingSessionService:

    def generateTrainingSession(user_id):
        user = UserDAO.getUserByID(user_id)
        emails = EmailDAO.getRandomNEmails(5)

        t_s = TrainingSession(user.id)
        t_s.add_emails(emails)

        t_s = TrainingSessionDAO.createTrainingSession(t_s)
        print(t_s.id)

        return t_s


