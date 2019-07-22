// import { Component, OnInit, ViewEncapsulation, ViewChild, ɵConsole } from '@angular/core';
// import { fuseAnimations } from '@fuse/animations';
// import { AuthenticationDetails } from 'app/models/authentication_details';
// import { NotificationSnackBarComponent } from 'app/notifications/notification-snack-bar/notification-snack-bar.component';
// import { MatSnackBar, MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
// import { Router } from '@angular/router';
// import { TransactionDetails, TransactionDetailsByLocationID } from 'app/models/transaction-details';
// import { TransactionDetailsService } from 'app/services/transaction-details.service';
// import { SnackBarStatus } from 'app/notifications/snackbar-status-enum';
// import { Guid } from 'guid-typescript';
// import { TransactionService } from 'app/services/transaction.service';
// @Component({
//   selector: 'app-dashboard',
//   templateUrl: './dashboard.component.html',
//   styleUrls: ['./dashboard.component.scss'],
//   encapsulation: ViewEncapsulation.None,
//   animations: fuseAnimations
// })
// export class DashboardComponent implements OnInit {
//   AllTransactionDetails: TransactionDetails[] = [];
//   AllExceptionDetails: TransactionDetails[] = [];
//   AllCompletedTransactionDetails: TransactionDetails[] = [];
//   LastTransactionDetails: TransactionDetails;
//   AllTransactionDetailsByLocationID: TransactionDetailsByLocationID[] = [];
//   SelectedTransactionDeatils: TransactionDetails;
//   authenticationDetails: AuthenticationDetails;
//   notificationSnackBarComponent: NotificationSnackBarComponent;
//   IsProgressBarVisibile: boolean;
//   SetIntervalID: any;
//   parkingCount: any;
//   totalTrucksCount: number;
//   exceptionTrucksCount: number;
//   completedTransactionsCount: number;
//   availableSpaceCount: string;
//   diagramShow = true;
//   content1Show = false;
//   content1ShowName: string;
//   exceptionTableShow = false;
//   otherTableShow = false;

//   S001R1: TransactionDetailsByLocationID[];
//   S003R1: TransactionDetailsByLocationID[];
//   S005R1: TransactionDetailsByLocationID[];
//   S007R1: TransactionDetailsByLocationID[];
//   S009R1: TransactionDetailsByLocationID[];
//   S011R1: TransactionDetailsByLocationID[];
//   S013R1: TransactionDetailsByLocationID[];
//   S015R1: TransactionDetailsByLocationID[];
//   S017R1: TransactionDetailsByLocationID[];
//   S019R1: TransactionDetailsByLocationID[];

//   S001R2: TransactionDetailsByLocationID[];
//   S003R2: TransactionDetailsByLocationID[];
//   S005R2: TransactionDetailsByLocationID[];
//   S007R2: TransactionDetailsByLocationID[];
//   S009R2: TransactionDetailsByLocationID[];
//   S011R2: TransactionDetailsByLocationID[];
//   S013R2: TransactionDetailsByLocationID[];
//   S015R2: TransactionDetailsByLocationID[];
//   S017R2: TransactionDetailsByLocationID[];
//   S019R2: TransactionDetailsByLocationID[];

//   S001R3: TransactionDetailsByLocationID[];
//   S003R3: TransactionDetailsByLocationID[];
//   S005R3: TransactionDetailsByLocationID[];
//   S007R3: TransactionDetailsByLocationID[];
//   S009R3: TransactionDetailsByLocationID[];
//   S011R3: TransactionDetailsByLocationID[];
//   S013R3: TransactionDetailsByLocationID[];
//   S015R3: TransactionDetailsByLocationID[];
//   S017R3: TransactionDetailsByLocationID[];
//   S019R3: TransactionDetailsByLocationID[];

//   S001R4: TransactionDetailsByLocationID[];
//   S003R4: TransactionDetailsByLocationID[];
//   S005R4: TransactionDetailsByLocationID[];
//   S007R4: TransactionDetailsByLocationID[];
//   S009R4: TransactionDetailsByLocationID[];
//   S011R4: TransactionDetailsByLocationID[];
//   S013R4: TransactionDetailsByLocationID[];
//   S015R4: TransactionDetailsByLocationID[];
//   S017R4: TransactionDetailsByLocationID[];
//   S019R4: TransactionDetailsByLocationID[];

//   S021R1: TransactionDetailsByLocationID[];
//   S023R1: TransactionDetailsByLocationID[];
//   S025R1: TransactionDetailsByLocationID[];
//   S027R1: TransactionDetailsByLocationID[];
//   S029R1: TransactionDetailsByLocationID[];
//   S031R1: TransactionDetailsByLocationID[];
//   S033R1: TransactionDetailsByLocationID[];
//   S035R1: TransactionDetailsByLocationID[];
//   S037R1: TransactionDetailsByLocationID[];
//   S039R1: TransactionDetailsByLocationID[];

//   S021R2: TransactionDetailsByLocationID[];
//   S023R2: TransactionDetailsByLocationID[];
//   S025R2: TransactionDetailsByLocationID[];
//   S027R2: TransactionDetailsByLocationID[];
//   S029R2: TransactionDetailsByLocationID[];
//   S031R2: TransactionDetailsByLocationID[];
//   S033R2: TransactionDetailsByLocationID[];
//   S035R2: TransactionDetailsByLocationID[];
//   S037R2: TransactionDetailsByLocationID[];
//   S039R2: TransactionDetailsByLocationID[];

//   S021R3: TransactionDetailsByLocationID[];
//   S023R3: TransactionDetailsByLocationID[];
//   S025R3: TransactionDetailsByLocationID[];
//   S027R3: TransactionDetailsByLocationID[];
//   S029R3: TransactionDetailsByLocationID[];
//   S031R3: TransactionDetailsByLocationID[];
//   S033R3: TransactionDetailsByLocationID[];
//   S035R3: TransactionDetailsByLocationID[];
//   S037R3: TransactionDetailsByLocationID[];
//   S039R3: TransactionDetailsByLocationID[];

