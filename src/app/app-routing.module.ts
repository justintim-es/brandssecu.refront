import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './routs/welcome/welcome.component';
import { RegisterBrandComponent } from './routs/register-brand/register-brand.component';
import { LoginComponent }  from './routs/login/login.component';
import { MainComponent } from './routs/main/main.component';
import { ConfirmComponent } from './routs/confirm/confirm.component';
import { HomeComponent } from './routs/home/home.component';
import { AuthGuardService } from './auth/auth-guard.service';
const routes: Routes = [
  {
    path: '', component: WelcomeComponent
  },
  {
    path: 'register-brand', component: RegisterBrandComponent
  },
  {
    path: 'login-brand', component: LoginComponent
  },
  {
    path: 'main', component: MainComponent, canActivate: [AuthGuardService]
  },
  {
    path: 'confirm/:token', component: ConfirmComponent, canActivate: [AuthGuardService]
  },
  {
    path: 'home', component: HomeComponent, canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
