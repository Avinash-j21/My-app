import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashbpardComponent } from './dashbpard/dashbpard.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashbpardComponent,
    HomeComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
