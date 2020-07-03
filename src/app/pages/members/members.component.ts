import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { TableService } from 'src/app/services/table.service';

let ELEMENT_DATA;


@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})

export class MembersComponent implements OnInit {
  
  constructor(private tableSer: TableService) { }

  ngOnInit() {
 return   this.tableSer.getMembers().subscribe(data =>{
      this.dataSource.data =data
     // ELEMENT_DATA =data
      console.log("Element data", this.dataSource.data)
    },err=>{
      console.log('error',err)
    })
  }

  displayedColumns: string[] = ['Card Status', 'Membership ID', 'Date Issued', 'Renewal Date','Expiry Date'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


}
