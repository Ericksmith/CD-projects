from __future__ import unicode_literals
from django.db import models

# Create your models here.
class CourseManager(models.Manager):
    def validator(self, postData):
        errors = []
        if len(postData['name']) <= 5:
            errors.append('Course name must be longer than 5 characters')
        if len(postData['desc']) <=15:
            errors.append('Course description must be longer than 15 characters')
        return errors


class Course(models.Model):
    name = models.CharField(max_length=255)
    desc = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = CourseManager()