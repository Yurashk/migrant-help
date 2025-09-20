import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpasPage } from './cpas-page';

describe('CpasPage', () => {
  let component: CpasPage;
  let fixture: ComponentFixture<CpasPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CpasPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CpasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
