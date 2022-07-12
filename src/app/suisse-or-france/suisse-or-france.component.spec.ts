import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuisseOrFranceComponent } from './suisse-or-france.component';

describe('SuisseOrFranceComponent', () => {
  let component: SuisseOrFranceComponent;
  let fixture: ComponentFixture<SuisseOrFranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuisseOrFranceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuisseOrFranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
