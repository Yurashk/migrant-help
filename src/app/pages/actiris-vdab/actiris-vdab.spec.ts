import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActirisVdab } from './actiris-vdab';

describe('ActirisVdab', () => {
  let component: ActirisVdab;
  let fixture: ComponentFixture<ActirisVdab>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActirisVdab]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActirisVdab);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
