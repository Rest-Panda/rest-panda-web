import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {AccessComponent} from './access.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {RequestPasswordComponent} from './request-password/request-password.component';
import {ResetPasswordComponent} from './reset-password/reset-password.component';

@NgModule({
    declarations: [
        AccessComponent,
        LoginComponent,
        RegisterComponent,
        RequestPasswordComponent,
        ResetPasswordComponent
    ],
    exports: [
        AccessComponent,
        LoginComponent,
        RegisterComponent,
        RequestPasswordComponent,
        ResetPasswordComponent
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
