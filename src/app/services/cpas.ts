import { HttpClient } from '@angular/common/http';
import { DOCUMENT, inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CpasCenter } from '../models/cpas-center';

@Injectable({
  providedIn: 'root'
})
export class Cpas {
  private doc = inject(DOCUMENT);
  constructor(private http: HttpClient) {}

  private asset(relPath: string): string {
    return new URL(relPath, this.doc.baseURI).toString();
  }

  getCenters(currentCity: string): Observable<CpasCenter[]> {
    return this.http.get<CpasCenter[]>(
      this.asset(`data/cpas-${currentCity}.json`)
    );
  }

  getCentersByStreet(): Observable<any[]> {
    return this.http.get<any[]>(
      this.asset('data/postal_code_to_cpas_id.json')
    );
  }
}
