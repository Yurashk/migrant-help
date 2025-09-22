import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CpasCenter } from '../models/cpas-center';

@Injectable({
  providedIn: 'root'
})
export class Cpas {
  constructor(private http: HttpClient) {}

  getCenters(currentCity:string): Observable<CpasCenter[]> {
    return this.http.get<CpasCenter[]>(`assets/data/cpas-${currentCity}.json`);
  }
  getCentersByStreet(): Observable<any[]> {
    return this.http.get<any[]>('assets/data/postal_code_to_cpas_id.json');
  }
}
