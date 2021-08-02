import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewComicsComponent } from './new-comics.component';

describe('NewComicsComponent', () => {
  let component: NewComicsComponent;
  let fixture: ComponentFixture<NewComicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewComicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewComicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
