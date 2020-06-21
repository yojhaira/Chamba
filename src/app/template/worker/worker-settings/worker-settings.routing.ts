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