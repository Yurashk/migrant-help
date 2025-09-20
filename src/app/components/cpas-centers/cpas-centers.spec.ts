import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpasCenters } from './cpas-centers';

describe('CpasCenters', () => {
  let component: CpasCenters;
  let fixture: ComponentFixture<CpasCenters>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CpasCenters]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CpasCenters);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
