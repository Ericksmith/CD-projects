# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.
class test(models.Model):
    test = models.CharField(max_length=255)