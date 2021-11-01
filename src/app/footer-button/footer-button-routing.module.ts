import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FooterButtonPage } from './footer-button.page';

const routes: Routes = [
  {
    path: '',
    component: FooterButtonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FooterButtonPageRoutingModule {}
