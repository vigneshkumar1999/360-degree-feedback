import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDesignationComponent } from './add-designation.component';

describe('AddDesignationComponent', () => {
  let component: AddDesignationComponent;
  let fixture: ComponentFixture<AddDesignationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddDesignationComponent]
    });
    fixture = TestBed.createComponent(AddDesignationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
