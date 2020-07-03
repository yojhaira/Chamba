import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkDetailTemplate } from './work-detail.template';

const routes: Routes = [
    {
        path: '',
        component: WorkDetailTemplate
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

export class WorkDetailRoutingModule { }