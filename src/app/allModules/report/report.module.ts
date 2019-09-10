import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
    MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatDialogModule,
    // tslint:disable-next-line:max-line-length
    MatProgressSpinnerModule, MatTableModule, MatSortModule, MatCardModule, MatTooltipModule, MatListModule,  MatDividerModule, MatPaginatorModule, MatIconModule, MatDatepickerModule, MatSelectModule
} from '@angular/material';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseWidgetModule } from '@fuse/components/widget/widget.module';
import { ReportComponent } from './report.component';
import { TranslateModule } from '@ngx-translate/core';
import { ExcelExtractService } from 'app/services/excelExtract.Service';


const authRoutes: Routes = [
    {
        path: '',
        component: ReportComponent
    },

];


@NgModule({
  declarations: [
    ReportComponent
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
      MatSelectModule,
      TranslateModule
  ],
  providers: [
    ExcelExtractService
]

})
export class ReportModule { }
