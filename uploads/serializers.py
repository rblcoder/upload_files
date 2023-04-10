from rest_framework import serializers
from .models import Upload


class UploadSerializer(serializers.ModelSerializer):
    url = serializers.FileField(required=False)

    class Meta:
        model = Upload
        fields = ('id', 'url', 'uploadtime')
