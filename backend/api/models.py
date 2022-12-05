from django.db import models
import uuid


class Carros(models.Model):
    id = models.UUIDField(
        primary_key=True,
        default=uuid.uuid4,
        null=False,
        blank=True
    )

    nome = models.CharField(
        max_length=50,
        null=False,
        blank=False
    )

    marca = models.CharField(
        max_length=50,
        null=False,
        blank=False
    )

    modelo = models.CharField(
        max_length=50,
        null=False,
        blank=False
    )

    foto_url = models.CharField(
        max_length=200,
        null=False,
        blank=False
    )

    ano = models.IntegerField(
        null=False,
        blank=False
    )

    localizacao = models.CharField(
        max_length=80,
        null=False,
        blank=False
    )

    quilometragem = models.IntegerField(
        null=False,
        blank=False
    )

    valor_original = models.DecimalField(
        null=False,
        blank=False,
        decimal_places=2,
        max_digits=20
    )

    valor_promocional = models.DecimalField(
        null=True,
        blank=False,
        decimal_places=2,
        max_digits=20
    )
