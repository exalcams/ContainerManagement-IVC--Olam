import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { AuthenticationDetails } from 'app/models/authentication_details';
import { NotificationSnackBarComponent } from 'app/notifications/notification-snack-bar/notification-snack-bar.component';
import { MatSnackBar, MatIconRegistry, MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { Router } from '@angular/router';
import { SnackBarStatus } from 'app/notifications/snackbar-status-enum';
import { fuseAnimations } from '@fuse/animations';
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
  displayedColumns: string[] = ['PLANT', 'SHIPPING_LINE', 'CONTAINER_NO', 'CONTAINER_SIZE', 'ENTRY_TIME',
    'EXIT_TIME', 'TYPE', 'TOTAL_TURN_AROUND_TIME'];
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
    else {
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


}
