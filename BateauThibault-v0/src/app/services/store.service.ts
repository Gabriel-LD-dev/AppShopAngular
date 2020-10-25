import { Injectable } from '@angular/core';
import { Storage } from '@ionic/Storage';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private store: Storage) { }

  val: number;

  addProduct(key: string) {
    this.val = 0;

    this.store.get(key).then(
      (count) => { if(count != null) { this.val = count; } },

      (error) => { console.log("Error : " + error) }
    );

    console.log("COUNT : " + this.val);

    this.store.set(key, this.val + 1).then(
      (add) => { return "sucess" },

      (error) => { console.log("Error : " + error) }
    );
  }

  removeProduct(key: string) {
    this.val = 1;

    this.store.get(key).then(
      (count) => { if(count != null) { this.val = count; console.log(count); } },

      (error) => { console.log("Error : " + error) }
    );

    if (this.val <= 1) {
      this.store.remove(key).then(
        (del) => { return "success" },

        (error) => { console.log("Error : " + error) }
      );
    }

    else{
      this.store.set(key, this.val - 1).then(
        (add) => { return "sucess" },
        (error) => { console.log("Error : " + error) }
      );
    }
  }

  getProduct(key: string) {
    let val = 0;

    this.store.get(key).then(
      (count) => { val = count },

      (error) => { console.log("Error : " + error) }
    );

    return val;
  }
}
