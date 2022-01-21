import {  Component, OnInit} from '@angular/core';
import { faTools, faSignInAlt, faEnvelopeOpen, faStar, faPenAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';
import { CookieService } from 'ngx-cookie-service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [UserService]
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
 
  user;
  logged = false;
  unlogged = true;
  expand = true;
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
    private cookie:CookieService,
    private http: HttpClient,
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
        // this.router.navigateByUrl('/home');
        alert('graty wario! zalogowales sie')
        this.unlogged = !this.unlogged;
        this.logged = !this.logged;
        this.loginCard = !this.loginCard;
        document.cookie = response;
        this.cookie.set("refreshJWT", response.refresh);
        localStorage.setItem("accessJWT", response.access);
        console.log('refesh', this.cookie.get("refreshJWT"));
        console.log("access", localStorage.getItem("accessJWT"));
        this.token = this.cookie.get("refreshJWT");
      },error =>{
        console.log('error', error);
        alert('Podane dane są nieprawidłowe');
        }
    );
  }

   
    public logout() {
      this.token = null;
      this.token_expires = null;
      this.username = null;
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