from django.http import HttpResponse
from django.template import loader

def landing_page(request):
  template = loader.get_template('landing_page/index.html') #remember the html file is inside home/templates/home/index.html 
  return HttpResponse(template.render())