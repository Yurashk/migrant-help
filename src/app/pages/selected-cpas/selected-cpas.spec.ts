import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedCpas } from './selected-cpas';

describe('SelectedCpas', () => {
  let component: SelectedCpas;
  let fixture: ComponentFixture<SelectedCpas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectedCpas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectedCpas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
