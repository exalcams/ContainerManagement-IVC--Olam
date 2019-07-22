import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ContainerDetailsComponent } from './container-details/container-details.component';
import { ContainerDetails } from 'app/models/container-model';
import { TransactionDetailsService } from 'app/services/transaction-details.service';
import { TransactionDetailsByLocationID } from 'app/models/transaction-details';

@Component({
  selector: 'dashboard-detail',
  templateUrl: './dashboard-detail.component.html',
  styleUrls: ['./dashboard-detail.component.scss']
})
export class DashboardDetailComponent implements OnInit {

  container: ContainerDetails[];
  containerDetails: any;
  SRowData: TransactionDetailsByLocationID[];
  public LOGO = require('assets/images/dashboard/Container 1.png');

  @ViewChild('containerInfo')
  containerInfo: ContainerDetailsComponent;

  constructor(public _matDialog: MatDialog,
    private _transactionDetailsService: TransactionDetailsService) {
    // this.
    // tslint:disable-next-line:max-line-length
    //  this.container = [{ containerNo: 1001, transpoter: 'Alok', containerType: 'Type', containerSize: 'Small Size', sealNumber: 3444, exittime: '6:30 Pm', currentStatus: 'Entry', releaseOrderNumber: 7335 },
    // tslint:disable-next-line:max-line-length
    //  { containerNo: 1002, transpoter: 'Reena', containerType: 'Type', containerSize: 'Small Size', sealNumber: 3444, exittime: '6:30 Pm', currentStatus: 'Entry', releaseOrderNumber: 7335 },
    // tslint:disable-next-line:max-line-length
    // { containerNo: 1003, transpoter: 'Ram', containerType: 'Type', containerSize: 'Small Size', sealNumber: 3444, exittime: '6:30 Pm', currentStatus: 'Entry', releaseOrderNumber: 7335 },
    // tslint:disable-next-line:max-line-length
    //   //  { containerNo: 1004, transpoter: 'Ram',containerType:'Type',containerSize:'Small Size',sealNumber:3444,exittime:'6:30 Pm',currentStatus:'Entry',releaseOrderNumber:7335},
    // tslint:disable-next-line:max-line-length
    //   //  { containerNo: 1005, transpoter: 'Ram',containerType:'Type',containerSize:'Small Size',sealNumber:3444,exittime:'6:30 Pm',currentStatus:'Entry',releaseOrderNumber:7335},
    // ];

  }
  // tslint:disable-next-line:typedef
  ngOnInit() {
    // console.log(this.container);
    this.SRowData = this._transactionDetailsService.SRowData;
    this.SRowData.sort((a, b) => a.LOCATION_ID.localeCompare(b.LOCATION_ID));
    console.log(this.SRowData);
  }

  loadContainerdetails(containerData: any): void {
    console.log(containerData);
    const dialogConfig = new MatDialogConfig();

    // dialogConfig.disableClose = false;
    // dialogConfig.autoFocus = true;
    // {LOCATION_ID: "S9R4H1", CONTAINER_NO: "103"}
    dialogConfig.panelClass = 'container-details';
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
    // <!-- TRANS_ID: number;
    // ITEM_ID: number;
    // CUSTOMER_NO: string;
    // TRANSPORTER: string;
    // ENTRY_TIME?: Date;
    // EXIT_TIME?: Date;
    // CUR_STATUS: string;
    // CONTAINER_NO: string;
    // CONTAINER_SIZE: string;
    // CONTAINER_TYPE: string;
    // COLOR: string;
    // ISACTIVE: Boolean;
    // LOCATION_ID: string;
    // LINE_NUMBER: string;
    // RELEASE_ORDER_NUMBER: string;
    // CLEAN_TYPE: string;
    // SEAL_NUMBER: string;

    // DRIVER_NAME: string;
    // DRIVER_DOB: string;
    // LICENSE_NUMBER: string;
    // LICENSE_EXPIRY: string;
    // HELPER_NAME: string;
    // HELPER_DOB: string;
    // HELPER_ID_EXPIRY: string;
    // RETURNABLE_GOODS: string;

    // TRANSPORT_VENDOR: string;
    // GATE_NUMBER: string;
    // TRANSACTION_TYPE: string;


    // dialogConfig.data = containerData;
    // console.log(dialogConfig.data);
    // this._matDialog.open(ContainerDetailsComponent, dialogConfig);

    const dialogRef = this._matDialog.open(ContainerDetailsComponent, dialogConfig);

    // dialogRef.afterClosed().subscribe(
    //   data => console.log('Dialog output:', data)
    // );
  }
  // tslint:disable-next-line:max-line-length
  // containerdetails(containerNo: number, transpoter: string, containerType: string, containerSize: string, sealNumber: number, exittime: string, currentStatus: string, releaseOrderNumber: number) {
  //   // alert(containerNo); 
  //   const dialogConfig = new MatDialogConfig();

  //   dialogConfig.disableClose = true;
  //   dialogConfig.autoFocus = true;

  //   dialogConfig.data = {
  //     containerNo: containerNo,
  //     transpoter: transpoter,
  //     containerType: containerType,
  //     containerSize: containerSize,
  //     sealNumber: sealNumber,
  //     exittime: exittime,
  //     currentStatus: currentStatus,
  //     releaseOrderNumber: releaseOrderNumber
  //   };
  //   // this._matDialog.open(ContainerDetailsComponent, dialogConfig);

  //   const dialogRef = this._matDialog.open(ContainerDetailsComponent, dialogConfig);

  //   dialogRef.afterClosed().subscribe(
  //     data => console.log('Dialog output:', data)
  //   );
  // }
}
