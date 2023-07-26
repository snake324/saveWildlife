import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFamiliesComponent } from './card-families.component';

describe('CardFamiliesComponent', () => {
  let component: CardFamiliesComponent;
  let fixture: ComponentFixture<CardFamiliesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardFamiliesComponent]
    });
    fixture = TestBed.createComponent(CardFamiliesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
