import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMailCpas } from './create-mail-cpas';

describe('CreateMailCpas', () => {
  let component: CreateMailCpas;
  let fixture: ComponentFixture<CreateMailCpas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateMailCpas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateMailCpas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
