import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnextRdvComponent } from './addnext-rdv.component';

describe('AddnextRdvComponent', () => {
  let component: AddnextRdvComponent;
  let fixture: ComponentFixture<AddnextRdvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddnextRdvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnextRdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
