import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  MatButtonModule, MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule,
  MatStepperModule, MatListModule, MatMenuModule, MatRadioModule, MatSidenavModule, MatToolbarModule, MatSpinner, MatProgressSpinner, MatProgressSpinnerModule
} from '@angular/material';
import { FuseSharedModule } from '@fuse/shared.module';
import { StackUpdateComponent } from './stackupdate.component';
import { StackUpdateLeftBarComponent } from './stackupdate-left-bar/stackupdate-left-bar.component';
import { StackUpdateRightBarComponent } from './stackupdate-right-bar/stackupdate-right-bar.component';
import { TranslateModule } from '@ngx-translate/core';

const menuRoutes: Routes = [
  {
      path: '',
      component: StackUpdateComponent
  },
];
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
    TranslateModule,
    FuseSharedModule,
    RouterModule.forChild(menuRoutes)
  ],
  declarations: [  StackUpdateComponent, StackUpdateLeftBarComponent, StackUpdateRightBarComponent]
})
export class StackUpdateModule { }
