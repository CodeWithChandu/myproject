import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArunachalComponent } from './arunachal.component';

describe('ArunachalComponent', () => {
  let component: ArunachalComponent;
  let fixture: ComponentFixture<ArunachalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArunachalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArunachalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
