import {  Component, OnInit} from '@angular/core';
import { faTools, faSignInAlt, faEnvelopeOpen, faStar, faPenAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';
import {HttpClient} from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [UserService, CookieService]
})
export class HeaderComponent implements OnInit{
   
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
  
  //the refresh token
  private refreshToken; 
  user;
  logged = false;
  unlogged = true;
  expand = false;
  loginCard = false;
  //icons
  faTools = faTools;
  faSignIn = faSignInAlt;
  faEnvelopeOpen = faEnvelopeOpen;
  faStar = faStar;
  faPenAlt = faPenAlt;
  faUser = faUser;
  
  constructor(
    private userService: UserService, 
    private router:Router,
    private http: HttpClient,
    private cookie:CookieService,
              ) { }

  ngOnInit(): void {
    this.user ={
      username: '',
      password: '',
    }
  }

  Login(){
    this.userService.loginUser(this.user).subscribe(
      response => {
        localStorage.setItem('jwtAccess', response.access);
        localStorage.setItem('jwtRefresh', response.refresh);
        localStorage.setItem('jwt', response);
        this.loginCard = !this.loginCard;
        alert('zalogowano pomyslnie!');
      },error =>{
        console.log('error', error);
        alert('Podane dane są nieprawidłowe');
        }
    );
  }

  logOut(){
    localStorage.clear();
    alert('Wylogowano wario');
  }
   

  // NOT LOGIN FUNCTIONS //
  expandMenu(){
    this.expand = !this.expand;
  }

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


window.onload=function(){
  const menuBtn = document.querySelector('.menu-btn');
  let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});
}