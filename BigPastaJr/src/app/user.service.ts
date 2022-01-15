import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable()
export class UserService {
  constructor(private http: HttpClient) { }
  baseurl = "localhost:8000/";
registerUser(userData:any): Observable<any> {
  //link ma sie konczyc ukosem, bo jebnie
  return this.http.post('http://127.0.0.1:8000/api/users/', userData)
}

loginUser(userData:any): Observable<any> {
  return this.http.post('http://127.0.0.1:8000/api/auth/', userData)
}

}
