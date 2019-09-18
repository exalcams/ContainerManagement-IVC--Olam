import { Component, OnInit, ViewEncapsulation, ViewChild, ɵConsole } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';
import { AuthenticationDetails } from 'app/models/authentication_details';
import { NotificationSnackBarComponent } from 'app/notifications/notification-snack-bar/notification-snack-bar.component';
import { MatSnackBar, MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Router } from '@angular/router';
import { TransactionDetails, TransactionDetailsByLocationID } from 'app/models/transaction-details';
import { TransactionDetailsService } from 'app/services/transaction-details.service';
import { SnackBarStatus } from 'app/notifications/snackbar-status-enum';
import { Guid } from 'guid-typescript';
import { TranslateService, TranslatePipe } from '@ngx-translate/core';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations
})
export class DashboardComponent implements OnInit {
  AllTransactionDetails: TransactionDetails[] = [];
  AllExceptionDetails: TransactionDetails[] = [];
  AllCompletedTransactionDetails: TransactionDetails[] = [];
  LastTransactionDetails: TransactionDetails;
  AllTransactionDetailsByLocationID: TransactionDetailsByLocationID[] = [];
  SelectedTransactionDeatils: TransactionDetails;
  authenticationDetails: AuthenticationDetails;
  notificationSnackBarComponent: NotificationSnackBarComponent;
  IsProgressBarVisibile: boolean;
  SetIntervalID: any;
  parkingCount: any;
  totalTransactionDetailsCount: number;
  exceptionDetailsCount: number;
  completedTransactionsCount: number;
  availableSpaceCount: string;
  diagramShow = true;
  tableShow = false;
  tableShowName: string;
  exceptionTableShow = false;
  commonTableShow = false;

  S001R1: TransactionDetailsByLocationID[];
  S003R1: TransactionDetailsByLocationID[];
  S005R1: TransactionDetailsByLocationID[];
  S007R1: TransactionDetailsByLocationID[];
  S009R1: TransactionDetailsByLocationID[];
  S011R1: TransactionDetailsByLocationID[];
  S013R1: TransactionDetailsByLocationID[];
  S015R1: TransactionDetailsByLocationID[];
  S017R1: TransactionDetailsByLocationID[];
  S019R1: TransactionDetailsByLocationID[];

  S001R2: TransactionDetailsByLocationID[];
  S003R2: TransactionDetailsByLocationID[];
  S005R2: TransactionDetailsByLocationID[];
  S007R2: TransactionDetailsByLocationID[];
  S009R2: TransactionDetailsByLocationID[];
  S011R2: TransactionDetailsByLocationID[];
  S013R2: TransactionDetailsByLocationID[];
  S015R2: TransactionDetailsByLocationID[];
  S017R2: TransactionDetailsByLocationID[];
  S019R2: TransactionDetailsByLocationID[];

  S001R3: TransactionDetailsByLocationID[];
  S003R3: TransactionDetailsByLocationID[];
  S005R3: TransactionDetailsByLocationID[];
  S007R3: TransactionDetailsByLocationID[];
  S009R3: TransactionDetailsByLocationID[];
  S011R3: TransactionDetailsByLocationID[];
  S013R3: TransactionDetailsByLocationID[];
  S015R3: TransactionDetailsByLocationID[];
  S017R3: TransactionDetailsByLocationID[];
  S019R3: TransactionDetailsByLocationID[];

  S001R4: TransactionDetailsByLocationID[];
  S003R4: TransactionDetailsByLocationID[];
  S005R4: TransactionDetailsByLocationID[];
  S007R4: TransactionDetailsByLocationID[];
  S009R4: TransactionDetailsByLocationID[];
  S011R4: TransactionDetailsByLocationID[];
  S013R4: TransactionDetailsByLocationID[];
  S015R4: TransactionDetailsByLocationID[];
  S017R4: TransactionDetailsByLocationID[];
  S019R4: TransactionDetailsByLocationID[];

  S021R1: TransactionDetailsByLocationID[];
  S023R1: TransactionDetailsByLocationID[];
  S025R1: TransactionDetailsByLocationID[];
  S027R1: TransactionDetailsByLocationID[];
  S029R1: TransactionDetailsByLocationID[];
  S031R1: TransactionDetailsByLocationID[];
  S033R1: TransactionDetailsByLocationID[];
  S035R1: TransactionDetailsByLocationID[];
  S037R1: TransactionDetailsByLocationID[];
  S039R1: TransactionDetailsByLocationID[];

  S021R2: TransactionDetailsByLocationID[];
  S023R2: TransactionDetailsByLocationID[];
  S025R2: TransactionDetailsByLocationID[];
  S027R2: TransactionDetailsByLocationID[];
  S029R2: TransactionDetailsByLocationID[];
  S031R2: TransactionDetailsByLocationID[];
  S033R2: TransactionDetailsByLocationID[];
  S035R2: TransactionDetailsByLocationID[];
  S037R2: TransactionDetailsByLocationID[];
  S039R2: TransactionDetailsByLocationID[];

  S021R3: TransactionDetailsByLocationID[];
  S023R3: TransactionDetailsByLocationID[];
  S025R3: TransactionDetailsByLocationID[];
  S027R3: TransactionDetailsByLocationID[];
  S029R3: TransactionDetailsByLocationID[];
  S031R3: TransactionDetailsByLocationID[];
  S033R3: TransactionDetailsByLocationID[];
  S035R3: TransactionDetailsByLocationID[];
  S037R3: TransactionDetailsByLocationID[];
  S039R3: TransactionDetailsByLocationID[];

  S021R4: TransactionDetailsByLocationID[];
  S023R4: TransactionDetailsByLocationID[];
  S025R4: TransactionDetailsByLocationID[];
  S027R4: TransactionDetailsByLocationID[];
  S029R4: TransactionDetailsByLocationID[];
  S031R4: TransactionDetailsByLocationID[];
  S033R4: TransactionDetailsByLocationID[];
  S035R4: TransactionDetailsByLocationID[];
  S037R4: TransactionDetailsByLocationID[];
  S039R4: TransactionDetailsByLocationID[];

  S041R1: TransactionDetailsByLocationID[];
  S043R1: TransactionDetailsByLocationID[];
  S045R1: TransactionDetailsByLocationID[];
  S047R1: TransactionDetailsByLocationID[];
  S049R1: TransactionDetailsByLocationID[];
  S051R1: TransactionDetailsByLocationID[];
  S053R1: TransactionDetailsByLocationID[];
  S055R1: TransactionDetailsByLocationID[];
  S057R1: TransactionDetailsByLocationID[];
  S059R1: TransactionDetailsByLocationID[];

  S041R2: TransactionDetailsByLocationID[];
  S043R2: TransactionDetailsByLocationID[];
  S045R2: TransactionDetailsByLocationID[];
  S047R2: TransactionDetailsByLocationID[];
  S049R2: TransactionDetailsByLocationID[];
  S051R2: TransactionDetailsByLocationID[];
  S053R2: TransactionDetailsByLocationID[];
  S055R2: TransactionDetailsByLocationID[];
  S057R2: TransactionDetailsByLocationID[];
  S059R2: TransactionDetailsByLocationID[];

  S041R3: TransactionDetailsByLocationID[];
  S043R3: TransactionDetailsByLocationID[];
  S045R3: TransactionDetailsByLocationID[];
  S047R3: TransactionDetailsByLocationID[];
  S049R3: TransactionDetailsByLocationID[];
  S051R3: TransactionDetailsByLocationID[];
  S053R3: TransactionDetailsByLocationID[];
  S055R3: TransactionDetailsByLocationID[];
  S057R3: TransactionDetailsByLocationID[];
  S059R3: TransactionDetailsByLocationID[];

  S041R4: TransactionDetailsByLocationID[];
  S043R4: TransactionDetailsByLocationID[];
  S045R4: TransactionDetailsByLocationID[];
  S047R4: TransactionDetailsByLocationID[];
  S049R4: TransactionDetailsByLocationID[];
  S051R4: TransactionDetailsByLocationID[];
  S053R4: TransactionDetailsByLocationID[];
  S055R4: TransactionDetailsByLocationID[];
  S057R4: TransactionDetailsByLocationID[];
  S059R4: TransactionDetailsByLocationID[];

  S061R1: TransactionDetailsByLocationID[];
  S063R1: TransactionDetailsByLocationID[];
  S065R1: TransactionDetailsByLocationID[];
  S067R1: TransactionDetailsByLocationID[];
  S069R1: TransactionDetailsByLocationID[];
  S071R1: TransactionDetailsByLocationID[];
  S073R1: TransactionDetailsByLocationID[];
  S075R1: TransactionDetailsByLocationID[];
  S077R1: TransactionDetailsByLocationID[];
  S079R1: TransactionDetailsByLocationID[];

  S061R2: TransactionDetailsByLocationID[];
  S063R2: TransactionDetailsByLocationID[];
  S065R2: TransactionDetailsByLocationID[];
  S067R2: TransactionDetailsByLocationID[];
  S069R2: TransactionDetailsByLocationID[];
  S071R2: TransactionDetailsByLocationID[];
  S073R2: TransactionDetailsByLocationID[];
  S075R2: TransactionDetailsByLocationID[];
  S077R2: TransactionDetailsByLocationID[];
  S079R2: TransactionDetailsByLocationID[];

  S061R3: TransactionDetailsByLocationID[];
  S063R3: TransactionDetailsByLocationID[];
  S065R3: TransactionDetailsByLocationID[];
  S067R3: TransactionDetailsByLocationID[];
  S069R3: TransactionDetailsByLocationID[];
  S071R3: TransactionDetailsByLocationID[];
  S073R3: TransactionDetailsByLocationID[];
  S075R3: TransactionDetailsByLocationID[];
  S077R3: TransactionDetailsByLocationID[];
  S079R3: TransactionDetailsByLocationID[];

