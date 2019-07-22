import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  MatButtonModule, MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule,
  // tslint:disable-next-line:max-line-length
  MatStepperModule, MatListModule, MatMenuModule, MatRadioModule, MatSidenavModule, MatToolbarModule, MatSpinner, MatProgressSpinnerModule, MatDividerModule, MatTableModule, MatTabsModule, MatPaginator, MatPaginatorModule
} from '@angular/material';
import { FuseSharedModule } from '@fuse/shared.module';
import { DashboardComponent } from './dashboard.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { FuseSidebarModule, FuseWidgetModule } from '@fuse/components';
import { TranslateModule } from '@ngx-translate/core';
export const menuRoutes: Routes = [
  {
      path: '',
      component: DashboardComponent,
  }];
@NgModule({
  imports: [
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatStepperModule,
    MatProgressSpinnerModule,
    MatListModule,
    MatMenuModule,
    MatRadioModule,
    MatSidenavModule,
    MatToolbarModule,
    RouterModule.forChild(menuRoutes),
    FuseSharedModule,
    MatButtonModule,
    MatDividerModule,
    MatFormFieldModule,
    MatIconModule,
    MatMenuModule,
    MatSelectModule,
    MatTableModule,
    MatTabsModule,
    MatPaginatorModule,

    NgxChartsModule,

    FuseSharedModule,
    FuseSidebarModule,
    FuseWidgetModule,
    TranslateModule
  ],
  declarations: [DashboardComponent]
})

export class DashboardModule { }
