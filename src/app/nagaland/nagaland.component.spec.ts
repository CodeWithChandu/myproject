import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NagalandComponent } from './nagaland.component';

describe('NagalandComponent', () => {
  let component: NagalandComponent;
  let fixture: ComponentFixture<NagalandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NagalandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NagalandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
