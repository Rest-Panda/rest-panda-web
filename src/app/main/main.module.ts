import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {DashboardComponent} from '../dashboard/dashboard.component';
import {UserProfileComponent} from '../user-profile/user-profile.component';
import {TableListComponent} from '../table-list/table-list.component';
import {ChartsModule} from 'ng2-charts';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ToastrModule} from 'ngx-toastr';

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
        TableListComponent
    ],
    exports: [
       DashboardComponent,
       UserProfileComponent,
       TableListComponent
    ]
})

export class MainModule {
}