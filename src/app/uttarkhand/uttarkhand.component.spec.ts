import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UttarkhandComponent } from './uttarkhand.component';

describe('UttarkhandComponent', () => {
  let component: UttarkhandComponent;
  let fixture: ComponentFixture<UttarkhandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UttarkhandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UttarkhandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
