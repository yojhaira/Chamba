import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkerSettingsTemplate } from './worker-settings.template';
import { WorkerSettingsRouting } from './worker-settings.routing';

import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
    declarations: [
        WorkerSettingsTemplate
    ],
    imports: [
        CommonModule,
        WorkerSettingsRouting,

        ComponentsModule
    ],
    exports: [],
    providers: []
})

export class WorkerSettingsModule { }