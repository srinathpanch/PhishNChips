import time

import base64
import json
from django.http import HttpResponse
from django.views.decorators.cache import cache_control
from django.views.decorators.csrf import csrf_exempt

from webservice.dao.userDAO import UserDAO
from webservice.model.user import User
from webservice.utils.JSONParser import JSONParser


@csrf_exempt
@cache_control(max_age=0, no_cache=True, no_store=True, must_revalidate=True)
def createUser(request):
    response = HttpResponse(content_type="application/json")


    if(request.method == "POST"):
        body_unicode = request.body.decode('utf-8')
        body = json.loads(body_unicode)

        user = JSONParser.deserializeUser(body)
        UserDAO.createUser(user)

        response.content = '{"status":"success"}'
    else:
        return HttpResponse("Method not Allowed", status=405)

    return response

@csrf_exempt
@cache_control(max_age=0, no_cache=True, no_store=True, must_revalidate=True)
def getAllUsers(request):
    response = HttpResponse(content_type="application/json")

    print(request.method)

    if(request.method == "GET"):

        users = UserDAO.getAllUsers()

        response.content = JSONParser.serializeObjects(users)
    else:
        return HttpResponse("Method not Allowed", status=405)

    return response
