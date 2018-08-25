import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import {AppRoutingModule} from './app.routing';
import {ComponentsModule} from './components/components.module';

import {AppComponent} from './app.component';

import {MainComponent} from './main/main.component';
import {AccessModule} from './access/access.module';
import {MainModule} from './main/main.module';

@NgModule({
    imports: [
        BrowserAnimationsModule,
        FormsModule,
        HttpModule,
        ComponentsModule,
        AccessModule,
        RouterModule,
        AppRoutingModule,
        MainModule,
        NgbModule.forRoot()
    ],
    declarations: [
        AppComponent,
        MainComponent,

    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
