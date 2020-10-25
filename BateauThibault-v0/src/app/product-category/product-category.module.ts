import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductCategoryPageRoutingModule } from './product-category-routing.module';

import { ProductCategoryPage } from './product-category.page';

import { HeaderComponent } from '../header/header.component';
import { ButtonComponent } from '../button/button.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductCategoryPageRoutingModule
  ],
  declarations: [ProductCategoryPage, HeaderComponent, ButtonComponent,]
})
export class ProductCategoryPageModule {}
