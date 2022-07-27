import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdvDateComponent } from './rdv-date.component';

describe('RdvDateComponent', () => {
  let component: RdvDateComponent;
  let fixture: ComponentFixture<RdvDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdvDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdvDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
