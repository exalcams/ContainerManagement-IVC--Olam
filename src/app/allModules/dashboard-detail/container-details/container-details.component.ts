import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ContainerDetails } from 'app/models/container-model';

@Component({
  selector: 'container-details',
  templateUrl: './container-details.component.html',
  styleUrls: ['./container-details.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ContainerDetailsComponent{

  container: ContainerDetails;

  constructor(public matDialogRef: MatDialogRef<ContainerDetailsComponent>,
     @Inject(MAT_DIALOG_DATA) public data: any) { 

     }
}
