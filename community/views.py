from django.http import HttpResponse
from django.template import loader

def community(request):
  template = loader.get_template('community/index.html') #remember the html file is inside home/templates/home/index.html 
  return HttpResponse(template.render())