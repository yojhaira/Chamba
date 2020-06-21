import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkDoneTemplate } from './work-done.template';

const routes: Routes = [
    {
        path: '',
        component: WorkDoneTemplate
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

export class WorkDoneRoutingModule { }