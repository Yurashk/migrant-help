import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpasInfo } from './cpas-info';

describe('CpasInfo', () => {
  let component: CpasInfo;
  let fixture: ComponentFixture<CpasInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CpasInfo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CpasInfo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
