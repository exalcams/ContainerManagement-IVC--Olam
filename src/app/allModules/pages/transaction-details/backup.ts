// import { Component, OnInit, OnDestroy } from '@angular/core';
// import { AuthenticationDetails } from 'app/models/authentication_details';
// import { NotificationSnackBarComponent } from 'app/notifications/notification-snack-bar/notification-snack-bar.component';
// import { Router, ActivatedRoute } from '@angular/router';
// import { MatSnackBar } from '@angular/material';
// import { TransactionDetailsService } from 'app/services/transaction-details.service';
// import { TransactionDetails, TransDetailsByID } from 'app/models/transaction-details';
// import { } from '@angular/cdk/stepper';
// import { SnackBarStatus } from 'app/notifications/snackbar-status-enum';

// @Component({
//   selector: 'app-transaction-details',
//   templateUrl: './transaction-details.component.html',
//   styleUrls: ['./transaction-details.component.scss']
// })
// export class TransactionDetailsComponent implements OnInit, OnDestroy {

//   authenticationDetails: AuthenticationDetails;
//   notificationSnackBarComponent: NotificationSnackBarComponent;
//   IsProgressBarVisibile: boolean;
//   SelectedTransactionDetails: TransDetailsByID;
//   SelectedID: number;
//   SetIntervalID: any;

//   constructor(
//     private _router: Router,
//     public snackBar: MatSnackBar,
//     private _transactionDetailsService: TransactionDetailsService,
//     private _route: ActivatedRoute
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
//     this._route.params.subscribe(x => {
//       if (x['ID']) {
//         this.SelectedID = +x['ID'];
//       }
//     });
//     if (this.SelectedID) {
//       this.GetSelectedTransactionDetails();
//       this.SetIntervalID = setInterval(() => {
//         this.GetSelectedTransactionDetails();
//       }, 3000);

//     }
//   }

//   ngOnDestroy(): void {
//     // Unsubscribe from all subscriptions
//     if (this.SetIntervalID) {
//       clearInterval(this.SetIntervalID);
//     }
//   }

//   GetSelectedTransactionDetails(): void {
//     // console.log('called');
//     this._transactionDetailsService.GetTransactionDetailsByID(this.SelectedID).subscribe(
//       (data) => {
//         if (data) {
//           this.SelectedTransactionDetails = data as TransDetailsByID;
//           // console.log(this.SelectedTransactionDetails.TransactionDetails.ID);
//           this.IsProgressBarVisibile = false;
//         } else {
//           this.IsProgressBarVisibile = false;
//           this.notificationSnackBarComponent.openSnackBar(`No Details found for ID ${this.SelectedID}`, SnackBarStatus.danger);
//         }
//       },
//       (err) => {
//         console.error(err);
//         this.IsProgressBarVisibile = false;
//         this.notificationSnackBarComponent.openSnackBar(err instanceof Object ? 'Something went wrong' : err, SnackBarStatus.danger);
//       }
//     );
//     // const data = this._transactionDetailsService.GetSelectedTransactionDetails();
//     // if (data) {
//     //   this.SelectedTransactionDetails = data;
//     //   console.log(data as TransactionDetails);
//     //   this.IsProgressBarVisibile = false;

//     // } else {
//     //   this._router.navigate(['/transaction']);
//     // }

//   }

// }



