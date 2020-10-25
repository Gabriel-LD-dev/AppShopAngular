import { ButtonComponent } from './../button/button.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestaurantListPageRoutingModule } from './restaurant-list-routing.module';

import { RestaurantListPage } from './restaurant-list.page';
import { HeaderComponent } from '../header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestaurantListPageRoutingModule
  ],
  declarations: [RestaurantListPage, HeaderComponent, ButtonComponent]
})
export class RestaurantListPageModule {}
