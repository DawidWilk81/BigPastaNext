import {  Component, OnInit} from '@angular/core';
import { faTools, faSignInAlt, faEnvelopeOpen, faStar, faPenAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [UserService]
})
export class HeaderComponent implements OnInit{
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
              ) { }

  ngOnInit(): void {
    this.user ={
      username: '',
      password: '',
    }
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
  Login(){
    this.userService.loginUser(this.user).subscribe(
      response => {
        this.router.navigateByUrl('/home');
        alert('graty wario! zalogowales sie')
        console.log(response);
      },error =>{
        console.log('error', error);
        alert('Podane dane są nieprawidłowe');
              }
            );
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