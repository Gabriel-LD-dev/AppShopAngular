import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BateauxCategoryPage } from './bateaux-category.page';

const routes: Routes = [
  {
    path: '',
    component: BateauxCategoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BateauxCategoryPageRoutingModule {}
