import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable, throwError, Subject } from 'rxjs';
import { TransactionDetails, TransDetailsByID, TransactionDetailsByLocationID } from 'app/models/transaction-details';
import { catchError } from 'rxjs/operators';
import { Guid } from 'guid-typescript';

@Injectable({
  providedIn: 'root'
})
export class TransactionDetailsService {
  baseAddress: string;
  SRowData: TransactionDetailsByLocationID[];

  // TransactionDetailsSelectEvent: Subject<TransactionDetails>;
  SelectedTransactionDetail: TransactionDetails;

  constructor(private _httpClient: HttpClient, private _authService: AuthService) {
    this.baseAddress = _authService.baseAddress;
    // this.TransactionDetailsSelectEvent = new Subject<TransactionDetails>();
  }

  GetSelectedTransactionDetails(): TransactionDetails {
    return this.SelectedTransactionDetail;
  }

  TriggerTransactionDetailsSelection(transactionDetails: TransactionDetails): void {
    this.SelectedTransactionDetail = transactionDetails;
    // this.TransactionDetailsSelectEvent.next(transactionDetails);
  }

  // Error Handler
  errorHandler(error: HttpErrorResponse): Observable<string> {
    return throwError(error.error || error.message || 'Server Error');
  }

  CreateTransactionDetails(transactionDetails: TransactionDetails): Observable<any> {
    return this._httpClient.post<any>(`${this.baseAddress}api/Account/CreateApp`,
      transactionDetails,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      })
      .pipe(catchError(this.errorHandler));
  }

  GetAllTransactionDetails(ID: Guid): Observable<TransactionDetails[] | string> {
    return this._httpClient.get<TransactionDetails[]>(`${this.baseAddress}api/TransactionDetails/GetAllTransactionDetails?UserID=${ID}`)
      .pipe(catchError(this.errorHandler));
  }
  GetAllTransactionDetailsCount(ID: Guid): Observable<number  | string> {
    return this._httpClient.get<number>(`${this.baseAddress}api/TransactionDetails/GetAllTransactionDetailsCount?UserID=${ID}`)
      .pipe(catchError(this.errorHandler));
  }
  
  GetLastTransactionDetails(ID: Guid): Observable<TransactionDetails | string> {
    return this._httpClient.get<TransactionDetails>(`${this.baseAddress}api/TransactionDetails/GetLastTransactionDetails?UserID=${ID}`)
      .pipe(catchError(this.errorHandler));
  }
  
  GetAllExceptionDetails(ID: Guid): Observable<TransactionDetails[] | string> {
    return this._httpClient.get<TransactionDetails[]>(`${this.baseAddress}api/TransactionDetails/GetAllExceptionDetails?UserID=${ID}`)
      .pipe(catchError(this.errorHandler));
  }

  GetAllExceptionDetailsCount(ID: Guid): Observable<number  | string> {
    return this._httpClient.get<number>(`${this.baseAddress}api/TransactionDetails/GetAllExceptionDetailsCount?UserID=${ID}`)
      .pipe(catchError(this.errorHandler));
  }

  GetAllCompletedTransactionDetailsCount(ID: Guid): Observable<number  | string> {
    return this._httpClient.get<number>(`${this.baseAddress}api/TransactionDetails/GetAllCompletedTransactionDetailsCount?UserID=${ID}`)
      .pipe(catchError(this.errorHandler));
  }

  GetAllCompletedTransactionDetails(ID: Guid): Observable<TransactionDetails[] | string> {
    return this._httpClient.get<TransactionDetails[]>(`${this.baseAddress}api/TransactionDetails/GetAllCompletedTransactionDetails?UserID=${ID}`)
      .pipe(catchError(this.errorHandler));
  }

  GetAllTransactionDetailsByLocationID(ID: Guid): Observable<TransactionDetailsByLocationID[] | string> {
    return this._httpClient.get<TransactionDetailsByLocationID[]>(`${this.baseAddress}api/TransactionDetails/GetAllTransactionDetailsByLocationID?UserID=${ID}`)
      .pipe(catchError(this.errorHandler));
  }

  GetTransactionDetailsByID(ID: number, GID: Guid): Observable<TransDetailsByID | string> {
    return this._httpClient.get<TransDetailsByID>(`${this.baseAddress}api/TransactionDetails/GetTransactionDetailsByID?ID=${ID}&UserID=${GID}`)
      .pipe(catchError(this.errorHandler));
  }
  
  GetTransactionDetailsByValue(Value: string, GID: Guid): Observable<TransactionDetails[] | string> {
    return this._httpClient.get<TransactionDetails[]>(`${this.baseAddress}api/TransactionDetails/GetTransactionDetailsByValue?Value=${Value}&UserID=${GID}`)
      .pipe(catchError(this.errorHandler));
  }
  
  UpdateTransactionDetails(transactionDetails: TransactionDetails): Observable<any> {
    return this._httpClient.post<any>(`${this.baseAddress}api/Account/UpdateApp`,
      transactionDetails,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      })
      .pipe(catchError(this.errorHandler));
  }

  DeleteTransactionDetails(transactionDetails: TransactionDetails): Observable<any> {
    return this._httpClient.post<any>(`${this.baseAddress}api/Account/DeleteApp`,
      transactionDetails,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      })
      .pipe(catchError(this.errorHandler));
  }
}
