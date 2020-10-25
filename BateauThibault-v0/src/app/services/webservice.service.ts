import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WebserviceService {

  products: any = [];

  constructor(private http: HttpClient) { }

  getProductData(value: number) {

    return this.http.get<any[]>("../../assets/data/products.json").toPromise();
  }
}