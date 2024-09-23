from django.urls import path
from . import views

urlpatterns = [
    path('market_analysis_tools/', views.market_analysis_tools, name='market_analysis_tools'), #appname/, {views.appname} module, 
]