import { Component, Input, OnInit } from '@angular/core';
import { StoreService } from '../services/store.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {

  @Input() key: string;
  count: number = 0;
  add: boolean = false;

  constructor(private store: StoreService) {
    this.count = store.getProduct(this.key);
  }

  ngOnInit() { }

}
