import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [UserService, CookieService]
})
export class AppComponent implements OnInit{
  title = 'BigPastaJr';
  constructor(
    private US:UserService,
    private cookie:CookieService,
    ){}
    ngOnInit(){
      this.US.refreshUser(JSON.parse(this.cookie.get('JWTrefresh'))).subscribe(
        response =>{
          
        },error =>{

        }
      )
      }
    
    
}
