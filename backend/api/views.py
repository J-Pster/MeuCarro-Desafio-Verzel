from django.shortcuts import render
from api.serializers import CarrosSerializer
from rest_framework import viewsets, permissions
from api.models import Carros


class CarrosViewSet(viewsets.ModelViewSet):
    queryset = Carros.objects.all()
    permission_classes = [
        permissions.IsAuthenticatedOrReadOnly
    ]
    serializer_class = CarrosSerializer
