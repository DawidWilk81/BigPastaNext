import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [UserService]
})
export class RegisterComponent implements OnInit {
  user;
  constructor(private userService:UserService) { }

  ngOnInit() {
    this.user = {
      username:'',
      password:'',
      email:'',
    }
  }

  registerNewUser(){
    return this.userService.registerUser(this.user).subscribe(
      response => {
        alert('User has been created!');
        console.log('response', response);
      },error => {
        console.log('error', error);
      }
    )
  }
}
