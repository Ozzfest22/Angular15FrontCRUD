import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Departamento } from '../Interfaces/departamento';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {

  private endpoint: string = 'https://localhost:7089/';
  private apiUrl: string = this.endpoint + "departamento/";

  constructor(private http:HttpClient) { }

  getList(): Observable<Departamento[]>{
    return this.http.get<Departamento[]>(`${this.apiUrl}lista`);
  }
}
