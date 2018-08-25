import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {DashboardComponent} from '../dashboard/dashboard.component';
import {UserProfileComponent} from '../user-profile/user-profile.component';
import {ChartsModule} from 'ng2-charts';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ToastrModule} from 'ngx-toastr';
import {ProjectsComponent} from '../projects/projects.component';
import {IntegrationsComponent} from '../integrations/integrations.component';
import {MarketComponent} from '../market/market.component';
import {UpgradeComponent} from '../upgrade/upgrade.component';
import {OrganizationComponent} from '../organization/organization.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ChartsModule,
        NgbModule,
        ToastrModule.forRoot()
    ],
    declarations: [
        DashboardComponent,
        UserProfileComponent,
        ProjectsComponent,
        IntegrationsComponent,
        MarketComponent,
        UpgradeComponent,
        OrganizationComponent
    ],
    exports: [
        DashboardComponent,
        UserProfileComponent,
        ProjectsComponent,
        IntegrationsComponent,
        MarketComponent,
        UpgradeComponent,
        OrganizationComponent
    ]
})

export class MainModule {
}
