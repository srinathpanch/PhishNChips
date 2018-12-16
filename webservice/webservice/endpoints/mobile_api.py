import time

import base64
import json
import random
from django.http import HttpResponse
from django.views.decorators.cache import cache_control
from django.views.decorators.csrf import csrf_exempt

from webservice.dao.emailDAO import EmailDAO
from webservice.ml.classifier import Classifier
from webservice.model.email import Email
from webservice.utils.JSONParser import JSONParser
from webservice.utils.ocr_util import OCRUtil

classifier = Classifier()

@csrf_exempt
@cache_control(max_age=0, no_cache=True, no_store=True, must_revalidate=True)
def imageUpload(request):
    response = HttpResponse(content_type="application/json")

    if(request.method == "POST"):
        body_unicode = request.body.decode('utf-8')

        imgdata = base64.b64decode(body_unicode)

        filename = str(time.time()).split('.')[0] + '.jpeg'

        text = OCRUtil.getTextFromImage(imgdata)

        phishing, accuracy = classifier.classify(text)

        accuracy *= 100

        email = Email(text, phishing, accuracy)
        EmailDAO.createEmail(email)

        #with open(filename, 'wb') as f:
        #    f.write(imgdata)

        response.content = '{"status":"success", "phishing":"' + str(phishing) + '", "accuracy":"' + str(accuracy) + '"}'
    else:
        return HttpResponse("Method not Allowed", status=405)

    return response


@csrf_exempt
@cache_control(max_age=0, no_cache=True, no_store=True, must_revalidate=True)
def getAllEmails(request):
    response = HttpResponse(content_type="application/json")

    if(request.method == "GET"):
        emails = EmailDAO.getAllEmails()

        response.content = JSONParser.serializeObjects(emails)
    else:
        return HttpResponse("Method not Allowed", status=405)

    return response