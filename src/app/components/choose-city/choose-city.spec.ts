import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseCity } from './choose-city';

describe('ChooseCity', () => {
  let component: ChooseCity;
  let fixture: ComponentFixture<ChooseCity>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChooseCity]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChooseCity);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
