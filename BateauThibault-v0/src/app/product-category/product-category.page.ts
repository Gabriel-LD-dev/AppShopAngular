import { Component, OnInit } from '@angular/core';
import { WebserviceService } from '../services/webservice.service';
import { Router, NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.page.html',
  styleUrls: ['./product-category.page.scss'],
})
export class ProductCategoryPage implements OnInit {
  public data: any = [];

  constructor(
    private webservice: WebserviceService,
  ) {
    this.data = webservice.getProductData().subscribe((data) => {
      this.data = data
    });
  }

  getProductDataFiltered(value) {
    console.log(value);
    if (value == 1) {
      return this.data.filter(el => el.category == 0);
    }
    if (value == 2) {
      return this.data.filter(el => el.category == 1);
    }
    if (value == 3) {
      return this.data.filter(el => el.category == 2);
    }
    if (value == 4) {
      return this.data.filter(el => el.sale == true);
    }

  }
  ngOnInit() {
  }

}




