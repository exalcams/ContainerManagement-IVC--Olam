import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatButtonModule, MatIconModule, MatSnackBarModule, MatDialogModule, MatToolbarModule } from '@angular/material';
import { TranslateModule, TranslateService, TranslateLoader } from '@ngx-translate/core';
import 'hammerjs';
import { FuseModule } from '@fuse/fuse.module';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseProgressBarModule, FuseSidebarModule, FuseThemeOptionsModule } from '@fuse/components';
import { fuseConfig } from 'app/fuse-config';
import { AppComponent } from 'app/app.component';
import { LayoutModule } from 'app/layout/layout.module';
import { NotificationSnackBarComponent } from './notifications/notification-snack-bar/notification-snack-bar.component';
import { NotificationDialogComponent } from './notifications/notification-dialog/notification-dialog.component';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

const appRoutes: Routes = [
    {
        path: 'auth',
        loadChildren: './allModules/authentication/authentication.module#AuthenticationModule'
    },
    {
        path: 'dashboard',
        loadChildren: './allModules/dashboard/dashboard.module#DashboardModule'
    },
    {
        path: 'configuration',
        loadChildren: './allModules/configuration/configuration.module#ConfigurationModule'
    },
    {
        path: 'stackupdate',
        loadChildren: './allModules/stackupdate/stackupdate.module#StackUpdateModule'
    },
    {
        path: 'master',
        loadChildren: './allModules/master/master.module#MasterModule'
    },
    {
        path: 'report',
        loadChildren: './allModules/report/report.module#ReportModule'
    },
    {
        path: 'creport',
        loadChildren: './allModules/creport/creport.module#CReportModule'
    },
    {
        path: 'mycontainer',
        loadChildren: './allModules/mycontainer/mycontainer.module#MyContainerModule'
    },
    {
        path: 'stackdetails',
        loadChildren: './allModules/stackdetails/stackdetails.module#StackDetailsModule'
    },
    {
        path: 'dashboardDetail',
        loadChildren: './allModules/dashboard-detail/dashboard-detail.module#DashboardDetailModule'
    },
    {
        path: 'gatewayStatus',
        loadChildren: './allModules/gatewayStatus/gatewayStatus.module#GatewayStatusModule'
    },
    {
        path: '**',
        redirectTo: 'auth/login'
    }
];

// AoT requires an exported function for factories
// tslint:disable-next-line:typedef
// export function HttpLoaderFactory(httpClient: HttpClient) {
//     return new TranslateHttpLoader(httpClient);
//   }

@NgModule({
    declarations: [
        AppComponent,
        NotificationSnackBarComponent,
        NotificationDialogComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes, { useHash: true }),
        TranslateModule.forRoot(),
        // TranslateModule.forRoot({
        //     loader: {
        //       provide: TranslateLoader,
        //       useFactory: HttpLoaderFactory,
        //       deps: [HttpClient]
        //     }
        //   }),
        // Material moment date module
        MatMomentDateModule,
        // Material
        MatButtonModule,
        MatIconModule,
        MatSnackBarModule,
        // Fuse modules
        FuseModule.forRoot(fuseConfig),
        FuseProgressBarModule,
        FuseSharedModule,
        FuseSidebarModule,
        FuseThemeOptionsModule,
        MatToolbarModule,
        MatDialogModule,
        // App modules
        LayoutModule,
    ],
    providers: [
        TranslateService
      ],
    bootstrap: [
        AppComponent
    ],
    entryComponents: [
        NotificationDialogComponent
    ]

})
export class AppModule {
}