  S061R4: TransactionDetailsByLocationID[];
  S063R4: TransactionDetailsByLocationID[];
  S065R4: TransactionDetailsByLocationID[];
  S067R4: TransactionDetailsByLocationID[];
  S069R4: TransactionDetailsByLocationID[];
  S071R4: TransactionDetailsByLocationID[];
  S073R4: TransactionDetailsByLocationID[];
  S075R4: TransactionDetailsByLocationID[];
  S077R4: TransactionDetailsByLocationID[];
  S079R4: TransactionDetailsByLocationID[];

  S001R5: TransactionDetailsByLocationID[];
  S003R5: TransactionDetailsByLocationID[];
  S005R5: TransactionDetailsByLocationID[];
  S007R5: TransactionDetailsByLocationID[];
  S009R5: TransactionDetailsByLocationID[];
  S011R5: TransactionDetailsByLocationID[];
  S013R5: TransactionDetailsByLocationID[];
  S015R5: TransactionDetailsByLocationID[];
  S017R5: TransactionDetailsByLocationID[];
  S019R5: TransactionDetailsByLocationID[];
  S021R5: TransactionDetailsByLocationID[];
  S023R5: TransactionDetailsByLocationID[];
  S025R5: TransactionDetailsByLocationID[];
  S027R5: TransactionDetailsByLocationID[];
  S029R5: TransactionDetailsByLocationID[];
  S031R5: TransactionDetailsByLocationID[];
  S033R5: TransactionDetailsByLocationID[];
  S035R5: TransactionDetailsByLocationID[];
  S037R5: TransactionDetailsByLocationID[];
  S039R5: TransactionDetailsByLocationID[];
  S041R5: TransactionDetailsByLocationID[];
  S043R5: TransactionDetailsByLocationID[];
  S045R5: TransactionDetailsByLocationID[];
  S047R5: TransactionDetailsByLocationID[];
  S049R5: TransactionDetailsByLocationID[];
  S051R5: TransactionDetailsByLocationID[];
  S053R5: TransactionDetailsByLocationID[];
  S055R5: TransactionDetailsByLocationID[];
  S057R5: TransactionDetailsByLocationID[];
  S059R5: TransactionDetailsByLocationID[];
  S061R5: TransactionDetailsByLocationID[];
  S063R5: TransactionDetailsByLocationID[];
  S065R5: TransactionDetailsByLocationID[];
  S067R5: TransactionDetailsByLocationID[];
  S069R5: TransactionDetailsByLocationID[];
  S071R5: TransactionDetailsByLocationID[];
  S073R5: TransactionDetailsByLocationID[];
  S075R5: TransactionDetailsByLocationID[];
  S077R5: TransactionDetailsByLocationID[];
  S079R5: TransactionDetailsByLocationID[];

  S001R6: TransactionDetailsByLocationID[];
  S003R6: TransactionDetailsByLocationID[];
  S005R6: TransactionDetailsByLocationID[];
  S007R6: TransactionDetailsByLocationID[];
  S009R6: TransactionDetailsByLocationID[];
  S011R6: TransactionDetailsByLocationID[];
  S013R6: TransactionDetailsByLocationID[];
  S015R6: TransactionDetailsByLocationID[];
  S017R6: TransactionDetailsByLocationID[];
  S019R6: TransactionDetailsByLocationID[];
  S021R6: TransactionDetailsByLocationID[];
  S023R6: TransactionDetailsByLocationID[];
  S025R6: TransactionDetailsByLocationID[];
  S027R6: TransactionDetailsByLocationID[];
  S029R6: TransactionDetailsByLocationID[];
  S031R6: TransactionDetailsByLocationID[];
  S033R6: TransactionDetailsByLocationID[];
  S035R6: TransactionDetailsByLocationID[];
  S037R6: TransactionDetailsByLocationID[];
  S039R6: TransactionDetailsByLocationID[];
  S041R6: TransactionDetailsByLocationID[];
  S043R6: TransactionDetailsByLocationID[];
  S045R6: TransactionDetailsByLocationID[];
  S047R6: TransactionDetailsByLocationID[];
  S049R6: TransactionDetailsByLocationID[];
  S051R6: TransactionDetailsByLocationID[];
  S053R6: TransactionDetailsByLocationID[];
  S055R6: TransactionDetailsByLocationID[];
  S057R6: TransactionDetailsByLocationID[];
  S059R6: TransactionDetailsByLocationID[];
  S061R6: TransactionDetailsByLocationID[];
  S063R6: TransactionDetailsByLocationID[];
  S065R6: TransactionDetailsByLocationID[];
  S067R6: TransactionDetailsByLocationID[];
  S069R6: TransactionDetailsByLocationID[];
  S071R6: TransactionDetailsByLocationID[];
  S073R6: TransactionDetailsByLocationID[];
  S075R6: TransactionDetailsByLocationID[];
  S077R6: TransactionDetailsByLocationID[];
  S079R6: TransactionDetailsByLocationID[];

  S001R7: TransactionDetailsByLocationID[];
  S003R7: TransactionDetailsByLocationID[];
  S005R7: TransactionDetailsByLocationID[];
  S007R7: TransactionDetailsByLocationID[];
  S009R7: TransactionDetailsByLocationID[];
  S011R7: TransactionDetailsByLocationID[];
  S013R7: TransactionDetailsByLocationID[];
  S015R7: TransactionDetailsByLocationID[];
  S017R7: TransactionDetailsByLocationID[];
  S019R7: TransactionDetailsByLocationID[];
  S021R7: TransactionDetailsByLocationID[];
  S023R7: TransactionDetailsByLocationID[];
  S025R7: TransactionDetailsByLocationID[];
  S027R7: TransactionDetailsByLocationID[];
  S029R7: TransactionDetailsByLocationID[];
  S031R7: TransactionDetailsByLocationID[];
  S033R7: TransactionDetailsByLocationID[];
  S035R7: TransactionDetailsByLocationID[];
  S037R7: TransactionDetailsByLocationID[];
  S039R7: TransactionDetailsByLocationID[];
  S041R7: TransactionDetailsByLocationID[];
  S043R7: TransactionDetailsByLocationID[];
  S045R7: TransactionDetailsByLocationID[];
  S047R7: TransactionDetailsByLocationID[];
  S049R7: TransactionDetailsByLocationID[];
  S051R7: TransactionDetailsByLocationID[];
  S053R7: TransactionDetailsByLocationID[];
  S055R7: TransactionDetailsByLocationID[];
  S057R7: TransactionDetailsByLocationID[];
  S059R7: TransactionDetailsByLocationID[];
  S061R7: TransactionDetailsByLocationID[];
  S063R7: TransactionDetailsByLocationID[];
  S065R7: TransactionDetailsByLocationID[];
  S067R7: TransactionDetailsByLocationID[];
  S069R7: TransactionDetailsByLocationID[];
  S071R7: TransactionDetailsByLocationID[];
  S073R7: TransactionDetailsByLocationID[];
  S075R7: TransactionDetailsByLocationID[];
  S077R7: TransactionDetailsByLocationID[];
  S079R7: TransactionDetailsByLocationID[];

  S081R1: TransactionDetailsByLocationID[];
  S083R1: TransactionDetailsByLocationID[];
  S085R1: TransactionDetailsByLocationID[];
  S087R1: TransactionDetailsByLocationID[];
  S089R1: TransactionDetailsByLocationID[];
  S091R1: TransactionDetailsByLocationID[];
  S093R1: TransactionDetailsByLocationID[];
  S095R1: TransactionDetailsByLocationID[];
  S097R1: TransactionDetailsByLocationID[];
  S099R1: TransactionDetailsByLocationID[];
  S101R1: TransactionDetailsByLocationID[];
  S103R1: TransactionDetailsByLocationID[];

  S081R2: TransactionDetailsByLocationID[];
  S083R2: TransactionDetailsByLocationID[];
  S085R2: TransactionDetailsByLocationID[];
  S087R2: TransactionDetailsByLocationID[];
  S089R2: TransactionDetailsByLocationID[];
  S091R2: TransactionDetailsByLocationID[];
  S093R2: TransactionDetailsByLocationID[];
  S095R2: TransactionDetailsByLocationID[];
  S097R2: TransactionDetailsByLocationID[];
  S099R2: TransactionDetailsByLocationID[];
  S101R2: TransactionDetailsByLocationID[];
  S103R2: TransactionDetailsByLocationID[];

  S081R3: TransactionDetailsByLocationID[];
  S083R3: TransactionDetailsByLocationID[];
  S085R3: TransactionDetailsByLocationID[];
  S087R3: TransactionDetailsByLocationID[];
  S089R3: TransactionDetailsByLocationID[];
  S091R3: TransactionDetailsByLocationID[];
  S093R3: TransactionDetailsByLocationID[];
  S095R3: TransactionDetailsByLocationID[];
  S097R3: TransactionDetailsByLocationID[];
  S099R3: TransactionDetailsByLocationID[];
  S101R3: TransactionDetailsByLocationID[];
  S103R3: TransactionDetailsByLocationID[];

  S081R4: TransactionDetailsByLocationID[];
  S083R4: TransactionDetailsByLocationID[];
  S085R4: TransactionDetailsByLocationID[];
  S087R4: TransactionDetailsByLocationID[];
  S089R4: TransactionDetailsByLocationID[];
  S091R4: TransactionDetailsByLocationID[];
  S093R4: TransactionDetailsByLocationID[];
  S095R4: TransactionDetailsByLocationID[];
  S097R4: TransactionDetailsByLocationID[];
  S099R4: TransactionDetailsByLocationID[];
  S101R4: TransactionDetailsByLocationID[];
  S103R4: TransactionDetailsByLocationID[];

