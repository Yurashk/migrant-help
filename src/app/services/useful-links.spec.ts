import { TestBed } from '@angular/core/testing';

import { UsefulLinks } from './useful-links';

describe('UsefulLinks', () => {
  let service: UsefulLinks;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsefulLinks);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
