from django.http import JsonResponse
from rest_framework.decorators import api_view
from .models import Company, Vacancy
from .serializers import CSerializer, VSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, generics

@api_view(['GET', 'POST'])
def company_list(request):
    if request.method == 'GET':
        companies = Company.objects.all()
        serializer = CSerializer(companies, many=True)
        return JsonResponse(serializer.data, safe=False)

    elif request.method == 'POST':
        serializer = CSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)

@api_view(['GET', 'PUT', 'DELETE'])
def company_detail(request, pk):
    try:
        company = Company.objects.get(id=pk)
    except Company.DoesNotExist:
        return JsonResponse({'error': 'Not found'}, status=404)

    if request.method == 'GET':
        serializer = CSerializer(company)
        return JsonResponse(serializer.data)

    elif request.method == 'PUT':
        serializer = CSerializer(company, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=400)

    elif request.method == 'DELETE':
        company.delete()
        return JsonResponse({'deleted': True})

@api_view(['GET'])
def company_vacancies(request, pk):
    try:
        company = Company.objects.get(id=pk)
    except Company.DoesNotExist:
        return JsonResponse({'error': 'Company not found'}, status=404)
    vacancies = company.vacancies.all()
    serializer = VSerializer(vacancies, many=True)
    return JsonResponse(serializer.data, safe=False)

@api_view(['POST'])
def create_company(request):
    serializer = CSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class VacancyList(APIView):
    def get(self, request):
        vacancies = Vacancy.objects.all()
        serializer = VSerializer(vacancies, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = VSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class VacancyDetail(APIView):
    def get_object(self, pk):
        try:
            return Vacancy.objects.get(pk=pk)
        except Vacancy.DoesNotExist:
            return None

    def get(self, request, pk):
        vacancy = self.get_object(pk)
        if vacancy is None:
            return Response({'error': 'Not found'}, status=404)
        serializer = VSerializer(vacancy)
        return Response(serializer.data)

    def put(self, request, pk):
        vacancy = self.get_object(pk)
        if vacancy is None:
            return Response({'error': 'Not found'}, status=404)
        serializer = VSerializer(vacancy, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)

    def delete(self, request, pk):
        vacancy = self.get_object(pk)
        if vacancy is None:
            return Response({'error': 'Not found'}, status=404)
        vacancy.delete()
        return Response({'deleted': True})
