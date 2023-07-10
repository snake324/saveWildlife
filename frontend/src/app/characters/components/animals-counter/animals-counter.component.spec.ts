import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalsCounterComponent } from './animals-counter.component';

describe('AnimalsCounterComponent', () => {
  let component: AnimalsCounterComponent;
  let fixture: ComponentFixture<AnimalsCounterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnimalsCounterComponent]
    });
    fixture = TestBed.createComponent(AnimalsCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
