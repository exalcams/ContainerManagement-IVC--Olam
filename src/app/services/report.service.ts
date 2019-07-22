import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject, throwError } from 'rxjs';
import { AuthService } from './auth.service';
import { AuthenticationDetails } from 'app/models/authentication_details';
import { Guid } from 'guid-typescript';
import { catchError } from 'rxjs/operators';
import { QueueDetails, StackDetails } from 'app/models/transaction-details';
import { QRequestObj, QApproveObj } from 'app/models/GatewayModel';
import { ReportDetails, ReportFilters } from 'app/models/report';
@Injectable({
    providedIn: 'root'
  })
export class ReportService {

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
   
    GetAllReports(ID: Guid): Observable<ReportDetails[] | string> {
      return this._httpClient.get<ReportDetails[]>(`${this.baseAddress}api/Report/GetAllReports?UserID=${ID}`)
        .pipe(catchError(this.errorHandler));
    }
    GetFullReports(ID: Guid): Observable<ReportDetails[] | string> {
      return this._httpClient.get<ReportDetails[]>(`${this.baseAddress}api/Report/GetFullReports?UserID=${ID}`)
        .pipe(catchError(this.errorHandler));
    }
  
    GetEmptyReports(ID: Guid): Observable<ReportDetails[] | string> {
      return this._httpClient.get<ReportDetails[]>(`${this.baseAddress}api/Report/GetEmptyReports?UserID=${ID}`)
        .pipe(catchError(this.errorHandler));
    }
  
    GetDamageReports(ID: Guid): Observable<ReportDetails[] | string> {
      return this._httpClient.get<ReportDetails[]>(`${this.baseAddress}api/Report/GetDamageReports?UserID=${ID}`)
        .pipe(catchError(this.errorHandler));
    }
  
    GetAllReportsCount(ID: Guid): Observable<number | string> {
      return this._httpClient.get<number>(`${this.baseAddress}api/Report/GetAllReportsCount?UserID=${ID}`)
        .pipe(catchError(this.errorHandler));
    }
  
    GetFullReportsCount(ID: Guid): Observable<number | string> {
      return this._httpClient.get<number>(`${this.baseAddress}api/Report/GetFullReportsCount?UserID=${ID}`)
        .pipe(catchError(this.errorHandler));
    }
  
    GetEmptyReportsCount(ID: Guid): Observable<number | string> {
      return this._httpClient.get<number>(`${this.baseAddress}api/Report/GetEmptyReportsCount?UserID=${ID}`)
        .pipe(catchError(this.errorHandler));
    }
  
    GetDamageReportsCount(ID: Guid): Observable<number | string> {
      return this._httpClient.get<number>(`${this.baseAddress}api/Report/GetDamageReportsCount?UserID=${ID}`)
        .pipe(catchError(this.errorHandler));
    }

  GetAll20EmptyReports(ID: Guid): Observable<ReportDetails[] | string> {
    return this._httpClient.get<ReportDetails[]>(`${this.baseAddress}api/Report/GetAll20EmptyReports?UserID=${ID}`)
      .pipe(catchError(this.errorHandler));
  }

  GetAll40EmptyReports(ID: Guid): Observable<ReportDetails[] | string> {
    return this._httpClient.get<ReportDetails[]>(`${this.baseAddress}api/Report/GetAll40EmptyReports?UserID=${ID}`)
      .pipe(catchError(this.errorHandler));
  }

  GetAll20FilledReports(ID: Guid): Observable<ReportDetails[] | string> {
    return this._httpClient.get<ReportDetails[]>(`${this.baseAddress}api/Report/GetAll20FilledReports?UserID=${ID}`)
      .pipe(catchError(this.errorHandler));
  }

  GetAll40FilledReports(ID: Guid): Observable<ReportDetails[] | string> {
    return this._httpClient.get<ReportDetails[]>(`${this.baseAddress}api/Report/GetAll40FilledReports?UserID=${ID}`)
      .pipe(catchError(this.errorHandler));
  }

  GetAll20DamagedEmptyReports(ID: Guid): Observable<ReportDetails[] | string> {
    return this._httpClient.get<ReportDetails[]>(`${this.baseAddress}api/Report/GetAll20DamagedEmptyReports?UserID=${ID}`)
      .pipe(catchError(this.errorHandler));
  }

  GetAll40DamagedEmptyReports(ID: Guid): Observable<ReportDetails[] | string> {
    return this._httpClient.get<ReportDetails[]>(`${this.baseAddress}api/Report/GetAll40DamagedEmptyReports?UserID=${ID}`)
      .pipe(catchError(this.errorHandler));
  }


  GetAll20DamagedEmptyReportsCount(ID: Guid): Observable<number | string> {
    return this._httpClient.get<number>(`${this.baseAddress}api/Report/GetAll20DamagedEmptyReportsCount?UserID=${ID}`)
      .pipe(catchError(this.errorHandler));
  }
  GetAll40DamagedEmptyReportsCount(ID: Guid): Observable<number | string> {
    return this._httpClient.get<number>(`${this.baseAddress}api/Report/GetAll40DamagedEmptyReportsCount?UserID=${ID}`)
      .pipe(catchError(this.errorHandler));
  }
  GetAll20FilledReportsCount(ID: Guid): Observable<number | string> {
    return this._httpClient.get<number>(`${this.baseAddress}api/Report/GetAll20FilledReportsCount?UserID=${ID}`)
      .pipe(catchError(this.errorHandler));
  }

  GetAll40FilledReportsCount(ID: Guid): Observable<number | string> {
    return this._httpClient.get<number>(`${this.baseAddress}api/Report/GetAll40FilledReportsCount?UserID=${ID}`)
      .pipe(catchError(this.errorHandler));
  }

  GetAll20EmptyReportsCount(ID: Guid): Observable<number | string> {
    return this._httpClient.get<number>(`${this.baseAddress}api/Report/GetAll20EmptyReportsCount?UserID=${ID}`)
      .pipe(catchError(this.errorHandler));
  }

  GetAll40EmptyReportsCount(ID: Guid): Observable<number | string> {
    return this._httpClient.get<number>(`${this.baseAddress}api/Report/GetAll40EmptyReportsCount?UserID=${ID}`)
      .pipe(catchError(this.errorHandler));
  }

  
       
  GetAllReportsBasedOnCustomerFilter(reportFilters: ReportFilters): Observable<ReportDetails[] | string> {
    return this._httpClient.post<ReportDetails[]>(`${this.baseAddress}api/Report/GetAllReportsBasedOnCustomerFilter`, reportFilters)
      .pipe(catchError(this.errorHandler));
  }

  GetAllReportsBasedOnContainerFilter(reportFilters: ReportFilters): Observable<ReportDetails[] | string> {
    return this._httpClient.post<ReportDetails[]>(`${this.baseAddress}api/Report/GetAllReportsBasedOnContainerFilter`, reportFilters)
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

  moveSelectedItemDetailsAbove(stack: StackDetails): Observable<any> {
    return this._httpClient.post<any>(`${this.baseAddress}api/Report/MoveUpOrderAndGetAllStacks`, stack,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      })
      .pipe(catchError(this.errorHandler));
  }
  }

