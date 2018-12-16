"""webservice URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path

from webservice.endpoints import login_api, mobile_api, user_api, training_api

urlpatterns = [

    #
    # USER API
    #
    path('api/v1/user/create', user_api.createUser),
    path('api/v1/user/all', user_api.getAllUsers),

    #
    # LOGIN API
    #
    path('api/v1/login', login_api.login),

    #
    # TRAINING API
    #
    path('api/v1/training', training_api.getTrainingSession),
    path('api/v1/training/results', training_api.createTrainingResults),
    path('api/v1/training/statistics', training_api.getStatistics),


    #
    # TEST API
    #
    path('api/v1/email/all', mobile_api.getAllEmails),

    path('api/v1/image/upload', mobile_api.imageUpload),

    path('admin/', admin.site.urls),
]
