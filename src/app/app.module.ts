import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

/**
* Templates
*/
import { MainTemplate } from './template/main/main.template';
import { UserProfileTemplate } from './template/user-profile/user-profile.template';
import { RegisterTemplate } from './template/register/register.template';
import { LoginTemplate } from './template/login/login.template';
import { C404Template } from './template/c404/c404.template';
import { HttpClientModule } from '@angular/common/http';
import { MainContentTemplate } from './template/main/main-content/main-content.template';
import { CategoriesTemplate } from './template/categories/categories.template';


import { GraphicLogin } from './@shared/components/graphics/graphic-login/graphic-login.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { routing, appRoutingProviders } from './app.routing';
import { ComponentsModule } from './@shared/components/components.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropdownDirective } from './directives/dropdown/dropdown.directive';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ParallaxDirective } from './@shared/directives/parallax.directive';
import { HelperService } from './@core/services/helper.service';

@NgModule({
    declarations: [
        AppComponent,
        LoginTemplate,
        RegisterTemplate,
        C404Template,


        MainTemplate,
        MainContentTemplate,
        UserProfileTemplate,
        CategoriesTemplate,

        GraphicLogin,

        DropdownDirective,
        ParallaxDirective
    ],
    imports: [
        BrowserModule,
        routing,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,

        ComponentsModule,
        BrowserAnimationsModule,
        CarouselModule
    ],
    exports: [],
    providers: [
        appRoutingProviders,
        HelperService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
