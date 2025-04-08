import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CompanyService } from './services/company.service';
import { VacancyService } from './services/vacancy.service';
import { Company } from './models/company.model';
import { Vacancy } from './models/vacancy.model';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  companies: Company[] = [];
  vacancies: Vacancy[] = [];
  selectedCompanyId: number | null = null;

  constructor(private companyService: CompanyService, private vacancyService: VacancyService) { }

  ngOnInit(): void {
    this.getCompanies();
  }

  getCompanies(): void {
    this.companyService.getCompanies().subscribe(companies => {
      this.companies = companies;
    });
  }

  getVacancies(companyId: number): void {
    this.vacancyService.getVacanciesByCompanyId(companyId).subscribe(vacancies => {
      this.vacancies = vacancies;
      this.selectedCompanyId = companyId;
    });
  }

  loadVacancies(companyId: number): void {
    this.vacancyService.getVacanciesByCompanyId(companyId).subscribe(data => {
      this.vacancies = data;
    });
  }

  onCompanyClick(companyId: number): void {
    this.selectedCompanyId = companyId;
    this.loadVacancies(companyId);
  }
}
