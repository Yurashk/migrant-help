import { HttpClient } from '@angular/common/http';
import { DOCUMENT, inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ActirisCenter } from '../models/actiris';

@Injectable({
  providedIn: 'root'
})
export class Actiris {
   private doc = inject(DOCUMENT);

  constructor(private http: HttpClient) {}
  private asset(relPath: string): string {
    return new URL(relPath, this.doc.baseURI).toString();
  }
  getActirisCenters(): Observable<ActirisCenter[]> {
      return this.http.get<ActirisCenter[]>( this.asset('/data/actiris-mock.json'));
    }
}
