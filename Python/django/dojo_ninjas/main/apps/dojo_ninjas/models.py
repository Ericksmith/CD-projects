# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.
class dojo(models.Model):
    name = models.CharField(max_length=255)
    city = models.CharField(max_length=255)
    state = models.CharField(max_length=2)
    desc = models.CharField(max_length=255, default='Hello')

class ninja(models.Model):
    dojo_id = models.ForeignKey(dojo, related_name='ninjas')
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)

