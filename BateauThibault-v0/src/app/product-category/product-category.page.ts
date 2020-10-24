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
    webservice.getProductData().subscribe((datas) => {
      this.data = datas
    });
  }

  getProductDataFiltered(value) {

    if (this.data == undefined)
      return [];

    else if (value == 3) {
      return this.data = this.data.filter(el => el.sale == true);
    }

    else {
      return this.data.filter(el => el.category == value);
    }

  }
  ngOnInit() {
  }

}




