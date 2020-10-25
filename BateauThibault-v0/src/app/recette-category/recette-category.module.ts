import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecetteCategoryPageRoutingModule } from './recette-category-routing.module';

import { RecetteCategoryPage } from './recette-category.page';

import { HeaderComponent } from '../header/header.component';
import { ButtonComponent } from '../button/button.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecetteCategoryPageRoutingModule
  ],
  declarations: [RecetteCategoryPage, HeaderComponent, ButtonComponent]
})
export class RecetteCategoryPageModule {}
