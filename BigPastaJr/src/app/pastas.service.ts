import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PastasService {
  constructor(private http: HttpClient) { }

  baseUrl = 'localhost:8000/';

  addPasta(pastaBody):Observable<any>{
    return this.http.post(this.baseUrl + 'api/pastas', pastaBody);
  }

}
