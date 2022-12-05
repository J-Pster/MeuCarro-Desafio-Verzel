from rest_framework import serializers
from api.models import Carros


class CarrosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Carros
        fields = [
          "id",
          "nome",
          "marca",
          "modelo",
          "foto_url",
          "ano",
          "localizacao",
          "quilometragem",
          "valor_original",
          "valor_promocional"
        ]
