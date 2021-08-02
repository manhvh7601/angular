import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QtAuthComponent } from './qt-auth.component';

describe('QtAuthComponent', () => {
  let component: QtAuthComponent;
  let fixture: ComponentFixture<QtAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QtAuthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QtAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
