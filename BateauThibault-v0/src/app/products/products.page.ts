import { WebserviceService } from './../services/webservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
datas : Array<any>;
  constructor(    private WebService: WebserviceService,
    ) { }

  ngOnInit() {
    this.WebService.getProductData().subscribe((data) => {
     this.datas= data;
      console.log(data);
    })
  }

}
