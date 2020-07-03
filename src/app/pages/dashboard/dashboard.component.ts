import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';
import { TableService } from 'src/app/services/table.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public datasets: any;
  public data: any;
  public salesChart;
  public clicked: boolean = true;
  public clicked1: boolean = false;
  PieChart=[]
  registeredUsers;
  activeUsers;
  expiredCard
  inactiveCard
  constructor(private tableSer: TableService) {
   /*  setInterval(_=>{
      this.getMembers();
    },1000) */
    this.getCount();

    let check1;
    let check2;
    let check3;
    let check4;
  //  this.getCount();
     setInterval(_=>{
      
      this.tableSer.getMembersCount().subscribe(res=>{
        //   console.log("check data length",data['length'])
           check1 = res['0']['registeredUsers']
           check2 = res['0']['activeCard']
           check3 = res['0']['expiredCard']
           check4 = res['0']['inactiveCard']
          // console.log("seting check",check)   
          if(check1 !=this.registeredUsers || check2 !=this.activeUsers){
            this.getData(res['0']['registeredUsers'],res['0']['activeCard'], res['0']['expiredCard'],res['0']['inactiveCard'])
  
           }   
         })
        
     
     },1000) 
   }

  ngOnInit() {
  

  }


 getCount(){
  this.tableSer.getMembersCount().subscribe(res=>{
//console.log('res',res)
    this.getData(res['0']['registeredUsers'],res['0']['activeCard'], res['0']['expiredCard'],res['0']['inactiveCard'])
  })
    }


getData(reg,active,expired,inactive){
  this.registeredUsers =reg
    
  let activeCount =active
  this.activeUsers =active

  let expiredCount = expired
  this.expiredCard = expired
  
  let inactiveCount =5// inactive
  this.inactiveCard =5//inactive
//  console.log('res 2',activeCount)

  this.PieChart = new Chart ('pieChart', {
    type:'pie',
    data:{
      labels:["Active Cards","Expired Cards","Inactive Cards"],
      datasets:[{
        labels: 'Vote now',
       // data:[101,102,103],
        data:[activeCount,expiredCount,inactiveCount],
        backgroundColor:[
          'rgba(40,23,244,0.9)',
          'rgba(192,255,0,0.9)',
          'rgba(239,23,240,0.9)',
          
        ]
      }]
    },
    options:{
      title:{
        Text: 'Bar Chart',
        display:true
      },
     /*  legend:{
        display:false
      }, */
     

      scales:{
        yAxes:[{
          ticks:{
            begainAtZero:true
          }
        }]
      }
    },
    layout: {
      padding: {
          left: 50,
          right: 0,
          top: 0,
          bottom: 0
      }
  }
  })

}

}
