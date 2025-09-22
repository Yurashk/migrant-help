import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ActirisCenter } from '../models/actiris';

@Injectable({
  providedIn: 'root'
})
export class Actiris {
  constructor(private http: HttpClient) {}
  getActirisCenters(): Observable<ActirisCenter[]> {
      return this.http.get<ActirisCenter[]>('assets/data/actiris-mock.json');
    }
}
