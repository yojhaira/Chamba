import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkerTemplate } from './worker.template';

const routes: Routes = [
    {
        path: '',
        component: WorkerTemplate,
        children: [
            {
                path: 'home',
                loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
            },
            {
                path: 'work-done',
                loadChildren: () => import('./work-done/work-done.module').then(m => m.WorkDoneModule)
            }
        ]
    },
    {
        path: 'work-detail/:postID',
        loadChildren: () => import('./work-detail/work-detail.module').then(m => m.WorkDetailModule)
    },
    {
        path: 'worker-settings',
        loadChildren: () => import('./worker-settings/worker-settings.module').then(m => m.WorkerSettingsModule)
    },
    {
        path: 'quotes',
        loadChildren: () => import('./quotes/quotes.module').then(m => m.QuotesModule)
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