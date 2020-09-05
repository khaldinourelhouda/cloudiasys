import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AlertComponent } from './components/alert.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { JwtInterceptor, ErrorInterceptor } from './helpers';
import {HttpErrorInterceptor} from './auth/http.error.interceptor';
import { CommonModule } from '@angular/common';  
import { routing }        from './app-routing.module';
import { RouterModule } from '@angular/router';
import { ConfirmEmailComponent } from './confirm-email/confirm-email.component';
import { RegisterEntrepriseComponent } from './register-entreprise/register-entreprise.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  imports: [
      BrowserModule,
      ReactiveFormsModule,
      HttpClientModule,
      CommonModule,
      routing,
      RouterModule
    
  ],
  declarations: [
      AppComponent,
      AlertComponent,
      HomeComponent,
      LoginComponent,
      RegisterComponent,
      ConfirmEmailComponent,
      RegisterEntrepriseComponent,
      ProfileComponent
     
  ],
  providers: [
      { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
     // { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
     {provide: HTTP_INTERCEPTORS,useClass: HttpErrorInterceptor,multi: true}
      // provider used to create fake backend
      //fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }