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
export class MyContainerService {

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

  GetAllMyContainers(ID: Guid): Observable<ReportDetails[] | string> {
    return this._httpClient.get<ReportDetails[]>(`${this.baseAddress}api/CReport/GetAllMyContainers?UserID=${ID}`)
      .pipe(catchError(this.errorHandler));
  }
}

