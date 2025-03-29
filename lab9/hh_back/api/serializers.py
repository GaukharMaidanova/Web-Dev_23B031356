from rest_framework import serializers
from api.models import Company, Vacancy

class CSerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = '__all__'

class VSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vacancy
        fields = '__all__'
