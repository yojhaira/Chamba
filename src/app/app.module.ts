import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

/**
* Template
*/
import { MainTemplate } from './template/main/main.template';
import { RegisterTemplate } from './template/register/register.template';
import { LoginTemplate } from './template/login/login.template';
import { C404Template } from './template/c404/c404.template';

import { MainContentTemplate } from './template/main-content/main-content.template';
/**
* Components
*/
import { NavComponent } from './components/nav/nav.component';
import { HeaderComponent } from './components/header/header.component';
import { MostWantedComponent } from './components/most-wanted/most-wanted.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogoComponent } from './components/logo/logo.component';
// import { InputComponent } from './components/input/input.component';
import { GraphicLogin } from './components/graphics/graphic-login/graphic-login.component';

import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { routing, appRoutingProviders } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    LoginTemplate,
    RegisterTemplate,
    C404Template,
    
    MainTemplate,
    HeaderComponent,
    NavComponent,
    MostWantedComponent,
    FooterComponent,
    MainContentTemplate,
    LogoComponent,
    GraphicLogin
    // InputComponent
  ],
  imports: [
    BrowserModule,
    //AppRoutingModule,
    routing,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
