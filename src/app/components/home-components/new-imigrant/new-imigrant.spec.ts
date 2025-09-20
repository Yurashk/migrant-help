import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewImigrant } from './new-imigrant';

describe('NewImigrant', () => {
  let component: NewImigrant;
  let fixture: ComponentFixture<NewImigrant>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewImigrant]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewImigrant);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
