import { Component, OnInit, ViewChild, OnDestroy, ElementRef } from '@angular/core';
import { AuthenticationDetails } from 'app/models/authentication_details';
import { NotificationSnackBarComponent } from 'app/notifications/notification-snack-bar/notification-snack-bar.component';
import { MatSnackBar, MatIconRegistry, MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { Router } from '@angular/router';
import { SnackBarStatus } from 'app/notifications/snackbar-status-enum';
import { fuseAnimations } from '@fuse/animations';
import { ReportService } from 'app/services/report.service';
import { ReportDetails, ReportFilters } from 'app/models/report';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { Guid } from 'guid-typescript';
import { ExcelExtractService } from 'app/services/excelExtract.Service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss'],
  animations: fuseAnimations
})
export class ReportComponent implements OnInit, OnDestroy {
  AllReportDetails: ReportDetails[] = [];
  authenticationDetails: AuthenticationDetails;
  notificationSnackBarComponent: NotificationSnackBarComponent;
  IsProgressBarVisibile: boolean;
  SetIntervalID: any;
  reportFormGroup: FormGroup;
  private datePipe: DatePipe;
  AllCustomers: string[] = [];
  AllContainers: string[] = [];
  reportFilters: ReportFilters;
  AllCount: number;
  FullCount: number;
  EmptyCount: number;
  DamageCount: number;
  TwentyEmptyCount: number;
  FourtyEmptyCount: number;
  TwentyFilledCount: number;
  FourtyFilledCount: number;
  TwentyDamagedEmptyCount: number;
  FourtyDamagedEmptyCount: number;
  diagramShow = true;
  content1Show = false;
  content1ShowName: string;
  displayedColumns: string[] = ['CONTAINER_NO', 'CONTAINER_SIZE', 'BLE_ID', 'CUSTOMER_NO', 'CUSTOMER_NAME', 'SALES_CONTRACT_NO',
    'BOOKING_REFERENCE', 'CONTAINER_TYPE', 'TYPE', 'COLOR', 'IS_DAMAGE', 'CLEAN_TYPE'];
  dataSource: MatTableDataSource<ReportDetails>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private _router: Router,
    public snackBar: MatSnackBar,
    private _reportService: ReportService,
    private _formBuilder: FormBuilder,
    private excelService: ExcelExtractService
  ) {
    this.authenticationDetails = new AuthenticationDetails();
    this.notificationSnackBarComponent = new NotificationSnackBarComponent(this.snackBar);
    this.IsProgressBarVisibile = true;
    this.reportFormGroup = this._formBuilder.group({
      CUSTOMER: [''],
      CONTAINER: [''],
      FROMDATE: [''],
      TODATE: ['']
      // FROMDATE: ['', Validators.required],
      // TODATE: ['', Validators.required]
    });
  }


  ngOnInit(): void {
    // Retrive authorizationData
    const retrievedObject = localStorage.getItem('authorizationData');
    if (retrievedObject) {
      this.authenticationDetails = JSON.parse(retrievedObject) as AuthenticationDetails;
    } else {
      this._router.navigate(['/auth/login']);
    }

    // this.GetAllReports();
    // this.GetAll20EmptyReports();
    this.loadSelectedReportDetails('All');
    this.GetAllReportsCount();
    this.GetAll20DamagedEmptyReportsCount();
    this.GetAll40DamagedEmptyReportsCount();
    this.GetAll20EmptyReportsCount();
    this.GetAll40EmptyReportsCount();
    this.GetAll20FilledReportsCount();
    this.GetAll40FilledReportsCount();
    this.GetAllCustomers();
    this.GetAllContainers();
    this.SetIntervalID = setInterval(() => {
      // this.GetAllReports();
    }, 3000);

  }

  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    if (this.SetIntervalID) {
      clearInterval(this.SetIntervalID);
    }
  }

  // tslint:disable-next-line:typedef
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  @ViewChild('TABLE') table: ElementRef;
  exportAsXLSX(contentName: any): void {
    this.excelService.exportAsExcelOnlyTable(this.table.nativeElement, contentName);
  }

  exportReportToExcel(content1ShowName: string): void {
    const startIndex: number = this.paginator.pageSize * this.paginator.pageIndex;
    const endIndex: number = this.paginator.pageSize + startIndex;
    let array: ReportDetails[] = [];
    const ExcelArray: any[] = [];
    if (this.dataSource) {
      if (this.dataSource.filteredData.length) {
        array = this.dataSource.filteredData;
      } else {
        array = this.dataSource.data;
      }
    }

    const itemsShowed1 = array.slice(startIndex, endIndex);
    itemsShowed1.forEach(x => {
      ExcelArray.push(
        {
          'Container No': x.CONTAINER_NO, 'Container Size': x.CONTAINER_SIZE, 'BLE Id': x.BLE_ID,
          'Customer No': x.CUSTOMER_NO, 'Customer Name ': x.CUSTOMER_NAME,
          'Sales Contract No': x.SALES_CONTRACT_NO, 'Booking Reference': x.BOOKING_REFERENCE,
          'Container Type': x.CONTAINER_TYPE, 'Full/Empty': x.TYPE,
          'Color': x.COLOR, 'Is Damage': x.IS_DAMAGE, 'Clean Type': x.CLEAN_TYPE
        });
    });
    if (ExcelArray.length > 0) {
      this.excelService.exportAsExcelFile(ExcelArray, content1ShowName);
    } else {
      this.notificationSnackBarComponent.openSnackBar('No records found', SnackBarStatus.warning);
    }
  }

  GetAllReports(): void {
    this._reportService.GetAllReports(this.authenticationDetails.userID).subscribe(
      (data) => {
        this.AllReportDetails = data as ReportDetails[];
        if (this.AllReportDetails.length > 0) {
          this.dataSource = new MatTableDataSource(this.AllReportDetails);
          console.log(this.AllReportDetails);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
        this.IsProgressBarVisibile = false;
      },
      (err) => {
        console.error(err);
        this.IsProgressBarVisibile = false;
        this.notificationSnackBarComponent.openSnackBar(err instanceof Object ? 'Something went wrong' : err, SnackBarStatus.danger);
      }
    );
  }

  GetFullReports(): void {
    this._reportService.GetFullReports(this.authenticationDetails.userID).subscribe(
      (data) => {
        this.AllReportDetails = data as ReportDetails[];
        if (this.AllReportDetails.length > 0) {
          this.dataSource = new MatTableDataSource(this.AllReportDetails);
          console.log(this.AllReportDetails);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
        this.IsProgressBarVisibile = false;
      },
      (err) => {
        console.error(err);
        this.IsProgressBarVisibile = false;
        this.notificationSnackBarComponent.openSnackBar(err instanceof Object ? 'Something went wrong' : err, SnackBarStatus.danger);
      }
    );
  }

  GetEmptyReports(): void {
    this._reportService.GetEmptyReports(this.authenticationDetails.userID).subscribe(
      (data) => {
        this.AllReportDetails = data as ReportDetails[];
        if (this.AllReportDetails.length > 0) {
          this.dataSource = new MatTableDataSource(this.AllReportDetails);
          console.log(this.AllReportDetails);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
        this.IsProgressBarVisibile = false;
      },
      (err) => {
        console.error(err);
        this.IsProgressBarVisibile = false;
        this.notificationSnackBarComponent.openSnackBar(err instanceof Object ? 'Something went wrong' : err, SnackBarStatus.danger);
      }
    );
  }

  GetDamageReports(): void {
    this._reportService.GetDamageReports(this.authenticationDetails.userID).subscribe(
      (data) => {
        this.AllReportDetails = data as ReportDetails[];
        if (this.AllReportDetails.length > 0) {
          this.dataSource = new MatTableDataSource(this.AllReportDetails);
          console.log(this.AllReportDetails);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
        this.IsProgressBarVisibile = false;
      },
      (err) => {
        console.error(err);
        this.IsProgressBarVisibile = false;
        this.notificationSnackBarComponent.openSnackBar(err instanceof Object ? 'Something went wrong' : err, SnackBarStatus.danger);
      }
    );
  }

  GetAllReportsCount(): void {
    this._reportService.GetAllReportsCount(this.authenticationDetails.userID).subscribe(
      (data) => {
        this.AllCount = data as number;
        this.IsProgressBarVisibile = false;
      },
      (err) => {
        console.error(err);
        this.IsProgressBarVisibile = false;
        this.notificationSnackBarComponent.openSnackBar(err instanceof Object ? 'Something went wrong' : err, SnackBarStatus.danger);
      }
    );
  }

  GetFullReportsCount(): void {
    this._reportService.GetFullReportsCount(this.authenticationDetails.userID).subscribe(
      (data) => {
        this.FullCount = data as number;
        this.IsProgressBarVisibile = false;
      },
      (err) => {
        console.error(err);
        this.IsProgressBarVisibile = false;
        this.notificationSnackBarComponent.openSnackBar(err instanceof Object ? 'Something went wrong' : err, SnackBarStatus.danger);
      }
    );
  }

  GetEmptyReportsCount(): void {
    this._reportService.GetEmptyReportsCount(this.authenticationDetails.userID).subscribe(
      (data) => {
        this.EmptyCount = data as number;
        this.IsProgressBarVisibile = false;
      },
      (err) => {
        console.error(err);
        this.IsProgressBarVisibile = false;
        this.notificationSnackBarComponent.openSnackBar(err instanceof Object ? 'Something went wrong' : err, SnackBarStatus.danger);
      }
    );
  }

  GetDamageReportsCount(): void {
    this._reportService.GetDamageReportsCount(this.authenticationDetails.userID).subscribe(
      (data) => {
        this.DamageCount = data as number;
        this.IsProgressBarVisibile = false;
      },
      (err) => {
        console.error(err);
        this.IsProgressBarVisibile = false;
        this.notificationSnackBarComponent.openSnackBar(err instanceof Object ? 'Something went wrong' : err, SnackBarStatus.danger);
      }
    );
  }

  GetAll20EmptyReportsCount(): void {
    this._reportService.GetAll20EmptyReportsCount(this.authenticationDetails.userID).subscribe(
      (data) => {
        this.TwentyEmptyCount = data as number;
        this.IsProgressBarVisibile = false;
      },
      (err) => {
        console.error(err);
        this.IsProgressBarVisibile = false;
        this.notificationSnackBarComponent.openSnackBar(err instanceof Object ? 'Something went wrong' : err, SnackBarStatus.danger);
      }
    );
  }

  GetAll40EmptyReportsCount(): void {
    this._reportService.GetAll40EmptyReportsCount(this.authenticationDetails.userID).subscribe(
      (data) => {
        this.FourtyEmptyCount = data as number;
        this.IsProgressBarVisibile = false;
      },
      (err) => {
        console.error(err);
        this.IsProgressBarVisibile = false;
        this.notificationSnackBarComponent.openSnackBar(err instanceof Object ? 'Something went wrong' : err, SnackBarStatus.danger);
      }
    );
  }

  GetAll20FilledReportsCount(): void {
    this._reportService.GetAll20FilledReportsCount(this.authenticationDetails.userID).subscribe(
      (data) => {
        this.TwentyFilledCount = data as number;
        this.IsProgressBarVisibile = false;
      },
      (err) => {
        console.error(err);
        this.IsProgressBarVisibile = false;
        this.notificationSnackBarComponent.openSnackBar(err instanceof Object ? 'Something went wrong' : err, SnackBarStatus.danger);
      }
    );
  }

  GetAll40FilledReportsCount(): void {
    this._reportService.GetAll40FilledReportsCount(this.authenticationDetails.userID).subscribe(
      (data) => {
        this.FourtyFilledCount = data as number;
        this.IsProgressBarVisibile = false;
      },
      (err) => {
        console.error(err);
        this.IsProgressBarVisibile = false;
        this.notificationSnackBarComponent.openSnackBar(err instanceof Object ? 'Something went wrong' : err, SnackBarStatus.danger);
      }
    );
  }

  GetAll20DamagedEmptyReportsCount(): void {
    this._reportService.GetAll20DamagedEmptyReportsCount(this.authenticationDetails.userID).subscribe(
      (data) => {
        this.TwentyDamagedEmptyCount = data as number;
        this.IsProgressBarVisibile = false;
      },
      (err) => {
        console.error(err);
        this.IsProgressBarVisibile = false;
        this.notificationSnackBarComponent.openSnackBar(err instanceof Object ? 'Something went wrong' : err, SnackBarStatus.danger);
      }
    );
  }

  GetAll40DamagedEmptyReportsCount(): void {
    this._reportService.GetAll40DamagedEmptyReportsCount(this.authenticationDetails.userID).subscribe(
      (data) => {
        this.FourtyDamagedEmptyCount = data as number;
        this.IsProgressBarVisibile = false;
      },
      (err) => {
        console.error(err);
        this.IsProgressBarVisibile = false;
        this.notificationSnackBarComponent.openSnackBar(err instanceof Object ? 'Something went wrong' : err, SnackBarStatus.danger);
      }
    );
  }

  GetAllReportsBasedOnFilter(): void {
    if (this.reportFormGroup.valid) {
      const CUSTOMER: string = this.reportFormGroup.get('CUSTOMER').value;
      const CONTAINER: string = this.reportFormGroup.get('CONTAINER').value;
      // const FROMDATE: Date = this.datePipe.transform(this.reportFormGroup.get('FROMDATE').value as Date, 'yyyy-MM-dd');
      // const TODATE: Date = this.datePipe.transform(this.reportFormGroup.get('TODATE').value as Date, 'yyyy-MM-dd');
      const FROMDATE: Date = this.reportFormGroup.get('FROMDATE').value as Date;
      const TODATE: Date = this.reportFormGroup.get('TODATE').value as Date;
      const USERID: Guid = this.authenticationDetails.userID;
      this.reportFilters = new ReportFilters();
      this.reportFilters.UserID = USERID;
      this.reportFilters.CUSTOMER = CUSTOMER;
      this.reportFilters.CONTAINER = CONTAINER;
      this.reportFilters.FROMDATE = FROMDATE;
      this.reportFilters.TODATE = TODATE;
      // tslint:disable-next-line:max-line-length
      if (this.reportFilters.CONTAINER !== '' && this.reportFilters.CUSTOMER === '' && (this.reportFilters.FROMDATE.toString() === '' && this.reportFilters.TODATE.toString() === '')) {
        // this.authenticationDetails.userID, CUSTOMER, FROMDATE, TODATE
        this._reportService.GetAllReportsBasedOnContainerFilter(this.reportFilters)
          .subscribe((data) => {
            this.AllReportDetails = data as ReportDetails[];
            if (this.AllReportDetails.length > 0) {
              this.dataSource = new MatTableDataSource(this.AllReportDetails);
              console.log(this.AllReportDetails);
              // this.reportFilters = null;
              this.reportFormGroup.reset();
              this.dataSource.paginator = this.paginator;
              this.dataSource.sort = this.sort;
            }
            this.IsProgressBarVisibile = false;
          },
            (err) => {
              console.log(err);
            });
      }
      // tslint:disable-next-line:max-line-length
      else if (this.reportFilters.CUSTOMER !== '' && this.reportFilters.CONTAINER === '' && (this.reportFilters.FROMDATE.toString() === '' && this.reportFilters.TODATE.toString() === '')) {
        // this.authenticationDetails.userID, CUSTOMER, FROMDATE, TODATE
        this._reportService.GetAllReportsBasedOnCustomerFilter(this.reportFilters)
          .subscribe((data) => {
            this.AllReportDetails = data as ReportDetails[];
            if (this.AllReportDetails.length > 0) {
              this.dataSource = new MatTableDataSource(this.AllReportDetails);
              console.log(this.AllReportDetails);
              // this.reportFilters = null;
              this.reportFormGroup.reset();
              this.dataSource.paginator = this.paginator;
              this.dataSource.sort = this.sort;
            }
            this.IsProgressBarVisibile = false;
          },
            (err) => {
              console.log(err);
            });
      }
      // tslint:disable-next-line:max-line-length
      else if (this.reportFilters.CUSTOMER === '' && this.reportFilters.CONTAINER === '' && (this.reportFilters.FROMDATE.toString() !== '' && this.reportFilters.TODATE.toString() !== '')) {
        // this.authenticationDetails.userID, CUSTOMER, FROMDATE, TODATE
        this._reportService.GetAllReportsBasedOnDateFilter(this.reportFilters)
          .subscribe((data) => {
            this.AllReportDetails = data as ReportDetails[];
            if (this.AllReportDetails.length > 0) {
              this.dataSource = new MatTableDataSource(this.AllReportDetails);
              console.log(this.AllReportDetails);
              // this.reportFilters = null;
              this.reportFormGroup.reset();
              this.dataSource.paginator = this.paginator;
              this.dataSource.sort = this.sort;
            }
            this.IsProgressBarVisibile = false;
          },
            (err) => {
              console.log(err);
            });
      }
      else {
        // this.reportFilters = null;
        this.reportFormGroup.reset();
        this.notificationSnackBarComponent.openSnackBar('It requires at least a field or From Date and To Date', SnackBarStatus.danger);
      }
    }
    Object.keys(this.reportFormGroup.controls).forEach(key => {
      this.reportFormGroup.get(key).markAsTouched();
      this.reportFormGroup.get(key).markAsDirty();
    });
  }

  GetAllCustomers(): void {
    this._reportService.GetAllCustomers(this.authenticationDetails.userID).subscribe((data) => {
      if (data) {
        this.AllCustomers = data as string[];
      }
    },
      (err) => {
        console.log(err);
      });
  }

  GetAllContainers(): void {
    this._reportService.GetAllContainers(this.authenticationDetails.userID).subscribe((data) => {
      if (data) {
        this.AllContainers = data as string[];
      }
    },
      (err) => {
        console.log(err);
      });
  }

  GetAll20EmptyReports(): void {
    this._reportService.GetAll20EmptyReports(this.authenticationDetails.userID).subscribe(
      (data) => {
        this.AllReportDetails = data as ReportDetails[];
        if (this.AllReportDetails.length > 0) {
          this.dataSource = new MatTableDataSource(this.AllReportDetails);
          console.log(this.AllReportDetails);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
        this.IsProgressBarVisibile = false;
      },
      (err) => {
        console.error(err);
        this.IsProgressBarVisibile = false;
        this.notificationSnackBarComponent.openSnackBar(err instanceof Object ? 'Something went wrong' : err, SnackBarStatus.danger);
      }
    );
  }

  GetAll40EmptyReports(): void {
    this._reportService.GetAll40EmptyReports(this.authenticationDetails.userID).subscribe(
      (data) => {
        this.AllReportDetails = data as ReportDetails[];
        if (this.AllReportDetails.length > 0) {
          this.dataSource = new MatTableDataSource(this.AllReportDetails);
          console.log(this.AllReportDetails);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
        this.IsProgressBarVisibile = false;
      },
      (err) => {
        console.error(err);
        this.IsProgressBarVisibile = false;
        this.notificationSnackBarComponent.openSnackBar(err instanceof Object ? 'Something went wrong' : err, SnackBarStatus.danger);
      }
    );
  }

  GetAll20FilledReports(): void {
    this._reportService.GetAll20FilledReports(this.authenticationDetails.userID).subscribe(
      (data) => {
        this.AllReportDetails = data as ReportDetails[];
        if (this.AllReportDetails.length > 0) {
          this.dataSource = new MatTableDataSource(this.AllReportDetails);
          console.log(this.AllReportDetails);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
        this.IsProgressBarVisibile = false;
      },
      (err) => {
        console.error(err);
        this.IsProgressBarVisibile = false;
        this.notificationSnackBarComponent.openSnackBar(err instanceof Object ? 'Something went wrong' : err, SnackBarStatus.danger);
      }
    );
  }

  GetAll40FilledReports(): void {
    this._reportService.GetAll40FilledReports(this.authenticationDetails.userID).subscribe(
      (data) => {
        this.AllReportDetails = data as ReportDetails[];

        if (this.AllReportDetails.length > 0) {
          this.dataSource = new MatTableDataSource(this.AllReportDetails);
          console.log(this.AllReportDetails);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
        this.IsProgressBarVisibile = false;
      },
      (err) => {
        console.error(err);
        this.IsProgressBarVisibile = false;
        this.notificationSnackBarComponent.openSnackBar(err instanceof Object ? 'Something went wrong' : err, SnackBarStatus.danger);
      }
    );
  }

  GetAll20DamagedEmptyReports(): void {
    this._reportService.GetAll20DamagedEmptyReports(this.authenticationDetails.userID).subscribe(
      (data) => {
        this.AllReportDetails = data as ReportDetails[];
        if (this.AllReportDetails.length > 0) {
          this.dataSource = new MatTableDataSource(this.AllReportDetails);
          console.log(this.AllReportDetails);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
        this.IsProgressBarVisibile = false;
      },
      (err) => {
        console.error(err);
        this.IsProgressBarVisibile = false;
        this.notificationSnackBarComponent.openSnackBar(err instanceof Object ? 'Something went wrong' : err, SnackBarStatus.danger);
      }
    );
  }

  GetAll40DamagedEmptyReports(): void {
    this._reportService.GetAll40DamagedEmptyReports(this.authenticationDetails.userID).subscribe(
      (data) => {
        this.AllReportDetails = data as ReportDetails[];
        if (this.AllReportDetails.length > 0) {
          this.dataSource = new MatTableDataSource(this.AllReportDetails);
          console.log(this.AllReportDetails);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
        this.IsProgressBarVisibile = false;
      },
      (err) => {
        console.error(err);
        this.IsProgressBarVisibile = false;
        this.notificationSnackBarComponent.openSnackBar(err instanceof Object ? 'Something went wrong' : err, SnackBarStatus.danger);
      }
    );
  }

  loadSelectedReportDetails(value: string): void {
    if (value === 'All') {
      // this.diagramShow = false;
      this.content1ShowName = 'All';
      this.dataSource = null;
      // this.content1Show = true;
      this.GetAllReports();
    }
    else if (value === 'Full') {
      // this.diagramShow = false;
      this.content1ShowName = 'Full';
      this.dataSource = null;
      // this.content1Show = true;
      this.GetFullReports();
    }
    else if (value === 'Empty') {
      // this.diagramShow = false;
      this.content1ShowName = 'Empties';
      this.dataSource = null;
      // this.content1Show = true;
      this.GetEmptyReports();
    }
    else if (value === 'Damage') {
      // this.diagramShow = false;
      this.content1ShowName = 'Damaged';
      this.dataSource = null;
      // this.content1Show = true;
      this.GetDamageReports();
    }
    else if (value === 'TwentyEmpty') {
      // this.diagramShow = false;
      //this.content1ShowName = 'Only 20\' Empty';
      this.content1ShowName = '20s Empty'
      this.dataSource = null;
      // this.content1Show = true;
      this.GetAll20EmptyReports();
    }
    else if (value === 'FourtyEmpty') {
      // this.diagramShow = false;
      //this.content1ShowName = 'Only 40\' Empty';
      this.content1ShowName = '40s Empty'
      this.dataSource = null;
      // this.content1Show = true;
      this.GetAll40EmptyReports();
    }
    else if (value === 'TwentyFilled') {
      // this.diagramShow = false;
      //this.content1ShowName = 'Only 20\' Filled';
      this.content1ShowName = '20s Full'
      this.dataSource = null;
      // this.content1Show = true;
      this.GetAll20FilledReports();
    }
    else if (value === 'FourtyFilled') {
      // this.diagramShow = false;
      //this.content1ShowName = 'Only 40\' Filled';
      this.content1ShowName = '40s Full'
      this.dataSource = null;
      // this.content1Show = true;
      this.GetAll40FilledReports();
    }
    else if (value === 'TwentyDamagedEmpty') {
      // this.diagramShow = false;
      // this.content1ShowName = 'Only 20\' Damaged';
      this.content1ShowName = '20s Damaged'
      this.dataSource = null;
      // this.content1Show = true;
      this.GetAll20DamagedEmptyReports();
    }
    else if (value === 'FourtyDamagedEmpty') {
      // this.diagramShow = false;
      //this.content1ShowName = 'Only 40\' Damaged';
      this.content1ShowName = '40s Damaged'
      this.dataSource = null;
      // this.content1Show = true;
      this.GetAll40DamagedEmptyReports();
    }
  }
}
