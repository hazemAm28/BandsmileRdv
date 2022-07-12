import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CliniqueFComponent } from './clinique-f.component';

describe('CliniqueFComponent', () => {
  let component: CliniqueFComponent;
  let fixture: ComponentFixture<CliniqueFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CliniqueFComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CliniqueFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
