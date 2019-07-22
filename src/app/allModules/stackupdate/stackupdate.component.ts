import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';
import { Router } from '@angular/router';
import { NotificationSnackBarComponent } from 'app/notifications/notification-snack-bar/notification-snack-bar.component';
import { MatSnackBar } from '@angular/material';
import { SnackBarStatus } from 'app/notifications/snackbar-status-enum';
import { StackUpdateService } from 'app/services/stackupdate.service';
import { StackUpdateObj } from 'app/models/GatewayModel';

@Component({
  selector: 'app-stackupdate',
  templateUrl: './stackupdate.component.html',
  styleUrls: ['./stackupdate.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations
})
export class StackUpdateComponent implements OnInit {

  AllStackUpdates: StackUpdateObj[] = [];
  SelectedStackUpdate: StackUpdateObj;
  notificationSnackBarComponent: NotificationSnackBarComponent;
  IsProgressBarVisibile: boolean;
  constructor(private _stackUpdateService: StackUpdateService, private _router: Router, public snackBar: MatSnackBar) {
    this.notificationSnackBarComponent = new NotificationSnackBarComponent(this.snackBar);
    this.IsProgressBarVisibile = true;
  }

  ngOnInit(): void {
      this.GetAllStackUpdates();
  }
  GetAllStackUpdates(): void {
    this._stackUpdateService.GetAllStackUpdates().subscribe(
      (data) => {
        this.AllStackUpdates = <StackUpdateObj[]>data;
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
  OnStackUpdateSelectionChanged(selectedStackUpdate: StackUpdateObj): void {
    // console.log(selectedMenuApp);
    this.SelectedStackUpdate = selectedStackUpdate;
  }

  OnShowProgressBarEvent(status: string): void {
    if (status === 'show') {
      this.IsProgressBarVisibile = true;
    } else {
      this.IsProgressBarVisibile = false;
    }

  }

  RefreshAllStackUpdates(msg: string): void {
    // console.log(msg);
    this.GetAllStackUpdates();
  }

}