  S081R5: TransactionDetailsByLocationID[];
  S083R5: TransactionDetailsByLocationID[];
  S085R5: TransactionDetailsByLocationID[];
  S087R5: TransactionDetailsByLocationID[];
  S089R5: TransactionDetailsByLocationID[];
  S091R5: TransactionDetailsByLocationID[];
  S093R5: TransactionDetailsByLocationID[];
  S095R5: TransactionDetailsByLocationID[];
  S097R5: TransactionDetailsByLocationID[];
  S099R5: TransactionDetailsByLocationID[];
  S101R5: TransactionDetailsByLocationID[];
  S103R5: TransactionDetailsByLocationID[];

  S081R6: TransactionDetailsByLocationID[];
  S083R6: TransactionDetailsByLocationID[];
  S085R6: TransactionDetailsByLocationID[];
  S087R6: TransactionDetailsByLocationID[];
  S089R6: TransactionDetailsByLocationID[];
  S091R6: TransactionDetailsByLocationID[];
  S093R6: TransactionDetailsByLocationID[];
  S095R6: TransactionDetailsByLocationID[];
  S097R6: TransactionDetailsByLocationID[];
  S099R6: TransactionDetailsByLocationID[];
  S101R6: TransactionDetailsByLocationID[];
  S103R6: TransactionDetailsByLocationID[];

  S081R7: TransactionDetailsByLocationID[];
  S083R7: TransactionDetailsByLocationID[];
  S085R7: TransactionDetailsByLocationID[];
  S087R7: TransactionDetailsByLocationID[];
  S089R7: TransactionDetailsByLocationID[];
  S091R7: TransactionDetailsByLocationID[];
  S093R7: TransactionDetailsByLocationID[];
  S095R7: TransactionDetailsByLocationID[];
  S097R7: TransactionDetailsByLocationID[];
  S099R7: TransactionDetailsByLocationID[];
  S101R7: TransactionDetailsByLocationID[];
  S103R7: TransactionDetailsByLocationID[];

  isException: boolean;
  S007R1CONTAINERSIZE: string;
  // tslint:disable-next-line:max-line-length
  commonDisplayedColumns = ['BLE_ID', 'CONTAINER_NO', 'CONTAINER_SIZE', 'CUSTOMER_NO', 'CUSTOMER_NAME', 'SALES_CONTRACT_NO', 'LOCATION_ID', 'BOOKING_REFERENCE', 'CONTAINER_TYPE', 'TYPE', 'COLOR', 'IS_DAMAGE', 'CLEAN_TYPE'];
  commonDataSource: MatTableDataSource<TransactionDetails>;
  @ViewChild(MatPaginator) commonPaginator: MatPaginator;
  @ViewChild(MatSort) commonSort: MatSort;


  exceptionDisplayedColumns = ['CONTAINER_NO', 'CONTAINER_SIZE', 'LOCATION_ID', 'RGATEWAY_ID', 'CUSTOMER_NO', 'CUSTOMER_NAME', 'EXCEPTION_MESSAGE'];
  exceptionDataSource: MatTableDataSource<TransactionDetails>;
  @ViewChild(MatPaginator) exceptionPaginator: MatPaginator;
  @ViewChild(MatSort) exceptionSort: MatSort;

  constructor(
    private _router: Router,
    public snackBar: MatSnackBar,
    private _dashboardService: TransactionDetailsService,
  ) {
    this.authenticationDetails = new AuthenticationDetails();
    this.notificationSnackBarComponent = new NotificationSnackBarComponent(this.snackBar);
    this.IsProgressBarVisibile = true;
    // translate.addLangs(['en', 'fr']);
    // translate.setDefaultLang('en');

    // const browserLang = translate.getBrowserLang();
    // translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
  }
  ngOnInit(): void {
    // Retrive authorizationData
    const retrievedObject = localStorage.getItem('authorizationData');
    if (retrievedObject) {
      this.authenticationDetails = JSON.parse(retrievedObject) as AuthenticationDetails;
    } else {
      this._router.navigate(['/auth/login']);
    }
    this.GetAllTransactionDetailsCount(this.authenticationDetails.userID);
    this.GetAllExceptionDetailsCount(this.authenticationDetails.userID);
    this.GetAllCompletedTransactionDetailsCount(this.authenticationDetails.userID);
    this.GetLastTransactionDetails(this.authenticationDetails.userID);
    this.GetAllTransactionDetailsByLocationID(this.authenticationDetails.userID);
    this.SetIntervalID = setInterval(() => {
      this.GetAllTransactionDetailsCount(this.authenticationDetails.userID);
      this.GetAllExceptionDetailsCount(this.authenticationDetails.userID);
      this.GetAllCompletedTransactionDetailsCount(this.authenticationDetails.userID);
      this.GetLastTransactionDetails(this.authenticationDetails.userID);
    }, 60000);
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    if (this.SetIntervalID) {
      clearInterval(this.SetIntervalID);
    }
  }

  // tslint:disable-next-line:typedef
  applyCommonFilter(filterValue: string) {
    this.commonDataSource.filter = filterValue.trim().toLowerCase();
  }

  // tslint:disable-next-line:typedef
  applyExceptionFilter(filterValue: string) {
    this.exceptionDataSource.filter = filterValue.trim().toLowerCase();
  }

  goBackToDashboard(): void {
    this.diagramShow = true;
    this.tableShow = false;
  }

  GetAllTransactionDetailsCount(ID: Guid): void {
    this._dashboardService.GetAllTransactionDetailsCount(ID).subscribe(
      (data) => {
        this.totalTransactionDetailsCount = data as number;
        this.IsProgressBarVisibile = false;
      },
      (err) => {
        this.IsProgressBarVisibile = false;
        this.notificationSnackBarComponent.openSnackBar(err instanceof Object ? 'Something went wrong' : err, SnackBarStatus.danger);
      }
    );
  }

  GetAllTransactionDetails(ID: Guid): void {
    this._dashboardService.GetAllTransactionDetails(ID).subscribe(
      (data) => {
        this.AllTransactionDetails = data as TransactionDetails[];
        this.commonDataSource = new MatTableDataSource(this.AllTransactionDetails);
        this.commonDataSource.paginator = this.commonPaginator;
        this.commonDataSource.sort = this.commonSort;
        this.IsProgressBarVisibile = false;
      },
      (err) => {
        this.IsProgressBarVisibile = false;
        this.notificationSnackBarComponent.openSnackBar(err instanceof Object ? 'Something went wrong' : err, SnackBarStatus.danger);
      }
    );
  }

  GetLastTransactionDetails(ID: Guid): void {
    this._dashboardService.GetLastTransactionDetails(ID).subscribe(
      (data) => {
        this.LastTransactionDetails = data as TransactionDetails;
        if (this.LastTransactionDetails != null) {
          this.availableSpaceCount = this.LastTransactionDetails.AVAILABLE_SPACE;
          if (this.availableSpaceCount === null) {
            this.availableSpaceCount = '0';
          }
        }
        else {
          this.availableSpaceCount = '0';
        }

      },
      (err) => {
        this.IsProgressBarVisibile = false;
        this.notificationSnackBarComponent.openSnackBar(err instanceof Object ? 'Something went wrong' : err, SnackBarStatus.danger);
      }
    );
  }

  GetAllExceptionDetailsCount(ID: Guid): void {
    this._dashboardService.GetAllExceptionDetailsCount(ID).subscribe(
      (data) => {
        this.exceptionDetailsCount = data as number;
        console.log(this.exceptionDetailsCount);
        this.IsProgressBarVisibile = false;
      },
      (err) => {
        this.IsProgressBarVisibile = false;
        this.notificationSnackBarComponent.openSnackBar(err instanceof Object ? 'Something went wrong' : err, SnackBarStatus.danger);
      }
    );
  }

  GetAllExceptionDetails(ID: Guid): void {
    this._dashboardService.GetAllExceptionDetails(ID).subscribe(
      (data) => {
        this.AllExceptionDetails = data as TransactionDetails[];
        this.exceptionDetailsCount = this.AllExceptionDetails.length;
        this.exceptionDataSource = new MatTableDataSource(this.AllExceptionDetails);
        this.exceptionDataSource.paginator = this.exceptionPaginator;
        this.exceptionDataSource.sort = this.exceptionSort;
        this.IsProgressBarVisibile = false;
      },
      (err) => {
        this.IsProgressBarVisibile = false;
        this.notificationSnackBarComponent.openSnackBar(err instanceof Object ? 'Something went wrong' : err, SnackBarStatus.danger);
      }
    );
  }

  GetAllCompletedTransactionDetailsCount(ID: Guid): void {
    this._dashboardService.GetAllCompletedTransactionDetailsCount(ID).subscribe(
      (data) => {
        this.completedTransactionsCount = data as number;
        console.log(this.completedTransactionsCount);
        this.IsProgressBarVisibile = false;
      },
      (err) => {
        this.IsProgressBarVisibile = false;
        this.notificationSnackBarComponent.openSnackBar(err instanceof Object ? 'Something went wrong' : err, SnackBarStatus.danger);
      }
    );
  }

  GetAllCompletedTransactionDetails(ID: Guid): void {
    this._dashboardService.GetAllCompletedTransactionDetails(ID).subscribe(
      (data) => {
        this.AllCompletedTransactionDetails = data as TransactionDetails[];
        this.completedTransactionsCount = this.AllCompletedTransactionDetails.length;
        this.commonDataSource = new MatTableDataSource(this.AllCompletedTransactionDetails);
        this.commonDataSource.paginator = this.commonPaginator;
        this.commonDataSource.sort = this.commonSort;
        this.IsProgressBarVisibile = false;
      },
      (err) => {
        this.IsProgressBarVisibile = false;
        this.notificationSnackBarComponent.openSnackBar(err instanceof Object ? 'Something went wrong' : err, SnackBarStatus.danger);
      }
    );
  }

