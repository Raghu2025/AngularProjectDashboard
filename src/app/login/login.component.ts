import { Component, OnInit } from '@angular/core';
import { loginCredential } from '../Interface/loginCredential';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
credential:loginCredential = {
  username:'',
  password:''
}
  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
  }
login(){
  this.loginService.LogIn(this.credential).subscribe((data)=>{
    console.log(data)
  })
}
disabledLoginBtn(){
  if(this.credential.username.length===0 || this.credential.password.length===0){
    return true
  }
  else{
    return false
  }
}
}
