from django.core.management.base import BaseCommand
from api.models import Company, Vacancy
import random

class Command(BaseCommand):
    help = "Fills the database with test companies and vacancies."

    def handle(self, *args, **kwargs):
        Company.objects.all().delete()
        Vacancy.objects.all().delete()

        companies = [
            Company(name="SuperITCo_BelieveMeDude", description="Leading IT company", city="Almaty", address="Al-Farabi 119/70"),
            Company(name="PressF(in)", description="Finance services provider", city="Astana", address="idk streets in Astana, 123"),
            Company(name="Ponty", description="Educational platform", city="Shymkent", address="idk streets in Shym either, 567"),
        ]
        Company.objects.bulk_create(companies)

        vacancies = []
        for company in Company.objects.all():
            for i in range(5):
                vacancies.append(Vacancy(
                    name=f"{company.name} Job {i+1}",
                    description="Exciting job opportunity (believe me)",
                    salary=random.uniform(50000, 150000),
                    company=company
                ))
        Vacancy.objects.bulk_create(vacancies)

        self.stdout.write(self.style.SUCCESS("Database populated successfully!"))
