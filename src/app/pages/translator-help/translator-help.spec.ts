import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslatorHelp } from './translator-help';

describe('TranslatorHelp', () => {
  let component: TranslatorHelp;
  let fixture: ComponentFixture<TranslatorHelp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranslatorHelp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TranslatorHelp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
