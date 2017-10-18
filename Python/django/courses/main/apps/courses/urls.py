from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^courses$', views.index),
    url(r'^processCourse$', views.processCourse),
    url(r'^destroy/(?P<id>[0-9]+)$', views.confirm),
    url(r'^destroy/(?P<id>[0-9]+)/remove$', views.remove),
]