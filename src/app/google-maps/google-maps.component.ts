
import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

// @ts-ignore
import {} from '@types/googlemaps';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.css']
})
export class GoogleMapsComponent implements OnInit {
  latitude = 42.4668;
  longitude = -70.9495;
  locationChoosen = false;
  icon: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
  

  markers = [
    {
      coords: {lat: 42.29007879663169, lng: -83.05731185105475},
      iconImage: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
      content: '<h1>Lynn MA</h1>'
    },
    {
      coords: {lat: 42.8584, lng: -70.9300},
      content: '<h1>Amesbury MA</h1>'
    },
    {
      coords: {lat: 42.7762, lng: -71.0773}
    },
    {
      coords: {lat: 42.99247802824865,
        lng: -72.12635946352742}
    },
    {
      coords: {lat: 42.32297056999792,
        lng: -83.22679610645537}
    }
  ];
  id: any;
  userData;
  userDetails;
  userlongitude;
  userlatitude;
  lng;
  lat;
  userDetails1;
  circleRadius:number = 20000;

  constructor(private router: Router, private http : HttpClient,private route: ActivatedRoute) {
    
  }

  async ngOnInit() {
      this.id = this.route.snapshot.paramMap.get('id');
  this.userData = (await this.http.get(`http://localhost:3000/api/loginInfo/${this.id}`).toPromise()) as any[];
  this.userDetails1 = [{
    "id": "117022579572886000449",
    "name": "Rhea",
		"location": {
			"latitude": "42.277083901911816",
			"longitude": "-82.9771032128676"
		},
    "gameType": "Mortal",
    "lab":"M"
	},
	{
    "id": "117022579572886000500",
    "name": "Mihir",
		"location": {
			"latitude": "42.294396175899126",
			"longitude": "83.07859786179694"
		},
    "gameType": "Fortnite",
    
    "lab":"F"
	},
 {
    "id": "117022579572886000501",
    "name": "Devang",
		"location": {
			"latitude": "42.294396175899126",
			"longitude": "83.07859786179694"
		},
    "gameType": "PUBG",
    
    "lab":"P"
  }
  ,
 {
    "id": "117022579572886000502",
    "name": "Manan",
		"location": {
			"latitude": "42.3599872121382",
			"longitude": "-83.38567857956991"
		},
    "gameType": "Age of Empires",
    
    "lab":"A"
  }
  ,
  {
     "id": "117022579572886000503",
     "name": "Phill",
     "location": {
       "latitude": "42.14448979715409",
       "longitude": "-83.30877428269491"
     },
     "gameType": "PUBG",
     
    "lab":"P"
   }
   ,
   {
      "id": "117022579572886000503",
      "name": "Vipul",
      "location": {
        "latitude": "42.29500897838709",
        "longitude": "-83.30328111863241"
      },
      "gameType": "Fortnite",
      
    "lab":"F"
    }
]


 this.userDetails = (await this.http.get(`http://localhost:3000/api/userDetails`).toPromise()) as any[];
  this.userlatitude = this.userData.location.latitude;
  this.userlongitude = this.userData.location.longitude;
  if (navigator)
    {
    navigator.geolocation.getCurrentPosition( pos => {
        this.lng = +pos.coords.longitude;
        this.lat = +pos.coords.latitude;
      });
    }
  }
  // @ViewChild('map', {static: null}) mapElement: ElementRef;
  // map: google.maps.Map;
  // markers;

  //ngOnInit() {
    // const mapProperties = {
    //   center: new google.maps.LatLng(35.2271, -80.8431),
    //   zoom: 15,
    //   mapTypeId: google.maps.MapTypeId.ROADMAP
    // };
  //  this.map = new google.maps.Map(this.mapElement.nativeElement, mapProperties);
    //this.map.setCenter(new google.maps.LatLng(42.8584, -70.930));

//    // this.map.panTo(new google.maps.LatLng(42.8584, -70.9300));
    
//  //   this.map.setValues(new google.maps.LatLng(42.8584, -70.9300));
//   //  this.map.setValues(new google.maps.LatLng(42.4668, -70.9495));
//     // Loop through markers
   

    

//  }
  onChooseLocation(event) {
    console.log(event);
    this.latitude = event.lat;
    this.longitude = event.lng;
    this.locationChoosen = true;
  //  this.setvalues();
}
setvalues(){
  for (let i = 0; i < this.markers.length; i++) {
    this.latitude = this.markers[i].coords.lat;
    this.longitude = this.markers[i].coords.lng;
   
  }

}





}
