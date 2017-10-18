from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^users$', views.showAll),
    url(r'^users/new$', views.new),
    url(r'^users/create$', views.create),
    url(r'^users/(?P<id>[0-9]+)/edit$', views.edit),
    url(r'^users/(?P<id>[0-9]+)/delete$', views.delete),
    url(r'^users/(?P<id>[0-9]+)$', views.showOne),
    url(r'^users/(?P<id>[0-9]+)/update$', views.update),    
]