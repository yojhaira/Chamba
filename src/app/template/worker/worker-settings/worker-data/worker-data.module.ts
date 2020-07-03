import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkerDataTemplate } from './worker-data.tamplate';
import { WorkerDataRouting } from './worker-data.routing';

@NgModule({
    declarations: [
        WorkerDataTemplate
    ],
    imports: [
        CommonModule,
        WorkerDataRouting
    ],
    exports: [],
    providers: []
})

export class WorkerDataModule { }