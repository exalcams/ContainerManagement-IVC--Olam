import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ContainerDetails } from 'app/models/container-model';

@Component({
  selector: 'stack-update-details',
  templateUrl: './stack-update-details.component.html',
  styleUrls: ['./stack-update-details.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class StackUpdateDetailsComponent{

  container: ContainerDetails;

  constructor(public matDialogRef: MatDialogRef<StackUpdateDetailsComponent>,
     @Inject(MAT_DIALOG_DATA) public data: any) { 

     }
}
