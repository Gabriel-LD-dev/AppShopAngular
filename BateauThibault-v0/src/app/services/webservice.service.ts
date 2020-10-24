import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebserviceService {
public data: any = [];
  constructor(private http: HttpClient) { }

  getProductData() {
    return this.http.get<any[]>("../../assets/data/products.json");
  }
}
