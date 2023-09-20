import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Noti1Page } from './noti1.page';

const routes: Routes = [
  {
    path: '',
    component: Noti1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Noti1PageRoutingModule {}
