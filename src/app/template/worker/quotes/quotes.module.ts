import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuotesTemplate } from './quotes.template';
import { QuotesRouting } from './quotes.routing';

import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
    declarations: [
        QuotesTemplate
    ],
    imports: [
        CommonModule,
        QuotesRouting,

        ComponentsModule
    ],
    exports: [],
    providers: []
})

export class QuotesModule { }