import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './routs/welcome/welcome.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { welcomeReducer } from './redux/welcome/reducer';
import { WelcomeEffectsService } from './redux/welcome/welcome-effects.service';
import { environment } from '../environments/environment';
import { RegisterBrandComponent } from './routs/register-brand/register-brand.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterBrandEffectsService } from './redux/register-brand/register-brand-effects.service';
import { registerBrandReducer } from './redux/register-brand/reducer';
import { LoginComponent } from './routs/login/login.component';
import { LoginEffectsService } from './redux/login/login-effects.service';
import { ConfirmComponent } from './routs/confirm/confirm.component';
import { MainComponent } from './routs/main/main.component';
import { mainReducer } from './redux/main/reducer';
import { loginReducer } from './redux/login/reducer';
import { ConfirmEffectsService } from  './redux/confirm/confirm-effects.service';
import { MainEffectsService } from './redux/main/main-effects.service';
import { unexpectedErrorReducer } from './redux/unexpected-error/reducer';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { confirmReducer } from './redux/confirm/reducer';
import { ErrorSnackBarComponent } from './routs/error-snack-bar/error-snack-bar.component';
import { HomeComponent } from './routs/home/home.component';
import { homeReducer } from './redux/home/reducer';
import { HomeEffectsService } from './redux/home/home-effects.service';
@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    RegisterBrandComponent,
    LoginComponent,
    ConfirmComponent,
    MainComponent,
    ErrorSnackBarComponent,
    HomeComponent
  ],
  imports: [
    MatSnackBarModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserModule,
    MatButtonModule,
    MatIconModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    StoreModule.forRoot({
      welcomeReducer: welcomeReducer,
      registerBrandReducer: registerBrandReducer,
      loginReducer: loginReducer,
      mainReducer: mainReducer,
      unexpectedErrorReducer: unexpectedErrorReducer,
      confirmReducer: confirmReducer,
      homeReducer: homeReducer
    }, {}),
    EffectsModule.forRoot([
      WelcomeEffectsService,
      RegisterBrandEffectsService,
      MainEffectsService,
      LoginEffectsService,
      ConfirmEffectsService,
      HomeEffectsService
    ]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
