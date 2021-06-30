import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JharkhandComponent } from './jharkhand.component';

describe('JharkhandComponent', () => {
  let component: JharkhandComponent;
  let fixture: ComponentFixture<JharkhandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JharkhandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JharkhandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
