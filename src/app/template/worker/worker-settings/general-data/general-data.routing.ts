import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GeneralDataTemplate } from './general-data.template';

const routes: Routes = [
    {
        path: '',
        component: GeneralDataTemplate
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class GeneralDataRouting { }