//   S021R4: TransactionDetailsByLocationID[];
//   S023R4: TransactionDetailsByLocationID[];
//   S025R4: TransactionDetailsByLocationID[];
//   S027R4: TransactionDetailsByLocationID[];
//   S029R4: TransactionDetailsByLocationID[];
//   S031R4: TransactionDetailsByLocationID[];
//   S033R4: TransactionDetailsByLocationID[];
//   S035R4: TransactionDetailsByLocationID[];
//   S037R4: TransactionDetailsByLocationID[];
//   S039R4: TransactionDetailsByLocationID[];

//   S041R1: TransactionDetailsByLocationID[];
//   S043R1: TransactionDetailsByLocationID[];
//   S045R1: TransactionDetailsByLocationID[];
//   S047R1: TransactionDetailsByLocationID[];
//   S049R1: TransactionDetailsByLocationID[];
//   S051R1: TransactionDetailsByLocationID[];
//   S053R1: TransactionDetailsByLocationID[];
//   S055R1: TransactionDetailsByLocationID[];
//   S057R1: TransactionDetailsByLocationID[];
//   S059R1: TransactionDetailsByLocationID[];

//   S041R2: TransactionDetailsByLocationID[];
//   S043R2: TransactionDetailsByLocationID[];
//   S045R2: TransactionDetailsByLocationID[];
//   S047R2: TransactionDetailsByLocationID[];
//   S049R2: TransactionDetailsByLocationID[];
//   S051R2: TransactionDetailsByLocationID[];
//   S053R2: TransactionDetailsByLocationID[];
//   S055R2: TransactionDetailsByLocationID[];
//   S057R2: TransactionDetailsByLocationID[];
//   S059R2: TransactionDetailsByLocationID[];

//   S041R3: TransactionDetailsByLocationID[];
//   S043R3: TransactionDetailsByLocationID[];
//   S045R3: TransactionDetailsByLocationID[];
//   S047R3: TransactionDetailsByLocationID[];
//   S049R3: TransactionDetailsByLocationID[];
//   S051R3: TransactionDetailsByLocationID[];
//   S053R3: TransactionDetailsByLocationID[];
//   S055R3: TransactionDetailsByLocationID[];
//   S057R3: TransactionDetailsByLocationID[];
//   S059R3: TransactionDetailsByLocationID[];

//   S041R4: TransactionDetailsByLocationID[];
//   S043R4: TransactionDetailsByLocationID[];
//   S045R4: TransactionDetailsByLocationID[];
//   S047R4: TransactionDetailsByLocationID[];
//   S049R4: TransactionDetailsByLocationID[];
//   S051R4: TransactionDetailsByLocationID[];
//   S053R4: TransactionDetailsByLocationID[];
//   S055R4: TransactionDetailsByLocationID[];
//   S057R4: TransactionDetailsByLocationID[];
//   S059R4: TransactionDetailsByLocationID[];

//   S061R1: TransactionDetailsByLocationID[];
//   S063R1: TransactionDetailsByLocationID[];
//   S065R1: TransactionDetailsByLocationID[];
//   S067R1: TransactionDetailsByLocationID[];
//   S069R1: TransactionDetailsByLocationID[];
//   S071R1: TransactionDetailsByLocationID[];
//   S073R1: TransactionDetailsByLocationID[];
//   S075R1: TransactionDetailsByLocationID[];
//   S077R1: TransactionDetailsByLocationID[];
//   S079R1: TransactionDetailsByLocationID[];

//   S061R2: TransactionDetailsByLocationID[];
//   S063R2: TransactionDetailsByLocationID[];
//   S065R2: TransactionDetailsByLocationID[];
//   S067R2: TransactionDetailsByLocationID[];
//   S069R2: TransactionDetailsByLocationID[];
//   S071R2: TransactionDetailsByLocationID[];
//   S073R2: TransactionDetailsByLocationID[];
//   S075R2: TransactionDetailsByLocationID[];
//   S077R2: TransactionDetailsByLocationID[];
//   S079R2: TransactionDetailsByLocationID[];

//   S061R3: TransactionDetailsByLocationID[];
//   S063R3: TransactionDetailsByLocationID[];
//   S065R3: TransactionDetailsByLocationID[];
//   S067R3: TransactionDetailsByLocationID[];
//   S069R3: TransactionDetailsByLocationID[];
//   S071R3: TransactionDetailsByLocationID[];
//   S073R3: TransactionDetailsByLocationID[];
//   S075R3: TransactionDetailsByLocationID[];
//   S077R3: TransactionDetailsByLocationID[];
//   S079R3: TransactionDetailsByLocationID[];

//   S061R4: TransactionDetailsByLocationID[];
//   S063R4: TransactionDetailsByLocationID[];
//   S065R4: TransactionDetailsByLocationID[];
//   S067R4: TransactionDetailsByLocationID[];
//   S069R4: TransactionDetailsByLocationID[];
//   S071R4: TransactionDetailsByLocationID[];
//   S073R4: TransactionDetailsByLocationID[];
//   S075R4: TransactionDetailsByLocationID[];
//   S077R4: TransactionDetailsByLocationID[];
//   S079R4: TransactionDetailsByLocationID[];

//   S001R5: TransactionDetailsByLocationID[];
//   S003R5: TransactionDetailsByLocationID[];
//   S005R5: TransactionDetailsByLocationID[];
//   S007R5: TransactionDetailsByLocationID[];
//   S009R5: TransactionDetailsByLocationID[];
//   S011R5: TransactionDetailsByLocationID[];
//   S013R5: TransactionDetailsByLocationID[];
//   S015R5: TransactionDetailsByLocationID[];
//   S017R5: TransactionDetailsByLocationID[];
//   S019R5: TransactionDetailsByLocationID[];
//   S021R5: TransactionDetailsByLocationID[];
//   S023R5: TransactionDetailsByLocationID[];
//   S025R5: TransactionDetailsByLocationID[];
//   S027R5: TransactionDetailsByLocationID[];
//   S029R5: TransactionDetailsByLocationID[];
//   S031R5: TransactionDetailsByLocationID[];
//   S033R5: TransactionDetailsByLocationID[];
//   S035R5: TransactionDetailsByLocationID[];
//   S037R5: TransactionDetailsByLocationID[];
//   S039R5: TransactionDetailsByLocationID[];
//   S041R5: TransactionDetailsByLocationID[];
//   S043R5: TransactionDetailsByLocationID[];
//   S045R5: TransactionDetailsByLocationID[];
//   S047R5: TransactionDetailsByLocationID[];
//   S049R5: TransactionDetailsByLocationID[];
//   S051R5: TransactionDetailsByLocationID[];
//   S053R5: TransactionDetailsByLocationID[];
//   S055R5: TransactionDetailsByLocationID[];
//   S057R5: TransactionDetailsByLocationID[];
//   S059R5: TransactionDetailsByLocationID[];
//   S061R5: TransactionDetailsByLocationID[];
//   S063R5: TransactionDetailsByLocationID[];
//   S065R5: TransactionDetailsByLocationID[];
//   S067R5: TransactionDetailsByLocationID[];
//   S069R5: TransactionDetailsByLocationID[];
//   S071R5: TransactionDetailsByLocationID[];
//   S073R5: TransactionDetailsByLocationID[];
//   S075R5: TransactionDetailsByLocationID[];
//   S077R5: TransactionDetailsByLocationID[];
//   S079R5: TransactionDetailsByLocationID[];

//   S001R6: TransactionDetailsByLocationID[];
//   S003R6: TransactionDetailsByLocationID[];
//   S005R6: TransactionDetailsByLocationID[];
//   S007R6: TransactionDetailsByLocationID[];
//   S009R6: TransactionDetailsByLocationID[];
//   S011R6: TransactionDetailsByLocationID[];
//   S013R6: TransactionDetailsByLocationID[];
//   S015R6: TransactionDetailsByLocationID[];
//   S017R6: TransactionDetailsByLocationID[];
//   S019R6: TransactionDetailsByLocationID[];
//   S021R6: TransactionDetailsByLocationID[];
//   S023R6: TransactionDetailsByLocationID[];
//   S025R6: TransactionDetailsByLocationID[];
//   S027R6: TransactionDetailsByLocationID[];
//   S029R6: TransactionDetailsByLocationID[];
//   S031R6: TransactionDetailsByLocationID[];
//   S033R6: TransactionDetailsByLocationID[];
//   S035R6: TransactionDetailsByLocationID[];
//   S037R6: TransactionDetailsByLocationID[];
//   S039R6: TransactionDetailsByLocationID[];
//   S041R6: TransactionDetailsByLocationID[];
//   S043R6: TransactionDetailsByLocationID[];
//   S045R6: TransactionDetailsByLocationID[];
//   S047R6: TransactionDetailsByLocationID[];
//   S049R6: TransactionDetailsByLocationID[];
//   S051R6: TransactionDetailsByLocationID[];
//   S053R6: TransactionDetailsByLocationID[];
//   S055R6: TransactionDetailsByLocationID[];
//   S057R6: TransactionDetailsByLocationID[];
//   S059R6: TransactionDetailsByLocationID[];
//   S061R6: TransactionDetailsByLocationID[];
//   S063R6: TransactionDetailsByLocationID[];
//   S065R6: TransactionDetailsByLocationID[];
//   S067R6: TransactionDetailsByLocationID[];
//   S069R6: TransactionDetailsByLocationID[];
//   S071R6: TransactionDetailsByLocationID[];
//   S073R6: TransactionDetailsByLocationID[];
//   S075R6: TransactionDetailsByLocationID[];
//   S077R6: TransactionDetailsByLocationID[];
//   S079R6: TransactionDetailsByLocationID[];

//   S001R7: TransactionDetailsByLocationID[];
//   S003R7: TransactionDetailsByLocationID[];
//   S005R7: TransactionDetailsByLocationID[];
//   S007R7: TransactionDetailsByLocationID[];
//   S009R7: TransactionDetailsByLocationID[];
//   S011R7: TransactionDetailsByLocationID[];
//   S013R7: TransactionDetailsByLocationID[];
//   S015R7: TransactionDetailsByLocationID[];
//   S017R7: TransactionDetailsByLocationID[];
//   S019R7: TransactionDetailsByLocationID[];
//   S021R7: TransactionDetailsByLocationID[];
//   S023R7: TransactionDetailsByLocationID[];
//   S025R7: TransactionDetailsByLocationID[];
//   S027R7: TransactionDetailsByLocationID[];
//   S029R7: TransactionDetailsByLocationID[];
//   S031R7: TransactionDetailsByLocationID[];
//   S033R7: TransactionDetailsByLocationID[];
//   S035R7: TransactionDetailsByLocationID[];
//   S037R7: TransactionDetailsByLocationID[];
//   S039R7: TransactionDetailsByLocationID[];
//   S041R7: TransactionDetailsByLocationID[];
//   S043R7: TransactionDetailsByLocationID[];
//   S045R7: TransactionDetailsByLocationID[];
//   S047R7: TransactionDetailsByLocationID[];
//   S049R7: TransactionDetailsByLocationID[];
//   S051R7: TransactionDetailsByLocationID[];
//   S053R7: TransactionDetailsByLocationID[];
//   S055R7: TransactionDetailsByLocationID[];
//   S057R7: TransactionDetailsByLocationID[];
//   S059R7: TransactionDetailsByLocationID[];
//   S061R7: TransactionDetailsByLocationID[];
//   S063R7: TransactionDetailsByLocationID[];
//   S065R7: TransactionDetailsByLocationID[];
//   S067R7: TransactionDetailsByLocationID[];
//   S069R7: TransactionDetailsByLocationID[];
//   S071R7: TransactionDetailsByLocationID[];
//   S073R7: TransactionDetailsByLocationID[];
//   S075R7: TransactionDetailsByLocationID[];
//   S077R7: TransactionDetailsByLocationID[];
//   S079R7: TransactionDetailsByLocationID[];

//   S081R1: TransactionDetailsByLocationID[];
//   S083R1: TransactionDetailsByLocationID[];
//   S085R1: TransactionDetailsByLocationID[];
//   S087R1: TransactionDetailsByLocationID[];
//   S089R1: TransactionDetailsByLocationID[];
//   S091R1: TransactionDetailsByLocationID[];
//   S093R1: TransactionDetailsByLocationID[];
//   S095R1: TransactionDetailsByLocationID[];
//   S097R1: TransactionDetailsByLocationID[];
//   S099R1: TransactionDetailsByLocationID[];
//   S101R1: TransactionDetailsByLocationID[];
//   S103R1: TransactionDetailsByLocationID[];

