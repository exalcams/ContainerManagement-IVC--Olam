import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
    MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatDialogModule,
    // tslint:disable-next-line:max-line-length
    MatProgressSpinnerModule, MatTableModule, MatSortModule, MatCardModule, MatTooltipModule, MatListModule,  MatDividerModule, MatPaginatorModule, MatIconModule, MatDatepickerModule, MatSelectModule
} from '@angular/material';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseWidgetModule } from '@fuse/components/widget/widget.module';
import { MyContainerComponent } from './mycontainer.component';


const authRoutes: Routes = [
    {
        path: '',
        component: MyContainerComponent
    },

];


@NgModule({
  declarations: [
    MyContainerComponent
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
    MatDatepickerModule,
    MatSelectModule
  ],
})
export class MyContainerModule { }
