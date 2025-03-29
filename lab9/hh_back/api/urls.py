from django.urls import path
from api.views import (
    CListView, CDetailView, CompVacView,
    VListView, VDetailView, TopTenVacView
)

urlpatterns = [
    path('companies/', CListView.as_view(), name='list-of-companies'),
    path('companies/<int:id>/', CDetailView.as_view(), name='company-detail'),
    path('companies/<int:id>/vacancies/', CompVacView.as_view(), name='company-vacancies'),

    path('vacancies/', VListView.as_view(), name='list-of-vacancies'),
    path('vacancies/<int:id>/', VDetailView.as_view(), name='vacancy-detail'),
    path('vacancies/top_ten/', TopTenVacView.as_view(), name='vacancy-top-ten'),
]
