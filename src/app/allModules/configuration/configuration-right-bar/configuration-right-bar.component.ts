import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { MenuApp } from 'app/models/menu-app';
import { NotificationSnackBarComponent } from 'app/notifications/notification-snack-bar/notification-snack-bar.component';
import { MatSnackBar } from '@angular/material';
import { SnackBarStatus } from 'app/notifications/snackbar-status-enum';
import { AuthenticationDetails } from 'app/models/user-details';
import { ConfigurationObj, RANGEOBJ } from 'app/models/GatewayModel';
import { ConfigurationService } from 'app/services/configuration.service';

@Component({
  selector: 'app-configuration-right-bar',
  templateUrl: './configuration-right-bar.component.html',
  styleUrls: ['./configuration-right-bar.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations
})
export class ConfigurationRightBarComponent implements OnInit, OnChanges {

  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;

  @Input() currentSelectedConfiguration: ConfigurationObj = new ConfigurationObj();
  @Output() SaveSucceed: EventEmitter<string> = new EventEmitter<string>();
  @Output() ShowProgressBarEvent: EventEmitter<string> = new EventEmitter<string>();
  configuration: ConfigurationObj;
  RangeList: RANGEOBJ[] = [];
  configurationMainFormGroup: FormGroup;
  AllMenuApps: MenuApp[] = [];
  IsRange: boolean;
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
    private _configurationService: ConfigurationService,
    private _formBuilder: FormBuilder,
    public snackBar: MatSnackBar) {
    this.configurationMainFormGroup = this._formBuilder.group({
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
    this.configuration = new ConfigurationObj();
    this.authenticationDetails = new AuthenticationDetails();
  }

  // GetAllMenuApps(): void {
  //   this._configurationService.GetAllMenuApp().subscribe(
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
    this.GetIsRangeStatus();
    //  this.ResetControl();
        this.SetIntervalID = setInterval(() => {
       this.GetIsRangeStatus();
    }, 1000);
  }

  GetAllStacksWithContainers(): void {
    this._configurationService.GetAllStacksWithContainers(this.authenticationDetails.userID).subscribe((data) => {
      if (data) {
        const v = data as string[];
        // const filtered = v.filter(x => x !== '');
        // // filtered.push('Others');
        // this.AllStackWithContainers= new Set(filtered);
        var filteredArray = v.filter(function(item, pos){
          return v.indexOf(item)== pos; 
        });
        this.AllStackWithContainers = filteredArray;
      }
    },
      (err) => {
        console.log(err);
      });
  }

  GetIsRangeStatus(): void {
    this._configurationService.GetIsRangeStatus(this.authenticationDetails.userID).subscribe(
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
    this.configuration = new ConfigurationObj();
    this.configurationMainFormGroup.reset();
    Object.keys(this.configurationMainFormGroup.controls).forEach(key => {
      this.configurationMainFormGroup.get(key).markAsUntouched();
    });
  }

  SaveClicked(): void {
    if (this.configurationMainFormGroup.valid) {
      this.ShowProgressBarEvent.emit('show');
      if (this.configuration.ID) {
        // this.configuration.Id = this.configurationMainFormGroup.get('Id').value;
        // this.configuration.TYPE = this.configurationMainFormGroup.get('TYPE').value;
        // this.configuration.STATION = this.configurationMainFormGroup.get('STATION').value;
        // this.configuration.ENTRY_ID = this.configurationMainFormGroup.get('ENTRY_ID').value;
        // this.configuration.EXIT_ID = this.configurationMainFormGroup.get('EXIT_ID').value;
        // this.configuration.AppIDList = <number[]>this.configurationMainFormGroup.get('appIDList').value;
        // this.configuration.CreatedBy = this.authenticationDetails.userID.toString();

        this.configuration.STACK = this.configurationMainFormGroup.get('STACK').value;
        this.configuration.GATEWAY_ID = this.configurationMainFormGroup.get('GATEWAY_ID').value;

        this._configurationService.PutConfiguration(this.configuration).subscribe(
          (data) => {
            // console.log(data);
            this.ResetControl();
            this.notificationSnackBarComponent.openSnackBar('Configuration updated successfully', SnackBarStatus.success);
            this.SaveSucceed.emit('success');
            this._configurationService.TriggerNotification('Configuration updated successfully');
          },
          (err) => {
            console.error(err);
            this.notificationSnackBarComponent.openSnackBar(err instanceof Object ? 'Something went wrong' : err, SnackBarStatus.danger);
            this.ShowProgressBarEvent.emit('hide');
          }
        );
      } else {
        // this.configuration.Id = this.configurationMainFormGroup.get('Id').value;
        // this.configuration.TYPE = this.configurationMainFormGroup.get('TYPE').value;
        // this.configuration.STATION = this.configurationMainFormGroup.get('STATION').value;
        // this.configuration.ENTRY_ID = this.configurationMainFormGroup.get('ENTRY_ID').value;
        // this.configuration.EXIT_ID = this.configurationMainFormGroup.get('EXIT_ID').value;
        this.configuration.STACK = this.configurationMainFormGroup.get('STACK').value;
        this.configuration.GATEWAY_ID = this.configurationMainFormGroup.get('GATEWAY_ID').value;
        // this.configuration.CreatedBy = this.authenticationDetails.userID.toString();
        this._configurationService.PostConfiguration(this.configuration).subscribe(
          (data) => {
            // console.log(data);
            this.ResetControl();
            this.notificationSnackBarComponent.openSnackBar('Configuration created successfully', SnackBarStatus.success);
            this.SaveSucceed.emit('success');
            this._configurationService.TriggerNotification('Configuration created successfully');
          },
          (err) => {
            // console.error(err);
            console.log(err.error);
            this.notificationSnackBarComponent.openSnackBar(err.error instanceof Object ? 'Something went wrong because ' + err.error : err.error, SnackBarStatus.danger);
            this.ShowProgressBarEvent.emit('hide');
          }
        );
      }


    } else {
      Object.keys(this.configurationMainFormGroup.controls).forEach(key => {
        this.configurationMainFormGroup.get(key).markAsDirty();
      });
    }
  }

  OnTypeChanged(): void {
    // console.log('changed' + value);
    const SelectedValues = this.configurationMainFormGroup.get('TYPE').value as string;
    if (SelectedValues) {
      if (SelectedValues === 'W'){
        this.AllStationOptions = ['W1', 'W2', 'W3'];
      }
      else   if (SelectedValues === 'L' || SelectedValues === 'UL'){
        this.AllStationOptions = ['B1', 'B2', 'B3'];
      }
      else   if (SelectedValues === 'P' ){
        this.AllStationOptions = ['P1'];
      }
      else{
        
      }
      // this._configurationService.GetAllVendorsOrVehicleNos(SelectedValues).subscribe(
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
    else {
      // this._configurationService.GetAllVendorsOrVehicleNos(SelectedValues).subscribe(
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
    console.log(this.currentSelectedConfiguration);
    this.configuration = this.currentSelectedConfiguration;

    if (this.configuration) {
      // this.configurationMainFormGroup.get('Id').patchValue(this.configuration.Id);
      // this.configurationMainFormGroup.get('TYPE').patchValue(this.configuration.TYPE);
      // this.configurationMainFormGroup.get('STATION').patchValue(this.configuration.STATION);
      // this.configurationMainFormGroup.get('ENTRY_ID').patchValue(this.configuration.ENTRY_ID);
      // this.configurationMainFormGroup.get('EXIT_ID').patchValue(this.configuration.EXIT_ID);
      this.configurationMainFormGroup.get('STACK').patchValue(this.configuration.STACK);
      this.configurationMainFormGroup.get('GATEWAY_ID').patchValue(this.configuration.GATEWAY_ID);
      // this.configurationMainFormGroup.get('CreatedOn').patchValue(this.configuration.CreatedOn);
      // const mapProp = {
      //   center: new google.maps.LatLng(Number(this.role.LAT), Number(this.role.LON) ),
      //   zoom: 15,
      //   mapTYPEId: google.maps.MapEXIT_IDId.ROADMAP
      // };
      // this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
    } else {
      // this.configurationMainFormGroup.get('appName').patchValue('');
      this.ResetControl();
    }
  }

  // OnAppNameChanged(): void {
  //   // console.log('changed');
  //   const SelectedValues = this.configurationMainFormGroup.get('appIDList').value as number[];
  //   if (SelectedValues.includes(this.AppIDListAllID)) {
  //     this.configurationMainFormGroup.get('appIDList').patchValue([this.AppIDListAllID]);
  //     this.notificationSnackBarComponent.openSnackBar('All have all the menu items, please uncheck All if you want to select specific menu', SnackBarStatus.info, 4000);

  //   }
  //   console.log(this.configurationMainFormGroup.get('appIDList').value);
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
