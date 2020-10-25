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
  

  getBateauData(value: string){
    return this.http.get<any[]>("../../assets/data/Boat.json").toPromise();
  }

  getRecetteData(value: string){
    return this.http.get<any[]>("../../assets/data/Recettes.json").toPromise();
  }

  getRestaurantData(value: string){
    return this.http.get<any[]>("../../assets/data/Restaurant.js");
  }
}