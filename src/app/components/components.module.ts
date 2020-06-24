import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderPageComponent } from './header-page/header-page.component';
import { CardProfessionalComponent } from './card-professional/card-profesional.component';
import { ActionProfessionalComponent } from './action-professional/action-professional.component';
import { HeaderUserComponent } from './header-user/header-user.component';
import { QuoteComponent } from './quote/quote.component';
import { GraphicLaunch } from './graphics/graphic-launch/graphic-launch.component';
import { LogoComponent } from './logo/logo.component';
import { WorkerPostComponent } from './worker-post/worker-post.component';
import { UserCommentComponent } from './user-comment/user-comment.component';
import { CardActionComponent } from './card-action/card-action.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [
        HeaderPageComponent,
        CardProfessionalComponent,
        ActionProfessionalComponent,
        HeaderUserComponent,
        QuoteComponent,
        GraphicLaunch,
        LogoComponent,
        WorkerPostComponent,
        UserCommentComponent,
        CardActionComponent
    ],
    exports: [
        HeaderPageComponent,
        CardProfessionalComponent,
        ActionProfessionalComponent,
        HeaderUserComponent,
        QuoteComponent,
        GraphicLaunch,
        LogoComponent,
        WorkerPostComponent,
        UserCommentComponent,
        CardActionComponent
    ],
    providers: []
})

export class ComponentsModule { }