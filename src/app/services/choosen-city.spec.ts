import { TestBed } from '@angular/core/testing';

import { ChoosenCity } from './choosen-city';

describe('ChoosenCity', () => {
  let service: ChoosenCity;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChoosenCity);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
