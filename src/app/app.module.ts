import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AccessComponent } from './components/access/access.component';
import { NavComponent } from './components/nav/nav.component';
import { MostWantedComponent } from './components/most-wanted/most-wanted.component';

<<<<<<< HEAD
import { RegisterComponent} from './register/register.component';
import { LoginComponent } from './login/login.component';
import { C404Component } from './components/c404/c404.component'; 


import { ReactiveFormsModule,FormsModule } from '@angular/forms';

import { routing, appRoutingProviders } from './app.routing';



=======
import { WindowScrollService } from './services/window-scroll.service';
>>>>>>> dad1d7aa2557409b97910e78dde45b7774b1bbc4

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
    //AppRoutingModule,
    routing,
    FormsModule,
    ReactiveFormsModule
  ],
<<<<<<< HEAD
  providers: [appRoutingProviders],
=======
  providers: [WindowScrollService],
>>>>>>> dad1d7aa2557409b97910e78dde45b7774b1bbc4
  bootstrap: [AppComponent]
})
export class AppModule { }
