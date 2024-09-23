from django.http import HttpResponse
from django.template import loader

def portfolio(request):
  template = loader.get_template('portfolio/index.html') #remember the html file is inside home/templates/home/index.html 
  return HttpResponse(template.render())