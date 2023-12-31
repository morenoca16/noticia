import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { LoginPage } from './login.page';

const routes: Routes = [
  {
    path: '',
    component: LoginPage
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,{ preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule],
})
export class LoginPageRoutingModule {}