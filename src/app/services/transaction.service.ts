import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { AuthenticationDetails } from 'app/models/authentication_details';
import { Guid } from 'guid-typescript';
import { TransactionDetailsByLocationID } from 'app/models/transaction-details';

@Injectable()
export class TransactionService implements Resolve<any>
{
    routeParams: any;
    baseAddress: string;
    products: any[];
    qDetails: any[];
    sDetails: any[];
    onProductsChanged: BehaviorSubject<any>;
    authenticationDetails: AuthenticationDetails;
    /**
     * Constructor
     *
     * @param {HttpClient} _httpClient
     */
    constructor(
        private _httpClient: HttpClient, private _authService: AuthService
    ) {
        // Set the defaults
        this.baseAddress = _authService.baseAddress;
        this.onProductsChanged = new BehaviorSubject({});
        const retrievedObject = localStorage.getItem('authorizationData');
        if (retrievedObject) {
            this.authenticationDetails = JSON.parse(retrievedObject) as AuthenticationDetails;
        }
    }

    /**
     * Resolver
     *
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
        this.routeParams = route.params;
        if (this.routeParams.ID) {
            return new Promise((resolve, reject) => {

                Promise.all([
                    this.GetAllTransactionDetails(this.authenticationDetails.userID)
                ]).then(
                    () => {
                        resolve();
                    },
                    reject
                );
            });
        }
        else {
            return new Promise((resolve, reject) => {

                Promise.all([
                    this.GetAllTransactionDetails(this.authenticationDetails.userID),
                   // this.GetAllQueues(this.authenticationDetails.userID),
                  //  this.GetAllStacks(this.authenticationDetails.userID)
                ]).then(
                    () => {
                        resolve();
                    },
                    reject
                );
            });
        }
    }

    /**
     * Get products
     *
     * @returns {Promise<any>}
     */
    GetAllTransactionDetails(ID: Guid): Promise<any> {
        return new Promise((resolve, reject) => {
            this._httpClient.get(`${this.baseAddress}api/TransactionDetails/GetAllTransactionDetails?UserID=${ID}`)
                .subscribe((response: any) => {
                    this.products = response;
                    console.log(this.products);
                    this.onProductsChanged.next(this.products);
                    resolve(response);
                }, reject);
        });
    }

    /**
 * Get product
 *
 * @returns {Promise<any>}
 */
    GetAllTransactionDetail(ID: Guid): Promise<any> {
        return new Promise((resolve, reject) => {
            if (this.routeParams.id === 'new') {
                this.onProductsChanged.next(false);
                resolve(false);
            }
            else {
                this._httpClient.get(`${this.baseAddress}api/TransactionDetails/GetTransactionDetailsByValue?Value=${this.routeParams.ID}&UserID=${ID}`)
                    .subscribe((response: any) => {
                        this.products = response;
                        this.onProductsChanged.next(this.products);
                        resolve(response);
                    }, reject);
            }
        });
    }

    //   G_QApprove/GetAllQApproves

    GetAllQueues(ID: Guid): Promise<any> {
        return new Promise((resolve, reject) => {
            this._httpClient.get(`${this.baseAddress}api/G_Queue/GetAllQueues?UserID=${ID}`)
                .subscribe((response: any) => {
                    this.qDetails = response;
                    console.log(this.qDetails);
                    this.onProductsChanged.next(this.qDetails);
                    resolve(response);
                }, reject);
        });
    }

    GetAllStacks(ID: Guid): Promise<any> {
        return new Promise((resolve, reject) => {
            this._httpClient.get(`${this.baseAddress}api/G_Queue/GetAllStacks?UserID=${ID}`)
                .subscribe((response: any) => {
                    this.sDetails = response;
                    console.log(this.sDetails);
                    this.onProductsChanged.next(this.sDetails);
                    resolve(response);
                }, reject);
        });
    }
}

