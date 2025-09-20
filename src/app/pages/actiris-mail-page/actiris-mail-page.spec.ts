import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActirisMailPage } from './actiris-mail-page';

describe('ActirisMailPage', () => {
  let component: ActirisMailPage;
  let fixture: ComponentFixture<ActirisMailPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActirisMailPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActirisMailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
