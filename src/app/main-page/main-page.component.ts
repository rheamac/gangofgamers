import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from './main-page.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(private http : HttpClient, private route: ActivatedRoute, private router: Router) { }
  userData;
  userModel: UserModel
  id;

 async ngOnInit() {
  this.id = this.route.snapshot.paramMap.get('id');
    this.userData = (await this.http.get(`http://localhost:3000/api/loginInfo/${this.id}`).toPromise()) as any[];
  }
  formData = {name: "", postalCode: "", gameChoice: [], location:""}
  savedData() {
    this.userModel = {id: this.id,
      location: this.userData.location,
      gameType: this.formData.gameChoice}
    console.log(this.userModel);
    this.http.post("http://localhost:3000/api/userDetails", this.userModel).toPromise();
    this.router.navigate([`/geopage/${this.id}`]);
  }

}
