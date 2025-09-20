import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BredCrumbs } from './bred-crumbs';

describe('BredCrumbs', () => {
  let component: BredCrumbs;
  let fixture: ComponentFixture<BredCrumbs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BredCrumbs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BredCrumbs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
