import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

 interface Imembers {
  id: string;
  firstname: string;
  lastname: string;
  othername: string;
  number: string;
  member_id: string;
  date_of_issue: string;
  last_renewed_date: string;
  expiry_date: string;
  card_status: string;
}
 interface Ireport {
  id: string;
  sender: string;
  number: string;
  member_id: string;
  message: string;
  date_sent: string;
  card_status: string;
}

 interface Itips {
  id: string;
  message: string;
 
}
 interface Icount {
  activeCard: string;
  expiredCard: string;
  inactiveCard: string;
 
}

@Injectable({
  providedIn: 'root'
})


export class TableService {
  url = 'http://localhost/idalert';
  constructor(private http: HttpClient) { 
    this.sendSMS();
    setInterval(_=>{
     // this.getMembers();
      this.sendSMS();
    },1000)

    }

ELEMENT_DATA;


loginUser(data){
  console.log("Data to send",data)
  return this.http.post(this.url+'/loginUser.php',data)
}

signUpUser(data){
  return this.http.post(this.url+'/siginUpUser.php',data)
}

getMembers(): Observable<any>{
 return this.http.get<Imembers[]>(this.url+'/viewMembersDummy.php')
}
getMembersCount(): Observable<any>{
 return this.http.get(this.url+'/cardStatusCount.php').pipe(map(result=>result))
}


getDeliveryReport(): Observable<any>{
 return this.http.get<Ireport[]>(this.url+'/getDeliveryReport.php')
}

getHealthTip(): Observable<any> {
 return this.http.get<Itips[]>(this.url+'/getHealthTips.php')
}

sendBulkMessage(msg){
 return this.http.post(this.url+'/getDeliveryReport.php',msg)
}


sendSMS(){
  console.log("sending sms..")
    return this.http.get(this.url+"/sendExpirySMS.php").subscribe(result=>{
      console.log("SMS REPORT", result)
    },err=>{
    //  console.log("SMS REPORT ERROR",err)
    })
}

}
