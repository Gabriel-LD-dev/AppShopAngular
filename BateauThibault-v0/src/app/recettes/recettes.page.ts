import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebserviceService } from '../services/webservice.service';

@Component({
  selector: 'app-recettes',
  templateUrl: './recettes.page.html',
  styleUrls: ['./recettes.page.scss'],
})
export class RecettesPage implements OnInit {
  category: string;
  recettes: any[];

  constructor(private webservice: WebserviceService, private router: Router) {
    this.category = this.router.getCurrentNavigation().extras.state.data;

    webservice.getRecetteData(this.category).then((recette) => {
      console.log(this.category , this.recettes);
        this.recettes = recette.filter(el => el.name == this.category);
      
    })
    .catch((error) => {
      console.log("Error : " +error);
    });
  }

  ngOnInit() {
  }

}

