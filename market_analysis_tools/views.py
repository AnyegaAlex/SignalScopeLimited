from django.http import HttpResponse
from django.template import loader

def market_analysis_tools(request):
  template = loader.get_template('market_analysis_tools/index.html') #remember the html file is inside home/templates/home/index.html 
  return HttpResponse(template.render())