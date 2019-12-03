import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainPageComponent } from './main-page/main-page.component';
import { GeoPlacesComponent } from './geo-places/geo-places.component';
import { GoogleMapsComponent } from './google-maps/google-maps.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'mainpage',
    component: MainPageComponent,
    data: {
      title: 'Main Page'
    }
  },
  {
    path: 'mainpage/:id',
    component: MainPageComponent,
    data: {
      title: 'Main Page'
    }
  },
  {
    path: 'geopage/:id',
    component: GoogleMapsComponent,
    data: {
      title: 'Geo Page'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
