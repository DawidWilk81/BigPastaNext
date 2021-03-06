import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import jwt_decode from 'jwt-decode';
import { CookieService } from 'ngx-cookie-service';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserService {
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

    public tokenAccess;
  constructor(
    private cookie:CookieService,
    private http: HttpClient,
  ) { }
  baseurl = "localhost:8000/";
  
registerUser(userData:any): Observable<any> {
  //link ma sie konczyc ukosem, bo jebnie
  return this.http.post('http://127.0.0.1:8000/api/users/', userData)
}

loginUser(userData:any): Observable<any> {
  return this.http.post('http://127.0.0.1:8000/api/auth/', userData)
}

refreshUser(token){
  return this.http.post('http://127.0.0.1:8000/api/auth/refresh/', 
{refresh: token});
}


    // Refreshes the JWT token, to extend the time the user is logged in
    // public refreshToken() {
    //   this.http.post('/api-token-refresh/', JSON.stringify({token: this.cookie.get('refreshJWT')}), this.httpOptions).subscribe(
    //     data => {
    //       this.updateData(data['token']);
    //     },
    //     err => {
    //       this.errors = err['error'];
    //     }
    //   );
    // }
}
