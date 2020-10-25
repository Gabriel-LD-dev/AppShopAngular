import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BateauxCategoryPageRoutingModule } from './bateaux-category-routing.module';

import { BateauxCategoryPage } from './bateaux-category.page';

import { HeaderComponent } from '../header/header.component';
import { ButtonComponent } from '../button/button.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BateauxCategoryPageRoutingModule
  ],
  declarations: [BateauxCategoryPage, HeaderComponent, ButtonComponent]
})
export class BateauxCategoryPageModule {}
