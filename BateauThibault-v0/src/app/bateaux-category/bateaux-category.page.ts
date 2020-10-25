import { Component, OnInit } from '@angular/core';
import { WebserviceService } from '../services/webservice.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-bateaux-category',
  templateUrl: './bateaux-category.page.html',
  styleUrls: ['./bateaux-category.page.scss'],
})
export class BateauxCategoryPage implements OnInit {
  public data: any = [];

  constructor(    
    private webservice: WebserviceService,
    ) {}

  ngOnInit() {
  }

}
