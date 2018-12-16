import secrets

from webservice.dao.loginDAO import LoginDAO
from webservice.exceptions.InvalidPasswordException import InvalidPasswordException


class LoginService:

    def login(login):

        stored_login = LoginDAO.getLogin(login)

        if(stored_login.password == login.password):
            session_token = secrets.token_hex(64)
            print(session_token)
            return session_token
        else:
            raise InvalidPasswordException("Password is wrong")