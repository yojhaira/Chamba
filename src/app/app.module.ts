import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

/**
* Template
*/
import { MainTemplate } from './template/main/main.template';
import { UserProfileTemplate } from './template/user-profile/user-profile.template';
import { RegisterTemplate } from './template/register/register.template';
import { LoginTemplate } from './template/login/login.template';
import { C404Template } from './template/c404/c404.template';
import { HttpClientModule } from '@angular/common/http';
import { MainContentTemplate } from './template/main/main-content/main-content.template';
import { CategoriesTemplate } from './template/categories/categories.template';
import { SearchComponent } from './template/search/search.template';

/**
* Components
*/
import { NavComponent } from './components/nav/nav.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MostWantedComponent } from './components/most-wanted/most-wanted.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogoComponent } from './components/logo/logo.component';
import { QuoteComponent } from './components/quote/quote.component';

import { ActionProfessionalComponent } from './components/action-professional/action-professional.component';

// import { InputComponent } from './components/input/input.component';
import { GraphicLogin } from './components/graphics/graphic-login/graphic-login.component';
import { GraphicLaunch } from './components/graphics/graphic-launch/graphic-launch.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { routing, appRoutingProviders } from './app.routing';
import { CardProfessionalComponent } from './components/card-professional/card-profesional.component';
import { ComponentsModule } from './components/components.module';

@NgModule({
    declarations: [
        AppComponent,
        LoginTemplate,
        RegisterTemplate,
        C404Template,
        SearchComponent,


        MainTemplate,
        MainContentTemplate,
        UserProfileTemplate,
        CategoriesTemplate,


        NavbarComponent,
        NavComponent,
        MostWantedComponent,
        FooterComponent,
        GraphicLogin
    ],
    imports: [
        BrowserModule,
        routing,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,

        ComponentsModule
    ],
    exports: [],
    providers: [appRoutingProviders],
    bootstrap: [AppComponent]
})
export class AppModule { }
