import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QTDanhMucComponent } from './qt-danh-muc.component';

describe('QTDanhMucComponent', () => {
  let component: QTDanhMucComponent;
  let fixture: ComponentFixture<QTDanhMucComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QTDanhMucComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QTDanhMucComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
