import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';
import { Guid } from 'guid-typescript';
import { NotificationSnackBarComponent } from 'app/notifications/notification-snack-bar/notification-snack-bar.component';
import { MatSnackBar } from '@angular/material';
import { StackUpdateObj } from 'app/models/GatewayModel';

@Component({
  selector: 'app-stackupdate-left-bar',
  templateUrl: './stackupdate-left-bar.component.html',
  styleUrls: ['./stackupdate-left-bar.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations
})

export class StackUpdateLeftBarComponent implements OnInit, OnChanges {

  searchText: string;
  selectID: number;
  @Input() AllStackUpdates: StackUpdateObj[] = [];
  @Output() StackUpdateSelectionChanged: EventEmitter<StackUpdateObj> = new EventEmitter<StackUpdateObj>();
  notificationSnackBarComponent: NotificationSnackBarComponent;
  constructor(public snackBar: MatSnackBar) {
    this.searchText = '';
    this.notificationSnackBarComponent = new NotificationSnackBarComponent(this.snackBar);
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log(this.currentSelectedMenuApp);
    if (this.AllStackUpdates.length > 0) {
      this.selectID = this.AllStackUpdates[0].ID;
      this.loadSelectedStackUpdate(this.AllStackUpdates[0]);
    }
  }

  loadSelectedStackUpdate(SelectedRole: StackUpdateObj): void {
    this.selectID = SelectedRole.ID;
    this.StackUpdateSelectionChanged.emit(SelectedRole);
    // console.log(SelectedMenuApp);
  }

  clearStackUpdates(): void {
    this.selectID = null;
    this.StackUpdateSelectionChanged.emit(null);
  }

}