//   S081R2: TransactionDetailsByLocationID[];
//   S083R2: TransactionDetailsByLocationID[];
//   S085R2: TransactionDetailsByLocationID[];
//   S087R2: TransactionDetailsByLocationID[];
//   S089R2: TransactionDetailsByLocationID[];
//   S091R2: TransactionDetailsByLocationID[];
//   S093R2: TransactionDetailsByLocationID[];
//   S095R2: TransactionDetailsByLocationID[];
//   S097R2: TransactionDetailsByLocationID[];
//   S099R2: TransactionDetailsByLocationID[];
//   S101R2: TransactionDetailsByLocationID[];
//   S103R2: TransactionDetailsByLocationID[];

//   S081R3: TransactionDetailsByLocationID[];
//   S083R3: TransactionDetailsByLocationID[];
//   S085R3: TransactionDetailsByLocationID[];
//   S087R3: TransactionDetailsByLocationID[];
//   S089R3: TransactionDetailsByLocationID[];
//   S091R3: TransactionDetailsByLocationID[];
//   S093R3: TransactionDetailsByLocationID[];
//   S095R3: TransactionDetailsByLocationID[];
//   S097R3: TransactionDetailsByLocationID[];
//   S099R3: TransactionDetailsByLocationID[];
//   S101R3: TransactionDetailsByLocationID[];
//   S103R3: TransactionDetailsByLocationID[];

//   S081R4: TransactionDetailsByLocationID[];
//   S083R4: TransactionDetailsByLocationID[];
//   S085R4: TransactionDetailsByLocationID[];
//   S087R4: TransactionDetailsByLocationID[];
//   S089R4: TransactionDetailsByLocationID[];
//   S091R4: TransactionDetailsByLocationID[];
//   S093R4: TransactionDetailsByLocationID[];
//   S095R4: TransactionDetailsByLocationID[];
//   S097R4: TransactionDetailsByLocationID[];
//   S099R4: TransactionDetailsByLocationID[];
//   S101R4: TransactionDetailsByLocationID[];
//   S103R4: TransactionDetailsByLocationID[];

//   S081R5: TransactionDetailsByLocationID[];
//   S083R5: TransactionDetailsByLocationID[];
//   S085R5: TransactionDetailsByLocationID[];
//   S087R5: TransactionDetailsByLocationID[];
//   S089R5: TransactionDetailsByLocationID[];
//   S091R5: TransactionDetailsByLocationID[];
//   S093R5: TransactionDetailsByLocationID[];
//   S095R5: TransactionDetailsByLocationID[];
//   S097R5: TransactionDetailsByLocationID[];
//   S099R5: TransactionDetailsByLocationID[];
//   S101R5: TransactionDetailsByLocationID[];
//   S103R5: TransactionDetailsByLocationID[];

//   S081R6: TransactionDetailsByLocationID[];
//   S083R6: TransactionDetailsByLocationID[];
//   S085R6: TransactionDetailsByLocationID[];
//   S087R6: TransactionDetailsByLocationID[];
//   S089R6: TransactionDetailsByLocationID[];
//   S091R6: TransactionDetailsByLocationID[];
//   S093R6: TransactionDetailsByLocationID[];
//   S095R6: TransactionDetailsByLocationID[];
//   S097R6: TransactionDetailsByLocationID[];
//   S099R6: TransactionDetailsByLocationID[];
//   S101R6: TransactionDetailsByLocationID[];
//   S103R6: TransactionDetailsByLocationID[];

//   S081R7: TransactionDetailsByLocationID[];
//   S083R7: TransactionDetailsByLocationID[];
//   S085R7: TransactionDetailsByLocationID[];
//   S087R7: TransactionDetailsByLocationID[];
//   S089R7: TransactionDetailsByLocationID[];
//   S091R7: TransactionDetailsByLocationID[];
//   S093R7: TransactionDetailsByLocationID[];
//   S095R7: TransactionDetailsByLocationID[];
//   S097R7: TransactionDetailsByLocationID[];
//   S099R7: TransactionDetailsByLocationID[];
//   S101R7: TransactionDetailsByLocationID[];
//   S103R7: TransactionDetailsByLocationID[];

//   // SALES_CONTRACT_NO: string;
//   // CUSTOMER_NAME: string;
//   // AVAILABLE_SPACE: string;
//   displayedColumns = ['BLE_ID', 'CONTAINER_NO', 'CONTAINER_SIZE', 'CUSTOMER_NO', 'CUSTOMER_NAME', 'SALES_CONTRACT_NO', 'LOCATION_ID', 'BOOKING_REFERENCE'];
//   dataSource: MatTableDataSource<TransactionDetails>;

//   displayedColumns1 = ['BLE_ID', 'CONTAINER_NO', 'CONTAINER_SIZE', 'CUSTOMER_NO', 'CUSTOMER_NAME', 'SALES_CONTRACT_NO', 'LOCATION_ID', 'BOOKING_REFERENCE', 'EXCEPTION_MESSAGE'];
//   dataSource1: MatTableDataSource<TransactionDetails>;

//   @ViewChild(MatPaginator) paginator: MatPaginator;

//   @ViewChild(MatSort) sort: MatSort;
//   constructor(
//     private _router: Router,
//     public snackBar: MatSnackBar,
//     private _transactionDetailsService: TransactionDetailsService,

//   ) {
//     this.authenticationDetails = new AuthenticationDetails();
//     this.notificationSnackBarComponent = new NotificationSnackBarComponent(this.snackBar);
//     this.IsProgressBarVisibile = true;
//   }
//   ngOnInit(): void {
//     // Retrive authorizationData
//     const retrievedObject = localStorage.getItem('authorizationData');
//     if (retrievedObject) {
//       this.authenticationDetails = JSON.parse(retrievedObject) as AuthenticationDetails;
//     } else {
//       this._router.navigate(['/auth/login']);
//     }

