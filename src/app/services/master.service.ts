import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, Subject } from 'rxjs';
import { _MatChipListMixinBase } from '@angular/material';
import { AuthService } from './auth.service';
import { catchError } from 'rxjs/operators';
import { MenuApp, RoleWithApp, UserWithRole, UserNotification } from 'app/models/master';
import { Guid } from 'guid-typescript';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

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

  // App
  CreateMenuApp(menuApp: MenuApp): Observable<any> {
    return this._httpClient.post<any>(`${this.baseAddress}api/Master/CreateApp`,
      menuApp,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      })
      .pipe(catchError(this.errorHandler));
  }

  GetAllMenuApp(): Observable<MenuApp[] | string> {
    return this._httpClient.get<MenuApp[]>(`${this.baseAddress}api/Master/GetAllApps`)
      .pipe(catchError(this.errorHandler));
  }

  UpdateMenuApp(menuApp: MenuApp): Observable<any> {
    return this._httpClient.post<any>(`${this.baseAddress}api/Master/UpdateApp`,
      menuApp,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      })
      .pipe(catchError(this.errorHandler));
  }

  DeleteMenuApp(menuApp: MenuApp): Observable<any> {
    return this._httpClient.post<any>(`${this.baseAddress}api/Master/DeleteApp`,
      menuApp,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      })
      .pipe(catchError(this.errorHandler));
  }

  // Role
  CreateRole(role: RoleWithApp): Observable<any> {
    return this._httpClient.post<any>(`${this.baseAddress}api/Master/CreateRole`,
      role,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      });
  }

  GetAllRoles(): Observable<RoleWithApp[] | string> {
    return this._httpClient.get<RoleWithApp[]>(`${this.baseAddress}api/Master/GetAllRoles`)
      .pipe(catchError(this.errorHandler));
  }

  GetAllCustomerNos(ID: Guid): Observable<string[] | string> {
    return this._httpClient.get<string[]>(`${this.baseAddress}api/Master/GetAllCustomerNos?UserID=${ID}`)
      .pipe(catchError(this.errorHandler));
  }

  GetAllSalesContractNumber(ID: Guid, customer: string): Observable<string | string> {
    return this._httpClient.get<string>(`${this.baseAddress}api/Master/GetAllSalesContractNumber?UserID=${ID}&CUSTOMER_NO=${customer}`)
      .pipe(catchError(this.errorHandler));
  }




  UpdateRole(role: RoleWithApp): Observable<any> {
    return this._httpClient.post<any>(`${this.baseAddress}api/Master/UpdateRole`,
      role,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      })
      .pipe(catchError(this.errorHandler));
  }

  DeleteRole(role: RoleWithApp): Observable<any> {
    return this._httpClient.post<any>(`${this.baseAddress}api/Master/DeleteRole`,
      role,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      })
      .pipe(catchError(this.errorHandler));
  }

  // Users

  CreateUser1(user: UserWithRole, file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('uploadFile', file, file.name);
    formData.append('userName', user.UserName);

    return this._httpClient.post<any>(`${this.baseAddress}api/Master/CreateUser1`,
      formData,
      // {
      //   headers: new HttpHeaders({
      //     'Content-Type': 'application/json'
      //   })
      // }
    )
      .pipe(catchError(this.errorHandler));
  }

  CreateUser(user: UserWithRole, selectedFile: File): Observable<any> {

    const formData: FormData = new FormData();
    if (selectedFile) {
      formData.append('selectedFile', selectedFile, selectedFile.name);
    }
    // formData.append('UserID', user.UserID.toString());
    formData.append('UserName', user.UserName);
    formData.append('Email', user.Email);
    // formData.append('ContactNumber', user.ContactNumber);
    const contactNo = user.ContactNumber;
    if (contactNo.length === 8) {
      const con = '+225-' + user.ContactNumber;
      formData.append('ContactNumber', con);
    }
    else {
      formData.append('ContactNumber', user.ContactNumber);
    }
    formData.append('Password', user.Password);
    formData.append('RoleID', user.RoleID.toString());
    formData.append('CreatedBy', user.CreatedBy);
    formData.append('PLANT', user.PLANT);
    formData.append('CUSTOMER_NO', user.CUSTOMER_NO);
    formData.append('SALES_CONTRACT_NO', user.SALES_CONTRACT_NO);
    return this._httpClient.post<any>(`${this.baseAddress}api/Master/CreateUser`,
      formData,
      // {
      //   headers: new HttpHeaders({
      //     'Content-Type': 'application/json'
      //   })
      // }
    ).pipe(catchError(this.errorHandler));

  }

  GetAllUsers(): Observable<UserWithRole[] | string> {
    return this._httpClient.get<UserWithRole[]>(`${this.baseAddress}api/Master/GetAllUsers`)
      .pipe(catchError(this.errorHandler));
  }

  UpdateUser(user: UserWithRole, selectedFile: File): Observable<any> {
    const formData: FormData = new FormData();
    if (selectedFile) {
      formData.append('selectedFile', selectedFile, selectedFile.name);
    }
    formData.append('UserID', user.UserID.toString());
    formData.append('UserName', user.UserName);
    formData.append('Email', user.Email);
    formData.append('ContactNumber', user.ContactNumber);
    formData.append('Password', user.Password);
    formData.append('RoleID', user.RoleID.toString());
    formData.append('CreatedBy', user.CreatedBy);
    formData.append('ModifiedBy', user.ModifiedBy);
    formData.append('PLANT', user.PLANT);
    formData.append('CUSTOMER_NO', user.CUSTOMER_NO);
    formData.append('SALES_CONTRACT_NO', user.SALES_CONTRACT_NO);
    return this._httpClient.post<any>(`${this.baseAddress}api/Master/UpdateUser`,
      formData,
      // {
      //   headers: new HttpHeaders({
      //     'Content-Type': 'application/json'
      //   })
      // }
    ).pipe(catchError(this.errorHandler));

  }

  DeleteUser(user: UserWithRole): Observable<any> {
    return this._httpClient.post<any>(`${this.baseAddress}api/Master/DeleteUser`,
      user,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      })
      .pipe(catchError(this.errorHandler));
  }

  GetAllNotificationByUserID(UserID: string): Observable<UserNotification[] | string> {
    return this._httpClient.get<UserNotification[]>(`${this.baseAddress}api/Notification/GetAllNotificationByUserID?UserID=${UserID}`)
      .pipe(catchError(this.errorHandler));
  }

  UpdateNotification(SelectedNotification: UserNotification): Observable<any> {
    return this._httpClient.post<any>(`${this.baseAddress}api/Notification/UpdateNotification`,
      SelectedNotification, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
      .pipe(catchError(this.errorHandler));
  }

}
