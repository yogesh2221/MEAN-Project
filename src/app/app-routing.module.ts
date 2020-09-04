import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartComponent } from './start/start.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotComponent } from './forgot/forgot.component';
import { ResetComponent } from './reset/reset.component';
import { Start1Component } from './start1/start1.component';

const routes: Routes = [
  {path:'start', component:StartComponent},
  { path:'login', component: LoginComponent },
  { path:'register', component: RegisterComponent },
  { path:'forgot', component: ForgotComponent },
  { path:'reset', component: ResetComponent },
  { path:'start1', component: Start1Component },


  { path: '', redirectTo: '/start', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
