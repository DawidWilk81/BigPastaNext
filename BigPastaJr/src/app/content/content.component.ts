import { Component, OnInit } from '@angular/core';
import { faTools, faSearch, faSignInAlt, faEnvelopeOpen, faStar, faPenAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';
import {HttpClient} from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
  providers: [UserService, CookieService]
})
export class ContentComponent implements OnInit {

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
  faSearch = faSearch;
  faTools = faTools;
  faSignIn = faSignInAlt;
  faEnvelopeOpen = faEnvelopeOpen;
  faStar = faStar;
  faPenAlt = faPenAlt;
  faUser = faUser;

  //login user
  logged = false;
  unlogged = true;
  expand = false;
  loginCard = false;
  constructor(
    private router:Router,
    private userService:UserService
    ) {}

  //template fun
  expandMenu(){
    this.expand = !this.expand;
  }

  logOut(){
    this.router.navigateByUrl('');
    localStorage.clear();
    alert('wylogowano');
  }
  updateData(token) {
    this.token = token;
    this.errors = [];
    console.log('updateDataToken',token);
    // decode the token to read the username and expiration timestamp
    const token_decoded = jwt_decode(token.access, {header: true});
  }

  ngOnInit(): void {
    this.updateData(localStorage.getItem('jwtAccess'));
    
  }

}
