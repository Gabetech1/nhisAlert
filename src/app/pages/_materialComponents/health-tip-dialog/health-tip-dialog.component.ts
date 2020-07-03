import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { DialogData } from '../../health-tips/health-tips.component';

@Component({
  selector: 'app-health-tip-dialog',
  templateUrl: './health-tip-dialog.component.html',
  styleUrls: ['./health-tip-dialog.component.css'],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  ]
})
export class HealthTipDialogComponent implements OnInit {

 
  constructor(public dialogRef: MatDialogRef<HealthTipDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

    ngOnInit(): void {
    }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
