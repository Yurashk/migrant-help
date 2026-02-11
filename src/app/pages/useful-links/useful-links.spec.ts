import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsefulLinks } from './useful-links';

describe('UsefulLinks', () => {
  let component: UsefulLinks;
  let fixture: ComponentFixture<UsefulLinks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsefulLinks]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsefulLinks);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
