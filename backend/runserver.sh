#!/bin/bash

python manage.py makemigrations
python manage.py migrate
python manage.py createsuperuser --noinput
python manage.py seed
python manage.py runserver 0.0.0.0:8000