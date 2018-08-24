import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {AccessComponent} from './access.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {RequestPasswordComponent} from './request-password/request-password.component';
import {ResetPasswordComponent} from './reset-password/reset-password.component';
import {AccessFooterComponent} from './footer/access-footer.component';
import {AccessHeaderComponent} from './header/access-header.component';

@NgModule({
    declarations: [
        AccessComponent,
        LoginComponent,
        RegisterComponent,
        RequestPasswordComponent,
        ResetPasswordComponent,
        AccessFooterComponent,
        AccessHeaderComponent
    ],
    exports: [
        AccessComponent,
        LoginComponent,
        RegisterComponent,
        RequestPasswordComponent,
        ResetPasswordComponent,
        AccessFooterComponent,
        AccessHeaderComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        RouterModule
    ],
    providers: [],
    bootstrap: [AccessComponent]
})
export class AccessModule {
}
