import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vacancy } from '../models/vacancy.model';

@Injectable({
  providedIn: 'root'
})
export class VacancyService {
  private apiUrl = 'http://127.0.0.1:8000/api/vacancies/'; 

  constructor(private http: HttpClient) { }

  getVacanciesByCompanyId(companyId: number): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(`http://127.0.0.1:8000/api/companies/${companyId}/vacancies/`);
  }
}