//     this.GetAllTransactionDetailsCount(this.authenticationDetails.userID);
//     this.GetAllExceptionDetailsCount(this.authenticationDetails.userID);
//     this.GetAllTransactionDetailsByLocationID(this.authenticationDetails.userID);
//     //  this.GetAllCompletedTransactionDetails(this.authenticationDetails.userID);
//     this.GetAllCompletedTransactionDetailsCount(this.authenticationDetails.userID);
//     this.GetLastTransactionDetails(this.authenticationDetails.userID);
//     // this.SetIntervalID = setInterval(() => {
//     //   this.GetAllTransactionDetails();
//     // }, 3000);
//   }

//   // tslint:disable-next-line:use-life-cycle-interface
//   ngOnDestroy(): void {
//     // Unsubscribe from all subscriptions
//     if (this.SetIntervalID) {
//       clearInterval(this.SetIntervalID);
//     }
//   }

//   // tslint:disable-next-line:typedef
//   applyFilter(filterValue: string) {
//     this.dataSource.filter = filterValue.trim().toLowerCase();
//   }

//   // tslint:disable-next-line:typedef
//   applyFilter1(filterValue: string) {
//     this.dataSource1.filter = filterValue.trim().toLowerCase();
//   }

//   GetAllTransactionDetails(ID: Guid): void {
//     this._transactionDetailsService.GetAllTransactionDetails(ID).subscribe(
//       (data) => {
//         //  console.log(data);
//         this.AllTransactionDetails = data as TransactionDetails[];
//         this.dataSource = new MatTableDataSource(this.AllTransactionDetails);
//         this.dataSource.paginator = this.paginator;
//         this.dataSource.sort = this.sort;
//         // this.totalTrucksCount = this.AllTransactionDetails.filter(x => x.CUR_STATUS !== 'EXIT').length;
//         // this.completedTransactionsCount = this.AllTransactionDetails.filter(x => x.CUR_STATUS === 'EXIT').length;
//         // this.exceptionTrucksCount = this.AllTransactionDetails.filter(x => x.ISEXCEPTION === true).length;
//         // this.availableSpaceCount = this.AllTransactionDetails[0].AVAILABLE_SPACE;
//         // if (this.availableSpaceCount === null) {
//         //   this.availableSpaceCount = '0';
//         // }
//         this.IsProgressBarVisibile = false;
//       },
//       (err) => {
//         this.IsProgressBarVisibile = false;
//         this.notificationSnackBarComponent.openSnackBar(err instanceof Object ? 'Something went wrong' : err, SnackBarStatus.danger);
//       }
//     );
//   }

//   GetAllTransactionDetailsCount(ID: Guid): void {
//     this._transactionDetailsService.GetAllTransactionDetails(ID).subscribe(
//       (data) => {
//         this.AllTransactionDetails = data as TransactionDetails[];
//         this.totalTrucksCount = this.AllTransactionDetails.filter(x => x.CUR_STATUS !== 'EXIT').length;
//         this.IsProgressBarVisibile = false;
//       },
//       (err) => {
//         this.IsProgressBarVisibile = false;
//         this.notificationSnackBarComponent.openSnackBar(err instanceof Object ? 'Something went wrong' : err, SnackBarStatus.danger);
//       }
//     );
//   }

//   GetLastTransactionDetails(ID: Guid): void {
//     this._transactionDetailsService.GetLastTransactionDetails(ID).subscribe(
//       (data) => {
//         this.LastTransactionDetails = data as TransactionDetails;
//         if (this.LastTransactionDetails != null) {
//           this.availableSpaceCount = this.LastTransactionDetails.AVAILABLE_SPACE;
//           if (this.availableSpaceCount === null) {
//             this.availableSpaceCount = '0';
//           }
//         }
//         else {
//           this.availableSpaceCount = '0';
//         }

//       },
//       (err) => {
//         this.IsProgressBarVisibile = false;
//         this.notificationSnackBarComponent.openSnackBar(err instanceof Object ? 'Something went wrong' : err, SnackBarStatus.danger);
//       }
//     );
//   }

//   GetAllExceptionDetailsCount(ID: Guid): void {
//     this._transactionDetailsService.GetAllExceptionDetailsCount(ID).subscribe(
//       (data) => {
//         this.exceptionTrucksCount = data as number;
//         console.log(this.exceptionTrucksCount);
//         this.IsProgressBarVisibile = false;
//       },
//       (err) => {
//         this.IsProgressBarVisibile = false;
//         this.notificationSnackBarComponent.openSnackBar(err instanceof Object ? 'Something went wrong' : err, SnackBarStatus.danger);
//       }
//     );
//   }

//   GetAllExceptionDetails(ID: Guid): void {
//     this._transactionDetailsService.GetAllExceptionDetails(ID).subscribe(
//       (data) => {
//         this.AllExceptionDetails = data as TransactionDetails[];
//         this.exceptionTrucksCount = this.AllExceptionDetails.length;
//         this.dataSource1 = new MatTableDataSource(this.AllExceptionDetails);
//         this.dataSource1.paginator = this.paginator;
//         this.dataSource1.sort = this.sort;
//         this.IsProgressBarVisibile = false;
//       },
//       (err) => {
//         this.IsProgressBarVisibile = false;
//         this.notificationSnackBarComponent.openSnackBar(err instanceof Object ? 'Something went wrong' : err, SnackBarStatus.danger);
//       }
//     );
//   }

//   GetAllCompletedTransactionDetailsCount(ID: Guid): void {
//     this._transactionDetailsService.GetAllCompletedTransactionDetailsCount(ID).subscribe(
//       (data) => {
//         this.completedTransactionsCount = data as number;
//         console.log(this.completedTransactionsCount);
//         this.IsProgressBarVisibile = false;
//       },
//       (err) => {
//         this.IsProgressBarVisibile = false;
//         this.notificationSnackBarComponent.openSnackBar(err instanceof Object ? 'Something went wrong' : err, SnackBarStatus.danger);
//       }
//     );
//   }

