import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindHouse } from './find-house';

describe('FindHouse', () => {
  let component: FindHouse;
  let fixture: ComponentFixture<FindHouse>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FindHouse]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindHouse);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
