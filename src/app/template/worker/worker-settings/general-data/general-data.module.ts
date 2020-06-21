import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneralDataTemplate } from './general-data.template';
import { GeneralDataRouting } from './general-data.routing';

@NgModule({
    declarations: [
        GeneralDataTemplate
    ],
    imports: [
        CommonModule,
        GeneralDataRouting
    ],
    exports: [],
    providers: []
})

export class GeneralDataModule { }