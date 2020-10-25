import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebserviceService } from '../services/webservice.service';

@Component({
  selector: 'app-bateaux',
  templateUrl: './bateaux.page.html',
  styleUrls: ['./bateaux.page.scss'],
})
export class BateauxPage implements OnInit {
  boats: any = [];
  category: string;
  constructor(private webservice: WebserviceService, private router: Router) {
    this.category = this.router.getCurrentNavigation().extras.state.data;

    webservice.getBateauData(this.category).then((boat) => {
console.log(this.category);
        this.boats = boat.filter(el => el.name == this.category);
        console.log(this.boats[0].name , this.boats[0].imat  , this.boats[0].image);
    })
    .catch((error) => {
      console.log("Error : " +error);
    });
  }

  ngOnInit() {
  }



}
