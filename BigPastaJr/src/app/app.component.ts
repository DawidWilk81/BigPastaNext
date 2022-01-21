import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [UserService]
})
export class AppComponent implements OnInit{
  title = 'BigPastaJr';
  constructor(
    private US:UserService,
    private cookie:CookieService
    ){}
    ngOnInit(){
      if(this.cookie.get("refreshJWT")){
        return this.US.refreshToken();
      }
    }
    
}
