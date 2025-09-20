import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JustArrived } from './just-arrived';

describe('JustArrived', () => {
  let component: JustArrived;
  let fixture: ComponentFixture<JustArrived>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JustArrived]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JustArrived);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
