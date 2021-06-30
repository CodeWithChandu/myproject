import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BengalComponent } from './bengal.component';

describe('BengalComponent', () => {
  let component: BengalComponent;
  let fixture: ComponentFixture<BengalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BengalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BengalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
