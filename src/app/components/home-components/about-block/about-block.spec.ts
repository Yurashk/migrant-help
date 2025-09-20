import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutBlock } from './about-block';

describe('AboutBlock', () => {
  let component: AboutBlock;
  let fixture: ComponentFixture<AboutBlock>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutBlock]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutBlock);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
