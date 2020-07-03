import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthTipDialogComponent } from './health-tip-dialog.component';

describe('HealthTipDialogComponent', () => {
  let component: HealthTipDialogComponent;
  let fixture: ComponentFixture<HealthTipDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthTipDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthTipDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
