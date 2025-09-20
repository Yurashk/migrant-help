import { TestBed } from '@angular/core/testing';

import { Cpas } from './cpas';

describe('Cpas', () => {
  let service: Cpas;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Cpas);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
