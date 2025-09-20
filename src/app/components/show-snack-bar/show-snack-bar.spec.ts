import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSnackBar } from './show-snack-bar';

describe('ShowSnackBar', () => {
  let component: ShowSnackBar;
  let fixture: ComponentFixture<ShowSnackBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowSnackBar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowSnackBar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
