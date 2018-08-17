import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {AccessComponent} from './access.component';
import {LoginComponent} from './login/login.component';
import {ProfileComponent} from './profile/profile.component';
import {RegisterComponent} from './register/register.component';
import {StaticModule} from '../static/static.module';
import {RequestPasswordComponent} from './request-password/request-password.component';
import {ResetPasswordComponent} from './reset-password/reset-password.component';

@NgModule({
    declarations: [
        AccessComponent,
        LoginComponent,
        ProfileComponent,
        RegisterComponent,
        RequestPasswordComponent,
        ResetPasswordComponent
    ],
    exports: [
        AccessComponent,
        LoginComponent,
        ProfileComponent,
        RegisterComponent,
        RequestPasswordComponent,
        ResetPasswordComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        RouterModule,
        StaticModule
    ],
    providers: [],
    bootstrap: [AccessComponent]
})
export class AccessModule {
}
