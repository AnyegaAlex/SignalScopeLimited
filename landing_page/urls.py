from django.urls import path
from . import views

urlpatterns = [
    path('landing_page/', views.landing_page, name='landing_page'), #appname/, {views.appname} module, 
]