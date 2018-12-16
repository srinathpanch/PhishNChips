import json
from _datetime import datetime

from webservice.model.email import Email
from webservice.model.login import Login
from webservice.model.result import Result
from webservice.model.user import User


class JSONParser:

    def unsupportedTypes(obj):

        print("Unsupported")
        print(obj)

        if isinstance(obj, datetime):
            return obj.isoformat()
        elif isinstance(obj, Email):
            print(obj.id)
            return json.loads(JSONParser.serializeObject(obj))
        else:
            raise NotImplementedError

    #
    # Deserialize Result
    #
    def deserializeResult(json):
        correct = json["correct"]
        wrong = json["wrong"]
        user_id = json["user_id"]
        return Result(correct, wrong, user_id)

    #
    # Deserialize Results
    #
    def deserializeResults(json):
        list = []
        for result in json:
            list.append(JSONParser.deserializeResult(json))
        return list

    #
    # Deserialize Login
    #
    def deserializeLogin(json):
        username = json["username"]
        password = json["password"]
        return Login(username, password)

    #
    # Deserialize User
    #
    def deserializeUser(json):
        firstname = json["firstname"]
        lastname = json["lastname"]
        login = JSONParser.deserializeLogin(json["login"])
        user = User(firstname, lastname, login)
        return user

    #
    # Serialize Object
    #
    def serializeObject(obj):
        print(obj)
        del obj.__dict__["_sa_instance_state"]
        jsonobj = json.dumps(obj.__dict__, default=JSONParser.unsupportedTypes)
        return jsonobj

    #
    # Serialize List of Objects
    #
    def serializeObjects(objects):
        list = []
        for obj in objects:
            list.append(json.loads(JSONParser.serializeObject(obj)))
        return json.dumps(list)

