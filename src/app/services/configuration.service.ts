import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, Subject } from 'rxjs';
import { _MatChipListMixinBase } from '@angular/material';
import { AuthService } from './auth.service';
import { catchError } from 'rxjs/operators';
import { ConfigurationObj, RANGEOBJ } from 'app/models/GatewayModel';
import { Guid } from 'guid-typescript';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  baseAddress: string;
  NotificationEvent: Subject<any>;

  GetNotification(): Observable<any> {
    return this.NotificationEvent.asObservable();
  }

  TriggerNotification(eventName: string): void {
    this.NotificationEvent.next(eventName);
  }

  constructor(private _httpClient: HttpClient, private _authService: AuthService) {
    this.baseAddress = _authService.baseAddress;
    this.NotificationEvent = new Subject();
  }

  // Error Handler
  errorHandler(error: HttpErrorResponse): Observable<string> {
    return throwError(error.error || error.message || 'Server Error');
  }

  GetAllStacksWithContainers(ID: Guid): Observable<string[] | string> {
    return this._httpClient.get<string[]>(`${this.baseAddress}api/G_Configuration/GetAllStacksWithContainers?UserID=${ID}`)
      .pipe(catchError(this.errorHandler));
  }
  
  GetIsRangeStatus(ID: Guid): Observable<RANGEOBJ[] | string> {
    return this._httpClient.get<RANGEOBJ[]>(`${this.baseAddress}api/G_Configuration/GetIsRangeStatus`)
      .pipe(catchError(this.errorHandler));
  }
  // configuration
  PostConfiguration(configuration: ConfigurationObj): Observable<any> {
    return this._httpClient.post<any>(`${this.baseAddress}api/G_Configuration/PostConfigurations`,
      configuration,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      });
  }
  //   G_Configuration/GetAllConfigurations
  GetAllConfigurations(): Observable<ConfigurationObj[] | string> {
    return this._httpClient.get<ConfigurationObj[]>(`${this.baseAddress}api/G_Configuration/GetAllConfigurations`)
      .pipe(catchError(this.errorHandler));
  }
  
  PutConfiguration(configuration: ConfigurationObj): Observable<any> {
    return this._httpClient.post<any>(`${this.baseAddress}api/G_Configuration/PutConfigurations`,
      configuration,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      })
      .pipe(catchError(this.errorHandler));
  }

  // DeleteRole(role: RoleWithApp): Observable<any> {
  //   return this._httpClient.post<any>(`${this.baseAddress}api/Account/DeleteRole`,
  //     role,
  //     {
  //       headers: new HttpHeaders({
  //         'Content-Type': 'application/json'
  //       })
  //     })
  //     .pipe(catchError(this.errorHandler));
  // }

}
