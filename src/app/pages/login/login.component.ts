import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { TableService } from 'src/app/services/table.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  username: string;
  password;
  constructor(private router: Router,private tableSer: TableService) {}

  ngOnInit() {
  }
  ngOnDestroy() {
  }


  login(){
   // alert('Meber ID :'+ this.memberId+' '+' '+this.phonenumber);
    const login = {
      username: this.username,
      password: this.password
    }
    this.tableSer.loginUser(login).subscribe(info =>{
      console.log('User: ',info)
    },err=>{
      console.log("Login Error ",err)
    })
  }
}
