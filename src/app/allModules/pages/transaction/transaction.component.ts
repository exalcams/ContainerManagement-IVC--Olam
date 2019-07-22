import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatSnackBar } from '@angular/material';
import { DataSource } from '@angular/cdk/collections';
import { merge, Observable, BehaviorSubject, fromEvent, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

import { fuseAnimations } from '@fuse/animations';
import { FuseUtils } from '@fuse/utils';

import { takeUntil } from 'rxjs/internal/operators';
import { TransactionService } from 'app/services/transaction.service';
import { TransactionDetails, TransDetailsByID } from 'app/models/transaction-details';
import { TransactionDetailsService } from 'app/services/transaction-details.service';
import { SnackBarStatus } from 'app/notifications/snackbar-status-enum';
import { Router } from '@angular/router';
import { NotificationSnackBarComponent } from 'app/notifications/notification-snack-bar/notification-snack-bar.component';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss'],
  animations: fuseAnimations
})
export class TransactionComponent implements OnInit {
  notificationSnackBarComponent: NotificationSnackBarComponent;
  IsProgressBarVisibile: boolean;
  SetIntervalID: any;
  SelectedTransactionDetails: TransDetailsByID;
  SelectedID: string;
  AllTransactionDetails: TransactionDetails[] = [];
  SelectedTransactionDeatils: TransactionDetails;
  dataSource: FilesDataSource | null;
  displayedColumns = ['VEHICLE_NO', 'VENDOR', 'DRIVER_DETAILS', 'MATERIAL', 'BAY', 'CUR_STATUS'];
 
  @ViewChild(MatPaginator)
  paginator: MatPaginator;

  @ViewChild(MatSort)
  sort: MatSort;

  @ViewChild('filter')
  filter: ElementRef;

  // Private
  private _unsubscribeAll: Subject<any>;

  constructor(
    private _ecommerceProductsService: TransactionService,
    private _router: Router,
    public snackBar: MatSnackBar,
    private _transactionDetailsService: TransactionDetailsService,
  ) {
    // Set the private defaults
    this._unsubscribeAll = new Subject();
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  ngOnInit(): void {
    this.dataSource = new FilesDataSource(this._ecommerceProductsService, this.paginator, this.sort);

    fromEvent(this.filter.nativeElement, 'keyup')
      .pipe(
        takeUntil(this._unsubscribeAll),
        debounceTime(150),
        distinctUntilChanged()
      )
      .subscribe(() => {
        if (!this.dataSource) {
          return;
        }

        this.dataSource.filter = this.filter.nativeElement.value;
      });
  }

  loadSelectedTransactionDetails(row: TransactionDetails): void {
    this.SelectedTransactionDeatils = row;
    // this._transactionDetailsService.TriggerTransactionDetailsSelection(this.SelectedTransactionDeatils);
    this._router.navigate(['/transactionDetails', this.SelectedTransactionDeatils.TRANS_ID]);
    // console.log(this.SelectedTransactionDeatils);
  }
  // GetSelectedTransactionDetails(): void {
  //   // console.log('called');
  //   if (this.SelectedID === 'parking') {
  //     const onlyParking: any[] = this.AllTransactionDetails.filter(x => x.CUR_STATUS === 'PENTRY');
  //     //  this._router.navigate(['/transaction', value]);
  //     console.log(onlyParking);
  //     this._transactionDetailsService.GetTransactionDetailsByValue(this.SelectedID).subscribe(
  //       (data) => {
  //         if (data) {
  //           this.AllTransactionDetails = data as TransactionDetails[];
  //           this.dataSource = new FilesDataSource(this._ecommerceProductsService, this.paginator, this.sort);
  //           // this.dataSource.paginator = this.paginator;
  //           // this.dataSource.sort = this.sort;
  //           // this.SelectedTransactionDetails = data as TransDetailsByID;
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
  //   }
  //   else if (this.SelectedID === 'loading') {
  //     const onlyLoading: any[] = this.AllTransactionDetails.filter(x => x.CUR_STATUS === 'LENTRY');
  //     console.log(onlyLoading);
  //     this._transactionDetailsService.GetTransactionDetailsByValue(this.SelectedID).subscribe(
  //       (data) => {
  //         if (data) {
  //           this.AllTransactionDetails = data as TransactionDetails[];
  //           // this.dataSource = new MatTableDataSource(this.AllTransactionDetails);
  //           this.dataSource = new FilesDataSource(this._ecommerceProductsService, this.paginator, this.sort);
  //           // this.dataSource.paginator = this.paginator;
  //           // this.dataSource.sort = this.sort;
  //           // this.SelectedTransactionDetails = data as TransDetailsByID;
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
  //     // this._router.navigate(['/transaction', value]);
  //   }
  //   else if (this.SelectedID === 'unloading') {
  //     const onlyUnLoading: any[] = this.AllTransactionDetails.filter(x => x.CUR_STATUS === 'ULENTRY');
  //     console.log(onlyUnLoading);
  //     this._transactionDetailsService.GetTransactionDetailsByValue(this.SelectedID).subscribe(
  //       (data) => {
  //         if (data) {
  //           this.AllTransactionDetails = data as TransactionDetails[];
  //           // this.dataSource = new MatTableDataSource(this.AllTransactionDetails);
  //           this.dataSource = new FilesDataSource(this._ecommerceProductsService, this.paginator, this.sort);
  //           // this.dataSource.paginator = this.paginator;
  //           // this.dataSource.sort = this.sort;
  //           // this.SelectedTransactionDetails = data as TransDetailsByID;
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
  //     // this._router.navigate(['/transaction', value]);
  //   }
  // }
}
export class FilesDataSource extends DataSource<any>
{
  private _filterChange = new BehaviorSubject('');
  private _filteredDataChange = new BehaviorSubject('');
  paginator: MatPaginator;
  sort: MatSort;

