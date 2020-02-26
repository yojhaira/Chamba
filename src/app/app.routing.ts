import {ModuleWithProviders, Component} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './components/home/home.component';
import {C404Component} from './components/c404/c404.component'; 


const appRouters: Routes= [
    {path: '', component:HomeComponent},
    {path: 'home', component:HomeComponent},
    {path: '**', component:C404Component}

];

export const appRoutingProviders:any[]=[];
export const routing:ModuleWithProviders=RouterModule.forRoot(appRouters);