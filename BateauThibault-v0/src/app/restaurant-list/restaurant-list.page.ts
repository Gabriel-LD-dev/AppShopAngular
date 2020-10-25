import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebserviceService } from '../services/webservice.service';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.page.html',
  styleUrls: ['./restaurant-list.page.scss'],
})
export class RestaurantListPage implements OnInit {
  restaurants: any[];

  constructor(private webservice: WebserviceService, private router: Router) {
    this.restaurants = this.router.getCurrentNavigation().extras.state.data;
    webservice.getRestaurantData().then((response) => {
      this.restaurants = response;
    }).catch((error) => {
      console.log('Error : ' + error);
    });
  }

  ngOnInit() {
  }

}
