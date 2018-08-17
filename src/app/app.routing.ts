import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './access/login/login.component';
import {ProfileComponent} from './access/profile/profile.component';
import {RegisterComponent} from './access/register/register.component';
import {AccessComponent} from './access/access.component';
import {ResetPasswordComponent} from './access/reset-password/reset-password.component';
import {RequestPasswordComponent} from './access/request-password/request-password.component';

const routes: Routes = [
    {
        path: 'access',
        component: AccessComponent,
        children: [
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: 'profile',
                component: ProfileComponent
            },
            {
                path: 'register',
                component: RegisterComponent
            },
            {
                path: 'reset-password',
                component: ResetPasswordComponent
            },
            {
                path: 'request-password',
                component: RequestPasswordComponent
            }
        ]
    },
    {
        path: '',
        redirectTo: 'access/login',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    exports: [],
})
export class AppRoutingModule {
}