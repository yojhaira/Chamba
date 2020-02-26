import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AccessComponent } from './components/access/access.component';
import { NavComponent } from './components/nav/nav.component';
import { MostWantedComponent } from './components/most-wanted/most-wanted.component';

import { RegisterComponent} from './register/register.component';
import { LoginComponent } from './login/login.component';
import { C404Component } from './components/c404/c404.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AccessComponent,
    NavComponent,
    RegisterComponent,
    MostWantedComponent,
    LoginComponent,
    C404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
