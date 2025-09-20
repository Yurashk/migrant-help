import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActirisMailCreation } from './actiris-mail-creation';

describe('ActirisMailCreation', () => {
  let component: ActirisMailCreation;
  let fixture: ComponentFixture<ActirisMailCreation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActirisMailCreation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActirisMailCreation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
