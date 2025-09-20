import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportantContacts } from './important-contacts';

describe('ImportantContacts', () => {
  let component: ImportantContacts;
  let fixture: ComponentFixture<ImportantContacts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImportantContacts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImportantContacts);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
