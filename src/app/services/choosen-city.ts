import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { City } from '../models/city';

const KEY = 'app.city.selected';
export const CITIES_BE: City[] = [
  // Брюссель (двуязычный)
  {
    id: 'bruxelles',
    label: 'Bruxelles',
    languages: ['fr', 'nl'],
    disabled: false,
  },

  // Фландрия (nl)
  { id: 'antwerpen', label: 'Antwerpen', languages: ['nl'], disabled: false },
  { id: 'gent', label: 'Gent', languages: ['nl'], disabled: true },
  { id: 'brugge', label: 'Brugge', languages: ['nl'], disabled: true },
  { id: 'leuven', label: 'Leuven', languages: ['nl'], disabled: true },
  { id: 'mechelen', label: 'Mechelen', languages: ['nl'], disabled: true },
  { id: 'aalst', label: 'Aalst', languages: ['nl'], disabled: true },
  { id: 'kortrijk', label: 'Kortrijk', languages: ['nl'], disabled: true },
  { id: 'oostende', label: 'Oostende', languages: ['nl'], disabled: true },
  { id: 'roeselare', label: 'Roeselare', languages: ['nl'], disabled: true },
  { id: 'turnhout', label: 'Turnhout', languages: ['nl'], disabled: true },
  {
    id: 'sint-niklaas',
    label: 'Sint-Niklaas',
    languages: ['nl'],
    disabled: true,
  },
  { id: 'hasselt', label: 'Hasselt', languages: ['nl'], disabled: true },
  { id: 'genk', label: 'Genk', languages: ['nl'], disabled: true },
  {
    id: 'dendermonde',
    label: 'Dendermonde',
    languages: ['nl'],
    disabled: true,
  },
  { id: 'waregem', label: 'Waregem', languages: ['nl'], disabled: true },

  // Валлония (fr)
  { id: 'liege', label: 'Liège', languages: ['fr'], disabled: true },
  { id: 'charleroi', label: 'Charleroi', languages: ['fr'], disabled: true },
  { id: 'namur', label: 'Namur', languages: ['fr'], disabled: true },
  { id: 'mons', label: 'Mons', languages: ['fr'], disabled: true },
  {
    id: 'la-louviere',
    label: 'La Louvière',
    languages: ['fr'],
    disabled: true,
  },
  { id: 'tournai', label: 'Tournai', languages: ['fr'], disabled: true },
  { id: 'wavre', label: 'Wavre', languages: ['fr'], disabled: true },
  { id: 'seraing', label: 'Seraing', languages: ['fr'], disabled: true },
  { id: 'verviers', label: 'Verviers', languages: ['fr'], disabled: true },
  { id: 'mouscron', label: 'Mouscron', languages: ['fr'], disabled: true },
  { id: 'arlon', label: 'Arlon', languages: ['fr'], disabled: true },
  {
    id: 'ottignies-lln',
    label: 'Ottignies-Louvain-la-Neuve',
    languages: ['fr'],
    disabled: true,
  },
  { id: 'huy', label: 'Huy', languages: ['fr'], disabled: true },

  // Немецкоязычное сообщество (de)
  { id: 'eupen', label: 'Eupen', languages: ['de'], disabled: true },
  {
    id: 'sankt-vith',
    label: 'Sankt Vith',
    languages: ['de'],
    disabled: true,
  },
];
@Injectable({
  providedIn: 'root',
})
export class ChoosenCity {
  private allowed = new Set(CITIES_BE.map((c) => c.id));

  private readInitial(): string {
    const v = localStorage.getItem(KEY) || '';
    return this.allowed.has(v) ? v : 'bruxelles';
  }
  readonly city$ = new BehaviorSubject<string>(this.readInitial());

  get value(): string {
    return this.city$.value;
  }
  getCities() {
    return CITIES_BE;
  }
  setCity(id: string):void {
    console.log(id)
    const next = this.allowed.has(id) ? id : '';
    if (next === this.city$.value) return;
    this.city$.next(next);
    next ? localStorage.setItem(KEY, next) : localStorage.removeItem(KEY);
  }

  clear() {
    this.setCity('');
  }
}
