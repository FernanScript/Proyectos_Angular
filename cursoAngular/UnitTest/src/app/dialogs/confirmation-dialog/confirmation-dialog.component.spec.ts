import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationDialogComponent } from './confirmation-dialog.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

const matDialogRefMock = {
  close : () => null
};

describe('ConfirmationDialogComponent', () => {
  let component: ConfirmationDialogComponent;
  let fixture: ComponentFixture<ConfirmationDialogComponent>;

  beforeEach( () => {
    TestBed.configureTestingModule({
      imports : [],
      declarations: [ ConfirmationDialogComponent ],
      providers : [
        {
          provide : MAT_DIALOG_DATA, useValue : {}
        },
        {
          provide : MatDialogRef, useValue : matDialogRefMock
        }
      ],
      schemas : [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('onConfirm delete cart', () => {
    // const service = fixture.debugElement.injector.get(MatDialogRef);
    const service = TestBed.inject(MatDialogRef);
    const spy1 = spyOn(service, 'close');
    component.onConfirm();
    expect(spy1).toHaveBeenCalledWith(true);
  });

  it('onDismiss delete cart', () => {
    // const service = fixture.debugElement.injector.get(MatDialogRef);
    const service = TestBed.inject(MatDialogRef);
    const spy2 = spyOn(service, 'close');
    component.onDismiss();
    expect(spy2).toHaveBeenCalledWith(false);
  });
});
