import {Component, NgZone, OnInit} from '@angular/core';
import { AuthService } from "angular4-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angular4-social-login"
import { SocialUser } from "angular4-social-login";
import {Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {AuthModel, LocationModel, EntireModel} from './auth.model';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  private user: SocialUser;
   loggedIn: boolean;
  geolocationPosition: LocationModel;
  authModel: AuthModel;
  entireModel: EntireModel;
  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
    if (this.loggedIn) {
      // console.log('Uttan')
      this.router.navigateByUrl('/mainpage');
     }

    if (window.navigator && window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(
        position => {
          this.geolocationPosition = {latitude: position.coords.latitude, longitude:  position.coords.longitude},
            console.log(this.geolocationPosition)
        },
        error => {
          switch (error.code) {
            case 1:
              console.log('Permission Denied');
              break;
            case 2:
              console.log('Position Unavailable');
              break;
            case 3:
              console.log('Timeout');
              break;
          }
        }
      );
    };
  }

   title = 'Angular Socio login via Google!';
  constructor( private authService: AuthService, private router: Router, private http : HttpClient) { }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then((data)=>{
      if(data) {
      this.authModel = data;
      this.entireModel = { authData : this.authModel, location: this.geolocationPosition, id : this.authModel.id}
      this.router.navigate([`/mainpage/${this.authModel.id}`]);
      this.http.post("http://localhost:3000/api/loginInfo", this.entireModel).toPromise();
      }
    })
      
    
  }
  checklogined() {
    this.router.navigate(['/mainpage']);
  }

  // signInWithFB(): void {
  //   this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  // }

  signOut(): void {
    console.log("cccc");
    if (this.user)
    this.authService.signOut();
  }
}
