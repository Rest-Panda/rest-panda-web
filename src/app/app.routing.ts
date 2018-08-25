import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './main/main.component';
import {LoginComponent} from './access/login/login.component';
import {RegisterComponent} from './access/register/register.component';
import {AccessComponent} from './access/access.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {IntegrationsComponent} from './integrations/integrations.component';
import {ProjectsComponent} from './projects/projects.component';
import {MarketComponent} from './market/market.component';
import {UpgradeComponent} from './upgrade/upgrade.component';
import {OrganizationComponent} from './organization/organization.component';

const routes: Routes = [
    {
        path: 'main',
        component: MainComponent,
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'user-profile',
                component: UserProfileComponent
            },
            {
                path: 'integrations',
                component: IntegrationsComponent
            },
            {
                path: 'projects',
                component: ProjectsComponent
            },
            {
                path: 'organization',
                component: OrganizationComponent
            },
            {
                path: 'market',
                component: MarketComponent
            },
            {
                path: 'upgrade',
                component: UpgradeComponent
            }
        ]
    },
    {
        path: 'access',
        component: AccessComponent,
        children: [
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: 'register',
                component: RegisterComponent
            }
        ]
    },
    {
        path: '',
        redirectTo: 'main/dashboard',
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
