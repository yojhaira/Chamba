import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationsSettingsTemplate } from './notifications-settings.template';
import { NotificationsSettingsRouting } from './notifications-settings.routing';

@NgModule({
    declarations: [
        NotificationsSettingsTemplate
    ],
    imports: [
        CommonModule,
        NotificationsSettingsRouting
    ],
    exports: [],
    providers: []
})

export class NotificationsSettingsModule { }