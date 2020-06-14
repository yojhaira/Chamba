import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkerTemplate } from './worker.template';
import { WorkerRoutingModule } from './worker.template.routing';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
    declarations: [
        WorkerTemplate
    ],
    imports: [
        CommonModule,

        WorkerRoutingModule
    ],
    exports: [],
    providers: []
})

export class WorkerModule { }