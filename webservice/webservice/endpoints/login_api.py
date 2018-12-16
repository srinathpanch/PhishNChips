import time

import base64
import json
from django.http import HttpResponse
from django.views.decorators.cache import cache_control
from django.views.decorators.csrf import csrf_exempt

from webservice.dao.loginDAO import LoginDAO
from webservice.exceptions.InvalidPasswordException import InvalidPasswordException
from webservice.services.login_service import LoginService
from webservice.utils.JSONParser import JSONParser


@csrf_exempt
@cache_control(max_age=0, no_cache=True, no_store=True, must_revalidate=True)
def login(request):
    response = HttpResponse(content_type="application/json")


    if(request.method == "POST"):
        body_unicode = request.body.decode('utf-8')
        body = json.loads(body_unicode)

        login = JSONParser.deserializeLogin(body)

        try:
            session_key = LoginService.login(login)
            response.content = '{"session":"' + session_key + '"}'
        except InvalidPasswordException as exp:
            response = HttpResponse("Login failed", status=401)

    else:
        return HttpResponse("Method not Allowed", status=405)

    return response