  GetAllTransactionDetailsByLocationID(ID: Guid): void {
    this._dashboardService.GetAllTransactionDetailsByLocationID(ID).subscribe(
      (data) => {
        this.AllTransactionDetailsByLocationID = data as TransactionDetailsByLocationID[];
        this.S001R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S001R1') || x.LOCATION_ID.match('S002R1') || x.LOCATION_ID.match('S000R1'));
        this.S003R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S003R1') || x.LOCATION_ID.match('S004R1') || x.LOCATION_ID.match('S002R1'));
        this.S005R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S005R1') || x.LOCATION_ID.match('S006R1') || x.LOCATION_ID.match('S004R1'));
        this.S007R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S007R1') || x.LOCATION_ID.match('S008R1') || x.LOCATION_ID.match('S006R1'));
        // this.S007R1.forEach(x => {
        //   this.S007R1CONTAINERSIZE = x.CONTAINER_SIZE;
        // });
        // this.S011R1.forEach(x => {
        //   if(x.LOCATION_ID.match('S011R1'))
        //   this.isException = true;
        // })

        this.S009R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S009R1') || x.LOCATION_ID.match('S010R1') || x.LOCATION_ID.match('S008R1'));
        this.S011R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S011R1') || x.LOCATION_ID.match('S012R1') || x.LOCATION_ID.match('S010R1'));
        this.S013R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S013R1') || x.LOCATION_ID.match('S014R1') || x.LOCATION_ID.match('S012R1'));
        this.S015R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S015R1') || x.LOCATION_ID.match('S016R1') || x.LOCATION_ID.match('S014R1'));
        this.S017R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S017R1') || x.LOCATION_ID.match('S018R1') || x.LOCATION_ID.match('S016R1'));
        this.S019R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S019R1') || x.LOCATION_ID.match('S020R1') || x.LOCATION_ID.match('S018R1'));
        this.S021R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S021R1') || x.LOCATION_ID.match('S022R1') || x.LOCATION_ID.match('S020R1'));
        this.S023R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S023R1') || x.LOCATION_ID.match('S024R1') || x.LOCATION_ID.match('S022R1'));
        this.S025R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S025R1') || x.LOCATION_ID.match('S026R1') || x.LOCATION_ID.match('S024R1'));
        this.S027R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S027R1') || x.LOCATION_ID.match('S028R1') || x.LOCATION_ID.match('S026R1'));
        this.S029R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S029R1') || x.LOCATION_ID.match('S030R1') || x.LOCATION_ID.match('S028R1'));
        this.S031R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S031R1') || x.LOCATION_ID.match('S032R1') || x.LOCATION_ID.match('S030R1'));
        this.S033R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S033R1') || x.LOCATION_ID.match('S034R1') || x.LOCATION_ID.match('S032R1'));
        this.S035R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S035R1') || x.LOCATION_ID.match('S036R1') || x.LOCATION_ID.match('S034R1'));
        this.S037R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S037R1') || x.LOCATION_ID.match('S038R1') || x.LOCATION_ID.match('S036R1'));
        this.S039R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S039R1') || x.LOCATION_ID.match('S040R1') || x.LOCATION_ID.match('S038R1'));
        this.S041R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S041R1') || x.LOCATION_ID.match('S042R1') || x.LOCATION_ID.match('S040R1'));
        this.S043R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S043R1') || x.LOCATION_ID.match('S044R1') || x.LOCATION_ID.match('S042R1'));
        this.S045R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S045R1') || x.LOCATION_ID.match('S046R1') || x.LOCATION_ID.match('S044R1'));
        this.S047R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S047R1') || x.LOCATION_ID.match('S048R1') || x.LOCATION_ID.match('S046R1'));
        this.S049R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S049R1') || x.LOCATION_ID.match('S050R1') || x.LOCATION_ID.match('S048R1'));
        this.S051R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S051R1') || x.LOCATION_ID.match('S052R1') || x.LOCATION_ID.match('S050R1'));
        this.S053R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S053R1') || x.LOCATION_ID.match('S054R1') || x.LOCATION_ID.match('S052R1'));
        this.S055R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S055R1') || x.LOCATION_ID.match('S056R1') || x.LOCATION_ID.match('S054R1'));
        this.S057R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S057R1') || x.LOCATION_ID.match('S058R1') || x.LOCATION_ID.match('S056R1'));
        this.S059R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S059R1') || x.LOCATION_ID.match('S060R1') || x.LOCATION_ID.match('S058R1'));
        this.S061R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S061R1') || x.LOCATION_ID.match('S062R1') || x.LOCATION_ID.match('S060R1'));
        this.S063R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S063R1') || x.LOCATION_ID.match('S064R1') || x.LOCATION_ID.match('S062R1'));
        this.S065R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S065R1') || x.LOCATION_ID.match('S066R1') || x.LOCATION_ID.match('S064R1'));
        this.S067R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S067R1') || x.LOCATION_ID.match('S068R1') || x.LOCATION_ID.match('S066R1'));
        this.S069R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S069R1') || x.LOCATION_ID.match('S070R1') || x.LOCATION_ID.match('S068R1'));
        this.S071R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S071R1') || x.LOCATION_ID.match('S072R1') || x.LOCATION_ID.match('S070R1'));
        this.S073R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S073R1') || x.LOCATION_ID.match('S074R1') || x.LOCATION_ID.match('S072R1'));
        this.S075R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S075R1') || x.LOCATION_ID.match('S076R1') || x.LOCATION_ID.match('S074R1'));
        this.S077R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S077R1') || x.LOCATION_ID.match('S078R1') || x.LOCATION_ID.match('S076R1'));
        this.S079R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S079R1') || x.LOCATION_ID.match('S080R1') || x.LOCATION_ID.match('S078R1'));
        this.S081R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S081R1') || x.LOCATION_ID.match('S082R1') || x.LOCATION_ID.match('S080R1'));
        this.S083R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S083R1') || x.LOCATION_ID.match('S084R1') || x.LOCATION_ID.match('S082R1'));
        this.S085R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S085R1') || x.LOCATION_ID.match('S086R1') || x.LOCATION_ID.match('S084R1'));
        this.S087R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S087R1') || x.LOCATION_ID.match('S088R1') || x.LOCATION_ID.match('S086R1'));
        this.S089R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S089R1') || x.LOCATION_ID.match('S090R1') || x.LOCATION_ID.match('S088R1'));
        this.S091R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S091R1') || x.LOCATION_ID.match('S092R1') || x.LOCATION_ID.match('S090R1'));
        this.S093R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S093R1') || x.LOCATION_ID.match('S094R1') || x.LOCATION_ID.match('S092R1'));
        this.S095R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S095R1') || x.LOCATION_ID.match('S096R1') || x.LOCATION_ID.match('S094R1'));
        this.S097R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S097R1') || x.LOCATION_ID.match('S098R1') || x.LOCATION_ID.match('S096R1'));
        this.S099R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S099R1') || x.LOCATION_ID.match('S100R1') || x.LOCATION_ID.match('S098R1'));
        this.S101R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S101R1') || x.LOCATION_ID.match('S102R1') || x.LOCATION_ID.match('S100R1'));
        this.S103R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S103R1') || x.LOCATION_ID.match('S104R1') || x.LOCATION_ID.match('S102R1'));

        this.S001R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S001R2') || x.LOCATION_ID.match('S002R2') || x.LOCATION_ID.match('S000R2'));
        this.S003R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S003R2') || x.LOCATION_ID.match('S004R2') || x.LOCATION_ID.match('S002R2'));
        this.S005R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S005R2') || x.LOCATION_ID.match('S006R2') || x.LOCATION_ID.match('S004R2'));
        this.S007R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S007R2') || x.LOCATION_ID.match('S008R2') || x.LOCATION_ID.match('S006R2'));
        this.S009R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S009R2') || x.LOCATION_ID.match('S010R2') || x.LOCATION_ID.match('S008R2'));
        this.S011R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S011R2') || x.LOCATION_ID.match('S012R2') || x.LOCATION_ID.match('S010R2'));
        this.S013R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S013R2') || x.LOCATION_ID.match('S014R2') || x.LOCATION_ID.match('S012R2'));
        this.S015R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S015R2') || x.LOCATION_ID.match('S016R2') || x.LOCATION_ID.match('S014R2'));
        this.S017R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S017R2') || x.LOCATION_ID.match('S018R2') || x.LOCATION_ID.match('S016R2'));
        this.S019R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S019R2') || x.LOCATION_ID.match('S020R2') || x.LOCATION_ID.match('S018R2'));
        this.S021R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S021R2') || x.LOCATION_ID.match('S022R2') || x.LOCATION_ID.match('S020R2'));
        this.S023R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S023R2') || x.LOCATION_ID.match('S024R2') || x.LOCATION_ID.match('S022R2'));
        this.S025R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S025R2') || x.LOCATION_ID.match('S026R2') || x.LOCATION_ID.match('S024R2'));
        this.S027R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S027R2') || x.LOCATION_ID.match('S028R2') || x.LOCATION_ID.match('S026R2'));
        this.S029R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S029R2') || x.LOCATION_ID.match('S030R2') || x.LOCATION_ID.match('S028R2'));
        this.S031R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S031R2') || x.LOCATION_ID.match('S032R2') || x.LOCATION_ID.match('S030R2'));
        this.S033R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S033R2') || x.LOCATION_ID.match('S034R2') || x.LOCATION_ID.match('S032R2'));
        this.S035R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S035R2') || x.LOCATION_ID.match('S036R2') || x.LOCATION_ID.match('S034R2'));
        this.S037R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S037R2') || x.LOCATION_ID.match('S038R2') || x.LOCATION_ID.match('S036R2'));
        this.S039R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S039R2') || x.LOCATION_ID.match('S040R2') || x.LOCATION_ID.match('S038R2'));
        this.S041R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S041R2') || x.LOCATION_ID.match('S042R2') || x.LOCATION_ID.match('S040R2'));
        this.S043R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S043R2') || x.LOCATION_ID.match('S044R2') || x.LOCATION_ID.match('S042R2'));
        this.S045R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S045R2') || x.LOCATION_ID.match('S046R2') || x.LOCATION_ID.match('S044R2'));
        this.S047R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S047R2') || x.LOCATION_ID.match('S048R2') || x.LOCATION_ID.match('S046R2'));
        this.S049R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S049R2') || x.LOCATION_ID.match('S050R2') || x.LOCATION_ID.match('S048R2'));
        this.S051R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S051R2') || x.LOCATION_ID.match('S052R2') || x.LOCATION_ID.match('S050R2'));
        this.S053R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S053R2') || x.LOCATION_ID.match('S054R2') || x.LOCATION_ID.match('S052R2'));
        this.S055R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S055R2') || x.LOCATION_ID.match('S056R2') || x.LOCATION_ID.match('S054R2'));
        this.S057R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S057R2') || x.LOCATION_ID.match('S058R2') || x.LOCATION_ID.match('S056R2'));
        this.S059R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S059R2') || x.LOCATION_ID.match('S060R2') || x.LOCATION_ID.match('S058R2'));
        this.S061R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S061R2') || x.LOCATION_ID.match('S062R2') || x.LOCATION_ID.match('S060R2'));
        this.S063R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S063R2') || x.LOCATION_ID.match('S064R2') || x.LOCATION_ID.match('S062R2'));
        this.S065R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S065R2') || x.LOCATION_ID.match('S066R2') || x.LOCATION_ID.match('S064R2'));
        this.S067R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S067R2') || x.LOCATION_ID.match('S068R2') || x.LOCATION_ID.match('S066R2'));
        this.S069R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S069R2') || x.LOCATION_ID.match('S070R2') || x.LOCATION_ID.match('S068R2'));
        this.S071R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S071R2') || x.LOCATION_ID.match('S072R2') || x.LOCATION_ID.match('S070R2'));
        this.S073R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S073R2') || x.LOCATION_ID.match('S074R2') || x.LOCATION_ID.match('S072R2'));
        this.S075R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S075R2') || x.LOCATION_ID.match('S076R2') || x.LOCATION_ID.match('S074R2'));
        this.S077R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S077R2') || x.LOCATION_ID.match('S078R2') || x.LOCATION_ID.match('S076R2'));
        this.S079R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S079R2') || x.LOCATION_ID.match('S080R2') || x.LOCATION_ID.match('S078R2'));
        this.S081R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S081R2') || x.LOCATION_ID.match('S082R2') || x.LOCATION_ID.match('S080R2'));
        this.S083R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S083R2') || x.LOCATION_ID.match('S084R2') || x.LOCATION_ID.match('S082R2'));
        this.S085R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S085R2') || x.LOCATION_ID.match('S086R2') || x.LOCATION_ID.match('S084R2'));
        this.S087R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S087R2') || x.LOCATION_ID.match('S088R2') || x.LOCATION_ID.match('S086R2'));
        this.S089R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S089R2') || x.LOCATION_ID.match('S090R2') || x.LOCATION_ID.match('S088R2'));
        this.S091R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S091R2') || x.LOCATION_ID.match('S092R2') || x.LOCATION_ID.match('S090R2'));
        this.S093R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S093R2') || x.LOCATION_ID.match('S094R2') || x.LOCATION_ID.match('S092R2'));
        this.S095R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S095R2') || x.LOCATION_ID.match('S096R2') || x.LOCATION_ID.match('S094R2'));
        this.S097R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S097R2') || x.LOCATION_ID.match('S098R2') || x.LOCATION_ID.match('S096R2'));
        this.S099R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S099R2') || x.LOCATION_ID.match('S100R2') || x.LOCATION_ID.match('S098R2'));
        this.S101R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S101R2') || x.LOCATION_ID.match('S102R2') || x.LOCATION_ID.match('S100R2'));
        this.S103R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S103R2') || x.LOCATION_ID.match('S104R2') || x.LOCATION_ID.match('S102R2'));

        this.S001R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S001R3') || x.LOCATION_ID.match('S002R3') || x.LOCATION_ID.match('S000R3'));
        this.S003R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S003R3') || x.LOCATION_ID.match('S004R3') || x.LOCATION_ID.match('S002R3'));
        this.S005R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S005R3') || x.LOCATION_ID.match('S006R3') || x.LOCATION_ID.match('S004R3'));
        this.S007R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S007R3') || x.LOCATION_ID.match('S008R3') || x.LOCATION_ID.match('S006R3'));
        this.S009R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S009R3') || x.LOCATION_ID.match('S010R3') || x.LOCATION_ID.match('S008R3'));
        this.S011R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S011R3') || x.LOCATION_ID.match('S012R3') || x.LOCATION_ID.match('S010R3'));
        this.S013R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S013R3') || x.LOCATION_ID.match('S014R3') || x.LOCATION_ID.match('S012R3'));
        this.S015R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S015R3') || x.LOCATION_ID.match('S016R3') || x.LOCATION_ID.match('S014R3'));
        this.S017R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S017R3') || x.LOCATION_ID.match('S018R3') || x.LOCATION_ID.match('S016R3'));
        this.S019R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S019R3') || x.LOCATION_ID.match('S020R3') || x.LOCATION_ID.match('S018R3'));
        this.S021R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S021R3') || x.LOCATION_ID.match('S022R3') || x.LOCATION_ID.match('S020R3'));
        this.S023R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S023R3') || x.LOCATION_ID.match('S024R3') || x.LOCATION_ID.match('S022R3'));
        this.S025R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S025R3') || x.LOCATION_ID.match('S026R3') || x.LOCATION_ID.match('S024R3'));
        this.S027R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S027R3') || x.LOCATION_ID.match('S028R3') || x.LOCATION_ID.match('S026R3'));
        this.S029R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S029R3') || x.LOCATION_ID.match('S030R3') || x.LOCATION_ID.match('S028R3'));
        this.S031R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S031R3') || x.LOCATION_ID.match('S032R3') || x.LOCATION_ID.match('S030R3'));
        this.S033R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S033R3') || x.LOCATION_ID.match('S034R3') || x.LOCATION_ID.match('S032R3'));
        this.S035R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S035R3') || x.LOCATION_ID.match('S036R3') || x.LOCATION_ID.match('S034R3'));
        this.S037R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S037R3') || x.LOCATION_ID.match('S038R3') || x.LOCATION_ID.match('S036R3'));
        this.S039R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S039R3') || x.LOCATION_ID.match('S040R3') || x.LOCATION_ID.match('S038R3'));
        this.S041R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S041R3') || x.LOCATION_ID.match('S042R3') || x.LOCATION_ID.match('S040R3'));
        this.S043R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S043R3') || x.LOCATION_ID.match('S044R3') || x.LOCATION_ID.match('S042R3'));
        this.S045R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S045R3') || x.LOCATION_ID.match('S046R3') || x.LOCATION_ID.match('S044R3'));
        this.S047R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S047R3') || x.LOCATION_ID.match('S048R3') || x.LOCATION_ID.match('S046R3'));
        this.S049R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S049R3') || x.LOCATION_ID.match('S050R3') || x.LOCATION_ID.match('S048R3'));
        this.S051R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S051R3') || x.LOCATION_ID.match('S052R3') || x.LOCATION_ID.match('S050R3'));
        this.S053R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S053R3') || x.LOCATION_ID.match('S054R3') || x.LOCATION_ID.match('S052R3'));
        this.S055R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S055R3') || x.LOCATION_ID.match('S056R3') || x.LOCATION_ID.match('S054R3'));
        this.S057R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S057R3') || x.LOCATION_ID.match('S058R3') || x.LOCATION_ID.match('S056R3'));
        this.S059R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S059R3') || x.LOCATION_ID.match('S060R3') || x.LOCATION_ID.match('S058R3'));
        this.S061R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S061R3') || x.LOCATION_ID.match('S062R3') || x.LOCATION_ID.match('S060R3'));
        this.S063R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S063R3') || x.LOCATION_ID.match('S064R3') || x.LOCATION_ID.match('S062R3'));
        this.S065R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S065R3') || x.LOCATION_ID.match('S066R3') || x.LOCATION_ID.match('S064R3'));
        this.S067R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S067R3') || x.LOCATION_ID.match('S068R3') || x.LOCATION_ID.match('S066R3'));
        this.S069R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S069R3') || x.LOCATION_ID.match('S070R3') || x.LOCATION_ID.match('S068R3'));
        this.S071R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S071R3') || x.LOCATION_ID.match('S072R3') || x.LOCATION_ID.match('S070R3'));
        this.S073R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S073R3') || x.LOCATION_ID.match('S074R3') || x.LOCATION_ID.match('S072R3'));
        this.S075R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S075R3') || x.LOCATION_ID.match('S076R3') || x.LOCATION_ID.match('S074R3'));
        this.S077R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S077R3') || x.LOCATION_ID.match('S078R3') || x.LOCATION_ID.match('S076R3'));
        this.S079R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S079R3') || x.LOCATION_ID.match('S080R3') || x.LOCATION_ID.match('S078R3'));
        this.S081R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S081R3') || x.LOCATION_ID.match('S082R3') || x.LOCATION_ID.match('S080R3'));
        this.S083R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S083R3') || x.LOCATION_ID.match('S084R3') || x.LOCATION_ID.match('S082R3'));
        this.S085R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S085R3') || x.LOCATION_ID.match('S086R3') || x.LOCATION_ID.match('S084R3'));
        this.S087R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S087R3') || x.LOCATION_ID.match('S088R3') || x.LOCATION_ID.match('S086R3'));
        this.S089R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S089R3') || x.LOCATION_ID.match('S090R3') || x.LOCATION_ID.match('S088R3'));
        this.S091R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S091R3') || x.LOCATION_ID.match('S092R3') || x.LOCATION_ID.match('S090R3'));
        this.S093R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S093R3') || x.LOCATION_ID.match('S094R3') || x.LOCATION_ID.match('S092R3'));
        this.S095R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S095R3') || x.LOCATION_ID.match('S096R3') || x.LOCATION_ID.match('S094R3'));
        this.S097R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S097R3') || x.LOCATION_ID.match('S098R3') || x.LOCATION_ID.match('S096R3'));
        this.S099R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S099R3') || x.LOCATION_ID.match('S100R3') || x.LOCATION_ID.match('S098R3'));
        this.S101R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S101R3') || x.LOCATION_ID.match('S102R3') || x.LOCATION_ID.match('S100R3'));
        this.S103R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S103R3') || x.LOCATION_ID.match('S104R3') || x.LOCATION_ID.match('S102R3'));

        this.S001R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S001R4') || x.LOCATION_ID.match('S002R4') || x.LOCATION_ID.match('S000R4'));
        this.S003R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S003R4') || x.LOCATION_ID.match('S004R4') || x.LOCATION_ID.match('S002R4'));
        this.S005R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S005R4') || x.LOCATION_ID.match('S006R4') || x.LOCATION_ID.match('S004R4'));
        this.S007R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S007R4') || x.LOCATION_ID.match('S008R4') || x.LOCATION_ID.match('S006R4'));
        this.S009R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S009R4') || x.LOCATION_ID.match('S010R4') || x.LOCATION_ID.match('S008R4'));
        this.S011R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S011R4') || x.LOCATION_ID.match('S012R4') || x.LOCATION_ID.match('S010R4'));
        this.S013R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S013R4') || x.LOCATION_ID.match('S014R4') || x.LOCATION_ID.match('S012R4'));
        this.S015R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S015R4') || x.LOCATION_ID.match('S016R4') || x.LOCATION_ID.match('S014R4'));
        this.S017R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S017R4') || x.LOCATION_ID.match('S018R4') || x.LOCATION_ID.match('S016R4'));
        this.S019R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S019R4') || x.LOCATION_ID.match('S020R4') || x.LOCATION_ID.match('S018R4'));
        this.S021R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S021R4') || x.LOCATION_ID.match('S022R4') || x.LOCATION_ID.match('S020R4'));
        this.S023R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S023R4') || x.LOCATION_ID.match('S024R4') || x.LOCATION_ID.match('S022R4'));
        this.S025R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S025R4') || x.LOCATION_ID.match('S026R4') || x.LOCATION_ID.match('S024R4'));
        this.S027R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S027R4') || x.LOCATION_ID.match('S028R4') || x.LOCATION_ID.match('S026R4'));
        this.S029R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S029R4') || x.LOCATION_ID.match('S030R4') || x.LOCATION_ID.match('S028R4'));
        this.S031R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S031R4') || x.LOCATION_ID.match('S032R4') || x.LOCATION_ID.match('S030R4'));
        this.S033R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S033R4') || x.LOCATION_ID.match('S034R4') || x.LOCATION_ID.match('S032R4'));
        this.S035R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S035R4') || x.LOCATION_ID.match('S036R4') || x.LOCATION_ID.match('S034R4'));
        this.S037R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S037R4') || x.LOCATION_ID.match('S038R4') || x.LOCATION_ID.match('S036R4'));
        this.S039R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S039R4') || x.LOCATION_ID.match('S040R4') || x.LOCATION_ID.match('S038R4'));
        this.S041R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S041R4') || x.LOCATION_ID.match('S042R4') || x.LOCATION_ID.match('S040R4'));
        this.S043R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S043R4') || x.LOCATION_ID.match('S044R4') || x.LOCATION_ID.match('S042R4'));
        this.S045R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S045R4') || x.LOCATION_ID.match('S046R4') || x.LOCATION_ID.match('S044R4'));
        this.S047R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S047R4') || x.LOCATION_ID.match('S048R4') || x.LOCATION_ID.match('S046R4'));
        this.S049R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S049R4') || x.LOCATION_ID.match('S050R4') || x.LOCATION_ID.match('S048R4'));
        this.S051R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S051R4') || x.LOCATION_ID.match('S052R4') || x.LOCATION_ID.match('S050R4'));
        this.S053R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S053R4') || x.LOCATION_ID.match('S054R4') || x.LOCATION_ID.match('S052R4'));
        this.S055R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S055R4') || x.LOCATION_ID.match('S056R4') || x.LOCATION_ID.match('S054R4'));
        this.S057R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S057R4') || x.LOCATION_ID.match('S058R4') || x.LOCATION_ID.match('S056R4'));
        this.S059R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S059R4') || x.LOCATION_ID.match('S060R4') || x.LOCATION_ID.match('S058R4'));
        this.S061R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S061R4') || x.LOCATION_ID.match('S062R4') || x.LOCATION_ID.match('S060R4'));
        this.S063R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S063R4') || x.LOCATION_ID.match('S064R4') || x.LOCATION_ID.match('S062R4'));
        this.S065R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S065R4') || x.LOCATION_ID.match('S066R4') || x.LOCATION_ID.match('S064R4'));
        this.S067R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S067R4') || x.LOCATION_ID.match('S068R4') || x.LOCATION_ID.match('S066R4'));
        this.S069R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S069R4') || x.LOCATION_ID.match('S070R4') || x.LOCATION_ID.match('S068R4'));
        this.S071R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S071R4') || x.LOCATION_ID.match('S072R4') || x.LOCATION_ID.match('S070R4'));
        this.S073R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S073R4') || x.LOCATION_ID.match('S074R4') || x.LOCATION_ID.match('S072R4'));
        this.S075R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S075R4') || x.LOCATION_ID.match('S076R4') || x.LOCATION_ID.match('S074R4'));
        this.S077R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S077R4') || x.LOCATION_ID.match('S078R4') || x.LOCATION_ID.match('S076R4'));
        this.S079R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S079R4') || x.LOCATION_ID.match('S080R4') || x.LOCATION_ID.match('S078R4'));
        this.S081R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S081R4') || x.LOCATION_ID.match('S082R4') || x.LOCATION_ID.match('S080R4'));
        this.S083R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S083R4') || x.LOCATION_ID.match('S084R4') || x.LOCATION_ID.match('S082R4'));
        this.S085R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S085R4') || x.LOCATION_ID.match('S086R4') || x.LOCATION_ID.match('S084R4'));
        this.S087R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S087R4') || x.LOCATION_ID.match('S088R4') || x.LOCATION_ID.match('S086R4'));
        this.S089R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S089R4') || x.LOCATION_ID.match('S090R4') || x.LOCATION_ID.match('S088R4'));
        this.S091R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S091R4') || x.LOCATION_ID.match('S092R4') || x.LOCATION_ID.match('S090R4'));
        this.S093R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S093R4') || x.LOCATION_ID.match('S094R4') || x.LOCATION_ID.match('S092R4'));
        this.S095R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S095R4') || x.LOCATION_ID.match('S096R4') || x.LOCATION_ID.match('S094R4'));
        this.S097R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S097R4') || x.LOCATION_ID.match('S098R4') || x.LOCATION_ID.match('S096R4'));
        this.S099R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S099R4') || x.LOCATION_ID.match('S100R4') || x.LOCATION_ID.match('S098R4'));
        this.S101R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S101R4') || x.LOCATION_ID.match('S102R4') || x.LOCATION_ID.match('S100R4'));
        this.S103R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S103R4') || x.LOCATION_ID.match('S104R4') || x.LOCATION_ID.match('S102R4'));

        this.S001R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S001R5') || x.LOCATION_ID.match('S002R5') || x.LOCATION_ID.match('S000R5'));
        this.S003R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S003R5') || x.LOCATION_ID.match('S004R5') || x.LOCATION_ID.match('S002R5'));
        this.S005R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S005R5') || x.LOCATION_ID.match('S006R5') || x.LOCATION_ID.match('S004R5'));
        this.S007R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S007R5') || x.LOCATION_ID.match('S008R5') || x.LOCATION_ID.match('S006R5'));
        this.S009R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S009R5') || x.LOCATION_ID.match('S010R5') || x.LOCATION_ID.match('S008R5'));
        this.S011R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S011R5') || x.LOCATION_ID.match('S012R5') || x.LOCATION_ID.match('S010R5'));
        this.S013R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S013R5') || x.LOCATION_ID.match('S014R5') || x.LOCATION_ID.match('S012R5'));
        this.S015R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S015R5') || x.LOCATION_ID.match('S016R5') || x.LOCATION_ID.match('S014R5'));
        this.S017R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S017R5') || x.LOCATION_ID.match('S018R5') || x.LOCATION_ID.match('S016R5'));
        this.S019R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S019R5') || x.LOCATION_ID.match('S020R5') || x.LOCATION_ID.match('S018R5'));
        this.S021R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S021R5') || x.LOCATION_ID.match('S022R5') || x.LOCATION_ID.match('S020R5'));
        this.S023R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S023R5') || x.LOCATION_ID.match('S024R5') || x.LOCATION_ID.match('S022R5'));
        this.S025R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S025R5') || x.LOCATION_ID.match('S026R5') || x.LOCATION_ID.match('S024R5'));
        this.S027R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S027R5') || x.LOCATION_ID.match('S028R5') || x.LOCATION_ID.match('S026R5'));
        this.S029R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S029R5') || x.LOCATION_ID.match('S030R5') || x.LOCATION_ID.match('S028R5'));
        this.S031R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S031R5') || x.LOCATION_ID.match('S032R5') || x.LOCATION_ID.match('S030R5'));
        this.S033R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S033R5') || x.LOCATION_ID.match('S034R5') || x.LOCATION_ID.match('S032R5'));
        this.S035R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S035R5') || x.LOCATION_ID.match('S036R5') || x.LOCATION_ID.match('S034R5'));
        this.S037R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S037R5') || x.LOCATION_ID.match('S038R5') || x.LOCATION_ID.match('S036R5'));
        this.S039R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S039R5') || x.LOCATION_ID.match('S040R5') || x.LOCATION_ID.match('S038R5'));
        this.S041R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S041R5') || x.LOCATION_ID.match('S042R5') || x.LOCATION_ID.match('S040R5'));
        this.S043R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S043R5') || x.LOCATION_ID.match('S044R5') || x.LOCATION_ID.match('S042R5'));
        this.S045R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S045R5') || x.LOCATION_ID.match('S046R5') || x.LOCATION_ID.match('S044R5'));
        this.S047R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S047R5') || x.LOCATION_ID.match('S048R5') || x.LOCATION_ID.match('S046R5'));
        this.S049R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S049R5') || x.LOCATION_ID.match('S050R5') || x.LOCATION_ID.match('S048R5'));
        this.S051R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S051R5') || x.LOCATION_ID.match('S052R5') || x.LOCATION_ID.match('S050R5'));
        this.S053R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S053R5') || x.LOCATION_ID.match('S054R5') || x.LOCATION_ID.match('S052R5'));
        this.S055R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S055R5') || x.LOCATION_ID.match('S056R5') || x.LOCATION_ID.match('S054R5'));
        this.S057R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S057R5') || x.LOCATION_ID.match('S058R5') || x.LOCATION_ID.match('S056R5'));
        this.S059R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S059R5') || x.LOCATION_ID.match('S060R5') || x.LOCATION_ID.match('S058R5'));
        this.S061R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S061R5') || x.LOCATION_ID.match('S062R5') || x.LOCATION_ID.match('S060R5'));
        this.S063R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S063R5') || x.LOCATION_ID.match('S064R5') || x.LOCATION_ID.match('S062R5'));
        this.S065R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S065R5') || x.LOCATION_ID.match('S066R5') || x.LOCATION_ID.match('S064R5'));
        this.S067R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S067R5') || x.LOCATION_ID.match('S068R5') || x.LOCATION_ID.match('S066R5'));
        this.S069R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S069R5') || x.LOCATION_ID.match('S070R5') || x.LOCATION_ID.match('S068R5'));
        this.S071R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S071R5') || x.LOCATION_ID.match('S072R5') || x.LOCATION_ID.match('S070R5'));
        this.S073R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S073R5') || x.LOCATION_ID.match('S074R5') || x.LOCATION_ID.match('S072R5'));
        this.S075R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S075R5') || x.LOCATION_ID.match('S076R5') || x.LOCATION_ID.match('S074R5'));
        this.S077R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S077R5') || x.LOCATION_ID.match('S078R5') || x.LOCATION_ID.match('S076R5'));
        this.S079R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S079R5') || x.LOCATION_ID.match('S080R5') || x.LOCATION_ID.match('S078R5'));
        this.S081R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S081R5') || x.LOCATION_ID.match('S082R5') || x.LOCATION_ID.match('S080R5'));
        this.S083R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S083R5') || x.LOCATION_ID.match('S084R5') || x.LOCATION_ID.match('S082R5'));
        this.S085R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S085R5') || x.LOCATION_ID.match('S086R5') || x.LOCATION_ID.match('S084R5'));
        this.S087R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S087R5') || x.LOCATION_ID.match('S088R5') || x.LOCATION_ID.match('S086R5'));
        this.S089R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S089R5') || x.LOCATION_ID.match('S090R5') || x.LOCATION_ID.match('S088R5'));
        this.S091R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S091R5') || x.LOCATION_ID.match('S092R5') || x.LOCATION_ID.match('S090R5'));
        this.S093R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S093R5') || x.LOCATION_ID.match('S094R5') || x.LOCATION_ID.match('S092R5'));
        this.S095R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S095R5') || x.LOCATION_ID.match('S096R5') || x.LOCATION_ID.match('S094R5'));
        this.S097R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S097R5') || x.LOCATION_ID.match('S098R5') || x.LOCATION_ID.match('S096R5'));
        this.S099R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S099R5') || x.LOCATION_ID.match('S100R5') || x.LOCATION_ID.match('S098R5'));
        this.S101R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S101R5') || x.LOCATION_ID.match('S102R5') || x.LOCATION_ID.match('S100R5'));
        this.S103R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S103R5') || x.LOCATION_ID.match('S104R5') || x.LOCATION_ID.match('S102R5'));

        this.S001R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S001R6') || x.LOCATION_ID.match('S002R6') || x.LOCATION_ID.match('S000R6'));
        this.S003R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S003R6') || x.LOCATION_ID.match('S004R6') || x.LOCATION_ID.match('S002R6'));
        this.S005R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S005R6') || x.LOCATION_ID.match('S006R6') || x.LOCATION_ID.match('S004R6'));
        this.S007R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S007R6') || x.LOCATION_ID.match('S008R6') || x.LOCATION_ID.match('S006R6'));
        this.S009R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S009R6') || x.LOCATION_ID.match('S010R6') || x.LOCATION_ID.match('S008R6'));
        this.S011R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S011R6') || x.LOCATION_ID.match('S012R6') || x.LOCATION_ID.match('S010R6'));
        this.S013R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S013R6') || x.LOCATION_ID.match('S014R6') || x.LOCATION_ID.match('S012R6'));
        this.S015R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S015R6') || x.LOCATION_ID.match('S016R6') || x.LOCATION_ID.match('S014R6'));
        this.S017R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S017R6') || x.LOCATION_ID.match('S018R6') || x.LOCATION_ID.match('S016R6'));
        this.S019R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S019R6') || x.LOCATION_ID.match('S020R6') || x.LOCATION_ID.match('S018R6'));
        this.S021R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S021R6') || x.LOCATION_ID.match('S022R6') || x.LOCATION_ID.match('S020R6'));
        this.S023R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S023R6') || x.LOCATION_ID.match('S024R6') || x.LOCATION_ID.match('S022R6'));
        this.S025R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S025R6') || x.LOCATION_ID.match('S026R6') || x.LOCATION_ID.match('S024R6'));
        this.S027R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S027R6') || x.LOCATION_ID.match('S028R6') || x.LOCATION_ID.match('S026R6'));
        this.S029R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S029R6') || x.LOCATION_ID.match('S030R6') || x.LOCATION_ID.match('S028R6'));
        this.S031R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S031R6') || x.LOCATION_ID.match('S032R6') || x.LOCATION_ID.match('S030R6'));
        this.S033R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S033R6') || x.LOCATION_ID.match('S034R6') || x.LOCATION_ID.match('S032R6'));
        this.S035R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S035R6') || x.LOCATION_ID.match('S036R6') || x.LOCATION_ID.match('S034R6'));
        this.S037R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S037R6') || x.LOCATION_ID.match('S038R6') || x.LOCATION_ID.match('S036R6'));
        this.S039R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S039R6') || x.LOCATION_ID.match('S040R6') || x.LOCATION_ID.match('S038R6'));
        this.S041R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S041R6') || x.LOCATION_ID.match('S042R6') || x.LOCATION_ID.match('S040R6'));
        this.S043R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S043R6') || x.LOCATION_ID.match('S044R6') || x.LOCATION_ID.match('S042R6'));
        this.S045R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S045R6') || x.LOCATION_ID.match('S046R6') || x.LOCATION_ID.match('S044R6'));
        this.S047R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S047R6') || x.LOCATION_ID.match('S048R6') || x.LOCATION_ID.match('S046R6'));
        this.S049R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S049R6') || x.LOCATION_ID.match('S050R6') || x.LOCATION_ID.match('S048R6'));
        this.S051R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S051R6') || x.LOCATION_ID.match('S052R6') || x.LOCATION_ID.match('S050R6'));
        this.S053R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S053R6') || x.LOCATION_ID.match('S054R6') || x.LOCATION_ID.match('S052R6'));
        this.S055R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S055R6') || x.LOCATION_ID.match('S056R6') || x.LOCATION_ID.match('S054R6'));
        this.S057R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S057R6') || x.LOCATION_ID.match('S058R6') || x.LOCATION_ID.match('S056R6'));
        this.S059R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S059R6') || x.LOCATION_ID.match('S060R6') || x.LOCATION_ID.match('S058R6'));
        this.S061R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S061R6') || x.LOCATION_ID.match('S062R6') || x.LOCATION_ID.match('S060R6'));
        this.S063R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S063R6') || x.LOCATION_ID.match('S064R6') || x.LOCATION_ID.match('S062R6'));
        this.S065R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S065R6') || x.LOCATION_ID.match('S066R6') || x.LOCATION_ID.match('S064R6'));
        this.S067R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S067R6') || x.LOCATION_ID.match('S068R6') || x.LOCATION_ID.match('S066R6'));
        this.S069R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S069R6') || x.LOCATION_ID.match('S070R6') || x.LOCATION_ID.match('S068R6'));
        this.S071R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S071R6') || x.LOCATION_ID.match('S072R6') || x.LOCATION_ID.match('S070R6'));
        this.S073R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S073R6') || x.LOCATION_ID.match('S074R6') || x.LOCATION_ID.match('S072R6'));
        this.S075R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S075R6') || x.LOCATION_ID.match('S076R6') || x.LOCATION_ID.match('S074R6'));
        this.S077R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S077R6') || x.LOCATION_ID.match('S078R6') || x.LOCATION_ID.match('S076R6'));
        this.S079R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S079R6') || x.LOCATION_ID.match('S080R6') || x.LOCATION_ID.match('S078R6'));
        this.S081R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S081R6') || x.LOCATION_ID.match('S082R6') || x.LOCATION_ID.match('S080R6'));
        this.S083R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S083R6') || x.LOCATION_ID.match('S084R6') || x.LOCATION_ID.match('S082R6'));
        this.S085R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S085R6') || x.LOCATION_ID.match('S086R6') || x.LOCATION_ID.match('S084R6'));
        this.S087R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S087R6') || x.LOCATION_ID.match('S088R6') || x.LOCATION_ID.match('S086R6'));
        this.S089R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S089R6') || x.LOCATION_ID.match('S090R6') || x.LOCATION_ID.match('S088R6'));
        this.S091R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S091R6') || x.LOCATION_ID.match('S092R6') || x.LOCATION_ID.match('S090R6'));
        this.S093R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S093R6') || x.LOCATION_ID.match('S094R6') || x.LOCATION_ID.match('S092R6'));
        this.S095R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S095R6') || x.LOCATION_ID.match('S096R6') || x.LOCATION_ID.match('S094R6'));
        this.S097R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S097R6') || x.LOCATION_ID.match('S098R6') || x.LOCATION_ID.match('S096R6'));
        this.S099R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S099R6') || x.LOCATION_ID.match('S100R6') || x.LOCATION_ID.match('S098R6'));
        this.S101R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S101R6') || x.LOCATION_ID.match('S102R6') || x.LOCATION_ID.match('S100R6'));
        this.S103R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S103R6') || x.LOCATION_ID.match('S104R6') || x.LOCATION_ID.match('S102R6'));

        this.S001R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S001R7') || x.LOCATION_ID.match('S002R7') || x.LOCATION_ID.match('S000R7'));
        this.S003R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S003R7') || x.LOCATION_ID.match('S004R7') || x.LOCATION_ID.match('S002R7'));
        this.S005R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S005R7') || x.LOCATION_ID.match('S006R7') || x.LOCATION_ID.match('S004R7'));
        this.S007R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S007R7') || x.LOCATION_ID.match('S008R7') || x.LOCATION_ID.match('S006R7'));
        this.S009R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S009R7') || x.LOCATION_ID.match('S010R7') || x.LOCATION_ID.match('S008R7'));
        this.S011R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S011R7') || x.LOCATION_ID.match('S012R7') || x.LOCATION_ID.match('S010R7'));
        this.S013R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S013R7') || x.LOCATION_ID.match('S014R7') || x.LOCATION_ID.match('S012R7'));
        this.S015R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S015R7') || x.LOCATION_ID.match('S016R7') || x.LOCATION_ID.match('S014R7'));
        this.S017R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S017R7') || x.LOCATION_ID.match('S018R7') || x.LOCATION_ID.match('S016R7'));
        this.S019R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S019R7') || x.LOCATION_ID.match('S020R7') || x.LOCATION_ID.match('S018R7'));
        this.S021R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S021R7') || x.LOCATION_ID.match('S022R7') || x.LOCATION_ID.match('S020R7'));
        this.S023R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S023R7') || x.LOCATION_ID.match('S024R7') || x.LOCATION_ID.match('S022R7'));
        this.S025R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S025R7') || x.LOCATION_ID.match('S026R7') || x.LOCATION_ID.match('S024R7'));
        this.S027R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S027R7') || x.LOCATION_ID.match('S028R7') || x.LOCATION_ID.match('S026R7'));
        this.S029R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S029R7') || x.LOCATION_ID.match('S030R7') || x.LOCATION_ID.match('S028R7'));
        this.S031R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S031R7') || x.LOCATION_ID.match('S032R7') || x.LOCATION_ID.match('S030R7'));
        this.S033R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S033R7') || x.LOCATION_ID.match('S034R7') || x.LOCATION_ID.match('S032R7'));
        this.S035R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S035R7') || x.LOCATION_ID.match('S036R7') || x.LOCATION_ID.match('S034R7'));
        this.S037R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S037R7') || x.LOCATION_ID.match('S038R7') || x.LOCATION_ID.match('S036R7'));
        this.S039R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S039R7') || x.LOCATION_ID.match('S040R7') || x.LOCATION_ID.match('S038R7'));
        this.S041R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S041R7') || x.LOCATION_ID.match('S042R7') || x.LOCATION_ID.match('S040R7'));
        this.S043R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S043R7') || x.LOCATION_ID.match('S044R7') || x.LOCATION_ID.match('S042R7'));
        this.S045R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S045R7') || x.LOCATION_ID.match('S046R7') || x.LOCATION_ID.match('S044R7'));
        this.S047R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S047R7') || x.LOCATION_ID.match('S048R7') || x.LOCATION_ID.match('S046R7'));
        this.S049R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S049R7') || x.LOCATION_ID.match('S050R7') || x.LOCATION_ID.match('S048R7'));
        this.S051R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S051R7') || x.LOCATION_ID.match('S052R7') || x.LOCATION_ID.match('S050R7'));
        this.S053R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S053R7') || x.LOCATION_ID.match('S054R7') || x.LOCATION_ID.match('S052R7'));
        this.S055R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S055R7') || x.LOCATION_ID.match('S056R7') || x.LOCATION_ID.match('S054R7'));
        this.S057R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S057R7') || x.LOCATION_ID.match('S058R7') || x.LOCATION_ID.match('S056R7'));
        this.S059R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S059R7') || x.LOCATION_ID.match('S060R7') || x.LOCATION_ID.match('S058R7'));
        this.S061R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S061R7') || x.LOCATION_ID.match('S062R7') || x.LOCATION_ID.match('S060R7'));
        this.S063R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S063R7') || x.LOCATION_ID.match('S064R7') || x.LOCATION_ID.match('S062R7'));
        this.S065R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S065R7') || x.LOCATION_ID.match('S066R7') || x.LOCATION_ID.match('S064R7'));
        this.S067R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S067R7') || x.LOCATION_ID.match('S068R7') || x.LOCATION_ID.match('S066R7'));
        this.S069R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S069R7') || x.LOCATION_ID.match('S070R7') || x.LOCATION_ID.match('S068R7'));
        this.S071R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S071R7') || x.LOCATION_ID.match('S072R7') || x.LOCATION_ID.match('S070R7'));
        this.S073R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S073R7') || x.LOCATION_ID.match('S074R7') || x.LOCATION_ID.match('S072R7'));
        this.S075R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S075R7') || x.LOCATION_ID.match('S076R7') || x.LOCATION_ID.match('S074R7'));
        this.S077R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S077R7') || x.LOCATION_ID.match('S078R7') || x.LOCATION_ID.match('S076R7'));
        this.S079R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S079R7') || x.LOCATION_ID.match('S080R7') || x.LOCATION_ID.match('S078R7'));
        this.S081R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S081R7') || x.LOCATION_ID.match('S082R7') || x.LOCATION_ID.match('S080R7'));
        this.S083R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S083R7') || x.LOCATION_ID.match('S084R7') || x.LOCATION_ID.match('S082R7'));
        this.S085R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S085R7') || x.LOCATION_ID.match('S086R7') || x.LOCATION_ID.match('S084R7'));
        this.S087R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S087R7') || x.LOCATION_ID.match('S088R7') || x.LOCATION_ID.match('S086R7'));
        this.S089R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S089R7') || x.LOCATION_ID.match('S090R7') || x.LOCATION_ID.match('S088R7'));
        this.S091R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S091R7') || x.LOCATION_ID.match('S092R7') || x.LOCATION_ID.match('S090R7'));
        this.S093R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S093R7') || x.LOCATION_ID.match('S094R7') || x.LOCATION_ID.match('S092R7'));
        this.S095R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S095R7') || x.LOCATION_ID.match('S096R7') || x.LOCATION_ID.match('S094R7'));
        this.S097R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S097R7') || x.LOCATION_ID.match('S098R7') || x.LOCATION_ID.match('S096R7'));
        this.S099R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S099R7') || x.LOCATION_ID.match('S100R7') || x.LOCATION_ID.match('S098R7'));
        this.S101R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S101R7') || x.LOCATION_ID.match('S102R7') || x.LOCATION_ID.match('S100R7'));
        this.S103R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S103R7') || x.LOCATION_ID.match('S104R7') || x.LOCATION_ID.match('S102R7'));

      },
      (err) => {
        this.IsProgressBarVisibile = false;
        this.notificationSnackBarComponent.openSnackBar(err instanceof Object ? 'Something went wrong' : err, SnackBarStatus.danger);
      }
    );
  }

