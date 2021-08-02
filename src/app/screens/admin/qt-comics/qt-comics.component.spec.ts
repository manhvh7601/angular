import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QtComicsComponent } from './qt-comics.component';

describe('QtComicsComponent', () => {
  let component: QtComicsComponent;
  let fixture: ComponentFixture<QtComicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QtComicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QtComicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
