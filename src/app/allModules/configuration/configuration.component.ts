import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';
import { Router } from '@angular/router';
import { NotificationSnackBarComponent } from 'app/notifications/notification-snack-bar/notification-snack-bar.component';
import { MatSnackBar } from '@angular/material';
import { SnackBarStatus } from 'app/notifications/snackbar-status-enum';
import { ConfigurationService } from 'app/services/configuration.service';
import { ConfigurationObj } from 'app/models/GatewayModel';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations
})
export class ConfigurationComponent implements OnInit {

  AllConfigurations: ConfigurationObj[] = [];
  SelectedConfiguration: ConfigurationObj;
  notificationSnackBarComponent: NotificationSnackBarComponent;
  IsProgressBarVisibile: boolean;
  constructor(private _masterService: ConfigurationService, private _router: Router, public snackBar: MatSnackBar) {
    this.notificationSnackBarComponent = new NotificationSnackBarComponent(this.snackBar);
    this.IsProgressBarVisibile = true;
  }

  ngOnInit(): void {
      this.GetAllConfigurations();
  }
  GetAllConfigurations(): void {
    this._masterService.GetAllConfigurations().subscribe(
      (data) => {
        this.AllConfigurations = <ConfigurationObj[]>data;
        this.IsProgressBarVisibile = false;
        // console.log(this.AllMenuApps);
      },
      (err) => {
        console.error(err);
        this.IsProgressBarVisibile = false;
        this.notificationSnackBarComponent.openSnackBar(err instanceof Object ? 'Something went wrong' : err, SnackBarStatus.danger);
      }
    );
  }
  OnConfigurationSelectionChanged(selectedConfiguration: ConfigurationObj): void {
    // console.log(selectedMenuApp);
    this.SelectedConfiguration = selectedConfiguration;
  }

  OnShowProgressBarEvent(status: string): void {
    if (status === 'show') {
      this.IsProgressBarVisibile = true;
    } else {
      this.IsProgressBarVisibile = false;
    }

  }

  RefreshAllConfigurations(msg: string): void {
    // console.log(msg);
    this.GetAllConfigurations();
  }

}
