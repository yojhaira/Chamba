import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeTemplate } from './home.template';
import { HomeRoutingModule } from './home.routing';
import { ComponentsModule } from 'src/app/@shared/components/components.module';

@NgModule({
    declarations: [
        HomeTemplate
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,

        ComponentsModule
    ],
    exports: [],
    providers: []
})

export class HomeModule { }