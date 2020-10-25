import { Router, NavigationExtras } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.page.html',
  styleUrls: ['./restaurant.page.scss'],
})
export class RestaurantPage implements OnInit {
  restaurant: any;

  constructor(private router: Router) {
    this.restaurant = router.getCurrentNavigation().extras.state.data;
    console.log(this.restaurant.name);
  }

  ngOnInit() {
  }

}
