import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { TableService } from 'src/app/services/table.service';
import { MatDialog } from '@angular/material/dialog';
import { HealthTipDialogComponent } from '../_materialComponents/health-tip-dialog/health-tip-dialog.component';

let ELEMENT_DATA;

export interface DialogData {
  animal: string;
  name: string;
}


@Component({
  selector: 'app-health-tips',
  templateUrl: './health-tips.component.html',
  styleUrls: ['./health-tips.component.css']
})
export class HealthTipsComponent implements OnInit {
  animal: string;
  name: string;
  constructor(private tableSer: TableService,public dialog: MatDialog) { }

  ngOnInit() {
 return   this.tableSer.getHealthTip().subscribe(data =>{
      this.dataSource.data =data
     // ELEMENT_DATA =data
      console.log("Element data", this.dataSource.data)
    },err=>{
      console.log('error',err)
    })
  }

  displayedColumns: string[] = ['Message'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(HealthTipDialogComponent, {
      width: '600px',
      data: {name: this.name, animal: this.animal}
    });

    console.log("Dialog",dialogRef)

}
}