//   GetAllCompletedTransactionDetails(ID: Guid): void {
//     this._transactionDetailsService.GetAllCompletedTransactionDetails(ID).subscribe(
//       (data) => {
//         this.AllCompletedTransactionDetails = data as TransactionDetails[];
//         this.completedTransactionsCount = this.AllCompletedTransactionDetails.length;
//         this.dataSource = new MatTableDataSource(this.AllCompletedTransactionDetails);
//         this.dataSource.paginator = this.paginator;
//         this.dataSource.sort = this.sort;
//         this.IsProgressBarVisibile = false;
//       },
//       (err) => {
//         this.IsProgressBarVisibile = false;
//         this.notificationSnackBarComponent.openSnackBar(err instanceof Object ? 'Something went wrong' : err, SnackBarStatus.danger);
//       }
//     );
//   }

//   GetAllTransactionDetailsByLocationID(ID: Guid): void {
//     this._transactionDetailsService.GetAllTransactionDetailsByLocationID(ID).subscribe(
//       (data) => {
//         this.AllTransactionDetailsByLocationID = data as TransactionDetailsByLocationID[];
//         this.S001R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S001R1'));
//         this.S003R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S003R1'));
//         this.S005R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S005R1') || x.LOCATION_ID.match('S006R1'));

//         this.S007R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S007R1') || x.LOCATION_ID.match('S006R1') || x.LOCATION_ID.match('S008R1'));
//         this.S009R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S009R1') || x.LOCATION_ID.match('S008R1') || x.LOCATION_ID.match('S010R1'));
//         this.S011R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S011R1') || x.LOCATION_ID.match('S010R1') || x.LOCATION_ID.match('S012R1'));
//         this.S013R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S013R1') || x.LOCATION_ID.match('S012R1') || x.LOCATION_ID.match('S014R1'));
//         this.S015R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S015R1') || x.LOCATION_ID.match('S014R1') || x.LOCATION_ID.match('S016R1'));
//         this.S017R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S017R1') || x.LOCATION_ID.match('S016R1') || x.LOCATION_ID.match('S018R1'));
//         this.S019R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S019R1') || x.LOCATION_ID.match('S018R1') || x.LOCATION_ID.match('S020R1'));

//         this.S001R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S001R2'));
//         this.S003R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S003R2'));
//         this.S005R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S005R2'));
//         this.S007R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S007R2'));
//         this.S009R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S009R2'));
//         this.S011R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S011R2'));
//         this.S013R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S013R2'));
//         this.S015R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S015R2'));
//         this.S017R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S017R2'));
//         this.S019R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S019R2'));


//         this.S001R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S001R3'));
//         this.S003R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S003R3'));
//         this.S005R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S005R3'));
//         this.S007R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S007R3'));
//         this.S009R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S009R3'));
//         this.S011R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S011R3'));
//         this.S013R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S013R3'));
//         this.S015R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S015R3'));
//         this.S017R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S017R3'));
//         this.S019R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S019R3'));


//         this.S001R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S001R4'));
//         this.S003R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S003R4'));
//         this.S005R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S005R4'));
//         this.S007R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S007R4'));
//         this.S009R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S009R4'));
//         this.S011R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S011R4'));
//         this.S013R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S013R4'));
//         this.S015R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S015R4'));
//         this.S017R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S017R4'));
//         this.S019R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S019R4'));

//         this.S021R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S021R1'));
//         this.S023R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S023R1'));
//         this.S025R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S025R1'));
//         this.S027R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S027R1'));
//         this.S029R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S029R1'));
//         this.S031R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S031R1'));
//         this.S033R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S033R1'));
//         this.S035R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S035R1'));
//         this.S037R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S037R1'));
//         this.S039R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S039R1'));


//         this.S021R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S021R2'));
//         this.S023R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S023R2'));
//         this.S025R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S025R2'));
//         this.S027R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S027R2'));
//         this.S029R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S029R2'));
//         this.S031R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S031R2'));
//         this.S033R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S033R2'));
//         this.S035R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S035R2'));
//         this.S037R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S037R2'));
//         this.S039R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S039R2'));

//         this.S021R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S021R3'));
//         this.S023R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S023R3'));
//         this.S025R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S025R3'));
//         this.S027R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S027R3'));
//         this.S029R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S029R3'));
//         this.S031R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S031R3'));
//         this.S033R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S033R3'));
//         this.S035R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S035R3'));
//         this.S037R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S037R3'));
//         this.S039R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S039R3'));

//         this.S021R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S021R4'));
//         this.S023R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S023R4'));
//         this.S025R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S025R4'));
//         this.S027R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S027R4'));
//         this.S029R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S029R4'));
//         this.S031R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S031R4'));
//         this.S033R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S033R4'));
//         this.S035R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S035R4'));
//         this.S037R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S037R4'));
//         this.S039R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S039R4'));


//         this.S041R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S041R1'));
//         this.S043R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S043R1'));
//         this.S045R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S045R1'));
//         this.S047R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S047R1'));
//         this.S049R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S049R1'));
//         this.S051R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S051R1'));
//         this.S053R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S053R1'));
//         this.S055R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S055R1'));
//         this.S057R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S057R1'));
//         this.S059R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S059R1'));


//         this.S041R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S041R2'));
//         this.S043R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S043R2'));
//         this.S045R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S045R2'));
//         this.S047R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S047R2'));
//         this.S049R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S049R2'));
//         this.S051R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S051R2'));
//         this.S053R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S053R2'));
//         this.S055R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S055R2'));
//         this.S057R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S057R2'));
//         this.S059R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S059R2'));


//         this.S041R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S041R3'));
//         this.S043R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S043R3'));
//         this.S045R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S045R3'));
//         this.S047R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S047R3'));
//         this.S049R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S049R3'));
//         this.S051R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S051R3'));
//         this.S053R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S053R3'));
//         this.S055R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S055R3'));
//         this.S057R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S057R3'));
//         this.S059R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S059R3'));


//         this.S041R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S041R4'));
//         this.S043R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S043R4'));
//         this.S045R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S045R4'));
//         this.S047R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S047R4'));
//         this.S049R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S049R4'));
//         this.S051R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S051R4'));
//         this.S053R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S053R4'));
//         this.S055R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S055R4'));
//         this.S057R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S057R4'));
//         this.S059R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S059R4'));

//         this.S061R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S061R1'));
//         this.S063R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S063R1'));
//         this.S065R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S065R1'));
//         this.S067R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S067R1'));
//         this.S069R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S069R1'));
//         this.S071R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S071R1'));
//         this.S073R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S073R1'));
//         this.S075R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S075R1'));
//         this.S077R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S077R1'));
//         this.S079R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S079R1'));


