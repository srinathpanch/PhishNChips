import time

import base64
import json
import random
from django.http import HttpResponse
from django.views.decorators.cache import cache_control
from django.views.decorators.csrf import csrf_exempt

from webservice.dao.emailDAO import EmailDAO
from webservice.dao.resultDAO import ResultDAO
from webservice.model.email import Email
from webservice.services.training_session_service import TrainingSessionService
from webservice.utils.JSONParser import JSONParser
from webservice.utils.ocr_util import OCRUtil

@csrf_exempt
@cache_control(max_age=0, no_cache=True, no_store=True, must_revalidate=True)
def getTrainingSession(request):
    response = HttpResponse(content_type="application/json")

    if (request.method == "GET"):
        training_session = TrainingSessionService.generateTrainingSession(1)

        response.content = JSONParser.serializeObject(training_session)
    else:
        return HttpResponse("Method not Allowed", status=405)

    return response


@csrf_exempt
@cache_control(max_age=0, no_cache=True, no_store=True, must_revalidate=True)
def createTrainingResults(request):
    response = HttpResponse(content_type="application/json")

    if (request.method == "POST"):
        body_unicode = request.body.decode('utf-8')
        body = json.loads(body_unicode)

        result = JSONParser.deserializeResult(body)

        ResultDAO.createResult(result)

        response.content = '{"status":"success"}'
    else:
        return HttpResponse("Method not Allowed", status=405)

    return response

@csrf_exempt
@cache_control(max_age=0, no_cache=True, no_store=True, must_revalidate=True)
def getStatistics(request):
    response = HttpResponse(content_type="application/json")

    if (request.method == "GET"):
        statistics = ResultDAO.getAggregatedResultForUser(1)

        response.content = json.dumps(statistics._asdict())
    else:
        return HttpResponse("Method not Allowed", status=405)

    return response
