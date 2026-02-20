import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelegramChanel } from './telegram-chanel';

describe('TelegramChanel', () => {
  let component: TelegramChanel;
  let fixture: ComponentFixture<TelegramChanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TelegramChanel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelegramChanel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
