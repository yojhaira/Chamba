import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkerSettingsTemplate } from './worker-settings.template';

const routes: Routes = [
    {
        path: '',
        component: WorkerSettingsTemplate,
        children: [
            {
                path: 'general-data',
                loadChildren: () => import('./general-data/general-data.module').then(m => m.GeneralDataModule)
            },
            {
                path: 'worker-data',
                loadChildren: () => import('./worker-data/worker-data.module').then(m => m.WorkerDataModule)
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

export class WorkerSettingsRouting { }