  /**
   * Constructor
   *
   * @param {EcommerceProductsService} _ecommerceProductsService
   * @param {MatPaginator} _matPaginator
   * @param {MatSort} _matSort
   */
  constructor(
    private _ecommerceProductsService: TransactionService,
    private _matPaginator: MatPaginator,
    private _matSort: MatSort
  ) {
    super();

    this.filteredData = this._ecommerceProductsService.products;
  }

  /**
   * Connect function called by the table to retrieve one stream containing the data to render.
   *
   * @returns {Observable<any[]>}
   */
  connect(): Observable<any[]> {
    const displayDataChanges = [
      this._ecommerceProductsService.onProductsChanged,
      this._matPaginator.page,
      this._filterChange,
      this._matSort.sortChange
    ];

    return merge(...displayDataChanges)
      .pipe(
        map(() => {
          let data = this._ecommerceProductsService.products.slice();

          data = this.filterData(data);

          this.filteredData = [...data];

          data = this.sortData(data);

          // Grab the page's slice of data.
          const startIndex = this._matPaginator.pageIndex * this._matPaginator.pageSize;
          return data.splice(startIndex, this._matPaginator.pageSize);
        }
        ));
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Accessors
  // -----------------------------------------------------------------------------------------------------

  // Filtered data
  get filteredData(): any {
    return this._filteredDataChange.value;
  }

  set filteredData(value: any) {
    this._filteredDataChange.next(value);
  }

  // Filter
  get filter(): string {
    return this._filterChange.value;
  }

  set filter(filter: string) {
    this._filterChange.next(filter);
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Filter data
   *
   * @param data
   * @returns {any}
   */
  filterData(data): any {
    if (!this.filter) {
      return data;
    }
    return FuseUtils.filterArrayByString(data, this.filter);
  }

  /**
   * Sort data
   *
   * @param data
   * @returns {any[]}
   */
  sortData(data): any[] {
    if (!this._matSort.active || this._matSort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      let propertyA: number | string = '';
      let propertyB: number | string = '';

      switch (this._matSort.active) {
        case 'id':
          [propertyA, propertyB] = [a.id, b.id];
          break;
        case 'name':
          [propertyA, propertyB] = [a.name, b.name];
          break;
        case 'categories':
          [propertyA, propertyB] = [a.categories[0], b.categories[0]];
          break;
        case 'price':
          [propertyA, propertyB] = [a.priceTaxIncl, b.priceTaxIncl];
          break;
        case 'quantity':
          [propertyA, propertyB] = [a.quantity, b.quantity];
          break;
        case 'active':
          [propertyA, propertyB] = [a.active, b.active];
          break;
      }

      const valueA = isNaN(+propertyA) ? propertyA : +propertyA;
      const valueB = isNaN(+propertyB) ? propertyB : +propertyB;

      return (valueA < valueB ? -1 : 1) * (this._matSort.direction === 'asc' ? 1 : -1);
    });
  }

  /**
   * Disconnect
   */
  disconnect(): void {
  }
}

