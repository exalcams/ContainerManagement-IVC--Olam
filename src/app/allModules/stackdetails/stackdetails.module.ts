import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatDialogModule,
  // tslint:disable-next-line:max-line-length
  MatProgressSpinnerModule, MatTableModule, MatSortModule, MatCardModule, MatTooltipModule, MatListModule, MatDividerModule, MatPaginatorModule, MatIconModule, MatDatepickerModule, MatSelectModule, MatToolbarModule
} from '@angular/material';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseWidgetModule } from '@fuse/components/widget/widget.module';
import { StackDetailsComponent } from './stackdetails.component';
import { StackUpdateDetailsComponent } from './stack-update-details/stack-update-details.component';


const authRoutes: Routes = [
  {
    path: '',
    component: StackDetailsComponent
  },
  {
    path: 'stack-update-details',
    component: StackUpdateDetailsComponent
  }

];


@NgModule({
  declarations: [
    StackDetailsComponent,
    StackUpdateDetailsComponent
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
    MatPaginatorModule,
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
export class StackDetailsModule { }
