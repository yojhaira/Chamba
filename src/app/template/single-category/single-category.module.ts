import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SingleCategoryTemplate } from './single-category.template';
import { SingleCategoryRoutingModule } from './single-category.routing';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
    declarations: [
        SingleCategoryTemplate
    ],
    imports: [
        CommonModule,
        RouterModule,
        SingleCategoryRoutingModule,

        ComponentsModule
    ],
    exports: [],
    providers: []
})
export class SingleCategoryModule { }