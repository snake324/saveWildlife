import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Animalsdetails2Component } from './animalsdetails2.component';

describe('Animalsdetails2Component', () => {
  let component: Animalsdetails2Component;
  let fixture: ComponentFixture<Animalsdetails2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Animalsdetails2Component]
    });
    fixture = TestBed.createComponent(Animalsdetails2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
