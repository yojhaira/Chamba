import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkDoneTemplate } from './work-done.template';
import { WorkDoneRoutingModule } from './work-done.routing';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
    declarations: [
        WorkDoneTemplate
    ],
    imports: [
        CommonModule,
        WorkDoneRoutingModule,

        ComponentsModule
    ],
    exports: [],
    providers: []
})

export class WorkDoneModule { }