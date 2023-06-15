import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../entites/employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private _apiServeurUrl = 'http://localhost:8080';

  constructor(private readonly _http: HttpClient) {}

  //Méthode Get All Employées
  public getAll(): Observable<Employee[]> {
    return this._http.get<Employee[]>(`${this._apiServeurUrl}/employee/all`);
  }
}
