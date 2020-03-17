import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainTemplate } from './template/main/main.template';
import { MainContentTemplate } from './template/main-content/main-content.template';
import { UserProfileTemplate} from './template/main/user-profile/user-profile.template';
 

import { LoginTemplate } from './template/login/login.template';
import { RegisterTemplate } from './template/register/register.template';
import { C404Template } from './template/c404/c404.template';
import {QuoteComponent} from './components/quote/quote.component';
import { from } from 'rxjs';

import { AuthGuard } from './guards/auth.guard'

const appRouters: Routes = [
    {
        path: '',
        component: MainTemplate,
        children: [
            {
                path: '',
                component: MainContentTemplate,
                data: {
                    title: 'Bienvenido'
                }
            },
            {
                path: 'user-profile',
                component: UserProfileTemplate,
                canActivate : [AuthGuard]
            }
        ]
    },
    {
        path: 'login',
        component: LoginTemplate
    },
    {
        path: 'register',
        component: RegisterTemplate
    },
    {
        path: 'quote',
        component:QuoteComponent
    },
    {
        path: '**',
        component: C404Template
    }

];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRouters);