import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Noti1PageRoutingModule } from './noti1-routing.module';

import { Noti1Page } from './noti1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Noti1PageRoutingModule
  ],
  declarations: [Noti1Page]
})
export class Noti1PageModule {}
