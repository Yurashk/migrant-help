import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActirisList } from './actiris-list';

describe('ActirisList', () => {
  let component: ActirisList;
  let fixture: ComponentFixture<ActirisList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActirisList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActirisList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
