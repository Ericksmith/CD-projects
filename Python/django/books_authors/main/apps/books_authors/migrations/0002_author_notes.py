# -*- coding: utf-8 -*-
# Generated by Django 1.11.3 on 2017-10-17 04:22
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('books_authors', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='author',
            name='notes',
            field=models.TextField(default='N/A'),
        ),
    ]