import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { AuthenticationDetails } from 'app/models/authentication_details';
import { NotificationSnackBarComponent } from 'app/notifications/notification-snack-bar/notification-snack-bar.component';
import { MatSnackBar, MatIconRegistry, MatPaginator, MatTableDataSource, MatSort, MatDialog, MatDialogConfig } from '@angular/material';
import { Router } from '@angular/router';
import { SnackBarStatus } from 'app/notifications/snackbar-status-enum';
import { fuseAnimations } from '@fuse/animations';
import { StackDetails, ReportFilters } from 'app/models/stackdetails';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { Guid } from 'guid-typescript';
import { StackDetailsService } from 'app/services/stackdetails.service';
import { StackUpdateDetailsComponent } from './stack-update-details/stack-update-details.component';
import { ReportDetails } from 'app/models/report';

@Component({
  selector: 'app-stackdetails',
  templateUrl: './stackdetails.component.html',
  styleUrls: ['./stackdetails.component.scss'],
  animations: fuseAnimations
})
export class StackDetailsComponent implements OnInit, OnDestroy {
  AllStackDetails: StackDetails[] = [];
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

  // tslint:disable-next-line:max-line-length
  displayedColumns = ['STACK', 'BLE_ID', 'CONTAINER_NO', 'CONTAINER_SIZE', 'CUSTOMER_NO', 'CUSTOMER_NAME', 'SALES_CONTRACT_NO', 'LOCATION_ID', 'BOOKING_REFERENCE', 'RGATEWAY_ID', 'ACTION'];
  dataSource: MatTableDataSource<StackDetails>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private _router: Router,
    public snackBar: MatSnackBar,
    private _stackDetailsService: StackDetailsService,
    private _formBuilder: FormBuilder,
    public _matDialog: MatDialog
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

    this.GetAllStackWithContainerDetails();
    // this.GetAll20EmptyReports();
    // this.loadSelectedStackDetails('TwentyEmpty');
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

  GetAllStackWithContainerDetails(): void {
    this._stackDetailsService.GetAllStackWithContainerDetails(this.authenticationDetails.userID).subscribe(
      (data) => {
        this.AllStackDetails = data as StackDetails[];
        if (this.AllStackDetails.length > 0) {
          this.dataSource = new MatTableDataSource(this.AllStackDetails);
          console.log(this.AllStackDetails);
          const v = this.AllStackDetails.filter(x => x.LOCATION_ID.split('R')[0]);
          console.log(v);
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

  updateSelectedTransaction(row: StackDetails): void {
    console.log(row);
    this._stackDetailsService.UpdateSelectedTransaction(row).subscribe(
      (data) => {
        this.IsProgressBarVisibile = false;
      },
      (err) => {      
        this.IsProgressBarVisibile = false;
        this.notificationSnackBarComponent.openSnackBar(err instanceof Object ? 'Something went wrong' : err, SnackBarStatus.danger);
      }
    );
  }

  openUpdateSelectedTransactionModal(containerData: any): void {
    console.log(containerData);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.panelClass = 'stack-update-details';
    dialogConfig.data = {
      CONTAINER_NO: containerData.CONTAINER_NO,
      TRANSPORTER: containerData.TRANSPORTER,
      CONTAINER_SIZE: containerData.CONTAINER_SIZE,
      CONTAINER_TYPE: containerData.CONTAINER_TYPE,
      COLOR: containerData.COLOR,
      RELEASE_ORDER_NUMBER: containerData.RELEASE_ORDER_NUMBER,
      CUSTOMER_NAME: containerData.CUSTOMER_NAME,
      SALES_CONTRACT_NO: containerData.SALES_CONTRACT_NO,
      ENTRY_TIME: containerData.ENTRY_TIME,
      EXIT_TIME: containerData.EXIT_TIME,
      SEAL_NUMBER: containerData.SEAL_NUMBER,
      // LINE_NUMBER: containerData.LINE_NUMBER,
      LOCATION_ID: containerData.LOCATION_ID,
      CUSTOMER_NO: containerData.CUSTOMER_NO

    };
    // dialogConfig.data = containerData;
    // console.log(dialogConfig.data);
    // this._matDialog.open(ContainerDetailsComponent, dialogConfig);

    const dialogRef = this._matDialog.open(StackUpdateDetailsComponent, dialogConfig);

    // dialogRef.afterClosed().subscribe(
    //   data => console.log('Dialog output:', data)
    // );
  }

}
