import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  buttons = [
    {
      name: "Produits et Promotions",
      img: '../../assets/poisson.png',
      link: "/products"
    },

    {
      name: "Bateaux",
      img: '../../assets/ancre.png',
      link: "/ships"
    },

    {
      name: "Restaurants",
      img: '../../assets/restaurant.png',
      link: "/restaurants"
    },

    {
      name: "Recettes",
      img: '../../assets/recette.png',
      link: "/recettes"
    },

    {
      name: "Contact",
      img: '../../assets/homard.png',
      link: "/contact"
    },
  ]

  constructor() {}

}

