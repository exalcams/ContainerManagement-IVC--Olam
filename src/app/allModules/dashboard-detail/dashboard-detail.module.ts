import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
    MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatDialogModule,
    // tslint:disable-next-line:max-line-length
    MatProgressSpinnerModule, MatTableModule, MatSortModule, MatCardModule, MatTooltipModule, MatListModule,  MatDividerModule, MatPaginatorModule, MatIconModule, MatDatepickerModule, MatSelectModule, MatToolbarModule
} from '@angular/material';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseWidgetModule } from '@fuse/components/widget/widget.module';
import { DashboardDetailComponent } from './dashboard-detail.component';
import { ContainerDetailsComponent } from './container-details/container-details.component';



const authRoutes: Routes = [
    {
        path: '',
        component: DashboardDetailComponent
    },
    {
      path: 'container-details',
      component: ContainerDetailsComponent
    }

];


@NgModule({
  declarations: [
    DashboardDetailComponent,
    ContainerDetailsComponent
  ],
  imports: [
      MatButtonModule,
      MatCheckboxModule,
      MatFormFieldModule,
      MatCardModule,
      MatTooltipModule,
      MatInputModule,
      FuseSharedModule,
      FuseWidgetModule,
      MatDialogModule,
      MatPaginatorModule ,
      MatListModule,
      MatProgressSpinnerModule,
      MatDividerModule,
      RouterModule.forChild(authRoutes),
      MatTableModule,
      MatSortModule,
      MatIconModule,
      MatToolbarModule,
      MatDatepickerModule,
      MatSelectModule
  ],
})
export class DashboardDetailModule { }
