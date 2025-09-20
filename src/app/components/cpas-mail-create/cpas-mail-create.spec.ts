import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpasMailCreate } from './cpas-mail-create';

describe('CpasMailCreate', () => {
  let component: CpasMailCreate;
  let fixture: ComponentFixture<CpasMailCreate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CpasMailCreate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CpasMailCreate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
