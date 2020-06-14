import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkerTemplate } from './worker.template';

const routes: Routes = [
    {
        path: '',
        component: WorkerTemplate,
        children: [
            {
                path: 'home/:workerID',
                loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
            }
        ]
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

export class WorkerRoutingModule { }