import {  Component, OnInit} from '@angular/core';
import { faTools, faSignInAlt, faEnvelopeOpen, faStar, faPenAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [UserService]
})
export class HeaderComponent implements OnInit{
  po(token){
    let tokens = JSON.parse(token);
    let decoded = jwt_decode(tokens); 
    console.log(decoded);
  }

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
              ) { }

  ngOnInit(): void {
    this.user ={
      username: '',
      password: '',
    }
  }
  getDecodedToken(token: string): any {
    try{
        return jwt_decode(JSON.parse(token));
    }
    catch(Error){
        return null;
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

        console.log(document.cookie);
        this.po(response.token);
      },error =>{
        console.log('error', error);
        alert('Podane dane są nieprawidłowe');
        }
    );
  }
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