//         this.S061R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S061R2'));
//         this.S063R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S063R2'));
//         this.S065R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S065R2'));
//         this.S067R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S067R2'));
//         this.S069R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S069R2'));
//         this.S071R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S071R2'));
//         this.S073R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S073R2'));
//         this.S075R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S075R2'));
//         this.S077R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S077R2'));
//         this.S079R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S079R2'));


//         this.S061R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S061R3'));
//         this.S063R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S063R3'));
//         this.S065R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S065R3'));
//         this.S067R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S067R3'));
//         this.S069R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S069R3'));
//         this.S071R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S071R3'));
//         this.S073R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S073R3'));
//         this.S075R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S075R3'));
//         this.S077R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S077R3'));
//         this.S079R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S079R3'));

//         this.S061R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S061R4'));
//         this.S063R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S063R4'));
//         this.S065R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S065R4'));
//         this.S067R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S067R4'));
//         this.S069R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S069R4'));
//         this.S071R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S071R4'));
//         this.S073R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S073R4'));
//         this.S075R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S075R4'));
//         this.S077R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S077R4'));
//         this.S079R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S079R4'));

//         this.S001R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S001R5'));
//         this.S003R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S003R5'));
//         this.S005R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S005R5'));
//         this.S007R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S007R5'));
//         this.S009R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S009R5'));
//         this.S011R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S011R5'));
//         this.S013R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S013R5'));
//         this.S015R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S015R5'));
//         this.S017R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S017R5'));
//         this.S019R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S019R5'));

//         this.S021R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S021R5'));
//         this.S023R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S023R5'));
//         this.S025R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S025R5'));
//         this.S027R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S027R5'));
//         this.S029R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S029R5'));
//         this.S031R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S031R5'));
//         this.S033R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S033R5'));
//         this.S035R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S035R5'));
//         this.S037R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S037R5'));
//         this.S039R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S039R5'));

//         this.S041R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S041R5'));
//         this.S043R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S043R5'));
//         this.S045R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S045R5'));
//         this.S047R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S047R5'));
//         this.S049R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S049R5'));
//         this.S051R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S051R5'));
//         this.S053R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S053R5'));
//         this.S055R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S055R5'));
//         this.S057R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S057R5'));
//         this.S059R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S059R5'));

//         this.S061R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S061R5'));
//         this.S063R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S063R5'));
//         this.S065R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S065R5'));
//         this.S067R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S067R5'));
//         this.S069R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S069R5'));
//         this.S071R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S071R5'));
//         this.S073R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S073R5'));
//         this.S075R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S075R5'));
//         this.S077R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S077R5'));
//         this.S079R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S079R5'));

//         this.S001R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S001R6'));
//         this.S003R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S003R6'));
//         this.S005R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S005R6'));
//         this.S007R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S007R6'));
//         this.S009R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S009R6'));
//         this.S011R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S011R6'));
//         this.S013R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S013R6'));
//         this.S015R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S015R6'));
//         this.S017R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S017R6'));
//         this.S019R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S019R6'));

//         this.S021R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S021R6'));
//         this.S023R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S023R6'));
//         this.S025R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S025R6'));
//         this.S027R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S027R6'));
//         this.S029R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S029R6'));
//         this.S031R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S031R6'));
//         this.S033R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S033R6'));
//         this.S035R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S035R6'));
//         this.S037R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S037R6'));
//         this.S039R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S039R6'));

//         this.S041R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S041R6'));
//         this.S043R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S043R6'));
//         this.S045R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S045R6'));
//         this.S047R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S047R6'));
//         this.S049R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S049R6'));
//         this.S051R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S051R6'));
//         this.S053R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S053R6'));
//         this.S055R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S055R6'));
//         this.S057R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S057R6'));
//         this.S059R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S059R6'));

//         this.S061R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S061R6'));
//         this.S063R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S063R6'));
//         this.S065R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S065R6'));
//         this.S067R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S067R6'));
//         this.S069R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S069R6'));
//         this.S071R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S071R6'));
//         this.S073R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S073R6'));
//         this.S075R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S075R6'));
//         this.S077R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S077R6'));
//         this.S079R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S079R6'));

//         this.S001R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S001R7'));
//         this.S003R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S003R7'));
//         this.S005R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S005R7'));
//         this.S007R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S007R7'));
//         this.S009R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S009R7'));
//         this.S011R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S011R7'));
//         this.S013R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S013R7'));
//         this.S015R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S015R7'));
//         this.S017R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S017R7'));
//         this.S019R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S019R7'));

//         this.S021R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S021R7'));
//         this.S023R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S023R7'));
//         this.S025R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S025R7'));
//         this.S027R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S027R7'));
//         this.S029R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S029R7'));
//         this.S031R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S031R7'));
//         this.S033R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S033R7'));
//         this.S035R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S035R7'));
//         this.S037R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S037R7'));
//         this.S039R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S039R7'));

//         this.S041R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S041R7'));
//         this.S043R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S043R7'));
//         this.S045R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S045R7'));
//         this.S047R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S047R7'));
//         this.S049R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S049R7'));
//         this.S051R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S051R7'));
//         this.S053R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S053R7'));
//         this.S055R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S055R7'));
//         this.S057R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S057R7'));
//         this.S059R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S059R7'));

//         this.S061R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S061R7'));
//         this.S063R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S063R7'));
//         this.S065R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S065R7'));
//         this.S067R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S067R7'));
//         this.S069R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S069R7'));
//         this.S071R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S071R7'));
//         this.S073R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S073R7'));
//         this.S075R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S075R7'));
//         this.S077R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S077R7'));
//         this.S079R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S079R7'));

//         this.S081R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S081R1'));
//         this.S083R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S083R1'));
//         this.S085R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S085R1'));
//         this.S087R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S087R1'));
//         this.S089R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S089R1'));
//         this.S091R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S091R1'));
//         this.S093R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S093R1'));
//         this.S095R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S095R1'));
//         this.S097R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S097R1'));
//         this.S099R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S099R1'));
//         this.S101R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S101R1'));
//         this.S103R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S103R1'));

