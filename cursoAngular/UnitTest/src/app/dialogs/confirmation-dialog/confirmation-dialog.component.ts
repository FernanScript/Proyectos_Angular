import { Component, Inject } from '@angular/core';
import { DialogData } from 'src/app/interface/dialog-data';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss']
})
export class ConfirmationDialogComponent {

  title : string;
  message : string;

  constructor(
    public dialogRef: MatDialogRef<ConfirmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data : DialogData
  ) { }

  public onConfirm():void {
    this.dialogRef.close(true);
  }

  public onDismiss():void {
    this.dialogRef.close(false);
  }


}
