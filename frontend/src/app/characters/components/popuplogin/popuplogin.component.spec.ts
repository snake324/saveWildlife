import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopuploginComponent } from './popuplogin.component';

describe('PopuploginComponent', () => {
  let component: PopuploginComponent;
  let fixture: ComponentFixture<PopuploginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopuploginComponent]
    });
    fixture = TestBed.createComponent(PopuploginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
