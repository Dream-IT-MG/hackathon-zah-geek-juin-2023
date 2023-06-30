"""
URL configuration for configs project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
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
from django.http import JsonResponse
from django.urls import path
from ninja import Router
from ninja_jwt.controller import NinjaJWTDefaultController
from ninja_extra import NinjaExtraAPI

from monitoring.api import router as monitoring_router
from user_profile.api import router as user_profile_router
from authentication.api import router as auth_router


def index(request):
    return JsonResponse({"message": "Bienvenue!"})


router_v1 = Router()
router_v1.add_router("users/", user_profile_router)


api = NinjaExtraAPI()
api.add_router("monitoring/", monitoring_router)
api.add_router("auth/", auth_router)
api.add_router("v1/", router_v1)
api.register_controllers(NinjaJWTDefaultController)

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/", api.urls),
    path("", index),
]
