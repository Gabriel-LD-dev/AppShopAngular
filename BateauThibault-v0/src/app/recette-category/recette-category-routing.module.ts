import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecetteCategoryPage } from './recette-category.page';

const routes: Routes = [
  {
    path: '',
    component: RecetteCategoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecetteCategoryPageRoutingModule {}
