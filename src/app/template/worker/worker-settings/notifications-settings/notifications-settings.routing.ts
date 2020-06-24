import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotificationsSettingsTemplate } from './notifications-settings.template';

const routes: Routes = [
    {
        path: '',
        component: NotificationsSettingsTemplate
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

export class NotificationsSettingsRouting { }