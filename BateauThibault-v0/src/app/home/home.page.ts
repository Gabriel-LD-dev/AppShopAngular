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
      link: "/product-category"
    },

    {
      name: "Bateaux",
      img: '../../assets/ancre.png',
      link: "/bateaux-category"
    },

    {
      name: "Restaurants",
      img: '../../assets/restaurant.png',
      link: "/restaurant-list"
    },

    {
      name: "Recettes",
      img: '../../assets/recette.png',
      link: "/recette-category"
    },

    {
      name: "Contact",
      img: '../../assets/homard.png',
      link: "/contact"
    },
  ]

  constructor() {}

}