  loadSelectedTransactionDetails(value: string): void {
    if (value === 'total') {
      this.diagramShow = false;
      this.tableShowName = 'Total Containers';
      this.tableShow = true;
      this.commonTableShow = true;
      this.exceptionTableShow = false;
      // const onlyTotalTrucks: any[] = this.AllTransactionDetails.filter(x => x.CUR_STATUS !== 'EXIT');
      this.commonDataSource = null;
      this.GetAllTransactionDetails(this.authenticationDetails.userID);
    }
    else if (value === 'completed') {
      this.diagramShow = false;
      this.tableShowName = 'Containers handled';
      this.tableShow = true;
      this.commonTableShow = true;
      this.exceptionTableShow = false;
      this.commonDataSource = null;
      this.GetAllCompletedTransactionDetails(this.authenticationDetails.userID);
    }
    else if (value === 'exception') {
      this.diagramShow = false;
      this.tableShowName = 'Exceptions';
      this.tableShow = true;
      this.commonTableShow = false;
      this.exceptionTableShow = true;
      this.exceptionDataSource = null;
      this.GetAllExceptionDetails(this.authenticationDetails.userID);
    }
  }
  // *ngIf="!CheckFourtyFeet(S007R1)"
  loadSelectedContainer(value: any): void {
    if (value !== null) {
      this._dashboardService.SRowData = value;
      // const onlyParking: any[] = this.AllTransactionDetails.filter(x => x.CUR_STATUS === 'PENTRY');
      this._router.navigate(['/dashboardDetail']);
      console.log(value);
    }
  }

  CheckFourtyFeet(value: TransactionDetailsByLocationID[]): boolean {
    if (value && value.length) {
     const filteredValue= value.filter(x=>x.CONTAINER_SIZE==='40');
     if(filteredValue.length){
       return true;
     }
    }
    return false;
  }
}
