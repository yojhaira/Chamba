import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeTemplate } from './home.template';

const routes: Routes = [
    {
        path: '',
        component: HomeTemplate
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class HomeRoutingModule { }