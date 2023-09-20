import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoordinacionPageRoutingModule } from './coordinacion-routing.module';

import { CoordinacionPage } from './coordinacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoordinacionPageRoutingModule
  ],
  declarations: [CoordinacionPage]
})
export class CoordinacionPageModule {}
