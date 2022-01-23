import { Component, OnInit } from '@angular/core';
import { faTools, faSearch, faSignInAlt, faEnvelopeOpen, faStar, faPenAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';
import {HttpClient} from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-unlogged',
  templateUrl: './unlogged.component.html',
  styleUrls: ['./unlogged.component.scss'],
  providers: [UserService, CookieService]
})
export class UnloggedComponent implements OnInit {
  // http options used for making API calls
  private httpOptions: any;
 
  // the actual JWT token
  public token: string;
 
  // the token expiration date
  public token_expires: Date;
 
  // the username of the logged in user
  public username: string;
 
  // error messages received from the login attempt
  public errors: any = [];
  //icons
  faTools = faTools;
  faSignIn = faSignInAlt;
  faEnvelopeOpen = faEnvelopeOpen;
  faStar = faStar;
  faPenAlt = faPenAlt;
  faUser = faUser;
  faSearch = faSearch;
  //User variables
  user;
  logged = false;
  unlogged = true;
  expand = false;
  loginCard = false;
  constructor(
    private userService:UserService,
    private router:Router,
    private http:HttpClient,
    private cookie:CookieService
    
    ){}
  
  ngOnInit(): void {
    this.user ={
      username: '',
      password: '',
    }

  }

  //loginUser

  Login(){
    this.userService.loginUser(this.user).subscribe(
      response => {
        localStorage.setItem('jwtAccess', response.access);
        localStorage.setItem('jwtRefresh', response.refresh);
        localStorage.setItem('jwt', response);
        this.loginCard = !this.loginCard;
        alert('zalogowano pomyslnie!');
        this.router.navigateByUrl('home');
        this.userService
      },error =>{
        console.log('error', error);
        alert('Podane dane są nieprawidłowe');
        }
    );
  }
  //loginCard
  showLogIn(){
    this.loginCard = !this.loginCard;
    if(this.loginCard = true){
      document.body.style.overflow = "hidden";
    }else{document.body.style.overflow = "scroll";}
  }

  hideLogIn(){
    this.loginCard = !this.loginCard;
    if(document.body.style.overflowY = "hidden"){
      document.body.style.overflowY = "scroll";
    }
  }

}
