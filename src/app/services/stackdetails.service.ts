import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject, throwError } from 'rxjs';
import { AuthService } from './auth.service';
import { AuthenticationDetails } from 'app/models/authentication_details';
import { Guid } from 'guid-typescript';
import { catchError } from 'rxjs/operators';
import {StackDetails } from 'app/models/stackdetails';
import { ReportDetails, ReportFilters } from 'app/models/report';
@Injectable({
    providedIn: 'root'
  })
export class StackDetailsService {

    baseAddress: string;
    NotificationEvent: Subject<any>;
    authenticationDetails: AuthenticationDetails;
    GetNotification(): Observable<any> {
      return this.NotificationEvent.asObservable();
    }
  
    TriggerNotification(eventName: string): void {
      this.NotificationEvent.next(eventName);
    }
  
    constructor(private _httpClient: HttpClient, private _authService: AuthService) {
      this.baseAddress = _authService.baseAddress;
      this.NotificationEvent = new Subject();
      const retrievedObject = localStorage.getItem('authorizationData');
      if (retrievedObject) {
        this.authenticationDetails = JSON.parse(retrievedObject) as AuthenticationDetails;
      }
    }
    // Error Handler
    errorHandler(error: HttpErrorResponse): Observable<string> {
      return throwError(error.error || error.message || 'Server Error');
    }
 
    GetAllStackWithContainerDetails(ID: Guid): Observable<StackDetails[] | string> {
    return this._httpClient.get<StackDetails[]>(`${this.baseAddress}api/TransactionDetails/GetAllStackWithContainerDetails?UserID=${ID}`)
      .pipe(catchError(this.errorHandler));
  }

  GetAll20EmptyReports(ID: Guid): Observable<ReportDetails[] | string> {
    return this._httpClient.get<ReportDetails[]>(`${this.baseAddress}api/CReport/GetAll20EmptyReports?UserID=${ID}`)
      .pipe(catchError(this.errorHandler));
  }

  GetAll40EmptyReports(ID: Guid): Observable<ReportDetails[] | string> {
    return this._httpClient.get<ReportDetails[]>(`${this.baseAddress}api/CReport/GetAll40EmptyReports?UserID=${ID}`)
      .pipe(catchError(this.errorHandler));
  }

  GetAll20FilledReports(ID: Guid): Observable<ReportDetails[] | string> {
    return this._httpClient.get<ReportDetails[]>(`${this.baseAddress}api/CReport/GetAll20FilledReports?UserID=${ID}`)
      .pipe(catchError(this.errorHandler));
  }

  GetAll40FilledReports(ID: Guid): Observable<ReportDetails[] | string> {
    return this._httpClient.get<ReportDetails[]>(`${this.baseAddress}api/CReport/GetAll40FilledReports?UserID=${ID}`)
      .pipe(catchError(this.errorHandler));
  }

  GetAll20DamagedEmptyReports(ID: Guid): Observable<ReportDetails[] | string> {
    return this._httpClient.get<ReportDetails[]>(`${this.baseAddress}api/CReport/GetAll20DamagedEmptyReports?UserID=${ID}`)
      .pipe(catchError(this.errorHandler));
  }

  GetAll40DamagedEmptyReports(ID: Guid): Observable<ReportDetails[] | string> {
    return this._httpClient.get<ReportDetails[]>(`${this.baseAddress}api/CReport/GetAll40DamagedEmptyReports?UserID=${ID}`)
      .pipe(catchError(this.errorHandler));
  }


  GetAll20DamagedEmptyReportsCount(ID: Guid): Observable<number | string> {
    return this._httpClient.get<number>(`${this.baseAddress}api/CReport/GetAll20DamagedEmptyReportsCount?UserID=${ID}`)
      .pipe(catchError(this.errorHandler));
  }
  GetAll40DamagedEmptyReportsCount(ID: Guid): Observable<number | string> {
    return this._httpClient.get<number>(`${this.baseAddress}api/CReport/GetAll40DamagedEmptyReportsCount?UserID=${ID}`)
      .pipe(catchError(this.errorHandler));
  }
  GetAll20FilledReportsCount(ID: Guid): Observable<number | string> {
    return this._httpClient.get<number>(`${this.baseAddress}api/CReport/GetAll20FilledReportsCount?UserID=${ID}`)
      .pipe(catchError(this.errorHandler));
  }

  GetAll40FilledReportsCount(ID: Guid): Observable<number | string> {
    return this._httpClient.get<number>(`${this.baseAddress}api/CReport/GetAll40FilledReportsCount?UserID=${ID}`)
      .pipe(catchError(this.errorHandler));
  }

  GetAll20EmptyReportsCount(ID: Guid): Observable<number | string> {
    return this._httpClient.get<number>(`${this.baseAddress}api/CReport/GetAll20EmptyReportsCount?UserID=${ID}`)
      .pipe(catchError(this.errorHandler));
  }

  GetAll40EmptyReportsCount(ID: Guid): Observable<number | string> {
    return this._httpClient.get<number>(`${this.baseAddress}api/CReport/GetAll40EmptyReportsCount?UserID=${ID}`)
      .pipe(catchError(this.errorHandler));
  }

  
       
  GetAllReportsBasedOnCustomerFilter(reportFilters: ReportFilters): Observable<StackDetails[] | string> {
    return this._httpClient.post<StackDetails[]>(`${this.baseAddress}api/Report/GetAllReportsBasedOnCustomerFilter`, reportFilters)
      .pipe(catchError(this.errorHandler));
  }

  GetAllReportsBasedOnContainerFilter(reportFilters: ReportFilters): Observable<StackDetails[] | string> {
    return this._httpClient.post<StackDetails[]>(`${this.baseAddress}api/Report/GetAllReportsBasedOnContainerFilter`, reportFilters)
      .pipe(catchError(this.errorHandler));
  }

  GetAllReportsBasedOnDateFilter(reportFilters: ReportFilters): Observable<ReportDetails[] | string> {
    return this._httpClient.post<ReportDetails[]>(`${this.baseAddress}api/Report/GetAllReportsBasedOnDateFilter`, reportFilters)
      .pipe(catchError(this.errorHandler));
  }
     
//   GetAllReportsBasedOnDate(ID: Guid, customer: String , fromDate: string , toDate: string): Observable<ReportDetails[] | string> {
//     return this._httpClient.get<ReportDetails[]>(`${this.baseAddress}api/Report/GetAllReportsBasedOnDate?UserID=${ID}`)
//       .pipe(catchError(this.errorHandler));
//   }

  GetAllCustomers(ID: Guid): Observable<string[] | string> {
    return this._httpClient.get<string[]>(`${this.baseAddress}api/Report/GetAllCustomers?UserID=${ID}`)
      .pipe(catchError(this.errorHandler));
  }

  GetAllContainers(ID: Guid): Observable<string[] | string> {
    return this._httpClient.get<string[]>(`${this.baseAddress}api/Report/GetAllContainers?UserID=${ID}`)
      .pipe(catchError(this.errorHandler));
  }

  UpdateSelectedTransaction(stack: StackDetails): Observable<any> {
    return this._httpClient.post<any>(`${this.baseAddress}api/TransactionDetails/UpdateSelectedTransaction`, stack,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      })
      .pipe(catchError(this.errorHandler));
  }
  }

