import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiveFeedbackComponent } from './receive-feedback.component';

describe('ReceiveFeedbackComponent', () => {
  let component: ReceiveFeedbackComponent;
  let fixture: ComponentFixture<ReceiveFeedbackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReceiveFeedbackComponent]
    });
    fixture = TestBed.createComponent(ReceiveFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
