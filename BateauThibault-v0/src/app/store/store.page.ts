import { Component, OnInit } from '@angular/core';
import { StoreService } from '../services/store.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-store',
  templateUrl: './store.page.html',
  styleUrls: ['./store.page.scss'],
})
export class StorePage implements OnInit {

  cart: any[] = [];

  constructor(store: Storage) {
    store.forEach((value, key, index) => { this.cart.push({value: value, key: key}); console.log("key : " + key, "value : " + value); } );
    console.log(this.cart);
  }

  ngOnInit() {
  }

}
