import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuotesTemplate } from './quotes.template';

const routes: Routes = [
    {
        path: '',
        component: QuotesTemplate
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class QuotesRouting { }