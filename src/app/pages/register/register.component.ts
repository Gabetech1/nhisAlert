import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TableService } from 'src/app/services/table.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
firstname;
lastname;
email;
username
 password;
 password2;
phonenumber;
error;
showError = false
  constructor(private router: Router,private tableSer: TableService) { }

  ngOnInit() {
  }

  signup(){
    if(this.password != this.password2){
      this.error = "Password do not match";
      this.showError = true;
    }
    const login = {
      fname: this.firstname,
      lname: this.lastname,
      username: this.username,
      email: this.email,
      password: this.password,

    }
    this.tableSer.signUpUser(login).subscribe(info =>{
      console.log('User: ',info)
    },err=>{
      console.log("Login Error ",err)
    })
  }
}
