import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';

import { SocialLoginModule, AuthServiceConfig } from "angular4-social-login";
import { GoogleLoginProvider, FacebookLoginProvider } from "angular4-social-login";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { GoogleMapsComponent } from './google-maps/google-maps.component';
import {AgmCoreModule} from '@agm/core';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { GeoPlacesComponent } from './geo-places/geo-places.component';

let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("492625919852-34n0obm1jleskvfbrdl92mg9s76jafc9.apps.googleusercontent.com")
  }
  // },
  // {
  //   id: FacebookLoginProvider.PROVIDER_ID,
  //   provider: new FacebookLoginProvider("Facebook-App-Id")
  // }
]);
export function provideConfig() {
  return config;
}
@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    GoogleMapsComponent,
    LoginComponent,
    MainPageComponent,
    GeoPlacesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocialLoginModule.initialize(config),
    FontAwesomeModule,
    AgmCoreModule.forRoot(),
    HttpClientModule,
    FormsModule
    //SocialLoginModule
  ],
  providers: [ {
    provide: AuthServiceConfig,
    useFactory: provideConfig
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
