from django.contrib import admin
from django.urls import path, include

urlpatterns = [
#appname.url
    path('', include('community.urls')),
    path('', include('landing_page.urls')),
    path('', include('market_analysis_tools.urls')),
    path('', include('portfolio.urls')),
    path('', include('support.urls')),
    path('admin/', admin.site.urls),
]