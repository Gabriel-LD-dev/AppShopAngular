import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  buttons = [
    {
      name: "Products",
      img: '../../assets/poisson.png',
      link: "/products"
    },

    {
      name: "Recettes",
      img: '../../assets/homard.png',
      link: "/recettes"
    }
  ]

  constructor() {}

}

