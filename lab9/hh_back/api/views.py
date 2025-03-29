from django.shortcuts import render
from rest_framework import generics
from api.models import Company, Vacancy
from api.serializers import CSerializer, VSerializer

class CListView(generics.ListAPIView):
    queryset = Company.objects.all()
    serializer_class = CSerializer

class CDetailView(generics.RetrieveAPIView):
    queryset = Company.objects.all()
    serializer_class = CSerializer

class CompVacView(generics.ListAPIView):
    serializer_class = VSerializer

    def get_queryset(self):
        return Vacancy.objects.filter(company_id=self.kwargs['id'])

class VListView(generics.ListAPIView):
    queryset = Vacancy.objects.all()
    serializer_class = VSerializer

class VDetailView(generics.RetrieveAPIView):
    queryset = Vacancy.objects.all()
    serializer_class = VSerializer

class TopTenVacView(generics.ListAPIView):
    serializer_class = VSerializer

    def get_queryset(self):
        return Vacancy.objects.order_by('-salary')[:10]

