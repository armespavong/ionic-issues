import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FooterButtonPageRoutingModule } from './footer-button-routing.module';

import { FooterButtonPage } from './footer-button.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FooterButtonPageRoutingModule
  ],
  declarations: [FooterButtonPage]
})
export class FooterButtonPageModule {}
