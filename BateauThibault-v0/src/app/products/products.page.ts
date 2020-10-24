import { WebserviceService } from './../services/webservice.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
  products: any = [];

  constructor() {  }

  ngOnInit() {
    this.products = history.state.data;
    console.log(this.products);
  }

}
