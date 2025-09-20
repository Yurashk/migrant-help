import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedCpasDetails } from './selected-cpas-details';

describe('SelectedCpasDetails', () => {
  let component: SelectedCpasDetails;
  let fixture: ComponentFixture<SelectedCpasDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectedCpasDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectedCpasDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
