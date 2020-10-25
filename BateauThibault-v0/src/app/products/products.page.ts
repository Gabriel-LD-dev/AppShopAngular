import { WebserviceService } from './../services/webservice.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
  category: number;
  products: any[];

  constructor(private webservice: WebserviceService, private router: Router) {
    this.category = this.router.getCurrentNavigation().extras.state.data;

    webservice.getProductData(this.category).then((product) => {
      if (this.category == 3) {
        this.products = product.filter(el => el.sale);
      }

      else {
        this.products = product.filter(el => el.category == this.category);
      }
    })
    .catch((error) => {
      console.log("Error : " +error);
    });
  }

  ngOnInit() {
  }

}
