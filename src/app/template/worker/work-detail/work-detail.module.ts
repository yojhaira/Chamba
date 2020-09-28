import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkDetailTemplate } from './work-detail.template';
import { WorkDetailRoutingModule } from './work-detail.routing';

import { ComponentsModule } from 'src/app/@shared/components/components.module';
import { WorkDoneRoutingModule } from '../work-done/work-done.routing';

@NgModule({
    declarations: [
        WorkDetailTemplate
    ],
    imports: [
        CommonModule,
        WorkDetailRoutingModule,

        ComponentsModule
    ],
    exports: [],
    providers: []
})

export class WorkDetailModule { }