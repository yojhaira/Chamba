import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkerTemplate } from './worker.template';
import { WorkerRoutingModule } from './worker.template.routing';
import { ComponentsModule } from 'src/app/@shared/components/components.module';

@NgModule({
    declarations: [
        WorkerTemplate
    ],
    imports: [
        CommonModule,

        WorkerRoutingModule,
        ComponentsModule
    ],
    exports: [],
    providers: []
})

export class WorkerModule { }