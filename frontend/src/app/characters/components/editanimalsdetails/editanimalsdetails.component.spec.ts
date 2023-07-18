import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditanimalsdetailsComponent } from './editanimalsdetails.component';

describe('EditanimalsdetailsComponent', () => {
  let component: EditanimalsdetailsComponent;
  let fixture: ComponentFixture<EditanimalsdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditanimalsdetailsComponent]
    });
    fixture = TestBed.createComponent(EditanimalsdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
