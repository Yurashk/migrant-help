import { TestBed } from '@angular/core/testing';

import { Actiris } from './actiris';

describe('Actiris', () => {
  let service: Actiris;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Actiris);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