//         this.S081R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S081R2'));
//         this.S083R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S083R2'));
//         this.S085R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S085R2'));
//         this.S087R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S087R2'));
//         this.S089R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S089R2'));
//         this.S091R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S091R2'));
//         this.S093R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S093R2'));
//         this.S095R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S095R2'));
//         this.S097R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S097R2'));
//         this.S099R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S099R2'));
//         this.S101R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S101R2'));
//         this.S103R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S103R2'));

//         this.S081R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S081R3'));
//         this.S083R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S083R3'));
//         this.S085R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S085R3'));
//         this.S087R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S087R3'));
//         this.S089R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S089R3'));
//         this.S091R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S091R3'));
//         this.S093R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S093R3'));
//         this.S095R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S095R3'));
//         this.S097R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S097R3'));
//         this.S099R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S099R3'));
//         this.S101R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S101R3'));
//         this.S103R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S103R3'));

//         this.S081R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S081R4'));
//         this.S083R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S083R4'));
//         this.S085R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S085R4'));
//         this.S087R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S087R4'));
//         this.S089R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S089R4'));
//         this.S091R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S091R4'));
//         this.S093R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S093R4'));
//         this.S095R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S095R4'));
//         this.S097R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S097R4'));
//         this.S099R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S099R4'));
//         this.S101R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S101R4'));
//         this.S103R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S103R4'));

//         this.S081R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S081R5'));
//         this.S083R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S083R5'));
//         this.S085R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S085R5'));
//         this.S087R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S087R5'));
//         this.S089R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S089R5'));
//         this.S091R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S091R5'));
//         this.S093R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S093R5'));
//         this.S095R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S095R5'));
//         this.S097R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S097R5'));
//         this.S099R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S099R5'));
//         this.S101R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S101R5'));
//         this.S103R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S103R5'));

//         this.S081R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S081R6'));
//         this.S083R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S083R6'));
//         this.S085R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S085R6'));
//         this.S087R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S087R6'));
//         this.S089R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S089R6'));
//         this.S091R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S091R6'));
//         this.S093R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S093R6'));
//         this.S095R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S095R6'));
//         this.S097R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S097R6'));
//         this.S099R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S099R6'));
//         this.S101R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S101R6'));
//         this.S103R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S103R6'));

//         this.S081R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S081R7'));
//         this.S083R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S083R7'));
//         this.S085R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S085R7'));
//         this.S087R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S087R7'));
//         this.S089R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S089R7'));
//         this.S091R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S091R7'));
//         this.S093R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S093R7'));
//         this.S095R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S095R7'));
//         this.S097R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S097R7'));
//         this.S099R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S099R7'));
//         this.S101R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S101R7'));
//         this.S103R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S103R7'));
//       },
//       (err) => {
//         this.IsProgressBarVisibile = false;
//         this.notificationSnackBarComponent.openSnackBar(err instanceof Object ? 'Something went wrong' : err, SnackBarStatus.danger);
//       }
//     );
//   }

//   loadSelectedTransactionDetails(value: string): void {
//     if (value === 'total') {
//       this.diagramShow = false;
//       this.content1ShowName = 'Total Containers';
//       this.content1Show = true;
//       this.otherTableShow = true;
//       this.exceptionTableShow = false;
//       // const onlyTotalTrucks: any[] = this.AllTransactionDetails.filter(x => x.CUR_STATUS !== 'EXIT');
//       // console.log(onlyTotalTrucks);
//       this.dataSource = null;
//       this.GetAllTransactionDetails(this.authenticationDetails.userID);
//       // this.dataSource = new MatTableDataSource(onlyTotalTrucks);
//       // this.dataSource.paginator = this.paginator;
//       // this.dataSource.sort = this.sort;
//     }
//     else if (value === 'completed') {
//       this.diagramShow = false;
//       this.content1ShowName = 'Completed Containers';
//       this.content1Show = true;
//       this.otherTableShow = true;
//       this.exceptionTableShow = false;
//       // this.otherTableShow = true;
//       // this.exceptionTableShow = false;
//       // const onlyCompletedTrucks: any[] = this.AllTransactionDetails.filter(x => x.CUR_STATUS === 'EXIT');
//       // console.log(onlyCompletedTrucks);
//       this.dataSource = null;
//       this.GetAllCompletedTransactionDetails(this.authenticationDetails.userID);
//       // this.dataSource = new MatTableDataSource(onlyCompletedTrucks);
//       // this.dataSource.paginator = this.paginator;
//       // this.dataSource.sort = this.sort;
//     }
//     else if (value === 'exception') {
//       this.diagramShow = false;
//       this.content1ShowName = 'Exceptions';
//       this.content1Show = true;
//       this.otherTableShow = false;
//       this.exceptionTableShow = true;
//       this.dataSource = null;
//       this.GetAllExceptionDetails(this.authenticationDetails.userID);
//       // const onlyExceptionTrucks: any[] = this.AllTransactionDetails.filter(x => x.FLAG === 'E');
//       // console.log(onlyExceptionTrucks);
//       // this.dataSource = new MatTableDataSource(onlyExceptionTrucks);
//       // this.dataSource.paginator = this.paginator;
//       // this.dataSource.sort = this.sort;
//     }
//     else if (value === 'duration') {
//       this.diagramShow = false;
//       this.content1ShowName = 'IOT Containers';
//       this.content1Show = true;
//       this.otherTableShow = true;
//       this.exceptionTableShow = false;
//       this.dataSource = null;
//       const onlyDurationTrucks: any[] = this.AllTransactionDetails.filter(x => x.CUR_STATUS !== 'EXIT');
//       console.log(onlyDurationTrucks);
//       this.dataSource = new MatTableDataSource(onlyDurationTrucks);
//       this.dataSource.paginator = this.paginator;
//       this.dataSource.sort = this.sort;
//     }
//   }

//   loadSelectedContainer(value: any): void {
//     if (value !== null) {
//       this._transactionDetailsService.SRowData = value;
//       // const onlyParking: any[] = this.AllTransactionDetails.filter(x => x.CUR_STATUS === 'PENTRY');
//       this._router.navigate(['/dashboardDetail']);
//       console.log(value);
//     }
//   }
// }
