import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { MenuApp } from 'app/models/menu-app';
import { NotificationSnackBarComponent } from 'app/notifications/notification-snack-bar/notification-snack-bar.component';
import { MatSnackBar } from '@angular/material';
import { SnackBarStatus } from 'app/notifications/snackbar-status-enum';
import { AuthenticationDetails } from 'app/models/user-details';
import { StackUpdateObj, RANGEOBJ } from 'app/models/GatewayModel';
import { StackUpdateService } from 'app/services/stackupdate.service';

@Component({
  selector: 'app-stackupdate-right-bar',
  templateUrl: './stackupdate-right-bar.component.html',
  styleUrls: ['./stackupdate-right-bar.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations
})
export class StackUpdateRightBarComponent implements OnInit, OnChanges {

  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;

  @Input() currentSelectedStackUpdate: StackUpdateObj = new StackUpdateObj();
  @Output() SaveSucceed: EventEmitter<string> = new EventEmitter<string>();
  @Output() ShowProgressBarEvent: EventEmitter<string> = new EventEmitter<string>();
  stackupdate: StackUpdateObj;
  RangeList: RANGEOBJ[] = [];
  stackupdateMainFormGroup: FormGroup;
  AllMenuApps: MenuApp[] = [];
  IsRange: boolean;
  GatewayId: string;
  // AllTypeOptions: any;
  // AllStationOptions: any;
  AllStationOptions = ['B1', 'B2', 'B3', 'W1', 'W2', 'W3', 'P1'];
  AllStackOptions = ['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7'];
  AllStackWithContainers: string[];
  AllTypeOptions = [
    {
      'key': 'L',
      'value': 'Loading'
    }
    ,
    {
      'key': 'UL',
      'value': 'UnLoading'
    },
    {
      'key': 'W',
      'value': 'Weightment'
    },
    {
      'key': 'P',
      'value': 'Parking'
    }];
  AppIDListAllID: number;
  SetIntervalID: any;
  notificationSnackBarComponent: NotificationSnackBarComponent;
  authenticationDetails: AuthenticationDetails;
  constructor(
    private _stackUpdateService: StackUpdateService,
    private _formBuilder: FormBuilder,
    public snackBar: MatSnackBar) {
    this.stackupdateMainFormGroup = this._formBuilder.group({
      ID: [''],
      // TYPE: ['', Validators.required],
      // STATION: ['', Validators.required],
      // ENTRY_ID: ['', Validators.required],
      // EXIT_ID: ['', Validators.required],
      STACK: ['', Validators.required],
      GATEWAY_ID: ['', Validators.required]
      // CreatedOn: ['Date', Validators.required],
    });
    this.notificationSnackBarComponent = new NotificationSnackBarComponent(this.snackBar);
    this.AppIDListAllID = 0;
    this.stackupdate = new StackUpdateObj();
    this.authenticationDetails = new AuthenticationDetails();
  }

  // GetAllMenuApps(): void {
  //   this._stackUpdateService.GetAllMenuApp().subscribe(
  //     (data) => {
  //       this.AllMenuApps = <MenuApp[]>data;
  //       if (this.AllMenuApps && this.AllMenuApps.length > 0) {
  //         const xy = this.AllMenuApps.filter(x => x.AppName === 'All')[0];
  //         if (xy) {
  //           this.AppIDListAllID = xy.AppID;
  //         }
  //       }
  //       // console.log(this.AllMenuApps);
  //     },
  //     (err) => {
  //       console.log(err);
  //     }
  //   );
  // }

  ngOnInit(): void {
    // Retrive authorizationData
    const retrievedObject = localStorage.getItem('authorizationData');
    if (retrievedObject) {
      this.authenticationDetails = JSON.parse(retrievedObject) as AuthenticationDetails;
    } else {
      // this._router.navigate(['/auth/login']);
    }
    this.GetAllStacksWithContainers();
    //  this.GetIsRangeStatus();
    //  this.ResetControl();
    this.SetIntervalID = setInterval(() => {
      // this.GetIsRangeStatus();
    }, 1000);
  }

  GetAllStacksWithContainers(): void {
    this._stackUpdateService.GetAllStacksWithContainers(this.authenticationDetails.userID).subscribe((data) => {
      if (data) {
        const v = data as string[];
        // const filtered = v.filter(x => x !== '');
        // // filtered.push('Others');
        // this.AllStackWithContainers= new Set(filtered);
        // tslint:disable-next-line:prefer-const
        // tslint:disable-next-line:typedef
        const filteredArray = v.filter(function (item, pos) {
          return v.indexOf(item) === pos;
        });
        this.AllStackWithContainers = filteredArray;
      }
    },
      (err) => {
        console.log(err);
      });
  }

  GetIsRangeStatus(): void {
    this._stackUpdateService.GetIsRangeStatus(this.authenticationDetails.userID).subscribe(
      (data) => {
        this.RangeList = data as RANGEOBJ[];
        console.log(this.RangeList);
      },
      (err) => {
        console.error(err);
        this.notificationSnackBarComponent.openSnackBar(err instanceof Object ? 'Something went wrong' : err, SnackBarStatus.danger);
      }
    );
  }

  ResetControl(): void {
    this.stackupdate = new StackUpdateObj();
    this.stackupdateMainFormGroup.reset();
    Object.keys(this.stackupdateMainFormGroup.controls).forEach(key => {
      this.stackupdateMainFormGroup.get(key).markAsUntouched();
    });
  }

  SaveClicked(): void {
    if (this.stackupdateMainFormGroup.valid) {
      this.ShowProgressBarEvent.emit('show');
      // if (this.stackupdate.ID) {
      // this.stackupdate.Id = this.stackupdateMainFormGroup.get('Id').value;
      // this.stackupdate.TYPE = this.stackupdateMainFormGroup.get('TYPE').value;
      // this.stackupdate.STATION = this.stackupdateMainFormGroup.get('STATION').value;
      // this.stackupdate.ENTRY_ID = this.stackupdateMainFormGroup.get('ENTRY_ID').value;
      // this.stackupdate.EXIT_ID = this.stackupdateMainFormGroup.get('EXIT_ID').value;
      // this.stackupdate.AppIDList = <number[]>this.stackupdateMainFormGroup.get('appIDList').value;
      // this.stackupdate.CreatedBy = this.authenticationDetails.userID.toString();

      this.stackupdate.STACK = this.stackupdateMainFormGroup.get('STACK').value;
      this.stackupdate.GATEWAY_ID = this.stackupdateMainFormGroup.get('GATEWAY_ID').value;

      this._stackUpdateService.PutStackUpdate(this.stackupdate).subscribe(
        (data) => {
          // console.log(data);
          this.ResetControl();
          this.notificationSnackBarComponent.openSnackBar('Stack updated successfully', SnackBarStatus.success);
          this.SaveSucceed.emit('success');
          this._stackUpdateService.TriggerNotification('Stack updated successfully');
        },
        (err) => {
          console.error(err);
          this.notificationSnackBarComponent.openSnackBar(err instanceof Object ? 'Something went wrong' : err, SnackBarStatus.danger);
          this.ShowProgressBarEvent.emit('hide');
        }
      );
      // } else {
      //   // this.stackupdate.Id = this.stackupdateMainFormGroup.get('Id').value;
      //   // this.stackupdate.TYPE = this.stackupdateMainFormGroup.get('TYPE').value;
      //   // this.stackupdate.STATION = this.stackupdateMainFormGroup.get('STATION').value;
      //   // this.stackupdate.ENTRY_ID = this.stackupdateMainFormGroup.get('ENTRY_ID').value;
      //   // this.stackupdate.EXIT_ID = this.stackupdateMainFormGroup.get('EXIT_ID').value;
      //   this.stackupdate.STACK = this.stackupdateMainFormGroup.get('STACK').value;
      //   this.stackupdate.GATEWAY_ID = this.stackupdateMainFormGroup.get('GATEWAY_ID').value;
      //   // this.stackupdate.CreatedBy = this.authenticationDetails.userID.toString();
      //   this._stackUpdateService.PostStackUpdate(this.stackupdate).subscribe(
      //     (data) => {
      //       // console.log(data);
      //       this.ResetControl();
      //       this.notificationSnackBarComponent.openSnackBar('StackUpdate created successfully', SnackBarStatus.success);
      //       this.SaveSucceed.emit('success');
      //       this._stackUpdateService.TriggerNotification('StackUpdate created successfully');
      //     },
      //     (err) => {
      //       // console.error(err);
      //       console.log(err.error);
      //       this.notificationSnackBarComponent.openSnackBar(err.error instanceof Object ? 'Something went wrong because ' + err.error : err.error, SnackBarStatus.danger);
      //       this.ShowProgressBarEvent.emit('hide');
      //     }
      //   );
      // }


    } else {
      Object.keys(this.stackupdateMainFormGroup.controls).forEach(key => {
        this.stackupdateMainFormGroup.get(key).markAsDirty();
      });
    }
  }

  OnTypeChanged(): void {
    // console.log('changed' + value);
    const SelectedValues = this.stackupdateMainFormGroup.get('STACK').value as string;
    if (SelectedValues) {

      // if (SelectedValues === 'W'){
      //   this.AllStationOptions = ['W1', 'W2', 'W3'];
      // }
      // else   if (SelectedValues === 'L' || SelectedValues === 'UL'){
      //   this.AllStationOptions = ['B1', 'B2', 'B3'];
      // }
      // else   if (SelectedValues === 'P' ){
      //   this.AllStationOptions = ['P1'];
      // }
      // else{

      // }
      this._stackUpdateService.GetGateWayIdForStack(SelectedValues, this.authenticationDetails.userID).subscribe(
        (data) => {
          this.GatewayId = data as string;
          this.stackupdateMainFormGroup.controls['GATEWAY_ID'].setValue(this.GatewayId);
          // console.log(this.AllVendorsOrVehicleNos);
        },
        (err) => {
          console.log(err);
        }
      );
    }
    else {
      // this._stackUpdateService.GetAllVendorsOrVehicleNos(SelectedValues).subscribe(
      //   (data) => {
      //     this.AllVendorsOrVehicleNos = <any[]>data;
      //     if (this.AllVendorsOrVehicleNos && this.AllVendorsOrVehicleNos.length > 0) {
      //       // const xy = this.AllVendorsOrVehicleNos.filter(x => x.AppName === 'All')[0];
      //       // if (xy) {
      //       //   this.AppIDListAllID = xy.AppID;
      //       // }
      //     }
      //     // console.log(this.AllVendorsOrVehicleNos);
      //   },
      //   (err) => {
      //     console.log(err);
      //   }
      // );
    }
    // if (SelectedValues.includes(this.AppIDListAllID)) {
    //   this.QRequestMainFormGroup.get('appIDList').patchValue([this.AppIDListAllID]);
    //   this.notificationSnackBarComponent.openSnackBar('All have all the menu items, please uncheck All if you want to select specific menu', SnackBarStatus.info, 4000);

    // }
    // console.log(this.QRequestMainFormGroup.get('appIDList').value);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.currentSelectedStackUpdate);
    this.stackupdate = this.currentSelectedStackUpdate;

    if (this.stackupdate) {
      // this.stackupdateMainFormGroup.get('Id').patchValue(this.stackupdate.Id);
      // this.stackupdateMainFormGroup.get('TYPE').patchValue(this.stackupdate.TYPE);
      // this.stackupdateMainFormGroup.get('STATION').patchValue(this.stackupdate.STATION);
      // this.stackupdateMainFormGroup.get('ENTRY_ID').patchValue(this.stackupdate.ENTRY_ID);
      // this.stackupdateMainFormGroup.get('EXIT_ID').patchValue(this.stackupdate.EXIT_ID);
      this.stackupdateMainFormGroup.get('STACK').patchValue(this.stackupdate.STACK);
      this.stackupdateMainFormGroup.get('GATEWAY_ID').patchValue(this.stackupdate.GATEWAY_ID);
      // this.stackupdateMainFormGroup.get('CreatedOn').patchValue(this.stackupdate.CreatedOn);
      // const mapProp = {
      //   center: new google.maps.LatLng(Number(this.role.LAT), Number(this.role.LON) ),
      //   zoom: 15,
      //   mapTYPEId: google.maps.MapEXIT_IDId.ROADMAP
      // };
      // this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
    } else {
      // this.stackupdateMainFormGroup.get('appName').patchValue('');
      this.ResetControl();
    }
  }

  // OnAppNameChanged(): void {
  //   // console.log('changed');
  //   const SelectedValues = this.stackupdateMainFormGroup.get('appIDList').value as number[];
  //   if (SelectedValues.includes(this.AppIDListAllID)) {
  //     this.stackupdateMainFormGroup.get('appIDList').patchValue([this.AppIDListAllID]);
  //     this.notificationSnackBarComponent.openSnackBar('All have all the menu items, please uncheck All if you want to select specific menu', SnackBarStatus.info, 4000);

  //   }
  //   console.log(this.stackupdateMainFormGroup.get('appIDList').value);
  // }

}

// function multiSelectRequired(control: AbstractControl): { [key: string]: any } | null {
//   const email: string[] = control.value;
//   if (email) {
//     if (email.length > 0) {
//       return null;
//     } else {
//       return { 'multiSelectRequired': true };
//     }
//   } else {
//     return { 'multiSelectRequired': true };
//   }

//   // const domain = email.substring(email.lastIndexOf('@') + 1);
//   // if (email === '' || domain.toLowerCase() === 'pragimtech.com') {
//   //   return null;
//   // } else {
//   //   return { 'emailDomain': true };
//   // }
// }
