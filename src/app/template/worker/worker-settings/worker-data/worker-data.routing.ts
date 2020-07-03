import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkerDataTemplate } from './worker-data.tamplate';

const routes: Routes = [
    {
        path: '',
        component: WorkerDataTemplate
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

export class WorkerDataRouting { }