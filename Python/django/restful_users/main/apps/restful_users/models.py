# -*- coding: utf-8 -*-
from __future__ import unicode_literals
import re
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
from django.db import models

# Create your models here.


class UserManager(models.Manager):
    def validator(self, postData):
        errors = []
        if len(postData['first_name']) < 2 or len(postData['last_name']) < 2:
            errors.append('You first and last name should be more than 1 character')
        regex = "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$"
        if(EMAIL_REGEX.match(postData['email']) == None):
            errors.append('Email not valid')
        return errors

class User(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = UserManager()
