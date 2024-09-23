from django.urls import path
from . import views

urlpatterns = [
    path('community/', views.community, name='community'), #appname/, {views.appname} module, 
]