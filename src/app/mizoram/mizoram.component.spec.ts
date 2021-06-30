import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MizoramComponent } from './mizoram.component';

describe('MizoramComponent', () => {
  let component: MizoramComponent;
  let fixture: ComponentFixture<MizoramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MizoramComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MizoramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
