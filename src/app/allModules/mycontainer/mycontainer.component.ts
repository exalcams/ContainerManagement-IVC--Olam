import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { AuthenticationDetails } from 'app/models/authentication_details';
import { NotificationSnackBarComponent } from 'app/notifications/notification-snack-bar/notification-snack-bar.component';
import { MatSnackBar, MatIconRegistry, MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { Router } from '@angular/router';
import { SnackBarStatus } from 'app/notifications/snackbar-status-enum';
import { fuseAnimations } from '@fuse/animations';
import { ReportService } from 'app/services/report.service';
import { ReportDetails, ReportFilters } from 'app/models/mycontainer';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { Guid } from 'guid-typescript';
import { MyContainerService } from 'app/services/mycontainer.service';

@Component({
  selector: 'app-mycontainer',
  templateUrl: './mycontainer.component.html',
  styleUrls: ['./mycontainer.component.scss'],
  animations: fuseAnimations
})
export class MyContainerComponent implements OnInit, OnDestroy {
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
  TwentyEmptyCount: number;
  FourtyEmptyCount: number;
  TwentyFilledCount: number;
  FourtyFilledCount: number;
  TwentyDamagedEmptyCount: number;
  FourtyDamagedEmptyCount: number;
  diagramShow = true;
  content1Show = false;
  content1ShowName: string;

  // public int ITEM_ID { get; set; }
  // public int TRANS_ID { get; set; }
  // public string BLE_ID { get; set; }
  // public string CUSTOMER_NO { get; set; }
  // public string TRANSPORTER { get; set; }
  // public string PLANT { get; set; }
  // public string CONTAINER_NO { get; set; }
  // public string CONTAINER_SIZE { get; set; }
  // public string CONTAINER_TYPE { get; set; }
  // public string TYPE { get; set; }
  // public string COLOR { get; set; }
  // public string IS_DAMAGE { get; set; }
  // public string CLEAN_TYPE { get; set; }
  // public string SEAL_NUMBER { get; set; }
  // public string LOCATION_ID { get; set; }
  // public string RELEASE_ORDER_NUMBER { get; set; }
  // public DateTime? ENTRY_TIME { get; set; }
  // public DateTime? EXIT_TIME { get; set; }
  // public string CUR_STATUS { get; set; }
  // public string FLAG { get; set; }
  // public bool ISACTIVE { get; set; }
  // public string DRIVER_NAME { get; set; }
  // public string DRIVER_DOB { get; set; }
  // public string LICENSE_NUMBER { get; set; }
  // public string LICENSE_EXPIRY { get; set; }
  // public string HELPER_NAME { get; set; }
  // public string HELPER_DOB { get; set; }
  // public string HELPER_ID_EXPIRY { get; set; }
  // public string TRANSPORT_VENDOR { get; set; }
  // public string RETURNABLE_GOODS { get; set; }
  // public string GATE_NUMBER { get; set; }
  // public string TRANSACTION_TYPE { get; set; }
  // tslint:disable-next-line:max-line-length
  displayedColumns: string[] = ['PLANT', 'SHIPPING_LINE', 'CONTAINER_NO', 'CONTAINER_SIZE', 'ENTRY_TIME', 'EXIT_TIME', 'TYPE', 'TOTAL_TURN_AROUND_TIME'];
  dataSource: MatTableDataSource<ReportDetails>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private _router: Router,
    public snackBar: MatSnackBar,
    private _myContainerService: MyContainerService,
    private _formBuilder: FormBuilder,
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

    this.GetAllMyContainers();
    // this.GetAll20EmptyReports();
    // this.loadSelectedReportDetails('TwentyEmpty');
    // this.GetAll20DamagedEmptyReportsCount();
    // this.GetAll40DamagedEmptyReportsCount();
    // this.GetAll20EmptyReportsCount();
    // this.GetAll40EmptyReportsCount();
    // this.GetAll20FilledReportsCount();
    // this.GetAll40FilledReportsCount();
    // this.GetAllCustomers();
    // this.GetAllContainers();
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


  getDate(exitDate: string, entryDate: string): any {
    if (exitDate !== '' && entryDate !== '' && exitDate !== null && entryDate !== null) {
      const diff = new Date(exitDate).getTime() - new Date(entryDate).getTime();
      const day = 1000 * 60 * 60 * 24;
      const diffDays = Math.floor(diff / 86400000); // days
      const diffHrs = Math.floor((diff % 86400000) / 3600000); // hours
      const diffMins = Math.round(((diff % 86400000) % 3600000) / 60000); // minutes
      const days = Math.floor(diff / day);
      const months = Math.floor(days / 31);
      const years = Math.floor(months / 12);
      if (diffDays !== 0 && diffMins !== 0 && diffHrs !== 0) {
        return diffDays + ' dy ' + diffHrs + ' hr ' + diffMins + ' min';
      }
      else if (diffDays === 0 && diffMins !== 0 && diffHrs !== 0) {
        return diffHrs + ' hr ' + diffMins + ' min';
      }
      else if (diffDays !== 0 && diffMins === 0 && diffHrs !== 0) {
        return diffDays + ' dy ' + diffHrs + ' hr ';
      }
      else if (diffDays !== 0 && diffMins !== 0 && diffHrs === 0) {
        return diffDays + ' dy ' + diffMins + ' min';
      }
      else if (diffDays === 0 && diffMins !== 0 && diffHrs === 0) {
        return diffMins + ' min';
      }
      else if (diffDays === 0 && diffMins === 0 && diffHrs !== 0) {
        return diffHrs + ' hr ';
      }
      else if (diffDays !== 0 && diffMins === 0 && diffHrs === 0) {
        return diffDays + ' dy ';
      }
      else if (diffDays === 0 && diffMins === 0 && diffHrs === 0) {
        return ' - ';
      }
      else {
        return ' - ';
      }
    }
    else{
      return '-';
    }
    
  }

  GetAllMyContainers(): void {
    this._myContainerService.GetAllMyContainers(this.authenticationDetails.userID).subscribe(
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

  GetAll20EmptyReportsCount(): void {
    this._myContainerService.GetAll20EmptyReportsCount(this.authenticationDetails.userID).subscribe(
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
    this._myContainerService.GetAll40EmptyReportsCount(this.authenticationDetails.userID).subscribe(
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
    this._myContainerService.GetAll20FilledReportsCount(this.authenticationDetails.userID).subscribe(
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
    this._myContainerService.GetAll40FilledReportsCount(this.authenticationDetails.userID).subscribe(
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
    this._myContainerService.GetAll20DamagedEmptyReportsCount(this.authenticationDetails.userID).subscribe(
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
    this._myContainerService.GetAll40DamagedEmptyReportsCount(this.authenticationDetails.userID).subscribe(
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
        this._myContainerService.GetAllReportsBasedOnContainerFilter(this.reportFilters)
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
        this._myContainerService.GetAllReportsBasedOnCustomerFilter(this.reportFilters)
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
        this._myContainerService.GetAllReportsBasedOnDateFilter(this.reportFilters)
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
    this._myContainerService.GetAllCustomers(this.authenticationDetails.userID).subscribe((data) => {
      if (data) {
        this.AllCustomers = data as string[];
      }
    },
      (err) => {
        console.log(err);
      });
  }

  GetAllContainers(): void {
    this._myContainerService.GetAllContainers(this.authenticationDetails.userID).subscribe((data) => {
      if (data) {
        this.AllContainers = data as string[];
      }
    },
      (err) => {
        console.log(err);
      });
  }

  GetAll20EmptyReports(): void {
    this._myContainerService.GetAll20EmptyReports(this.authenticationDetails.userID).subscribe(
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
    this._myContainerService.GetAll40EmptyReports(this.authenticationDetails.userID).subscribe(
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
    this._myContainerService.GetAll20FilledReports(this.authenticationDetails.userID).subscribe(
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
    this._myContainerService.GetAll40FilledReports(this.authenticationDetails.userID).subscribe(
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
    this._myContainerService.GetAll20DamagedEmptyReports(this.authenticationDetails.userID).subscribe(
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
    this._myContainerService.GetAll40DamagedEmptyReports(this.authenticationDetails.userID).subscribe(
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
    if (value === 'TwentyEmpty') {
      // this.diagramShow = false;
      this.content1ShowName = '20 Empty';
      this.dataSource = null;
      // this.content1Show = true;
      this.GetAll20EmptyReports();
    }
    else if (value === 'FourtyEmpty') {
      // this.diagramShow = false;
      this.content1ShowName = '40 Empty';
      this.dataSource = null;
      // this.content1Show = true;
      this.GetAll40EmptyReports();
    }
    else if (value === 'TwentyFilled') {
      // this.diagramShow = false;
      this.content1ShowName = '20 Filled';
      this.dataSource = null;
      // this.content1Show = true;
      this.GetAll20FilledReports();
    }
    else if (value === 'FourtyFilled') {
      // this.diagramShow = false;
      this.content1ShowName = '40 Filled';
      this.dataSource = null;
      // this.content1Show = true;
      this.GetAll40FilledReports();
    }
    else if (value === 'TwentyDamagedEmpty') {
      // this.diagramShow = false;
      this.content1ShowName = '20 Damaged Empty';
      this.dataSource = null;
      // this.content1Show = true;
      this.GetAll20DamagedEmptyReports();
    }
    else if (value === 'FourtyDamagedEmpty') {
      // this.diagramShow = false;
      this.content1ShowName = '40 Damaged Empty';
      this.dataSource = null;
      // this.content1Show = true;
      this.GetAll40DamagedEmptyReports();
    }
  }

  // moveSelectedItemDetailsAbove(row: ReportDetails): void {
  //   console.log(row);
  //   this._myContainerService.moveSelectedItemDetailsAbove(row).subscribe(
  //     (data) => {
  //       this.IsProgressBarVisibile = false;
  //     },
  //     (err) => {      
  //       this.IsProgressBarVisibile = false;
  //       this.notificationSnackBarComponent.openSnackBar(err instanceof Object ? 'Something went wrong' : err, SnackBarStatus.danger);
  //     }
  //   );
  // }

}
