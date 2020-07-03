import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { TableService } from 'src/app/services/table.service';

let ELEMENT_DATA;
@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  constructor(private tableSer: TableService) { }

  ngOnInit() {
 return   this.tableSer.getDeliveryReport().subscribe(data =>{
      this.dataSource.data =data
     // ELEMENT_DATA =data
      console.log("Element data", this.dataSource.data)
    },err=>{
      console.log('error',err)
    })
  }

  displayedColumns: string[] = ['Membership ID', 'Message','Number','Date Sent','Card Status'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}