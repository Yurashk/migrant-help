import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMailDialog } from './show-mail-dialog';

describe('ShowMailDialog', () => {
  let component: ShowMailDialog;
  let fixture: ComponentFixture<ShowMailDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowMailDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowMailDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
