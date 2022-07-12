import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetRdvByidComponent } from './get-rdv-byid.component';

describe('GetRdvByidComponent', () => {
  let component: GetRdvByidComponent;
  let fixture: ComponentFixture<GetRdvByidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetRdvByidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetRdvByidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
