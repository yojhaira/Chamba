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
import { MailboxMessageComponent } from './mailbox-message/mailbox-message.component';
import { MessageReaderComponent } from './message-reader/message-reader.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CTALoginComponent } from './cta-login/cta-login.component';
import { NotificationAlertComponent } from './notification-alert/notification-alert.component';
import { ToolbarComponent } from './tootlbar/toolbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { QuoteDialogComponent } from './quote-dialog/quote-dialog.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule
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
        CardActionComponent,
        MailboxMessageComponent,
        MessageReaderComponent,
        CTALoginComponent,
        NotificationAlertComponent,
        ToolbarComponent,
        SidenavComponent,
        QuoteDialogComponent
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
        CardActionComponent,
        MailboxMessageComponent,
        MessageReaderComponent,
        CTALoginComponent,
        NotificationAlertComponent,
        ToolbarComponent,
        SidenavComponent,
        QuoteDialogComponent
    ],
    providers: []
})

export class ComponentsModule { }