// // <div id="dashboard" class="page-layout carded" fusePerfectScrollbar>
// //     <div class="contentForTiles">
// //         <div fxLayout fxLayout.xs="column" fxLayoutGap="32px" fxLayout.sm="column">
// //             <mat-card fxFlex style="background-color:#269026">
// //                 <div class="" fxLayout="column" fxLayoutGap="5px" fxLayoutAlign="center center">
// //                     <div fxFlex fxLayout fxLayoutAlign="center center">
// //                         <div class="pt-8">
// //                             <div class="pl-8 Title">
// //                                 {{ 'dash.Available_Spaces' | translate }}
// //                             </div>
// //                         </div>
// //                     </div>
// //                     <div fxFlex fxLayout fxLayoutAlign="center center">
// //                         <div class="pt-8">
// //                             <div class="SubTitle pl-8">
// //                                 {{availableSpaceCount}}
// //                             </div>
// //                         </div>
// //                     </div>
// //                 </div>
// //             </mat-card>
// //             <mat-card fxFlex (click)="loadSelectedTransactionDetails('total')"
// //                 style="cursor: pointer; background-color:#337375">
// //                 <div class="" fxLayout="column" fxLayoutGap="5px" fxLayoutAlign="center center">
// //                     <div fxFlex fxLayout fxLayoutAlign="center center">
// //                         <div class="pt-8">
// //                             <div class="pl-8 Title">
// //                                 {{ 'dash.Total_Containers' | translate }}
// //                             </div>
// //                         </div>
// //                     </div>
// //                     <div fxFlex fxLayout fxLayoutAlign="center center">
// //                         <div class="pt-8">
// //                             <div class="SubTitle pl-8">
// //                                 {{totalTransactionDetailsCount}}
// //                             </div>
// //                         </div>
// //                     </div>
// //                 </div>
// //             </mat-card>
// //             <mat-card fxFlex (click)="loadSelectedTransactionDetails('completed')"
// //                 style="cursor: pointer; background-color:#6d379e">
// //                 <div class="" fxLayout="column" fxLayoutGap="5px" fxLayoutAlign="center center">

// //                     <div fxFlex fxLayout fxLayoutAlign="center center">
// //                         <div class="pt-8">
// //                             <span style="margin-left: 45px;font-size:14px ;color: whitesmoke;">
// //                                 {{ 'dash.Between_Containers_Handled' | translate }}</span>
// //                             <div class="pl-8 Title">
// //                                 {{ 'dash.Containers_Handled' | translate }}
// //                             </div>
// //                         </div>
// //                     </div>
// //                     <div fxFlex fxLayout fxLayoutAlign="center center">
// //                         <div class="pt-8">
// //                             <div class="SubTitle pl-8">
// //                                 {{completedTransactionsCount}}
// //                             </div>
// //                         </div>
// //                     </div>
// //                 </div>
// //             </mat-card>
// //             <mat-card fxFlex (click)="loadSelectedTransactionDetails('exception')"
// //                 style="cursor: pointer; background-color:#cc2381">
// //                 <div class="" fxLayout="column" fxLayoutGap="5px" fxLayoutAlign="center center">
// //                     <div fxFlex fxLayout fxLayoutAlign="center center">
// //                         <div class="pt-8">
// //                             <div class="pl-8 Title">
// //                                 {{ 'dash.Exceptions' | translate }}
// //                             </div>
// //                         </div>
// //                     </div>
// //                     <div fxFlex fxLayout fxLayoutAlign="center center">
// //                         <div class="pt-8">
// //                             <div class="SubTitle pl-8">
// //                                 {{exceptionDetailsCount}}
// //                             </div>
// //                         </div>
// //                     </div>
// //                 </div>
// //             </mat-card>
// //         </div>
// //     </div>
// //     <div class="contentForLegend" *ngIf="diagramShow">
// //         <!-- <h4 style="font-weight: bolder !important;font-size: 15px !important; margin-bottom: 2px !important;">Legand</h4> -->
// //         <div class="card">
// //             <div fxLayout="row" style="padding-left: 15px;" fxLayoutGap="32px">
// //                 <div fxFlex>
// //                     <div fxLayout="column" fxLayoutGap="3px">
// //                         <div fxFlex>
// //                             <div fxLayout="row" fxLayoutGap="-8px">
// //                                 <div fxFlex fxLayoutAlign="center center"><span style="font-size:13px;">40'
// //                                         {{ 'dash.Containers' | translate }} </span>
// //                                 </div>
// //                                 <div fxFlex fxLayoutAlign="center center">
// //                                     <span class="h3 fourtyFeetContainerClass"
// //                                         style="width: 16px;height: 16px; display: block; border-radius: 50%;"></span>
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex>
// //                             <!-- <div fxLayout="row" fxLayoutGap="-8px">
// //                                 <div fxFlex fxLayoutAlign="center center"><span style="font-size:13px;">1
// //                                         {{ 'dash.Containers' | translate }} </span>
// //                                 </div>
// //                                 <div fxFlex fxLayoutAlign="center center">
// //                                     <span class="h3 firstClass"
// //                                         style="width: 16px;height: 16px; display: block; border-radius: 50%;"></span>
// //                                 </div>
// //                             </div> -->
// //                         </div>
// //                     </div>
// //                 </div>
// //                 <div fxFlex>
// //                     <div fxLayout="column" fxLayoutGap="3px">
// //                         <div fxFlex>
// //                             <div fxLayout="row" fxLayoutGap="-8px">
// //                                 <div fxFlex fxLayoutAlign="center center"><span style="font-size:13px;">O
// //                                         {{ 'dash.Containers' | translate }} </span>
// //                                 </div>
// //                                 <div fxFlex fxLayoutAlign="center center">
// //                                     <span class="h3 zeroClass"
// //                                         style="width: 16px;height: 16px; display: block; border-radius: 50%;"></span>
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex>
// //                             <div fxLayout="row" fxLayoutGap="-8px">
// //                                 <div fxFlex fxLayoutAlign="center center"><span style="font-size:13px;">1
// //                                         {{ 'dash.Containers' | translate }} </span>
// //                                 </div>
// //                                 <div fxFlex fxLayoutAlign="center center">
// //                                     <span class="h3 firstClass"
// //                                         style="width: 16px;height: 16px; display: block; border-radius: 50%;"></span>
// //                                 </div>
// //                             </div>
// //                         </div>
// //                     </div>
// //                 </div>
// //                 <div fxFlex>
// //                     <div fxLayout="column" fxLayoutGap="3px">
// //                         <div fxFlex>
// //                             <div fxLayout="row" fxLayoutGap="-8px">
// //                                 <div fxFlex fxLayoutAlign="center center"><span style="font-size:13px;">2
// //                                         {{ 'dash.Containers' | translate }} </span>
// //                                 </div>
// //                                 <div fxFlex fxLayoutAlign="center center">
// //                                     <span class="h3 secondClass"
// //                                         style="width: 16px;height: 16px; display: block; border-radius: 50%;"></span>
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex>
// //                             <div fxLayout="row" fxLayoutGap="-8px">
// //                                 <div fxFlex fxLayoutAlign="center center"><span style="font-size:13px;">3
// //                                         {{ 'dash.Containers' | translate }} </span>
// //                                 </div>
// //                                 <div fxFlex fxLayoutAlign="center center">
// //                                     <span class="h3 thirdClass"
// //                                         style="width: 16px;height: 16px; display: block; border-radius: 50%;"></span>
// //                                 </div>
// //                             </div>
// //                         </div>
// //                     </div>
// //                 </div>
// //                 <div fxFlex>
// //                     <div fxLayout="column" fxLayoutGap="3px">

// //                         <div fxFlex>
// //                             <div fxLayout="row" fxLayoutGap="-8px">
// //                                 <div fxFlex fxLayoutAlign="center center"><span style="font-size:13px;">4
// //                                         {{ 'dash.Containers' | translate }} </span>
// //                                 </div>
// //                                 <div fxFlex fxLayoutAlign="center center">
// //                                     <span class="h3 fourthClass"
// //                                         style="width: 16px;height: 16px; display: block; border-radius: 50%;"></span>
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex>
// //                             <div fxLayout="row" fxLayoutGap="-8px">
// //                                 <div fxFlex fxLayoutAlign="center center"><span style="font-size:13px;">5
// //                                         {{ 'dash.Containers' | translate }} </span>
// //                                 </div>
// //                                 <div fxFlex fxLayoutAlign="center center">
// //                                     <span class="h3 fifthClass"
// //                                         style="width: 16px;height: 16px; display: block; border-radius: 50%;"></span>
// //                                 </div>
// //                             </div>
// //                         </div>
// //                     </div>
// //                 </div>
// //             </div>
// //         </div>

// //     </div>
// //     <div class="contentForDiagram " *ngIf="diagramShow">
// //         <!-- <div class="" fxLayout="column" fxLayoutGap="0px"> -->
// //         <!-- <div fxFlex>
// //                 <div class="dash1">
// //                     <img src="/assets/images/backgrounds/dashBackgroundPart1.png" alt="">
// //                 </div>
// //             </div> -->
// //         <!-- <div fxFlex> -->
// //         <!-- <div class="" fxLayout="row" fxLayoutGap="-143px"> -->
// //         <!-- <div fxFlex>
// //                         <div class="dashBackGround1">
// //                             <img src="/assets/images/backgrounds/dashBackgroundPart2.png" alt="">
// //                         </div>
// //                     </div> -->
// //         <!-- <div fxFlex> -->
// //         <div fxLayout="row" fxLayoutGap="20px">
// //             <div class="column3" fxFlex fxLayout="column">
// //                 <!-- Rownames -->
// //                 <div fxFlex>
// //                     <div fxLayout="row" fxLayoutAlign="center start">
// //                         <div fxFlex style=" height: 60px;" class="pr-16" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="font-size-16  line-height-1 mt-8" style="text-align: center; color: black">

// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex style=" height: 60px;" class="pr-16" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="font-size-16  line-height-1 mt-8" style="text-align: center; color: black">
// //                                     R1
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex style=" height: 60px;" class="pr-16" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="font-size-16  line-height-1 mt-8" style="text-align: center; color: black">
// //                                     R2
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex style=" height: 60px;" class="pr-16" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="font-size-16  line-height-1 mt-8" style="text-align: center; color: black">
// //                                     R3
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex style=" height: 60px;" class="pr-16" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="font-size-16  line-height-1 mt-8" style="text-align: center; color: black">
// //                                     R4
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex style=" height: 60px;" class="pr-16" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="font-size-16  line-height-1 mt-8" style="text-align: center; color: black">
// //                                     R5
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex style=" height: 60px;" class="pr-16" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="font-size-16  line-height-1 mt-8" style="text-align: center; color: black">
// //                                     R6
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex style=" height: 60px;" class="pr-16" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="font-size-16  line-height-1 mt-8" style="text-align: center; color: black">
// //                                     R7
// //                                 </div>
// //                             </div>
// //                         </div>
// //                     </div>
// //                 </div>
// //                 <div fxFlex>
// //                     <!-- S061 -->
// //                     <div fxLayout="row" fxLayoutAlign="center start">
// //                         <div fxFlex style="height: 60px;" class="pr-16" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="font-size-16  line-height-1 mt-8" style="text-align: center; color: black">
// //                                     S061
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S061R1)" [ngClass]="{
// //                                                             'zeroClass' : S061R1?.length == 0,
// //                                                             'firstClass' : S061R1?.length == 1,
// //                                                             'secondClass' : S061R1?.length == 2,
// //                                                             'thirdClass' : S061R1?.length == 3,
// //                                                             'fourthClass' : S061R1?.length == 4,
// //                                                             'fifthClass' : S061R1?.length == 5                                                               
// //                                                          }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S061R1)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S061R1?.length != 0? S061R1?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S061R2)" [ngClass]="{
// //                                                             'secondClass' : S061R2?.length == 2,
// //                                                             'zeroClass' : S061R2?.length == 0,
// //                                                             'firstClass' : S061R2?.length == 1,
// //                                                             'thirdClass' : S061R2?.length == 3,
// //                                                             'fourthClass' : S061R2?.length == 4,
// //                                                             'fifthClass' : S061R2?.length == 5
// //                                                          }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S061R2)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S061R2?.length != 0? S061R2?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S061R3)" [ngClass]="{
// //                                                         'zeroClass' : S061R3?.length == 0,
// //                                                         'firstClass' : S061R3?.length == 1,
// //                                                         'secondClass' : S061R3?.length == 2,
// //                                                         'thirdClass' : S061R3?.length == 3,
// //                                                         'fourthClass' : S061R3?.length == 4,
// //                                                         'fifthClass' : S061R3?.length == 5              
// //                                                      }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S061R3)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S061R3?.length != 0? S061R3?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S061R4)" [ngClass]="{
// //                                                         'secondClass' : S061R4?.length == 2,
// //                                                         'zeroClass' : S061R4?.length == 0,
// //                                                         'firstClass' : S061R4?.length == 1,
// //                                                         'thirdClass' : S061R4?.length == 3,
// //                                                         'fourthClass' : S061R4?.length == 4,
// //                                                         'fifthClass' : S061R4?.length == 5
// //                                                      }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S061R4)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S061R4?.length != 0? S061R4?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S061R5)" [ngClass]="{
// //                                                     'zeroClass' : S061R5?.length == 0,
// //                                                     'firstClass' : S061R5?.length == 1,
// //                                                     'secondClass' : S061R5?.length == 2,
// //                                                     'thirdClass' : S061R5?.length == 3,
// //                                                     'fourthClass' : S061R5?.length == 4,
// //                                                     'fifthClass' : S061R5?.length == 5              
// //                                                  }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S061R5)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S061R5?.length != 0? S061R5?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S061R6)" [ngClass]="{
// //                                                     'secondClass' : S061R6?.length == 2,
// //                                                     'zeroClass' : S061R6?.length == 0,
// //                                                     'firstClass' : S061R6?.length == 1,
// //                                                     'thirdClass' : S061R6?.length == 3,
// //                                                     'fourthClass' : S061R6?.length == 4,
// //                                                     'fifthClass' : S061R6?.length == 5
// //                                                  }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S061R6)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S061R6?.length != 0? S061R6?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S061R7)" [ngClass]="{
// //                                                         'secondClass' : S061R7?.length == 2,
// //                                                         'zeroClass' : S061R7?.length == 0,
// //                                                         'firstClass' : S061R7?.length == 1,
// //                                                         'thirdClass' : S061R7?.length == 3,
// //                                                         'fourthClass' : S061R7?.length == 4,
// //                                                         'fifthClass' : S061R7?.length == 5
// //                                                      }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S061R7)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S061R7?.length != 0? S061R7?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                     </div>
// //                     <!-- S063 -->
// //                     <div fxLayout="row" fxLayoutAlign="center start">
// //                         <div fxFlex style="height: 60px;" class="pr-16" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="font-size-16  line-height-1 mt-8" style="text-align: center; color: black">
// //                                     S063
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S063R1)" [ngClass]="{
// //                                                             'zeroClass' : S063R1?.length == 0,
// //                                                             'firstClass' : S063R1?.length == 1,
// //                                                             'secondClass' : S063R1?.length == 2,
// //                                                             'thirdClass' : S063R1?.length == 3,
// //                                                             'fourthClass' : S063R1?.length == 4,
// //                                                             'fifthClass' : S063R1?.length == 5              
// //                                                          }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S063R1)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S063R1?.length != 0? S063R1?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S063R2)" [ngClass]="{
// //                                                             'secondClass' : S063R2?.length == 2,
// //                                                             'zeroClass' : S063R2?.length == 0,
// //                                                             'firstClass' : S063R2?.length == 1,
// //                                                             'thirdClass' : S063R2?.length == 3,
// //                                                             'fourthClass' : S063R2?.length == 4,
// //                                                             'fifthClass' : S063R2?.length == 5
// //                                                          }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S063R2)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S063R2?.length != 0? S063R2?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S063R3)" [ngClass]="{
// //                                                         'zeroClass' : S063R3?.length == 0,
// //                                                         'firstClass' : S063R3?.length == 1,
// //                                                         'secondClass' : S063R3?.length == 2,
// //                                                         'thirdClass' : S063R3?.length == 3,
// //                                                         'fourthClass' : S063R3?.length == 4,
// //                                                         'fifthClass' : S063R3?.length == 5              
// //                                                      }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S063R3)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S063R3?.length != 0? S063R3?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S063R4)" [ngClass]="{
// //                                                         'secondClass' : S063R4?.length == 2,
// //                                                         'zeroClass' : S063R4?.length == 0,
// //                                                         'firstClass' : S063R4?.length == 1,
// //                                                         'thirdClass' : S063R4?.length == 3,
// //                                                         'fourthClass' : S063R4?.length == 4,
// //                                                         'fifthClass' : S063R4?.length == 5
// //                                                      }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S063R4)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S063R4?.length != 0? S063R4?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S063R5)" [ngClass]="{
// //                                                     'zeroClass' : S063R5?.length == 0,
// //                                                     'firstClass' : S063R5?.length == 1,
// //                                                     'secondClass' : S063R5?.length == 2,
// //                                                     'thirdClass' : S063R5?.length == 3,
// //                                                     'fourthClass' : S063R5?.length == 4,
// //                                                     'fifthClass' : S063R5?.length == 5              
// //                                                  }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S063R5)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S063R5?.length != 0? S063R5?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S063R6)" [ngClass]="{
// //                                                     'secondClass' : S063R6?.length == 2,
// //                                                     'zeroClass' : S063R6?.length == 0,
// //                                                     'firstClass' : S063R6?.length == 1,
// //                                                     'thirdClass' : S063R6?.length == 3,
// //                                                     'fourthClass' : S063R6?.length == 4,
// //                                                     'fifthClass' : S063R6?.length == 5
// //                                                  }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S063R6)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S063R6?.length != 0? S063R6?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S063R7)" [ngClass]="{
// //                                                         'secondClass' : S063R7?.length == 2,
// //                                                         'zeroClass' : S063R7?.length == 0,
// //                                                         'firstClass' : S063R7?.length == 1,
// //                                                         'thirdClass' : S063R7?.length == 3,
// //                                                         'fourthClass' : S063R7?.length == 4,
// //                                                         'fifthClass' : S063R7?.length == 5
// //                                                      }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S063R7)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S063R7?.length != 0? S063R7?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                     </div>
// //                     <!-- S065 -->
// //                     <div fxLayout="row" fxLayoutAlign="center start">
// //                         <div fxFlex style="height: 60px;" class="pr-16" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="font-size-16  line-height-1 mt-8" style="text-align: center; color: black">
// //                                     S065
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S065R1)" [ngClass]="{
// //                                                             'zeroClass' : S065R1?.length == 0,
// //                                                             'firstClass' : S065R1?.length == 1,
// //                                                             'secondClass' : S065R1?.length == 2,
// //                                                             'thirdClass' : S065R1?.length == 3,
// //                                                             'fourthClass' : S065R1?.length == 4,
// //                                                             'fifthClass' : S065R1?.length == 5              
// //                                                          }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S065R1)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S065R1?.length != 0? S065R1?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S065R2)" [ngClass]="{
// //                                                             'secondClass' : S065R2?.length == 2,
// //                                                             'zeroClass' : S065R2?.length == 0,
// //                                                             'firstClass' : S065R2?.length == 1,
// //                                                             'thirdClass' : S065R2?.length == 3,
// //                                                             'fourthClass' : S065R2?.length == 4,
// //                                                             'fifthClass' : S065R2?.length == 5
// //                                                          }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S065R2)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S065R2?.length != 0? S065R2?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S065R3)" [ngClass]="{
// //                                                         'zeroClass' : S065R3?.length == 0,
// //                                                         'firstClass' : S065R3?.length == 1,
// //                                                         'secondClass' : S065R3?.length == 2,
// //                                                         'thirdClass' : S065R3?.length == 3,
// //                                                         'fourthClass' : S065R3?.length == 4,
// //                                                         'fifthClass' : S065R3?.length == 5              
// //                                                      }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S065R3)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S065R3?.length != 0? S065R3?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S065R4)" [ngClass]="{
// //                                                         'secondClass' : S065R4?.length == 2,
// //                                                         'zeroClass' : S065R4?.length == 0,
// //                                                         'firstClass' : S065R4?.length == 1,
// //                                                         'thirdClass' : S065R4?.length == 3,
// //                                                         'fourthClass' : S065R4?.length == 4,
// //                                                         'fifthClass' : S065R4?.length == 5
// //                                                      }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S065R4)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S065R4?.length != 0? S065R4?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S065R5)" [ngClass]="{
// //                                                     'zeroClass' : S065R5?.length == 0,
// //                                                     'firstClass' : S065R5?.length == 1,
// //                                                     'secondClass' : S065R5?.length == 2,
// //                                                     'thirdClass' : S065R5?.length == 3,
// //                                                     'fourthClass' : S065R5?.length == 4,
// //                                                     'fifthClass' : S065R5?.length == 5              
// //                                                  }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S065R5)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S065R5?.length != 0? S065R5?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S065R6)" [ngClass]="{
// //                                                     'secondClass' : S065R6?.length == 2,
// //                                                     'zeroClass' : S065R6?.length == 0,
// //                                                     'firstClass' : S065R6?.length == 1,
// //                                                     'thirdClass' : S065R6?.length == 3,
// //                                                     'fourthClass' : S065R6?.length == 4,
// //                                                     'fifthClass' : S065R6?.length == 5
// //                                                  }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S065R6)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S065R6?.length != 0? S065R6?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S065R7)" [ngClass]="{
// //                                                         'secondClass' : S065R7?.length == 2,
// //                                                         'zeroClass' : S065R7?.length == 0,
// //                                                         'firstClass' : S065R7?.length == 1,
// //                                                         'thirdClass' : S065R7?.length == 3,
// //                                                         'fourthClass' : S065R7?.length == 4,
// //                                                         'fifthClass' : S065R7?.length == 5
// //                                                      }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S065R7)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S065R7?.length != 0? S065R7?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                     </div>
// //                     <!-- S067 -->
// //                     <div fxLayout="row" fxLayoutAlign="center start">
// //                         <div fxFlex style="height: 60px;" class="pr-16" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="font-size-16  line-height-1 mt-8" style="text-align: center; color: black">
// //                                     S067
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S067R1)" [ngClass]="{
// //                                                             'zeroClass' : S067R1?.length == 0,
// //                                                             'firstClass' : S067R1?.length == 1,
// //                                                             'secondClass' : S067R1?.length == 2,
// //                                                             'thirdClass' : S067R1?.length == 3,
// //                                                             'fourthClass' : S067R1?.length == 4,
// //                                                             'fifthClass' : S067R1?.length == 5              
// //                                                          }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S067R1)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S067R1?.length != 0? S067R1?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S067R2)" [ngClass]="{
// //                                                             'secondClass' : S067R2?.length == 2,
// //                                                             'zeroClass' : S067R2?.length == 0,
// //                                                             'firstClass' : S067R2?.length == 1,
// //                                                             'thirdClass' : S067R2?.length == 3,
// //                                                             'fourthClass' : S067R2?.length == 4,
// //                                                             'fifthClass' : S067R2?.length == 5
// //                                                          }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S067R2)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S067R2?.length != 0? S067R2?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S067R3)" [ngClass]="{
// //                                                         'zeroClass' : S067R3?.length == 0,
// //                                                         'firstClass' : S067R3?.length == 1,
// //                                                         'secondClass' : S067R3?.length == 2,
// //                                                         'thirdClass' : S067R3?.length == 3,
// //                                                         'fourthClass' : S067R3?.length == 4,
// //                                                         'fifthClass' : S067R3?.length == 5              
// //                                                      }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S067R3)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S067R3?.length != 0? S067R3?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S067R4)" [ngClass]="{
// //                                                         'secondClass' : S067R4?.length == 2,
// //                                                         'zeroClass' : S067R4?.length == 0,
// //                                                         'firstClass' : S067R4?.length == 1,
// //                                                         'thirdClass' : S067R4?.length == 3,
// //                                                         'fourthClass' : S067R4?.length == 4,
// //                                                         'fifthClass' : S067R4?.length == 5
// //                                                      }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S067R4)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S067R4?.length != 0? S067R4?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S067R5)" [ngClass]="{
// //                                                     'zeroClass' : S067R5?.length == 0,
// //                                                     'firstClass' : S067R5?.length == 1,
// //                                                     'secondClass' : S067R5?.length == 2,
// //                                                     'thirdClass' : S067R5?.length == 3,
// //                                                     'fourthClass' : S067R5?.length == 4,
// //                                                     'fifthClass' : S067R5?.length == 5              
// //                                                  }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S067R5)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S067R5?.length != 0? S067R5?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S067R6)" [ngClass]="{
// //                                                     'secondClass' : S067R6?.length == 2,
// //                                                     'zeroClass' : S067R6?.length == 0,
// //                                                     'firstClass' : S067R6?.length == 1,
// //                                                     'thirdClass' : S067R6?.length == 3,
// //                                                     'fourthClass' : S067R6?.length == 4,
// //                                                     'fifthClass' : S067R6?.length == 5
// //                                                  }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S067R6)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S067R6?.length != 0? S067R6?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S067R7)" [ngClass]="{
// //                                                         'secondClass' : S067R7?.length == 2,
// //                                                         'zeroClass' : S067R7?.length == 0,
// //                                                         'firstClass' : S067R7?.length == 1,
// //                                                         'thirdClass' : S067R7?.length == 3,
// //                                                         'fourthClass' : S067R7?.length == 4,
// //                                                         'fifthClass' : S067R7?.length == 5
// //                                                      }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S067R7)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S067R7?.length != 0? S067R7?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                     </div>
// //                     <!-- S069 -->
// //                     <div fxLayout="row" fxLayoutAlign="center start">
// //                         <div fxFlex style="height: 60px;" class="pr-16" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="font-size-16  line-height-1 mt-8" style="text-align: center; color: black">
// //                                     S069
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S069R1)" [ngClass]="{
// //                                                             'zeroClass' : S069R1?.length == 0,
// //                                                             'firstClass' : S069R1?.length == 1,
// //                                                             'secondClass' : S069R1?.length == 2,
// //                                                             'thirdClass' : S069R1?.length == 3,
// //                                                             'fourthClass' : S069R1?.length == 4,
// //                                                             'fifthClass' : S069R1?.length == 5              
// //                                                          }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S069R1)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S069R1?.length != 0? S069R1?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S069R2)" [ngClass]="{
// //                                                             'secondClass' : S069R2?.length == 2,
// //                                                             'zeroClass' : S069R2?.length == 0,
// //                                                             'firstClass' : S069R2?.length == 1,
// //                                                             'thirdClass' : S069R2?.length == 3,
// //                                                             'fourthClass' : S069R2?.length == 4,
// //                                                             'fifthClass' : S069R2?.length == 5
// //                                                          }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S069R2)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S069R2?.length != 0? S069R2?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S069R3)" [ngClass]="{
// //                                                         'zeroClass' : S069R3?.length == 0,
// //                                                         'firstClass' : S069R3?.length == 1,
// //                                                         'secondClass' : S069R3?.length == 2,
// //                                                         'thirdClass' : S069R3?.length == 3,
// //                                                         'fourthClass' : S069R3?.length == 4,
// //                                                         'fifthClass' : S069R3?.length == 5              
// //                                                      }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S069R3)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S069R3?.length != 0? S069R3?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S069R4)" [ngClass]="{
// //                                                         'secondClass' : S069R4?.length == 2,
// //                                                         'zeroClass' : S069R4?.length == 0,
// //                                                         'firstClass' : S069R4?.length == 1,
// //                                                         'thirdClass' : S069R4?.length == 3,
// //                                                         'fourthClass' : S069R4?.length == 4,
// //                                                         'fifthClass' : S069R4?.length == 5
// //                                                      }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S069R4)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S069R4?.length != 0? S069R4?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S069R5)" [ngClass]="{
// //                                                     'zeroClass' : S069R5?.length == 0,
// //                                                     'firstClass' : S069R5?.length == 1,
// //                                                     'secondClass' : S069R5?.length == 2,
// //                                                     'thirdClass' : S069R5?.length == 3,
// //                                                     'fourthClass' : S069R5?.length == 4,
// //                                                     'fifthClass' : S069R5?.length == 5              
// //                                                  }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S069R5)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S069R5?.length != 0? S069R5?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S069R6)" [ngClass]="{
// //                                                     'secondClass' : S069R6?.length == 2,
// //                                                     'zeroClass' : S069R6?.length == 0,
// //                                                     'firstClass' : S069R6?.length == 1,
// //                                                     'thirdClass' : S069R6?.length == 3,
// //                                                     'fourthClass' : S069R6?.length == 4,
// //                                                     'fifthClass' : S069R6?.length == 5
// //                                                  }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S069R6)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S069R6?.length != 0? S069R6?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S069R7)" [ngClass]="{
// //                                                         'secondClass' : S069R7?.length == 2,
// //                                                         'zeroClass' : S069R7?.length == 0,
// //                                                         'firstClass' : S069R7?.length == 1,
// //                                                         'thirdClass' : S069R7?.length == 3,
// //                                                         'fourthClass' : S069R7?.length == 4,
// //                                                         'fifthClass' : S069R7?.length == 5
// //                                                      }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S069R7)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S069R7?.length != 0? S069R7?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                     </div>
// //                     <!-- S071 -->
// //                     <div fxLayout="row" fxLayoutAlign="center start">
// //                         <div fxFlex style="height: 60px;" class="pr-16" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="font-size-16  line-height-1 mt-8" style="text-align: center; color: black">
// //                                     S071
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S071R1)" [ngClass]="{
// //                                                             'zeroClass' : S071R1?.length == 0,
// //                                                             'firstClass' : S071R1?.length == 1,
// //                                                             'secondClass' : S071R1?.length == 2,
// //                                                             'thirdClass' : S071R1?.length == 3,
// //                                                             'fourthClass' : S071R1?.length == 4,
// //                                                             'fifthClass' : S071R1?.length == 5              
// //                                                          }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S071R1)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S071R1?.length != 0? S071R1?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S071R2)" [ngClass]="{
// //                                                             'secondClass' : S071R2?.length == 2,
// //                                                             'zeroClass' : S071R2?.length == 0,
// //                                                             'firstClass' : S071R2?.length == 1,
// //                                                             'thirdClass' : S071R2?.length == 3,
// //                                                             'fourthClass' : S071R2?.length == 4,
// //                                                             'fifthClass' : S071R2?.length == 5
// //                                                          }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S071R2)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S071R2?.length != 0? S071R2?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S071R3)" [ngClass]="{
// //                                                         'zeroClass' : S071R3?.length == 0,
// //                                                         'firstClass' : S071R3?.length == 1,
// //                                                         'secondClass' : S071R3?.length == 2,
// //                                                         'thirdClass' : S071R3?.length == 3,
// //                                                         'fourthClass' : S071R3?.length == 4,
// //                                                         'fifthClass' : S071R3?.length == 5              
// //                                                      }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S071R3)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S071R3?.length != 0? S071R3?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S071R4)" [ngClass]="{
// //                                                         'secondClass' : S071R4?.length == 2,
// //                                                         'zeroClass' : S071R4?.length == 0,
// //                                                         'firstClass' : S071R4?.length == 1,
// //                                                         'thirdClass' : S071R4?.length == 3,
// //                                                         'fourthClass' : S071R4?.length == 4,
// //                                                         'fifthClass' : S071R4?.length == 5
// //                                                      }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S071R4)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S071R4?.length != 0? S071R4?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S071R5)" [ngClass]="{
// //                                                     'zeroClass' : S071R5?.length == 0,
// //                                                     'firstClass' : S071R5?.length == 1,
// //                                                     'secondClass' : S071R5?.length == 2,
// //                                                     'thirdClass' : S071R5?.length == 3,
// //                                                     'fourthClass' : S071R5?.length == 4,
// //                                                     'fifthClass' : S071R5?.length == 5              
// //                                                  }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S071R5)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S071R5?.length != 0? S071R5?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S071R6)" [ngClass]="{
// //                                                     'secondClass' : S071R6?.length == 2,
// //                                                     'zeroClass' : S071R6?.length == 0,
// //                                                     'firstClass' : S071R6?.length == 1,
// //                                                     'thirdClass' : S071R6?.length == 3,
// //                                                     'fourthClass' : S071R6?.length == 4,
// //                                                     'fifthClass' : S071R6?.length == 5
// //                                                  }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S071R6)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S071R6?.length != 0? S071R6?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S071R7)" [ngClass]="{
// //                                                         'secondClass' : S071R7?.length == 2,
// //                                                         'zeroClass' : S071R7?.length == 0,
// //                                                         'firstClass' : S071R7?.length == 1,
// //                                                         'thirdClass' : S071R7?.length == 3,
// //                                                         'fourthClass' : S071R7?.length == 4,
// //                                                         'fifthClass' : S071R7?.length == 5
// //                                                      }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S071R7)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S071R7?.length != 0? S071R7?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                     </div>
// //                     <!-- S073 -->
// //                     <div fxLayout="row" fxLayoutAlign="center start">
// //                         <div fxFlex style="height: 60px;" class="pr-16" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="font-size-16  line-height-1 mt-8" style="text-align: center; color: black">
// //                                     S073
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S073R1)" [ngClass]="{
// //                                                                             'zeroClass' : S073R1?.length == 0,
// //                                                                             'firstClass' : S073R1?.length == 1,
// //                                                                             'secondClass' : S073R1?.length == 2,
// //                                                                             'thirdClass' : S073R1?.length == 3,
// //                                                                             'fourthClass' : S073R1?.length == 4,
// //                                                                             'fifthClass' : S073R1?.length == 5              
// //                                                                          }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S073R1)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S073R1?.length != 0? S073R1?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S073R2)" [ngClass]="{
// //                                                                             'secondClass' : S073R2?.length == 2,
// //                                                                             'zeroClass' : S073R2?.length == 0,
// //                                                                             'firstClass' : S073R2?.length == 1,
// //                                                                             'thirdClass' : S073R2?.length == 3,
// //                                                                             'fourthClass' : S073R2?.length == 4,
// //                                                                             'fifthClass' : S073R2?.length == 5
// //                                                                          }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S073R2)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S073R2?.length != 0? S073R2?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S073R3)" [ngClass]="{
// //                                                                         'zeroClass' : S073R3?.length == 0,
// //                                                                         'firstClass' : S073R3?.length == 1,
// //                                                                         'secondClass' : S073R3?.length == 2,
// //                                                                         'thirdClass' : S073R3?.length == 3,
// //                                                                         'fourthClass' : S073R3?.length == 4,
// //                                                                         'fifthClass' : S073R3?.length == 5              
// //                                                                      }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S073R3)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S073R3?.length != 0? S073R3?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S073R4)" [ngClass]="{
// //                                                                         'secondClass' : S073R4?.length == 2,
// //                                                                         'zeroClass' : S073R4?.length == 0,
// //                                                                         'firstClass' : S073R4?.length == 1,
// //                                                                         'thirdClass' : S073R4?.length == 3,
// //                                                                         'fourthClass' : S073R4?.length == 4,
// //                                                                         'fifthClass' : S073R4?.length == 5
// //                                                                      }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S073R4)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S073R4?.length != 0? S073R4?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S073R5)" [ngClass]="{
// //                                                                     'zeroClass' : S073R5?.length == 0,
// //                                                                     'firstClass' : S073R5?.length == 1,
// //                                                                     'secondClass' : S073R5?.length == 2,
// //                                                                     'thirdClass' : S073R5?.length == 3,
// //                                                                     'fourthClass' : S073R5?.length == 4,
// //                                                                     'fifthClass' : S073R5?.length == 5              
// //                                                                  }" class="" fxLayoutAlign="center end">
// //                             <div class="">
// //                                 <div class="">
// //                                     <!-- {{S073R5?.length != 0? S073R5?.length:''}} -->
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S073R6)" [ngClass]="{
// //                                                                     'secondClass' : S073R6?.length == 2,
// //                                                                     'zeroClass' : S073R6?.length == 0,
// //                                                                     'firstClass' : S073R6?.length == 1,
// //                                                                     'thirdClass' : S073R6?.length == 3,
// //                                                                     'fourthClass' : S073R6?.length == 4,
// //                                                                     'fifthClass' : S073R6?.length == 5
// //                                                                  }" class="" fxLayoutAlign="center end">
// //                             <div class="">
// //                                 <div class="">
// //                                     <!-- {{S073R6?.length != 0? S073R6?.length:''}} -->
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S073R7)" [ngClass]="{
// //                                                                         'secondClass' : S073R7?.length == 2,
// //                                                                         'zeroClass' : S073R7?.length == 0,
// //                                                                         'firstClass' : S073R7?.length == 1,
// //                                                                         'thirdClass' : S073R7?.length == 3,
// //                                                                         'fourthClass' : S073R7?.length == 4,
// //                                                                         'fifthClass' : S073R7?.length == 5
// //                                                                      }" class="" fxLayoutAlign="center end">
// //                             <div class="">
// //                                 <div class="">
// //                                     <!-- {{S073R7?.length != 0? S073R7?.length:''}} -->
// //                                 </div>
// //                             </div>
// //                         </div>
// //                     </div>
// //                     <!-- S075 -->
// //                     <div fxLayout="row" fxLayoutAlign="center start">
// //                         <div fxFlex style="height: 60px;" class="pr-16" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="font-size-16  line-height-1 mt-8" style="text-align: center; color: black">
// //                                     S075
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S075R1)" [ngClass]="{
// //                                                                             'zeroClass' : S075R1?.length == 0,
// //                                                                             'firstClass' : S075R1?.length == 1,
// //                                                                             'secondClass' : S075R1?.length == 2,
// //                                                                             'thirdClass' : S075R1?.length == 3,
// //                                                                             'fourthClass' : S075R1?.length == 4,
// //                                                                             'fifthClass' : S075R1?.length == 5              
// //                                                                          }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S075R1)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S075R1?.length != 0? S075R1?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S075R2)" [ngClass]="{
// //                                                                             'secondClass' : S075R2?.length == 2,
// //                                                                             'zeroClass' : S075R2?.length == 0,
// //                                                                             'firstClass' : S075R2?.length == 1,
// //                                                                             'thirdClass' : S075R2?.length == 3,
// //                                                                             'fourthClass' : S075R2?.length == 4,
// //                                                                             'fifthClass' : S075R2?.length == 5
// //                                                                          }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S075R2)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S075R2?.length != 0? S075R2?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S075R3)" [ngClass]="{
// //                                                                         'zeroClass' : S075R3?.length == 0,
// //                                                                         'firstClass' : S075R3?.length == 1,
// //                                                                         'secondClass' : S075R3?.length == 2,
// //                                                                         'thirdClass' : S075R3?.length == 3,
// //                                                                         'fourthClass' : S075R3?.length == 4,
// //                                                                         'fifthClass' : S075R3?.length == 5              
// //                                                                      }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S075R3)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S075R3?.length != 0? S075R3?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S075R4)" [ngClass]="{
// //                                                                         'secondClass' : S075R4?.length == 2,
// //                                                                         'zeroClass' : S075R4?.length == 0,
// //                                                                         'firstClass' : S075R4?.length == 1,
// //                                                                         'thirdClass' : S075R4?.length == 3,
// //                                                                         'fourthClass' : S075R4?.length == 4,
// //                                                                         'fifthClass' : S075R4?.length == 5
// //                                                                      }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S075R4)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S075R4?.length != 0? S075R4?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S075R5)" [ngClass]="{
// //                                                                     'zeroClass' : S075R5?.length == 0,
// //                                                                     'firstClass' : S075R5?.length == 1,
// //                                                                     'secondClass' : S075R5?.length == 2,
// //                                                                     'thirdClass' : S075R5?.length == 3,
// //                                                                     'fourthClass' : S075R5?.length == 4,
// //                                                                     'fifthClass' : S075R5?.length == 5              
// //                                                                  }" class="" fxLayoutAlign="center end">
// //                             <div class="">
// //                                 <div class="">
// //                                     <!-- {{S075R5?.length != 0? S075R5?.length:''}} -->
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S075R6)" [ngClass]="{
// //                                                                     'secondClass' : S075R6?.length == 2,
// //                                                                     'zeroClass' : S075R6?.length == 0,
// //                                                                     'firstClass' : S075R6?.length == 1,
// //                                                                     'thirdClass' : S075R6?.length == 3,
// //                                                                     'fourthClass' : S075R6?.length == 4,
// //                                                                     'fifthClass' : S075R6?.length == 5
// //                                                                  }" class="" fxLayoutAlign="center end">
// //                             <div class="">
// //                                 <div class="">
// //                                     <!-- {{S075R6?.length != 0? S075R6?.length:''}} -->
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S075R7)" [ngClass]="{
// //                                                                         'secondClass' : S075R7?.length == 2,
// //                                                                         'zeroClass' : S075R7?.length == 0,
// //                                                                         'firstClass' : S075R7?.length == 1,
// //                                                                         'thirdClass' : S075R7?.length == 3,
// //                                                                         'fourthClass' : S075R7?.length == 4,
// //                                                                         'fifthClass' : S075R7?.length == 5
// //                                                                      }" class="" fxLayoutAlign="center end">
// //                             <div class="">
// //                                 <div class="">
// //                                     <!-- {{S075R7?.length != 0? S075R7?.length:''}} -->
// //                                 </div>
// //                             </div>
// //                         </div>
// //                     </div>
// //                     <!-- S077 -->
// //                     <div fxLayout="row" fxLayoutAlign="center start">
// //                         <div fxFlex style="height: 60px;" class="pr-16" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="font-size-16  line-height-1 mt-8" style="text-align: center; color: black">
// //                                     S077
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S077R1)" [ngClass]="{
// //                                                                             'zeroClass' : S077R1?.length == 0,
// //                                                                             'firstClass' : S077R1?.length == 1,
// //                                                                             'secondClass' : S077R1?.length == 2,
// //                                                                             'thirdClass' : S077R1?.length == 3,
// //                                                                             'fourthClass' : S077R1?.length == 4,
// //                                                                             'fifthClass' : S077R1?.length == 5              
// //                                                                          }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S077R1)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S077R1?.length != 0? S077R1?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S077R2)" [ngClass]="{
// //                                                                             'secondClass' : S077R2?.length == 2,
// //                                                                             'zeroClass' : S077R2?.length == 0,
// //                                                                             'firstClass' : S077R2?.length == 1,
// //                                                                             'thirdClass' : S077R2?.length == 3,
// //                                                                             'fourthClass' : S077R2?.length == 4,
// //                                                                             'fifthClass' : S077R2?.length == 5
// //                                                                          }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S077R2)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S077R2?.length != 0? S077R2?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S077R3)" [ngClass]="{
// //                                                                         'zeroClass' : S077R3?.length == 0,
// //                                                                         'firstClass' : S077R3?.length == 1,
// //                                                                         'secondClass' : S077R3?.length == 2,
// //                                                                         'thirdClass' : S077R3?.length == 3,
// //                                                                         'fourthClass' : S077R3?.length == 4,
// //                                                                         'fifthClass' : S077R3?.length == 5              
// //                                                                      }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S077R3)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S077R3?.length != 0? S077R3?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S077R4)" [ngClass]="{
// //                                                                         'secondClass' : S077R4?.length == 2,
// //                                                                         'zeroClass' : S077R4?.length == 0,
// //                                                                         'firstClass' : S077R4?.length == 1,
// //                                                                         'thirdClass' : S077R4?.length == 3,
// //                                                                         'fourthClass' : S077R4?.length == 4,
// //                                                                         'fifthClass' : S077R4?.length == 5
// //                                                                      }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S077R4)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S077R4?.length != 0? S077R4?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S077R5)" [ngClass]="{
// //                                                                     'zeroClass' : S077R5?.length == 0,
// //                                                                     'firstClass' : S077R5?.length == 1,
// //                                                                     'secondClass' : S077R5?.length == 2,
// //                                                                     'thirdClass' : S077R5?.length == 3,
// //                                                                     'fourthClass' : S077R5?.length == 4,
// //                                                                     'fifthClass' : S077R5?.length == 5              
// //                                                                  }" class="" fxLayoutAlign="center end">
// //                             <div class="">
// //                                 <div class="">
// //                                     <!-- {{S077R5?.length != 0? S077R5?.length:''}} -->
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S077R6)" [ngClass]="{
// //                                                                     'secondClass' : S077R6?.length == 2,
// //                                                                     'zeroClass' : S077R6?.length == 0,
// //                                                                     'firstClass' : S077R6?.length == 1,
// //                                                                     'thirdClass' : S077R6?.length == 3,
// //                                                                     'fourthClass' : S077R6?.length == 4,
// //                                                                     'fifthClass' : S077R6?.length == 5
// //                                                                  }" class="" fxLayoutAlign="center end">
// //                             <div class="">
// //                                 <div class="">
// //                                     <!-- {{S077R6?.length != 0? S077R6?.length:''}} -->
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S077R7)" [ngClass]="{
// //                                                                         'secondClass' : S077R7?.length == 2,
// //                                                                         'zeroClass' : S077R7?.length == 0,
// //                                                                         'firstClass' : S077R7?.length == 1,
// //                                                                         'thirdClass' : S077R7?.length == 3,
// //                                                                         'fourthClass' : S077R7?.length == 4,
// //                                                                         'fifthClass' : S077R7?.length == 5
// //                                                                      }" class="" fxLayoutAlign="center end">
// //                             <div class="">
// //                                 <div class="">
// //                                     <!-- {{S077R7?.length != 0? S077R7?.length:''}} -->
// //                                 </div>
// //                             </div>
// //                         </div>
// //                     </div>
// //                     <!-- S079 -->
// //                     <div fxLayout="row" fxLayoutAlign="center start">
// //                         <div fxFlex style="height: 60px;" class="pr-16" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="font-size-16  line-height-1 mt-8" style="text-align: center; color: black">
// //                                     S079
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S079R1)" [ngClass]="{
// //                                                                             'zeroClass' : S079R1?.length == 0,
// //                                                                             'firstClass' : S079R1?.length == 1,
// //                                                                             'secondClass' : S079R1?.length == 2,
// //                                                                             'thirdClass' : S079R1?.length == 3,
// //                                                                             'fourthClass' : S079R1?.length == 4,
// //                                                                             'fifthClass' : S079R1?.length == 5              
// //                                                                          }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S079R1)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S079R1?.length != 0? S079R1?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S079R2)" [ngClass]="{
// //                                                                             'secondClass' : S079R2?.length == 2,
// //                                                                             'zeroClass' : S079R2?.length == 0,
// //                                                                             'firstClass' : S079R2?.length == 1,
// //                                                                             'thirdClass' : S079R2?.length == 3,
// //                                                                             'fourthClass' : S079R2?.length == 4,
// //                                                                             'fifthClass' : S079R2?.length == 5
// //                                                                          }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S079R2)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S079R2?.length != 0? S079R2?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S079R3)" [ngClass]="{
// //                                                                         'zeroClass' : S079R3?.length == 0,
// //                                                                         'firstClass' : S079R3?.length == 1,
// //                                                                         'secondClass' : S079R3?.length == 2,
// //                                                                         'thirdClass' : S079R3?.length == 3,
// //                                                                         'fourthClass' : S079R3?.length == 4,
// //                                                                         'fifthClass' : S079R3?.length == 5              
// //                                                                      }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S079R3)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S079R3?.length != 0? S079R3?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S079R4)" [ngClass]="{
// //                                                                         'secondClass' : S079R4?.length == 2,
// //                                                                         'zeroClass' : S079R4?.length == 0,
// //                                                                         'firstClass' : S079R4?.length == 1,
// //                                                                         'thirdClass' : S079R4?.length == 3,
// //                                                                         'fourthClass' : S079R4?.length == 4,
// //                                                                         'fifthClass' : S079R4?.length == 5
// //                                                                      }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S079R4)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S079R4?.length != 0? S079R4?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S079R5)" [ngClass]="{
// //                                                                     'zeroClass' : S079R5?.length == 0,
// //                                                                     'firstClass' : S079R5?.length == 1,
// //                                                                     'secondClass' : S079R5?.length == 2,
// //                                                                     'thirdClass' : S079R5?.length == 3,
// //                                                                     'fourthClass' : S079R5?.length == 4,
// //                                                                     'fifthClass' : S079R5?.length == 5              
// //                                                                  }" class="" fxLayoutAlign="center end">
// //                             <div class="">
// //                                 <div class="">
// //                                     <!-- {{S079R5?.length != 0? S079R5?.length:''}} -->
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S079R6)" [ngClass]="{
// //                                                                     'secondClass' : S079R6?.length == 2,
// //                                                                     'zeroClass' : S079R6?.length == 0,
// //                                                                     'firstClass' : S079R6?.length == 1,
// //                                                                     'thirdClass' : S079R6?.length == 3,
// //                                                                     'fourthClass' : S079R6?.length == 4,
// //                                                                     'fifthClass' : S079R6?.length == 5
// //                                                                  }" class="" fxLayoutAlign="center end">
// //                             <div class="">
// //                                 <div class="">
// //                                     <!-- {{S079R6?.length != 0? S079R6?.length:''}} -->
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S079R7)" [ngClass]="{
// //                                                                         'secondClass' : S079R7?.length == 2,
// //                                                                         'zeroClass' : S079R7?.length == 0,
// //                                                                         'firstClass' : S079R7?.length == 1,
// //                                                                         'thirdClass' : S079R7?.length == 3,
// //                                                                         'fourthClass' : S079R7?.length == 4,
// //                                                                         'fifthClass' : S079R7?.length == 5
// //                                                                      }" class="" fxLayoutAlign="center end">
// //                             <div class="">
// //                                 <div class="">
// //                                     <!-- {{S079R7?.length != 0? S079R7?.length:''}} -->
// //                                 </div>
// //                             </div>
// //                         </div>
// //                     </div>
// //                     <!-- S081 -->
// //                     <div fxLayout="row" fxLayoutAlign="center start">
// //                         <div fxFlex style="height: 60px;" class="pr-16" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="font-size-16  line-height-1 mt-8" style="text-align: center; color: black">
// //                                     S081
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S081R1)" [ngClass]="{
// //                                                                             'zeroClass' : S081R1?.length == 0,
// //                                                                             'firstClass' : S081R1?.length == 1,
// //                                                                             'secondClass' : S081R1?.length == 2,
// //                                                                             'thirdClass' : S081R1?.length == 3,
// //                                                                             'fourthClass' : S081R1?.length == 4,
// //                                                                             'fifthClass' : S081R1?.length == 5              
// //                                                                          }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S081R1)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S081R1?.length != 0? S081R1?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S081R2)" [ngClass]="{
// //                                                                             'secondClass' : S081R2?.length == 2,
// //                                                                             'zeroClass' : S081R2?.length == 0,
// //                                                                             'firstClass' : S081R2?.length == 1,
// //                                                                             'thirdClass' : S081R2?.length == 3,
// //                                                                             'fourthClass' : S081R2?.length == 4,
// //                                                                             'fifthClass' : S081R2?.length == 5
// //                                                                          }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S081R2)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S081R2?.length != 0? S081R2?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S081R3)" [ngClass]="{
// //                                                                         'zeroClass' : S081R3?.length == 0,
// //                                                                         'firstClass' : S081R3?.length == 1,
// //                                                                         'secondClass' : S081R3?.length == 2,
// //                                                                         'thirdClass' : S081R3?.length == 3,
// //                                                                         'fourthClass' : S081R3?.length == 4,
// //                                                                         'fifthClass' : S081R3?.length == 5              
// //                                                                      }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S081R3)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S081R3?.length != 0? S081R3?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S081R4)" [ngClass]="{
// //                                                                         'secondClass' : S081R4?.length == 2,
// //                                                                         'zeroClass' : S081R4?.length == 0,
// //                                                                         'firstClass' : S081R4?.length == 1,
// //                                                                         'thirdClass' : S081R4?.length == 3,
// //                                                                         'fourthClass' : S081R4?.length == 4,
// //                                                                         'fifthClass' : S081R4?.length == 5
// //                                                                      }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S081R4)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S081R4?.length != 0? S081R4?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S081R5)" [ngClass]="{
// //                                                                     'zeroClass' : S081R5?.length == 0,
// //                                                                     'firstClass' : S081R5?.length == 1,
// //                                                                     'secondClass' : S081R5?.length == 2,
// //                                                                     'thirdClass' : S081R5?.length == 3,
// //                                                                     'fourthClass' : S081R5?.length == 4,
// //                                                                     'fifthClass' : S081R5?.length == 5              
// //                                                                  }" class="" fxLayoutAlign="center end">
// //                             <div class="">
// //                                 <div class="">
// //                                     <!-- {{S081R5?.length != 0? S081R5?.length:''}} -->
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S081R6)" [ngClass]="{
// //                                                                     'secondClass' : S081R6?.length == 2,
// //                                                                     'zeroClass' : S081R6?.length == 0,
// //                                                                     'firstClass' : S081R6?.length == 1,
// //                                                                     'thirdClass' : S081R6?.length == 3,
// //                                                                     'fourthClass' : S081R6?.length == 4,
// //                                                                     'fifthClass' : S081R6?.length == 5
// //                                                                  }" class="" fxLayoutAlign="center end">
// //                             <div class="">
// //                                 <div class="">
// //                                     <!-- {{S081R6?.length != 0? S081R6?.length:''}} -->
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S081R7)" [ngClass]="{
// //                                                                         'secondClass' : S081R7?.length == 2,
// //                                                                         'zeroClass' : S081R7?.length == 0,
// //                                                                         'firstClass' : S081R7?.length == 1,
// //                                                                         'thirdClass' : S081R7?.length == 3,
// //                                                                         'fourthClass' : S081R7?.length == 4,
// //                                                                         'fifthClass' : S081R7?.length == 5
// //                                                                      }" class="" fxLayoutAlign="center end">
// //                             <div class="">
// //                                 <div class="">
// //                                     <!-- {{S081R7?.length != 0? S081R7?.length:''}} -->
// //                                 </div>
// //                             </div>
// //                         </div>
// //                     </div>
// //                     <!-- S083 -->
// //                     <div fxLayout="row" fxLayoutAlign="center start">
// //                         <div fxFlex style="height: 60px;" class="pr-16" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="font-size-16  line-height-1 mt-8" style="text-align: center; color: black">
// //                                     S083
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S083R1)" [ngClass]="{
// //                                                                             'zeroClass' : S083R1?.length == 0,
// //                                                                             'firstClass' : S083R1?.length == 1,
// //                                                                             'secondClass' : S083R1?.length == 2,
// //                                                                             'thirdClass' : S083R1?.length == 3,
// //                                                                             'fourthClass' : S083R1?.length == 4,
// //                                                                             'fifthClass' : S083R1?.length == 5              
// //                                                                          }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S083R1)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S083R1?.length != 0? S083R1?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S083R2)" [ngClass]="{
// //                                                                             'secondClass' : S083R2?.length == 2,
// //                                                                             'zeroClass' : S083R2?.length == 0,
// //                                                                             'firstClass' : S083R2?.length == 1,
// //                                                                             'thirdClass' : S083R2?.length == 3,
// //                                                                             'fourthClass' : S083R2?.length == 4,
// //                                                                             'fifthClass' : S083R2?.length == 5
// //                                                                          }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S083R2)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S083R2?.length != 0? S083R2?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S083R3)" [ngClass]="{
// //                                                                         'zeroClass' : S083R3?.length == 0,
// //                                                                         'firstClass' : S083R3?.length == 1,
// //                                                                         'secondClass' : S083R3?.length == 2,
// //                                                                         'thirdClass' : S083R3?.length == 3,
// //                                                                         'fourthClass' : S083R3?.length == 4,
// //                                                                         'fifthClass' : S083R3?.length == 5              
// //                                                                      }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S083R3)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S083R3?.length != 0? S083R3?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S083R4)" [ngClass]="{
// //                                                                         'secondClass' : S083R4?.length == 2,
// //                                                                         'zeroClass' : S083R4?.length == 0,
// //                                                                         'firstClass' : S083R4?.length == 1,
// //                                                                         'thirdClass' : S083R4?.length == 3,
// //                                                                         'fourthClass' : S083R4?.length == 4,
// //                                                                         'fifthClass' : S083R4?.length == 5
// //                                                                      }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S083R4)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S083R4?.length != 0? S083R4?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S083R5)" [ngClass]="{
// //                                                                     'zeroClass' : S083R5?.length == 0,
// //                                                                     'firstClass' : S083R5?.length == 1,
// //                                                                     'secondClass' : S083R5?.length == 2,
// //                                                                     'thirdClass' : S083R5?.length == 3,
// //                                                                     'fourthClass' : S083R5?.length == 4,
// //                                                                     'fifthClass' : S083R5?.length == 5              
// //                                                                  }" class="" fxLayoutAlign="center end">
// //                             <div class="">
// //                                 <div class="">
// //                                     <!-- {{S083R5?.length != 0? S083R5?.length:''}} -->
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S083R6)" [ngClass]="{
// //                                                                     'secondClass' : S083R6?.length == 2,
// //                                                                     'zeroClass' : S083R6?.length == 0,
// //                                                                     'firstClass' : S083R6?.length == 1,
// //                                                                     'thirdClass' : S083R6?.length == 3,
// //                                                                     'fourthClass' : S083R6?.length == 4,
// //                                                                     'fifthClass' : S083R6?.length == 5
// //                                                                  }" class="" fxLayoutAlign="center end">
// //                             <div class="">
// //                                 <div class="">
// //                                     <!-- {{S083R6?.length != 0? S083R6?.length:''}} -->
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S083R7)" [ngClass]="{
// //                                                                         'secondClass' : S083R7?.length == 2,
// //                                                                         'zeroClass' : S083R7?.length == 0,
// //                                                                         'firstClass' : S083R7?.length == 1,
// //                                                                         'thirdClass' : S083R7?.length == 3,
// //                                                                         'fourthClass' : S083R7?.length == 4,
// //                                                                         'fifthClass' : S083R7?.length == 5
// //                                                                      }" class="" fxLayoutAlign="center end">
// //                             <div class="">
// //                                 <div class="">
// //                                     <!-- {{S083R7?.length != 0? S083R7?.length:''}} -->
// //                                 </div>
// //                             </div>
// //                         </div>
// //                     </div>
// //                     <!-- S085 -->
// //                     <div fxLayout="row" fxLayoutAlign="center start">
// //                         <div fxFlex style="height: 60px;" class="pr-16" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="font-size-16  line-height-1 mt-8" style="text-align: center; color: black">
// //                                     S085
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S085R1)" [ngClass]="{
// //                                                                             'zeroClass' : S085R1?.length == 0,
// //                                                                             'firstClass' : S085R1?.length == 1,
// //                                                                             'secondClass' : S085R1?.length == 2,
// //                                                                             'thirdClass' : S085R1?.length == 3,
// //                                                                             'fourthClass' : S085R1?.length == 4,
// //                                                                             'fifthClass' : S085R1?.length == 5              
// //                                                                          }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S085R1)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S085R1?.length != 0? S085R1?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S085R2)" [ngClass]="{
// //                                                                             'secondClass' : S085R2?.length == 2,
// //                                                                             'zeroClass' : S085R2?.length == 0,
// //                                                                             'firstClass' : S085R2?.length == 1,
// //                                                                             'thirdClass' : S085R2?.length == 3,
// //                                                                             'fourthClass' : S085R2?.length == 4,
// //                                                                             'fifthClass' : S085R2?.length == 5
// //                                                                          }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S085R2)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S085R2?.length != 0? S085R2?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S085R3)" [ngClass]="{
// //                                                                         'zeroClass' : S085R3?.length == 0,
// //                                                                         'firstClass' : S085R3?.length == 1,
// //                                                                         'secondClass' : S085R3?.length == 2,
// //                                                                         'thirdClass' : S085R3?.length == 3,
// //                                                                         'fourthClass' : S085R3?.length == 4,
// //                                                                         'fifthClass' : S085R3?.length == 5              
// //                                                                      }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S085R3)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S085R3?.length != 0? S085R3?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S085R4)" [ngClass]="{
// //                                                                         'secondClass' : S085R4?.length == 2,
// //                                                                         'zeroClass' : S085R4?.length == 0,
// //                                                                         'firstClass' : S085R4?.length == 1,
// //                                                                         'thirdClass' : S085R4?.length == 3,
// //                                                                         'fourthClass' : S085R4?.length == 4,
// //                                                                         'fifthClass' : S085R4?.length == 5
// //                                                                      }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S085R4)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S085R4?.length != 0? S085R4?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S085R5)" [ngClass]="{
// //                                                                     'zeroClass' : S085R5?.length == 0,
// //                                                                     'firstClass' : S085R5?.length == 1,
// //                                                                     'secondClass' : S085R5?.length == 2,
// //                                                                     'thirdClass' : S085R5?.length == 3,
// //                                                                     'fourthClass' : S085R5?.length == 4,
// //                                                                     'fifthClass' : S085R5?.length == 5              
// //                                                                  }" class="" fxLayoutAlign="center end">
// //                             <div class="">
// //                                 <div class="">
// //                                     <!-- {{S085R5?.length != 0? S085R5?.length:''}} -->
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S085R6)" [ngClass]="{
// //                                                                     'secondClass' : S085R6?.length == 2,
// //                                                                     'zeroClass' : S085R6?.length == 0,
// //                                                                     'firstClass' : S085R6?.length == 1,
// //                                                                     'thirdClass' : S085R6?.length == 3,
// //                                                                     'fourthClass' : S085R6?.length == 4,
// //                                                                     'fifthClass' : S085R6?.length == 5
// //                                                                  }" class="" fxLayoutAlign="center end">
// //                             <div class="">
// //                                 <div class="">
// //                                     <!-- {{S085R6?.length != 0? S085R6?.length:''}} -->
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S085R7)" [ngClass]="{
// //                                                                         'secondClass' : S085R7?.length == 2,
// //                                                                         'zeroClass' : S085R7?.length == 0,
// //                                                                         'firstClass' : S085R7?.length == 1,
// //                                                                         'thirdClass' : S085R7?.length == 3,
// //                                                                         'fourthClass' : S085R7?.length == 4,
// //                                                                         'fifthClass' : S085R7?.length == 5
// //                                                                      }" class="" fxLayoutAlign="center end">
// //                             <div class="">
// //                                 <div class="">
// //                                     <!-- {{S085R7?.length != 0? S085R7?.length:''}} -->
// //                                 </div>
// //                             </div>
// //                         </div>
// //                     </div>
// //                     <!-- S087 -->
// //                     <div fxLayout="row" fxLayoutAlign="center start">
// //                         <div fxFlex style="height: 60px;" class="pr-16" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="font-size-16  line-height-1 mt-8" style="text-align: center; color: black">
// //                                     S087
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S087R1)" [ngClass]="{
// //                                                                             'zeroClass' : S087R1?.length == 0,
// //                                                                             'firstClass' : S087R1?.length == 1,
// //                                                                             'secondClass' : S087R1?.length == 2,
// //                                                                             'thirdClass' : S087R1?.length == 3,
// //                                                                             'fourthClass' : S087R1?.length == 4,
// //                                                                             'fifthClass' : S087R1?.length == 5              
// //                                                                          }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S087R1)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S087R1?.length != 0? S087R1?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S087R2)" [ngClass]="{
// //                                                                             'secondClass' : S087R2?.length == 2,
// //                                                                             'zeroClass' : S087R2?.length == 0,
// //                                                                             'firstClass' : S087R2?.length == 1,
// //                                                                             'thirdClass' : S087R2?.length == 3,
// //                                                                             'fourthClass' : S087R2?.length == 4,
// //                                                                             'fifthClass' : S087R2?.length == 5
// //                                                                          }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S087R2)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S087R2?.length != 0? S087R2?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S087R3)" [ngClass]="{
// //                                                                         'zeroClass' : S087R3?.length == 0,
// //                                                                         'firstClass' : S087R3?.length == 1,
// //                                                                         'secondClass' : S087R3?.length == 2,
// //                                                                         'thirdClass' : S087R3?.length == 3,
// //                                                                         'fourthClass' : S087R3?.length == 4,
// //                                                                         'fifthClass' : S087R3?.length == 5              
// //                                                                      }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S087R3)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S087R3?.length != 0? S087R3?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S087R4)" [ngClass]="{
// //                                                                         'secondClass' : S087R4?.length == 2,
// //                                                                         'zeroClass' : S087R4?.length == 0,
// //                                                                         'firstClass' : S087R4?.length == 1,
// //                                                                         'thirdClass' : S087R4?.length == 3,
// //                                                                         'fourthClass' : S087R4?.length == 4,
// //                                                                         'fifthClass' : S087R4?.length == 5
// //                                                                      }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S087R4)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S087R4?.length != 0? S087R4?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S087R5)" [ngClass]="{
// //                                                                     'zeroClass' : S087R5?.length == 0,
// //                                                                     'firstClass' : S087R5?.length == 1,
// //                                                                     'secondClass' : S087R5?.length == 2,
// //                                                                     'thirdClass' : S087R5?.length == 3,
// //                                                                     'fourthClass' : S087R5?.length == 4,
// //                                                                     'fifthClass' : S087R5?.length == 5              
// //                                                                  }" class="" fxLayoutAlign="center end">
// //                             <div class="">
// //                                 <div class="">
// //                                     <!-- {{S087R5?.length != 0? S087R5?.length:''}} -->
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S087R6)" [ngClass]="{
// //                                                                     'secondClass' : S087R6?.length == 2,
// //                                                                     'zeroClass' : S087R6?.length == 0,
// //                                                                     'firstClass' : S087R6?.length == 1,
// //                                                                     'thirdClass' : S087R6?.length == 3,
// //                                                                     'fourthClass' : S087R6?.length == 4,
// //                                                                     'fifthClass' : S087R6?.length == 5
// //                                                                  }" class="" fxLayoutAlign="center end">
// //                             <div class="">
// //                                 <div class="">
// //                                     <!-- {{S087R6?.length != 0? S087R6?.length:''}} -->
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S087R7)" [ngClass]="{
// //                                                                         'secondClass' : S087R7?.length == 2,
// //                                                                         'zeroClass' : S087R7?.length == 0,
// //                                                                         'firstClass' : S087R7?.length == 1,
// //                                                                         'thirdClass' : S087R7?.length == 3,
// //                                                                         'fourthClass' : S087R7?.length == 4,
// //                                                                         'fifthClass' : S087R7?.length == 5
// //                                                                      }" class="" fxLayoutAlign="center end">
// //                             <div class="">
// //                                 <div class="">
// //                                     <!-- {{S087R7?.length != 0? S087R7?.length:''}} -->
// //                                 </div>
// //                             </div>
// //                         </div>
// //                     </div>
// //                     <!-- S089 -->
// //                     <div fxLayout="row" fxLayoutAlign="center start">
// //                         <div fxFlex style="height: 60px;" class="pr-16" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="font-size-16  line-height-1 mt-8" style="text-align: center; color: black">
// //                                     S089
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S089R1)" [ngClass]="{
// //                                                                             'zeroClass' : S089R1?.length == 0,
// //                                                                             'firstClass' : S089R1?.length == 1,
// //                                                                             'secondClass' : S089R1?.length == 2,
// //                                                                             'thirdClass' : S089R1?.length == 3,
// //                                                                             'fourthClass' : S089R1?.length == 4,
// //                                                                             'fifthClass' : S089R1?.length == 5              
// //                                                                          }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S089R1)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S089R1?.length != 0? S089R1?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S089R2)" [ngClass]="{
// //                                                                             'secondClass' : S089R2?.length == 2,
// //                                                                             'zeroClass' : S089R2?.length == 0,
// //                                                                             'firstClass' : S089R2?.length == 1,
// //                                                                             'thirdClass' : S089R2?.length == 3,
// //                                                                             'fourthClass' : S089R2?.length == 4,
// //                                                                             'fifthClass' : S089R2?.length == 5
// //                                                                          }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S089R2)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S089R2?.length != 0? S089R2?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S089R3)" [ngClass]="{
// //                                                                         'zeroClass' : S089R3?.length == 0,
// //                                                                         'firstClass' : S089R3?.length == 1,
// //                                                                         'secondClass' : S089R3?.length == 2,
// //                                                                         'thirdClass' : S089R3?.length == 3,
// //                                                                         'fourthClass' : S089R3?.length == 4,
// //                                                                         'fifthClass' : S089R3?.length == 5              
// //                                                                      }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S089R3)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S089R3?.length != 0? S089R3?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S089R4)" [ngClass]="{
// //                                                                         'secondClass' : S089R4?.length == 2,
// //                                                                         'zeroClass' : S089R4?.length == 0,
// //                                                                         'firstClass' : S089R4?.length == 1,
// //                                                                         'thirdClass' : S089R4?.length == 3,
// //                                                                         'fourthClass' : S089R4?.length == 4,
// //                                                                         'fifthClass' : S089R4?.length == 5
// //                                                                      }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S089R4)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S089R4?.length != 0? S089R4?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S089R5)" [ngClass]="{
// //                                                                     'zeroClass' : S089R5?.length == 0,
// //                                                                     'firstClass' : S089R5?.length == 1,
// //                                                                     'secondClass' : S089R5?.length == 2,
// //                                                                     'thirdClass' : S089R5?.length == 3,
// //                                                                     'fourthClass' : S089R5?.length == 4,
// //                                                                     'fifthClass' : S089R5?.length == 5              
// //                                                                  }" class="" fxLayoutAlign="center end">
// //                             <div class="">
// //                                 <div class="">
// //                                     <!-- {{S089R5?.length != 0? S089R5?.length:''}} -->
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S089R6)" [ngClass]="{
// //                                                                     'secondClass' : S089R6?.length == 2,
// //                                                                     'zeroClass' : S089R6?.length == 0,
// //                                                                     'firstClass' : S089R6?.length == 1,
// //                                                                     'thirdClass' : S089R6?.length == 3,
// //                                                                     'fourthClass' : S089R6?.length == 4,
// //                                                                     'fifthClass' : S089R6?.length == 5
// //                                                                  }" class="" fxLayoutAlign="center end">
// //                             <div class="">
// //                                 <div class="">
// //                                     <!-- {{S089R6?.length != 0? S089R6?.length:''}} -->
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S089R7)" [ngClass]="{
// //                                                                         'secondClass' : S089R7?.length == 2,
// //                                                                         'zeroClass' : S089R7?.length == 0,
// //                                                                         'firstClass' : S089R7?.length == 1,
// //                                                                         'thirdClass' : S089R7?.length == 3,
// //                                                                         'fourthClass' : S089R7?.length == 4,
// //                                                                         'fifthClass' : S089R7?.length == 5
// //                                                                      }" class="" fxLayoutAlign="center end">
// //                             <div class="">
// //                                 <div class="">
// //                                     <!-- {{S089R7?.length != 0? S089R7?.length:''}} -->
// //                                 </div>
// //                             </div>
// //                         </div>
// //                     </div>
// //                     <!-- S091 -->
// //                     <div fxLayout="row" fxLayoutAlign="center start">
// //                         <div fxFlex style="height: 60px;" class="pr-16" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="font-size-16  line-height-1 mt-8" style="text-align: center; color: black">
// //                                     S091
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S091R1)" [ngClass]="{
// //                                                                             'zeroClass' : S091R1?.length == 0,
// //                                                                             'firstClass' : S091R1?.length == 1,
// //                                                                             'secondClass' : S091R1?.length == 2,
// //                                                                             'thirdClass' : S091R1?.length == 3,
// //                                                                             'fourthClass' : S091R1?.length == 4,
// //                                                                             'fifthClass' : S091R1?.length == 5              
// //                                                                          }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S091R1)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S091R1?.length != 0? S091R1?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S091R2)" [ngClass]="{
// //                                                                             'secondClass' : S091R2?.length == 2,
// //                                                                             'zeroClass' : S091R2?.length == 0,
// //                                                                             'firstClass' : S091R2?.length == 1,
// //                                                                             'thirdClass' : S091R2?.length == 3,
// //                                                                             'fourthClass' : S091R2?.length == 4,
// //                                                                             'fifthClass' : S091R2?.length == 5
// //                                                                          }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S091R2)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S091R2?.length != 0? S091R2?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S091R3)" [ngClass]="{
// //                                                                         'zeroClass' : S091R3?.length == 0,
// //                                                                         'firstClass' : S091R3?.length == 1,
// //                                                                         'secondClass' : S091R3?.length == 2,
// //                                                                         'thirdClass' : S091R3?.length == 3,
// //                                                                         'fourthClass' : S091R3?.length == 4,
// //                                                                         'fifthClass' : S091R3?.length == 5              
// //                                                                      }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S091R3)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S091R3?.length != 0? S091R3?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S091R4)" [ngClass]="{
// //                                                                         'secondClass' : S091R4?.length == 2,
// //                                                                         'zeroClass' : S091R4?.length == 0,
// //                                                                         'firstClass' : S091R4?.length == 1,
// //                                                                         'thirdClass' : S091R4?.length == 3,
// //                                                                         'fourthClass' : S091R4?.length == 4,
// //                                                                         'fifthClass' : S091R4?.length == 5
// //                                                                      }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S091R4)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S091R4?.length != 0? S091R4?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S091R5)" [ngClass]="{
// //                                                                     'zeroClass' : S091R5?.length == 0,
// //                                                                     'firstClass' : S091R5?.length == 1,
// //                                                                     'secondClass' : S091R5?.length == 2,
// //                                                                     'thirdClass' : S091R5?.length == 3,
// //                                                                     'fourthClass' : S091R5?.length == 4,
// //                                                                     'fifthClass' : S091R5?.length == 5              
// //                                                                  }" class="" fxLayoutAlign="center end">
// //                             <div class="">
// //                                 <div class="">
// //                                     <!-- {{S091R5?.length != 0? S091R5?.length:''}} -->
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S091R6)" [ngClass]="{
// //                                                                     'secondClass' : S091R6?.length == 2,
// //                                                                     'zeroClass' : S091R6?.length == 0,
// //                                                                     'firstClass' : S091R6?.length == 1,
// //                                                                     'thirdClass' : S091R6?.length == 3,
// //                                                                     'fourthClass' : S091R6?.length == 4,
// //                                                                     'fifthClass' : S091R6?.length == 5
// //                                                                  }" class="" fxLayoutAlign="center end">
// //                             <div class="">
// //                                 <div class="">
// //                                     <!-- {{S091R6?.length != 0? S091R6?.length:''}} -->
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S091R7)" [ngClass]="{
// //                                                                         'secondClass' : S091R7?.length == 2,
// //                                                                         'zeroClass' : S091R7?.length == 0,
// //                                                                         'firstClass' : S091R7?.length == 1,
// //                                                                         'thirdClass' : S091R7?.length == 3,
// //                                                                         'fourthClass' : S091R7?.length == 4,
// //                                                                         'fifthClass' : S091R7?.length == 5
// //                                                                      }" class="" fxLayoutAlign="center end">
// //                             <div class="">
// //                                 <div class="">
// //                                     <!-- {{S091R7?.length != 0? S091R7?.length:''}} -->
// //                                 </div>
// //                             </div>
// //                         </div>
// //                     </div>
// //                     <!-- S093 -->
// //                     <div fxLayout="row" fxLayoutAlign="center start">
// //                         <div fxFlex style="height: 60px;" class="pr-16" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="font-size-16  line-height-1 mt-8" style="text-align: center; color: black">
// //                                     S093
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S093R1)" [ngClass]="{
// //                                                                             'zeroClass' : S093R1?.length == 0,
// //                                                                             'firstClass' : S093R1?.length == 1,
// //                                                                             'secondClass' : S093R1?.length == 2,
// //                                                                             'thirdClass' : S093R1?.length == 3,
// //                                                                             'fourthClass' : S093R1?.length == 4,
// //                                                                             'fifthClass' : S093R1?.length == 5              
// //                                                                          }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S093R1)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S093R1?.length != 0? S093R1?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S093R2)" [ngClass]="{
// //                                                                             'secondClass' : S093R2?.length == 2,
// //                                                                             'zeroClass' : S093R2?.length == 0,
// //                                                                             'firstClass' : S093R2?.length == 1,
// //                                                                             'thirdClass' : S093R2?.length == 3,
// //                                                                             'fourthClass' : S093R2?.length == 4,
// //                                                                             'fifthClass' : S093R2?.length == 5
// //                                                                          }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S093R2)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S093R2?.length != 0? S093R2?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S093R3)" [ngClass]="{
// //                                                                         'zeroClass' : S093R3?.length == 0,
// //                                                                         'firstClass' : S093R3?.length == 1,
// //                                                                         'secondClass' : S093R3?.length == 2,
// //                                                                         'thirdClass' : S093R3?.length == 3,
// //                                                                         'fourthClass' : S093R3?.length == 4,
// //                                                                         'fifthClass' : S093R3?.length == 5              
// //                                                                      }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S093R3)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S093R3?.length != 0? S093R3?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S093R4)" [ngClass]="{
// //                                                                         'secondClass' : S093R4?.length == 2,
// //                                                                         'zeroClass' : S093R4?.length == 0,
// //                                                                         'firstClass' : S093R4?.length == 1,
// //                                                                         'thirdClass' : S093R4?.length == 3,
// //                                                                         'fourthClass' : S093R4?.length == 4,
// //                                                                         'fifthClass' : S093R4?.length == 5
// //                                                                      }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S093R4)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S093R4?.length != 0? S093R4?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S093R5)" [ngClass]="{
// //                                                                     'zeroClass' : S093R5?.length == 0,
// //                                                                     'firstClass' : S093R5?.length == 1,
// //                                                                     'secondClass' : S093R5?.length == 2,
// //                                                                     'thirdClass' : S093R5?.length == 3,
// //                                                                     'fourthClass' : S093R5?.length == 4,
// //                                                                     'fifthClass' : S093R5?.length == 5              
// //                                                                  }" class="" fxLayoutAlign="center end">
// //                             <div class="">
// //                                 <div class="">
// //                                     <!-- {{S093R5?.length != 0? S093R5?.length:''}} -->
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S093R6)" [ngClass]="{
// //                                                                     'secondClass' : S093R6?.length == 2,
// //                                                                     'zeroClass' : S093R6?.length == 0,
// //                                                                     'firstClass' : S093R6?.length == 1,
// //                                                                     'thirdClass' : S093R6?.length == 3,
// //                                                                     'fourthClass' : S093R6?.length == 4,
// //                                                                     'fifthClass' : S093R6?.length == 5
// //                                                                  }" class="" fxLayoutAlign="center end">
// //                             <div class="">
// //                                 <div class="">
// //                                     <!-- {{S093R6?.length != 0? S093R6?.length:''}} -->
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S093R7)" [ngClass]="{
// //                                                                         'secondClass' : S093R7?.length == 2,
// //                                                                         'zeroClass' : S093R7?.length == 0,
// //                                                                         'firstClass' : S093R7?.length == 1,
// //                                                                         'thirdClass' : S093R7?.length == 3,
// //                                                                         'fourthClass' : S093R7?.length == 4,
// //                                                                         'fifthClass' : S093R7?.length == 5
// //                                                                      }" class="" fxLayoutAlign="center end">
// //                             <div class="">
// //                                 <div class="">
// //                                     <!-- {{S093R7?.length != 0? S093R7?.length:''}} -->
// //                                 </div>
// //                             </div>
// //                         </div>
// //                     </div>
// //                     <!-- S095 -->
// //                     <div fxLayout="row" fxLayoutAlign="center start">
// //                         <div fxFlex style="height: 60px;" class="pr-16" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="font-size-16  line-height-1 mt-8" style="text-align: center; color: black">
// //                                     S095
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S095R1)" [ngClass]="{
// //                                                                             'zeroClass' : S095R1?.length == 0,
// //                                                                             'firstClass' : S095R1?.length == 1,
// //                                                                             'secondClass' : S095R1?.length == 2,
// //                                                                             'thirdClass' : S095R1?.length == 3,
// //                                                                             'fourthClass' : S095R1?.length == 4,
// //                                                                             'fifthClass' : S095R1?.length == 5              
// //                                                                          }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S095R1)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S095R1?.length != 0? S095R1?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S095R2)" [ngClass]="{
// //                                                                             'secondClass' : S095R2?.length == 2,
// //                                                                             'zeroClass' : S095R2?.length == 0,
// //                                                                             'firstClass' : S095R2?.length == 1,
// //                                                                             'thirdClass' : S095R2?.length == 3,
// //                                                                             'fourthClass' : S095R2?.length == 4,
// //                                                                             'fifthClass' : S095R2?.length == 5
// //                                                                          }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S095R2)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S095R2?.length != 0? S095R2?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S095R3)" [ngClass]="{
// //                                                                         'zeroClass' : S095R3?.length == 0,
// //                                                                         'firstClass' : S095R3?.length == 1,
// //                                                                         'secondClass' : S095R3?.length == 2,
// //                                                                         'thirdClass' : S095R3?.length == 3,
// //                                                                         'fourthClass' : S095R3?.length == 4,
// //                                                                         'fifthClass' : S095R3?.length == 5              
// //                                                                      }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S095R3)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S095R3?.length != 0? S095R3?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S095R4)" [ngClass]="{
// //                                                                         'secondClass' : S095R4?.length == 2,
// //                                                                         'zeroClass' : S095R4?.length == 0,
// //                                                                         'firstClass' : S095R4?.length == 1,
// //                                                                         'thirdClass' : S095R4?.length == 3,
// //                                                                         'fourthClass' : S095R4?.length == 4,
// //                                                                         'fifthClass' : S095R4?.length == 5
// //                                                                      }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S095R4)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S095R4?.length != 0? S095R4?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S095R5)" [ngClass]="{
// //                                                                     'zeroClass' : S095R5?.length == 0,
// //                                                                     'firstClass' : S095R5?.length == 1,
// //                                                                     'secondClass' : S095R5?.length == 2,
// //                                                                     'thirdClass' : S095R5?.length == 3,
// //                                                                     'fourthClass' : S095R5?.length == 4,
// //                                                                     'fifthClass' : S095R5?.length == 5              
// //                                                                  }" class="" fxLayoutAlign="center end">
// //                             <div class="">
// //                                 <div class="">
// //                                     <!-- {{S095R5?.length != 0? S095R5?.length:''}} -->
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S095R6)" [ngClass]="{
// //                                                                     'secondClass' : S095R6?.length == 2,
// //                                                                     'zeroClass' : S095R6?.length == 0,
// //                                                                     'firstClass' : S095R6?.length == 1,
// //                                                                     'thirdClass' : S095R6?.length == 3,
// //                                                                     'fourthClass' : S095R6?.length == 4,
// //                                                                     'fifthClass' : S095R6?.length == 5
// //                                                                  }" class="" fxLayoutAlign="center end">
// //                             <div class="">
// //                                 <div class="">
// //                                     <!-- {{S095R6?.length != 0? S095R6?.length:''}} -->
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S095R7)" [ngClass]="{
// //                                                                         'secondClass' : S095R7?.length == 2,
// //                                                                         'zeroClass' : S095R7?.length == 0,
// //                                                                         'firstClass' : S095R7?.length == 1,
// //                                                                         'thirdClass' : S095R7?.length == 3,
// //                                                                         'fourthClass' : S095R7?.length == 4,
// //                                                                         'fifthClass' : S095R7?.length == 5
// //                                                                      }" class="" fxLayoutAlign="center end">
// //                             <div class="">
// //                                 <div class="">
// //                                     <!-- {{S095R7?.length != 0? S095R7?.length:''}} -->
// //                                 </div>
// //                             </div>
// //                         </div>
// //                     </div>
// //                     <!-- S097 -->
// //                     <div fxLayout="row" fxLayoutAlign="center start">
// //                         <div fxFlex style="height: 60px;" class="pr-16" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="font-size-16  line-height-1 mt-8" style="text-align: center; color: black">
// //                                     S097
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S097R1)" [ngClass]="{
// //                                                                             'zeroClass' : S097R1?.length == 0,
// //                                                                             'firstClass' : S097R1?.length == 1,
// //                                                                             'secondClass' : S097R1?.length == 2,
// //                                                                             'thirdClass' : S097R1?.length == 3,
// //                                                                             'fourthClass' : S097R1?.length == 4,
// //                                                                             'fifthClass' : S097R1?.length == 5              
// //                                                                          }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S097R1)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S097R1?.length != 0? S097R1?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S097R2)" [ngClass]="{
// //                                                                             'secondClass' : S097R2?.length == 2,
// //                                                                             'zeroClass' : S097R2?.length == 0,
// //                                                                             'firstClass' : S097R2?.length == 1,
// //                                                                             'thirdClass' : S097R2?.length == 3,
// //                                                                             'fourthClass' : S097R2?.length == 4,
// //                                                                             'fifthClass' : S097R2?.length == 5
// //                                                                          }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S097R2)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S097R2?.length != 0? S097R2?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S097R3)" [ngClass]="{
// //                                                                         'zeroClass' : S097R3?.length == 0,
// //                                                                         'firstClass' : S097R3?.length == 1,
// //                                                                         'secondClass' : S097R3?.length == 2,
// //                                                                         'thirdClass' : S097R3?.length == 3,
// //                                                                         'fourthClass' : S097R3?.length == 4,
// //                                                                         'fifthClass' : S097R3?.length == 5              
// //                                                                      }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S097R3)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S097R3?.length != 0? S097R3?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S097R4)" [ngClass]="{
// //                                                                         'secondClass' : S097R4?.length == 2,
// //                                                                         'zeroClass' : S097R4?.length == 0,
// //                                                                         'firstClass' : S097R4?.length == 1,
// //                                                                         'thirdClass' : S097R4?.length == 3,
// //                                                                         'fourthClass' : S097R4?.length == 4,
// //                                                                         'fifthClass' : S097R4?.length == 5
// //                                                                      }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S097R4)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S097R4?.length != 0? S097R4?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S097R5)" [ngClass]="{
// //                                                                     'zeroClass' : S097R5?.length == 0,
// //                                                                     'firstClass' : S097R5?.length == 1,
// //                                                                     'secondClass' : S097R5?.length == 2,
// //                                                                     'thirdClass' : S097R5?.length == 3,
// //                                                                     'fourthClass' : S097R5?.length == 4,
// //                                                                     'fifthClass' : S097R5?.length == 5              
// //                                                                  }" class="" fxLayoutAlign="center end">
// //                             <div class="">
// //                                 <div class="">
// //                                     <!-- {{S097R5?.length != 0? S097R5?.length:''}} -->
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S097R6)" [ngClass]="{
// //                                                                     'secondClass' : S097R6?.length == 2,
// //                                                                     'zeroClass' : S097R6?.length == 0,
// //                                                                     'firstClass' : S097R6?.length == 1,
// //                                                                     'thirdClass' : S097R6?.length == 3,
// //                                                                     'fourthClass' : S097R6?.length == 4,
// //                                                                     'fifthClass' : S097R6?.length == 5
// //                                                                  }" class="" fxLayoutAlign="center end">
// //                             <div class="">
// //                                 <div class="">
// //                                     <!-- {{S097R6?.length != 0? S097R6?.length:''}} -->
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S097R7)" [ngClass]="{
// //                                                                         'secondClass' : S097R7?.length == 2,
// //                                                                         'zeroClass' : S097R7?.length == 0,
// //                                                                         'firstClass' : S097R7?.length == 1,
// //                                                                         'thirdClass' : S097R7?.length == 3,
// //                                                                         'fourthClass' : S097R7?.length == 4,
// //                                                                         'fifthClass' : S097R7?.length == 5
// //                                                                      }" class="" fxLayoutAlign="center end">
// //                             <div class="">
// //                                 <div class="">
// //                                     <!-- {{S097R7?.length != 0? S097R7?.length:''}} -->
// //                                 </div>
// //                             </div>
// //                         </div>
// //                     </div>
// //                     <!-- S099 -->
// //                     <div fxLayout="row" fxLayoutAlign="center start">
// //                         <div fxFlex style="height: 60px;" class="pr-16" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="font-size-16  line-height-1 mt-8" style="text-align: center; color: black">
// //                                     S099
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S099R1)" [ngClass]="{
// //                                                                             'zeroClass' : S099R1?.length == 0,
// //                                                                             'firstClass' : S099R1?.length == 1,
// //                                                                             'secondClass' : S099R1?.length == 2,
// //                                                                             'thirdClass' : S099R1?.length == 3,
// //                                                                             'fourthClass' : S099R1?.length == 4,
// //                                                                             'fifthClass' : S099R1?.length == 5              
// //                                                                          }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S099R1)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S099R1?.length != 0? S099R1?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S099R2)" [ngClass]="{
// //                                                                             'secondClass' : S099R2?.length == 2,
// //                                                                             'zeroClass' : S099R2?.length == 0,
// //                                                                             'firstClass' : S099R2?.length == 1,
// //                                                                             'thirdClass' : S099R2?.length == 3,
// //                                                                             'fourthClass' : S099R2?.length == 4,
// //                                                                             'fifthClass' : S099R2?.length == 5
// //                                                                          }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S099R2)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S099R2?.length != 0? S099R2?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S099R3)" [ngClass]="{
// //                                                                         'zeroClass' : S099R3?.length == 0,
// //                                                                         'firstClass' : S099R3?.length == 1,
// //                                                                         'secondClass' : S099R3?.length == 2,
// //                                                                         'thirdClass' : S099R3?.length == 3,
// //                                                                         'fourthClass' : S099R3?.length == 4,
// //                                                                         'fifthClass' : S099R3?.length == 5              
// //                                                                      }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S099R3)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S099R3?.length != 0? S099R3?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S099R4)" [ngClass]="{
// //                                                                         'secondClass' : S099R4?.length == 2,
// //                                                                         'zeroClass' : S099R4?.length == 0,
// //                                                                         'firstClass' : S099R4?.length == 1,
// //                                                                         'thirdClass' : S099R4?.length == 3,
// //                                                                         'fourthClass' : S099R4?.length == 4,
// //                                                                         'fifthClass' : S099R4?.length == 5
// //                                                                      }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S099R4)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S099R4?.length != 0? S099R4?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S099R5)" [ngClass]="{
// //                                                                     'zeroClass' : S099R5?.length == 0,
// //                                                                     'firstClass' : S099R5?.length == 1,
// //                                                                     'secondClass' : S099R5?.length == 2,
// //                                                                     'thirdClass' : S099R5?.length == 3,
// //                                                                     'fourthClass' : S099R5?.length == 4,
// //                                                                     'fifthClass' : S099R5?.length == 5              
// //                                                                  }" class="" fxLayoutAlign="center end">
// //                             <div class="">
// //                                 <div class="">
// //                                     <!-- {{S099R5?.length != 0? S099R5?.length:''}} -->
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S099R6)" [ngClass]="{
// //                                                                     'secondClass' : S099R6?.length == 2,
// //                                                                     'zeroClass' : S099R6?.length == 0,
// //                                                                     'firstClass' : S099R6?.length == 1,
// //                                                                     'thirdClass' : S099R6?.length == 3,
// //                                                                     'fourthClass' : S099R6?.length == 4,
// //                                                                     'fifthClass' : S099R6?.length == 5
// //                                                                  }" class="" fxLayoutAlign="center end">
// //                             <div class="">
// //                                 <div class="">
// //                                     <!-- {{S099R6?.length != 0? S099R6?.length:''}} -->
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S099R7)" [ngClass]="{
// //                                                                         'secondClass' : S099R7?.length == 2,
// //                                                                         'zeroClass' : S099R7?.length == 0,
// //                                                                         'firstClass' : S099R7?.length == 1,
// //                                                                         'thirdClass' : S099R7?.length == 3,
// //                                                                         'fourthClass' : S099R7?.length == 4,
// //                                                                         'fifthClass' : S099R7?.length == 5
// //                                                                      }" class="" fxLayoutAlign="center end">
// //                             <div class="">
// //                                 <div class="">
// //                                     <!-- {{S099R7?.length != 0? S099R7?.length:''}} -->
// //                                 </div>
// //                             </div>
// //                         </div>
// //                     </div>
// //                     <!-- S101 -->
// //                     <div fxLayout="row" fxLayoutAlign="center start">
// //                         <div fxFlex style="height: 60px;" class="pr-16" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="font-size-16  line-height-1 mt-8" style="text-align: center; color: black">
// //                                     S101
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S101R1)" [ngClass]="{
// //                                                                             'zeroClass' : S101R1?.length == 0,
// //                                                                             'firstClass' : S101R1?.length == 1,
// //                                                                             'secondClass' : S101R1?.length == 2,
// //                                                                             'thirdClass' : S101R1?.length == 3,
// //                                                                             'fourthClass' : S101R1?.length == 4,
// //                                                                             'fifthClass' : S101R1?.length == 5              
// //                                                                          }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S101R1)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S101R1?.length != 0? S101R1?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S101R2)" [ngClass]="{
// //                                                                             'secondClass' : S101R2?.length == 2,
// //                                                                             'zeroClass' : S101R2?.length == 0,
// //                                                                             'firstClass' : S101R2?.length == 1,
// //                                                                             'thirdClass' : S101R2?.length == 3,
// //                                                                             'fourthClass' : S101R2?.length == 4,
// //                                                                             'fifthClass' : S101R2?.length == 5
// //                                                                          }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S101R2)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S101R2?.length != 0? S101R2?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S101R3)" [ngClass]="{
// //                                                                         'zeroClass' : S101R3?.length == 0,
// //                                                                         'firstClass' : S101R3?.length == 1,
// //                                                                         'secondClass' : S101R3?.length == 2,
// //                                                                         'thirdClass' : S101R3?.length == 3,
// //                                                                         'fourthClass' : S101R3?.length == 4,
// //                                                                         'fifthClass' : S101R3?.length == 5              
// //                                                                      }" class="" fxLayoutAlign="center end">
// //                             <div class="">
// //                                 <div class="">
// //                                     <!-- {{S101R3?.length != 0? S101R3?.length:''}} -->
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S101R4)" [ngClass]="{
// //                                                                         'secondClass' : S101R4?.length == 2,
// //                                                                         'zeroClass' : S101R4?.length == 0,
// //                                                                         'firstClass' : S101R4?.length == 1,
// //                                                                         'thirdClass' : S101R4?.length == 3,
// //                                                                         'fourthClass' : S101R4?.length == 4,
// //                                                                         'fifthClass' : S101R4?.length == 5
// //                                                                      }" class="" fxLayoutAlign="center end">
// //                             <div class="">
// //                                 <div class="">
// //                                     <!-- {{S101R4?.length != 0? S101R4?.length:''}} -->
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S101R5)" [ngClass]="{
// //                                                                     'zeroClass' : S101R5?.length == 0,
// //                                                                     'firstClass' : S101R5?.length == 1,
// //                                                                     'secondClass' : S101R5?.length == 2,
// //                                                                     'thirdClass' : S101R5?.length == 3,
// //                                                                     'fourthClass' : S101R5?.length == 4,
// //                                                                     'fifthClass' : S101R5?.length == 5              
// //                                                                  }" class="" fxLayoutAlign="center end">
// //                             <div class="">
// //                                 <div class="">
// //                                     <!-- {{S101R5?.length != 0? S101R5?.length:''}} -->
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S101R6)" [ngClass]="{
// //                                                                     'secondClass' : S101R6?.length == 2,
// //                                                                     'zeroClass' : S101R6?.length == 0,
// //                                                                     'firstClass' : S101R6?.length == 1,
// //                                                                     'thirdClass' : S101R6?.length == 3,
// //                                                                     'fourthClass' : S101R6?.length == 4,
// //                                                                     'fifthClass' : S101R6?.length == 5
// //                                                                  }" class="" fxLayoutAlign="center end">
// //                             <div class="">
// //                                 <div class="">
// //                                     <!-- {{S101R6?.length != 0? S101R6?.length:''}} -->
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S101R7)" [ngClass]="{
// //                                                                         'secondClass' : S101R7?.length == 2,
// //                                                                         'zeroClass' : S101R7?.length == 0,
// //                                                                         'firstClass' : S101R7?.length == 1,
// //                                                                         'thirdClass' : S101R7?.length == 3,
// //                                                                         'fourthClass' : S101R7?.length == 4,
// //                                                                         'fifthClass' : S101R7?.length == 5
// //                                                                      }" class="" fxLayoutAlign="center end">
// //                             <div class="">
// //                                 <div class="">
// //                                     <!-- {{S101R7?.length != 0? S101R7?.length:''}} -->
// //                                 </div>
// //                             </div>
// //                         </div>
// //                     </div>
// //                     <!-- S103 -->
// //                     <div fxLayout="row" fxLayoutAlign="center start">
// //                         <div fxFlex style="height: 60px;" class="pr-16" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="font-size-16  line-height-1 mt-8" style="text-align: center; color: black">
// //                                     S103
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S103R1)" [ngClass]="{
// //                                                                             'zeroClass' : S103R1?.length == 0,
// //                                                                             'firstClass' : S103R1?.length == 1,
// //                                                                             'secondClass' : S103R1?.length == 2,
// //                                                                             'thirdClass' : S103R1?.length == 3,
// //                                                                             'fourthClass' : S103R1?.length == 4,
// //                                                                             'fifthClass' : S103R1?.length == 5              
// //                                                                          }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S103R1)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S103R1?.length != 0? S103R1?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S103R2)" [ngClass]="{
// //                                                                             'secondClass' : S103R2?.length == 2,
// //                                                                             'zeroClass' : S103R2?.length == 0,
// //                                                                             'firstClass' : S103R2?.length == 1,
// //                                                                             'thirdClass' : S103R2?.length == 3,
// //                                                                             'fourthClass' : S103R2?.length == 4,
// //                                                                             'fifthClass' : S103R2?.length == 5
// //                                                                          }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S103R2)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S103R2?.length != 0? S103R2?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S103R3)" [ngClass]="{
// //                                                                         'zeroClass' : S103R3?.length == 0,
// //                                                                         'firstClass' : S103R3?.length == 1,
// //                                                                         'secondClass' : S103R3?.length == 2,
// //                                                                         'thirdClass' : S103R3?.length == 3,
// //                                                                         'fourthClass' : S103R3?.length == 4,
// //                                                                         'fifthClass' : S103R3?.length == 5              
// //                                                                      }" class="" fxLayoutAlign="center end">
// //                             <div class="">
// //                                 <div class="">
// //                                     <!-- {{S103R3?.length != 0? S103R3?.length:''}} -->
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S103R4)" [ngClass]="{
// //                                                                         'secondClass' : S103R4?.length == 2,
// //                                                                         'zeroClass' : S103R4?.length == 0,
// //                                                                         'firstClass' : S103R4?.length == 1,
// //                                                                         'thirdClass' : S103R4?.length == 3,
// //                                                                         'fourthClass' : S103R4?.length == 4,
// //                                                                         'fifthClass' : S103R4?.length == 5
// //                                                                      }" class="" fxLayoutAlign="center end">
// //                             <div class="">
// //                                 <div class="">
// //                                     <!-- {{S103R4?.length != 0? S103R4?.length:''}} -->
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S103R5)" [ngClass]="{
// //                                                                     'zeroClass' : S103R5?.length == 0,
// //                                                                     'firstClass' : S103R5?.length == 1,
// //                                                                     'secondClass' : S103R5?.length == 2,
// //                                                                     'thirdClass' : S103R5?.length == 3,
// //                                                                     'fourthClass' : S103R5?.length == 4,
// //                                                                     'fifthClass' : S103R5?.length == 5              
// //                                                                  }" class="" fxLayoutAlign="center end">
// //                             <div class="">
// //                                 <div class="">
// //                                     <!-- {{S103R5?.length != 0? S103R5?.length:''}} -->
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S103R6)" [ngClass]="{
// //                                                                     'secondClass' : S103R6?.length == 2,
// //                                                                     'zeroClass' : S103R6?.length == 0,
// //                                                                     'firstClass' : S103R6?.length == 1,
// //                                                                     'thirdClass' : S103R6?.length == 3,
// //                                                                     'fourthClass' : S103R6?.length == 4,
// //                                                                     'fifthClass' : S103R6?.length == 5
// //                                                                  }" class="" fxLayoutAlign="center end">
// //                             <div class="">
// //                                 <div class="">
// //                                     <!-- {{S103R6?.length != 0? S103R6?.length:''}} -->
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S103R7)" [ngClass]="{
// //                                                                         'secondClass' : S103R7?.length == 2,
// //                                                                         'zeroClass' : S103R7?.length == 0,
// //                                                                         'firstClass' : S103R7?.length == 1,
// //                                                                         'thirdClass' : S103R7?.length == 3,
// //                                                                         'fourthClass' : S103R7?.length == 4,
// //                                                                         'fifthClass' : S103R7?.length == 5
// //                                                                      }" class="" fxLayoutAlign="center end">
// //                             <div class="">
// //                                 <div class="">
// //                                     <!-- {{S103R7?.length != 0? S103R7?.length:''}} -->
// //                                 </div>
// //                             </div>
// //                         </div>
// //                     </div>


// //                 </div>
// //             </div>
// //             <div class="column2" fxFlex fxLayout="column">
// //                 <!-- Rownames -->
// //                 <div fxFlex>
// //                     <div fxLayout="row" fxLayoutAlign="center start">
// //                         <div fxFlex style=" height: 60px;" class="pr-16" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="font-size-16  line-height-1 mt-8" style="text-align: center; color: black">

// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex style=" height: 60px;" class="pr-16" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="font-size-16  line-height-1 mt-8" style="text-align: center; color: black">
// //                                     R1
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex style=" height: 60px;" class="pr-16" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="font-size-16  line-height-1 mt-8" style="text-align: center; color: black">
// //                                     R2
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex style=" height: 60px;" class="pr-16" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="font-size-16  line-height-1 mt-8" style="text-align: center; color: black">
// //                                     R3
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex style=" height: 60px;" class="pr-16" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="font-size-16  line-height-1 mt-8" style="text-align: center; color: black">
// //                                     R4
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <!-- <div fxFlex style=" height: 60px;" class="pr-16" fxLayoutAlign="center end">
// //                                                     <div class="pbdiv-16">
// //                                                         <div class="font-size-16  line-height-1 mt-8" style="text-align: center; color: black">
// //                                                             R5
// //                                                         </div>
// //                                                     </div>
// //                                                 </div>
// //                                                 <div fxFlex style=" height: 60px;" class="pr-16" fxLayoutAlign="center end">
// //                                                     <div class="pbdiv-16">
// //                                                         <div class="font-size-16  line-height-1 mt-8" style="text-align: center; color: black">
// //                                                             R6
// //                                                         </div>
// //                                                     </div>
// //                                                 </div>
// //                                                 <div fxFlex style=" height: 60px;" class="pr-16" fxLayoutAlign="center end">
// //                                                     <div class="pbdiv-16">
// //                                                         <div class="font-size-16  line-height-1 mt-8" style="text-align: center; color: black">
// //                                                             R7
// //                                                         </div>
// //                                                     </div>
// //                                                 </div> -->
// //                     </div>
// //                 </div>
// //                 <div fxFlex>

// //                     <!-- S033 -->
// //                     <div fxLayout="row" fxLayoutAlign="center start">
// //                         <div fxFlex style="height: 60px;" class="pr-16" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="font-size-16  line-height-1 mt-8" style="text-align: center; color: black">
// //                                     S033
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S033R1)" [ngClass]="{
// //                                                                     'zeroClass' : S033R1?.length == 0,
// //                                                                     'firstClass' : S033R1?.length == 1,
// //                                                                     'secondClass' : S033R1?.length == 2,
// //                                                                     'thirdClass' : S033R1?.length == 3,
// //                                                                     'fourthClass' : S033R1?.length == 4,
// //                                                                     'fifthClass' : S033R1?.length == 5              
// //                                                                  }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S033R1)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S033R1?.length != 0? S033R1?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S033R2)" [ngClass]="{
// //                                                                     'secondClass' : S033R2?.length == 2,
// //                                                                     'zeroClass' : S033R2?.length == 0,
// //                                                                     'firstClass' : S033R2?.length == 1,
// //                                                                     'thirdClass' : S033R2?.length == 3,
// //                                                                     'fourthClass' : S033R2?.length == 4,
// //                                                                     'fifthClass' : S033R2?.length == 5
// //                                                                  }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S033R2)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S033R2?.length != 0? S033R2?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S033R3)" [ngClass]="{
// //                                                                 'zeroClass' : S033R3?.length == 0,
// //                                                                 'firstClass' : S033R3?.length == 1,
// //                                                                 'secondClass' : S033R3?.length == 2,
// //                                                                 'thirdClass' : S033R3?.length == 3,
// //                                                                 'fourthClass' : S033R3?.length == 4,
// //                                                                 'fifthClass' : S033R3?.length == 5              
// //                                                              }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S033R3)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S033R3?.length != 0? S033R3?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S033R4)" [ngClass]="{
// //                                                                 'secondClass' : S033R4?.length == 2,
// //                                                                 'zeroClass' : S033R4?.length == 0,
// //                                                                 'firstClass' : S033R4?.length == 1,
// //                                                                 'thirdClass' : S033R4?.length == 3,
// //                                                                 'fourthClass' : S033R4?.length == 4,
// //                                                                 'fifthClass' : S033R4?.length == 5
// //                                                              }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S033R4)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S033R4?.length != 0? S033R4?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <!-- <div fxFlex (click)="loadSelectedContainer(S033R5)" [ngClass]="{
// //                                                             'zeroClass' : S033R5?.length == 0,
// //                                                             'firstClass' : S033R5?.length == 1,
// //                                                             'secondClass' : S033R5?.length == 2,
// //                                                             'thirdClass' : S033R5?.length == 3,
// //                                                             'fourthClass' : S033R5?.length == 4,
// //                                                             'fifthClass' : S033R5?.length == 5              
// //                                                          }" class="" fxLayoutAlign="center end">
// //                                                                         <div class="">
// //                                                                             <div class="">
// //                                                                                 {{S033R5?.length != 0? S033R5?.length:''}}
// //                                                                             </div>
// //                                                                         </div>
// //                                                                     </div>
// //                                                                     <div fxFlex (click)="loadSelectedContainer(S033R6)" [ngClass]="{
// //                                                             'secondClass' : S033R6?.length == 2,
// //                                                             'zeroClass' : S033R6?.length == 0,
// //                                                             'firstClass' : S033R6?.length == 1,
// //                                                             'thirdClass' : S033R6?.length == 3,
// //                                                             'fourthClass' : S033R6?.length == 4,
// //                                                             'fifthClass' : S033R6?.length == 5
// //                                                          }" class="" fxLayoutAlign="center end">
// //                                                                         <div class="">
// //                                                                             <div class="">
// //                                                                                 {{S033R6?.length != 0? S033R6?.length:''}}
// //                                                                             </div>
// //                                                                         </div>
// //                                                                     </div>
// //                                                                     <div fxFlex (click)="loadSelectedContainer(S033R7)" [ngClass]="{
// //                                                                 'secondClass' : S033R7?.length == 2,
// //                                                                 'zeroClass' : S033R7?.length == 0,
// //                                                                 'firstClass' : S033R7?.length == 1,
// //                                                                 'thirdClass' : S033R7?.length == 3,
// //                                                                 'fourthClass' : S033R7?.length == 4,
// //                                                                 'fifthClass' : S033R7?.length == 5
// //                                                              }" class="" fxLayoutAlign="center end">
// //                                                                         <div class="">
// //                                                                             <div class="">
// //                                                                                 {{S033R7?.length != 0? S033R7?.length:''}}
// //                                                                             </div>
// //                                                                         </div>
// //                                                                     </div> -->
// //                     </div>
// //                     <!-- S035 -->
// //                     <div fxLayout="row" fxLayoutAlign="center start">
// //                         <div fxFlex style="height: 60px;" class="pr-16" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="font-size-16  line-height-1 mt-8" style="text-align: center; color: black">
// //                                     S035
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S035R1)" [ngClass]="{
// //                                                                                     'zeroClass' : S035R1?.length == 0,
// //                                                                                     'firstClass' : S035R1?.length == 1,
// //                                                                                     'secondClass' : S035R1?.length == 2,
// //                                                                                     'thirdClass' : S035R1?.length == 3,
// //                                                                                     'fourthClass' : S035R1?.length == 4,
// //                                                                                     'fifthClass' : S035R1?.length == 5              
// //                                                                                  }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S035R1)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S035R1?.length != 0? S035R1?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S035R2)" [ngClass]="{
// //                                                                                     'secondClass' : S035R2?.length == 2,
// //                                                                                     'zeroClass' : S035R2?.length == 0,
// //                                                                                     'firstClass' : S035R2?.length == 1,
// //                                                                                     'thirdClass' : S035R2?.length == 3,
// //                                                                                     'fourthClass' : S035R2?.length == 4,
// //                                                                                     'fifthClass' : S035R2?.length == 5
// //                                                                                  }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S035R2)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S035R2?.length != 0? S035R2?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S035R3)" [ngClass]="{
// //                                                                                 'zeroClass' : S035R3?.length == 0,
// //                                                                                 'firstClass' : S035R3?.length == 1,
// //                                                                                 'secondClass' : S035R3?.length == 2,
// //                                                                                 'thirdClass' : S035R3?.length == 3,
// //                                                                                 'fourthClass' : S035R3?.length == 4,
// //                                                                                 'fifthClass' : S035R3?.length == 5              
// //                                                                              }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S035R3)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S035R3?.length != 0? S035R3?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S035R4)" [ngClass]="{
// //                                                                                 'secondClass' : S035R4?.length == 2,
// //                                                                                 'zeroClass' : S035R4?.length == 0,
// //                                                                                 'firstClass' : S035R4?.length == 1,
// //                                                                                 'thirdClass' : S035R4?.length == 3,
// //                                                                                 'fourthClass' : S035R4?.length == 4,
// //                                                                                 'fifthClass' : S035R4?.length == 5
// //                                                                              }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S035R4)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S035R4?.length != 0? S035R4?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <!-- <div fxFlex (click)="loadSelectedContainer(S035R5)" [ngClass]="{
// //                                                                             'zeroClass' : S035R5?.length == 0,
// //                                                                             'firstClass' : S035R5?.length == 1,
// //                                                                             'secondClass' : S035R5?.length == 2,
// //                                                                             'thirdClass' : S035R5?.length == 3,
// //                                                                             'fourthClass' : S035R5?.length == 4,
// //                                                                             'fifthClass' : S035R5?.length == 5              
// //                                                                          }" class="" fxLayoutAlign="center end">
// //                                                                                         <div class="">
// //                                                                                             <div class="">
// //                                                                                                 {{S035R5?.length != 0? S035R5?.length:''}}
// //                                                                                             </div>
// //                                                                                         </div>
// //                                                                                     </div>
// //                                                                                     <div fxFlex (click)="loadSelectedContainer(S035R6)" [ngClass]="{
// //                                                                             'secondClass' : S035R6?.length == 2,
// //                                                                             'zeroClass' : S035R6?.length == 0,
// //                                                                             'firstClass' : S035R6?.length == 1,
// //                                                                             'thirdClass' : S035R6?.length == 3,
// //                                                                             'fourthClass' : S035R6?.length == 4,
// //                                                                             'fifthClass' : S035R6?.length == 5
// //                                                                          }" class="" fxLayoutAlign="center end">
// //                                                                                         <div class="">
// //                                                                                             <div class="">
// //                                                                                                 {{S035R6?.length != 0? S035R6?.length:''}}
// //                                                                                             </div>
// //                                                                                         </div>
// //                                                                                     </div>
// //                                                                                     <div fxFlex (click)="loadSelectedContainer(S035R7)" [ngClass]="{
// //                                                                                 'secondClass' : S035R7?.length == 2,
// //                                                                                 'zeroClass' : S035R7?.length == 0,
// //                                                                                 'firstClass' : S035R7?.length == 1,
// //                                                                                 'thirdClass' : S035R7?.length == 3,
// //                                                                                 'fourthClass' : S035R7?.length == 4,
// //                                                                                 'fifthClass' : S035R7?.length == 5
// //                                                                              }" class="" fxLayoutAlign="center end">
// //                                                                                         <div class="">
// //                                                                                             <div class="">
// //                                                                                                 {{S035R7?.length != 0? S035R7?.length:''}}
// //                                                                                             </div>
// //                                                                                         </div>
// //                                                                                     </div> -->
// //                     </div>
// //                     <!-- S037 -->
// //                     <div fxLayout="row" fxLayoutAlign="center start">
// //                         <div fxFlex style="height: 60px;" class="pr-16" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="font-size-16  line-height-1 mt-8" style="text-align: center; color: black">
// //                                     S037
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S037R1)" [ngClass]="{
// //                                                                     'zeroClass' : S037R1?.length == 0,
// //                                                                     'firstClass' : S037R1?.length == 1,
// //                                                                     'secondClass' : S037R1?.length == 2,
// //                                                                     'thirdClass' : S037R1?.length == 3,
// //                                                                     'fourthClass' : S037R1?.length == 4,
// //                                                                     'fifthClass' : S037R1?.length == 5              
// //                                                                  }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S037R1)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S037R1?.length != 0? S037R1?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S037R2)" [ngClass]="{
// //                                                                     'secondClass' : S037R2?.length == 2,
// //                                                                     'zeroClass' : S037R2?.length == 0,
// //                                                                     'firstClass' : S037R2?.length == 1,
// //                                                                     'thirdClass' : S037R2?.length == 3,
// //                                                                     'fourthClass' : S037R2?.length == 4,
// //                                                                     'fifthClass' : S037R2?.length == 5
// //                                                                  }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S037R2)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S037R2?.length != 0? S037R2?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S037R3)" [ngClass]="{
// //                                                                 'zeroClass' : S037R3?.length == 0,
// //                                                                 'firstClass' : S037R3?.length == 1,
// //                                                                 'secondClass' : S037R3?.length == 2,
// //                                                                 'thirdClass' : S037R3?.length == 3,
// //                                                                 'fourthClass' : S037R3?.length == 4,
// //                                                                 'fifthClass' : S037R3?.length == 5              
// //                                                              }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S037R3)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S037R3?.length != 0? S037R3?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S037R4)" [ngClass]="{
// //                                                                 'secondClass' : S037R4?.length == 2,
// //                                                                 'zeroClass' : S037R4?.length == 0,
// //                                                                 'firstClass' : S037R4?.length == 1,
// //                                                                 'thirdClass' : S037R4?.length == 3,
// //                                                                 'fourthClass' : S037R4?.length == 4,
// //                                                                 'fifthClass' : S037R4?.length == 5
// //                                                              }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S037R4)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S037R4?.length != 0? S037R4?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <!-- <div fxFlex (click)="loadSelectedContainer(S037R5)" [ngClass]="{
// //                                                             'zeroClass' : S037R5?.length == 0,
// //                                                             'firstClass' : S037R5?.length == 1,
// //                                                             'secondClass' : S037R5?.length == 2,
// //                                                             'thirdClass' : S037R5?.length == 3,
// //                                                             'fourthClass' : S037R5?.length == 4,
// //                                                             'fifthClass' : S037R5?.length == 5              
// //                                                          }" class="" fxLayoutAlign="center end">
// //                                                                         <div class="">
// //                                                                             <div class="">
// //                                                                                 {{S037R5?.length != 0? S037R5?.length:''}}
// //                                                                             </div>
// //                                                                         </div>
// //                                                                     </div>
// //                                                                     <div fxFlex (click)="loadSelectedContainer(S037R6)" [ngClass]="{
// //                                                             'secondClass' : S037R6?.length == 2,
// //                                                             'zeroClass' : S037R6?.length == 0,
// //                                                             'firstClass' : S037R6?.length == 1,
// //                                                             'thirdClass' : S037R6?.length == 3,
// //                                                             'fourthClass' : S037R6?.length == 4,
// //                                                             'fifthClass' : S037R6?.length == 5
// //                                                          }" class="" fxLayoutAlign="center end">
// //                                                                         <div class="">
// //                                                                             <div class="">
// //                                                                                 {{S037R6?.length != 0? S037R6?.length:''}}
// //                                                                             </div>
// //                                                                         </div>
// //                                                                     </div>
// //                                                                     <div fxFlex (click)="loadSelectedContainer(S037R7)" [ngClass]="{
// //                                                                 'secondClass' : S037R7?.length == 2,
// //                                                                 'zeroClass' : S037R7?.length == 0,
// //                                                                 'firstClass' : S037R7?.length == 1,
// //                                                                 'thirdClass' : S037R7?.length == 3,
// //                                                                 'fourthClass' : S037R7?.length == 4,
// //                                                                 'fifthClass' : S037R7?.length == 5
// //                                                              }" class="" fxLayoutAlign="center end">
// //                                                                         <div class="">
// //                                                                             <div class="">
// //                                                                                 {{S037R7?.length != 0? S037R7?.length:''}}
// //                                                                             </div>
// //                                                                         </div>
// //                                                                     </div> -->
// //                     </div>
// //                     <!-- S039 -->
// //                     <div fxLayout="row" fxLayoutAlign="center start">
// //                         <div fxFlex style="height: 60px;" class="pr-16" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="font-size-16  line-height-1 mt-8" style="text-align: center; color: black">
// //                                     S039
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S039R1)" [ngClass]="{
// //                                                                                     'zeroClass' : S039R1?.length == 0,
// //                                                                                     'firstClass' : S039R1?.length == 1,
// //                                                                                     'secondClass' : S039R1?.length == 2,
// //                                                                                     'thirdClass' : S039R1?.length == 3,
// //                                                                                     'fourthClass' : S039R1?.length == 4,
// //                                                                                     'fifthClass' : S039R1?.length == 5              
// //                                                                                  }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S039R1)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S039R1?.length != 0? S039R1?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S039R2)" [ngClass]="{
// //                                                                                     'secondClass' : S039R2?.length == 2,
// //                                                                                     'zeroClass' : S039R2?.length == 0,
// //                                                                                     'firstClass' : S039R2?.length == 1,
// //                                                                                     'thirdClass' : S039R2?.length == 3,
// //                                                                                     'fourthClass' : S039R2?.length == 4,
// //                                                                                     'fifthClass' : S039R2?.length == 5
// //                                                                                  }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S039R2)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S039R2?.length != 0? S039R2?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S039R3)" [ngClass]="{
// //                                                                                 'zeroClass' : S039R3?.length == 0,
// //                                                                                 'firstClass' : S039R3?.length == 1,
// //                                                                                 'secondClass' : S039R3?.length == 2,
// //                                                                                 'thirdClass' : S039R3?.length == 3,
// //                                                                                 'fourthClass' : S039R3?.length == 4,
// //                                                                                 'fifthClass' : S039R3?.length == 5              
// //                                                                              }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S039R3)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S039R3?.length != 0? S039R3?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S039R4)" [ngClass]="{
// //                                                                                 'secondClass' : S039R4?.length == 2,
// //                                                                                 'zeroClass' : S039R4?.length == 0,
// //                                                                                 'firstClass' : S039R4?.length == 1,
// //                                                                                 'thirdClass' : S039R4?.length == 3,
// //                                                                                 'fourthClass' : S039R4?.length == 4,
// //                                                                                 'fifthClass' : S039R4?.length == 5
// //                                                                              }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S039R4)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S039R4?.length != 0? S039R4?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <!-- <div fxFlex (click)="loadSelectedContainer(S039R5)" [ngClass]="{
// //                                                                             'zeroClass' : S039R5?.length == 0,
// //                                                                             'firstClass' : S039R5?.length == 1,
// //                                                                             'secondClass' : S039R5?.length == 2,
// //                                                                             'thirdClass' : S039R5?.length == 3,
// //                                                                             'fourthClass' : S039R5?.length == 4,
// //                                                                             'fifthClass' : S039R5?.length == 5              
// //                                                                          }" class="" fxLayoutAlign="center end">
// //                                                                                         <div class="">
// //                                                                                             <div class="">
// //                                                                                                 {{S039R5?.length != 0? S039R5?.length:''}}
// //                                                                                             </div>
// //                                                                                         </div>
// //                                                                                     </div>
// //                                                                                     <div fxFlex (click)="loadSelectedContainer(S039R6)" [ngClass]="{
// //                                                                             'secondClass' : S039R6?.length == 2,
// //                                                                             'zeroClass' : S039R6?.length == 0,
// //                                                                             'firstClass' : S039R6?.length == 1,
// //                                                                             'thirdClass' : S039R6?.length == 3,
// //                                                                             'fourthClass' : S039R6?.length == 4,
// //                                                                             'fifthClass' : S039R6?.length == 5
// //                                                                          }" class="" fxLayoutAlign="center end">
// //                                                                                         <div class="">
// //                                                                                             <div class="">
// //                                                                                                 {{S039R6?.length != 0? S039R6?.length:''}}
// //                                                                                             </div>
// //                                                                                         </div>
// //                                                                                     </div>
// //                                                                                     <div fxFlex (click)="loadSelectedContainer(S039R7)" [ngClass]="{
// //                                                                                 'secondClass' : S039R7?.length == 2,
// //                                                                                 'zeroClass' : S039R7?.length == 0,
// //                                                                                 'firstClass' : S039R7?.length == 1,
// //                                                                                 'thirdClass' : S039R7?.length == 3,
// //                                                                                 'fourthClass' : S039R7?.length == 4,
// //                                                                                 'fifthClass' : S039R7?.length == 5
// //                                                                              }" class="" fxLayoutAlign="center end">
// //                                                                                         <div class="">
// //                                                                                             <div class="">
// //                                                                                                 {{S039R7?.length != 0? S039R7?.length:''}}
// //                                                                                             </div>
// //                                                                                         </div>
// //                                                                                     </div> -->
// //                     </div>
// //                     <!-- S041 -->
// //                     <div fxLayout="row" fxLayoutAlign="center start">
// //                         <div fxFlex style="height: 60px;" class="pr-16" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="font-size-16  line-height-1 mt-8" style="text-align: center; color: black">
// //                                     S041
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S041R1)" [ngClass]="{
// //                                                                     'zeroClass' : S041R1?.length == 0,
// //                                                                     'firstClass' : S041R1?.length == 1,
// //                                                                     'secondClass' : S041R1?.length == 2,
// //                                                                     'thirdClass' : S041R1?.length == 3,
// //                                                                     'fourthClass' : S041R1?.length == 4,
// //                                                                     'fifthClass' : S041R1?.length == 5              
// //                                                                  }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S041R1)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S041R1?.length != 0? S041R1?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S041R2)" [ngClass]="{
// //                                                                     'secondClass' : S041R2?.length == 2,
// //                                                                     'zeroClass' : S041R2?.length == 0,
// //                                                                     'firstClass' : S041R2?.length == 1,
// //                                                                     'thirdClass' : S041R2?.length == 3,
// //                                                                     'fourthClass' : S041R2?.length == 4,
// //                                                                     'fifthClass' : S041R2?.length == 5
// //                                                                  }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S041R2)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S041R2?.length != 0? S041R2?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S041R3)" [ngClass]="{
// //                                                                 'zeroClass' : S041R3?.length == 0,
// //                                                                 'firstClass' : S041R3?.length == 1,
// //                                                                 'secondClass' : S041R3?.length == 2,
// //                                                                 'thirdClass' : S041R3?.length == 3,
// //                                                                 'fourthClass' : S041R3?.length == 4,
// //                                                                 'fifthClass' : S041R3?.length == 5              
// //                                                              }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S041R3)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S041R3?.length != 0? S041R3?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S041R4)" [ngClass]="{
// //                                                                 'secondClass' : S041R4?.length == 2,
// //                                                                 'zeroClass' : S041R4?.length == 0,
// //                                                                 'firstClass' : S041R4?.length == 1,
// //                                                                 'thirdClass' : S041R4?.length == 3,
// //                                                                 'fourthClass' : S041R4?.length == 4,
// //                                                                 'fifthClass' : S041R4?.length == 5
// //                                                              }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S041R4)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S041R4?.length != 0? S041R4?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <!-- <div fxFlex (click)="loadSelectedContainer(S041R5)" [ngClass]="{
// //                                                             'zeroClass' : S041R5?.length == 0,
// //                                                             'firstClass' : S041R5?.length == 1,
// //                                                             'secondClass' : S041R5?.length == 2,
// //                                                             'thirdClass' : S041R5?.length == 3,
// //                                                             'fourthClass' : S041R5?.length == 4,
// //                                                             'fifthClass' : S041R5?.length == 5              
// //                                                          }" class="" fxLayoutAlign="center end">
// //                                                                         <div class="">
// //                                                                             <div class="">
// //                                                                                 {{S041R5?.length != 0? S041R5?.length:''}}
// //                                                                             </div>
// //                                                                         </div>
// //                                                                     </div>
// //                                                                     <div fxFlex (click)="loadSelectedContainer(S041R6)" [ngClass]="{
// //                                                             'secondClass' : S041R6?.length == 2,
// //                                                             'zeroClass' : S041R6?.length == 0,
// //                                                             'firstClass' : S041R6?.length == 1,
// //                                                             'thirdClass' : S041R6?.length == 3,
// //                                                             'fourthClass' : S041R6?.length == 4,
// //                                                             'fifthClass' : S041R6?.length == 5
// //                                                          }" class="" fxLayoutAlign="center end">
// //                                                                         <div class="">
// //                                                                             <div class="">
// //                                                                                 {{S041R6?.length != 0? S041R6?.length:''}}
// //                                                                             </div>
// //                                                                         </div>
// //                                                                     </div>
// //                                                                     <div fxFlex (click)="loadSelectedContainer(S041R7)" [ngClass]="{
// //                                                                 'secondClass' : S041R7?.length == 2,
// //                                                                 'zeroClass' : S041R7?.length == 0,
// //                                                                 'firstClass' : S041R7?.length == 1,
// //                                                                 'thirdClass' : S041R7?.length == 3,
// //                                                                 'fourthClass' : S041R7?.length == 4,
// //                                                                 'fifthClass' : S041R7?.length == 5
// //                                                              }" class="" fxLayoutAlign="center end">
// //                                                                         <div class="">
// //                                                                             <div class="">
// //                                                                                 {{S041R7?.length != 0? S041R7?.length:''}}
// //                                                                             </div>
// //                                                                         </div>
// //                                                                     </div> -->
// //                     </div>
// //                     <!-- S043 -->
// //                     <div fxLayout="row" fxLayoutAlign="center start">
// //                         <div fxFlex style="height: 60px;" class="pr-16" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="font-size-16  line-height-1 mt-8" style="text-align: center; color: black">
// //                                     S043
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S043R1)" [ngClass]="{
// //                                                                     'zeroClass' : S043R1?.length == 0,
// //                                                                     'firstClass' : S043R1?.length == 1,
// //                                                                     'secondClass' : S043R1?.length == 2,
// //                                                                     'thirdClass' : S043R1?.length == 3,
// //                                                                     'fourthClass' : S043R1?.length == 4,
// //                                                                     'fifthClass' : S043R1?.length == 5              
// //                                                                  }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S043R1)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S043R1?.length != 0? S043R1?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S043R2)" [ngClass]="{
// //                                                                     'secondClass' : S043R2?.length == 2,
// //                                                                     'zeroClass' : S043R2?.length == 0,
// //                                                                     'firstClass' : S043R2?.length == 1,
// //                                                                     'thirdClass' : S043R2?.length == 3,
// //                                                                     'fourthClass' : S043R2?.length == 4,
// //                                                                     'fifthClass' : S043R2?.length == 5
// //                                                                  }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S043R2)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S043R2?.length != 0? S043R2?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S043R3)" [ngClass]="{
// //                                                                 'zeroClass' : S043R3?.length == 0,
// //                                                                 'firstClass' : S043R3?.length == 1,
// //                                                                 'secondClass' : S043R3?.length == 2,
// //                                                                 'thirdClass' : S043R3?.length == 3,
// //                                                                 'fourthClass' : S043R3?.length == 4,
// //                                                                 'fifthClass' : S043R3?.length == 5              
// //                                                              }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S043R3)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S043R3?.length != 0? S043R3?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S043R4)" [ngClass]="{
// //                                                                 'secondClass' : S043R4?.length == 2,
// //                                                                 'zeroClass' : S043R4?.length == 0,
// //                                                                 'firstClass' : S043R4?.length == 1,
// //                                                                 'thirdClass' : S043R4?.length == 3,
// //                                                                 'fourthClass' : S043R4?.length == 4,
// //                                                                 'fifthClass' : S043R4?.length == 5
// //                                                              }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S043R4)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S043R4?.length != 0? S043R4?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <!-- <div fxFlex (click)="loadSelectedContainer(S043R5)" [ngClass]="{
// //                                                             'zeroClass' : S043R5?.length == 0,
// //                                                             'firstClass' : S043R5?.length == 1,
// //                                                             'secondClass' : S043R5?.length == 2,
// //                                                             'thirdClass' : S043R5?.length == 3,
// //                                                             'fourthClass' : S043R5?.length == 4,
// //                                                             'fifthClass' : S043R5?.length == 5              
// //                                                          }" class="" fxLayoutAlign="center end">
// //                                                                         <div class="">
// //                                                                             <div class="">
// //                                                                                 {{S043R5?.length != 0? S043R5?.length:''}}
// //                                                                             </div>
// //                                                                         </div>
// //                                                                     </div>
// //                                                                     <div fxFlex (click)="loadSelectedContainer(S043R6)" [ngClass]="{
// //                                                             'secondClass' : S043R6?.length == 2,
// //                                                             'zeroClass' : S043R6?.length == 0,
// //                                                             'firstClass' : S043R6?.length == 1,
// //                                                             'thirdClass' : S043R6?.length == 3,
// //                                                             'fourthClass' : S043R6?.length == 4,
// //                                                             'fifthClass' : S043R6?.length == 5
// //                                                          }" class="" fxLayoutAlign="center end">
// //                                                                         <div class="">
// //                                                                             <div class="">
// //                                                                                 {{S043R6?.length != 0? S043R6?.length:''}}
// //                                                                             </div>
// //                                                                         </div>
// //                                                                     </div>
// //                                                                     <div fxFlex (click)="loadSelectedContainer(S043R7)" [ngClass]="{
// //                                                                 'secondClass' : S043R7?.length == 2,
// //                                                                 'zeroClass' : S043R7?.length == 0,
// //                                                                 'firstClass' : S043R7?.length == 1,
// //                                                                 'thirdClass' : S043R7?.length == 3,
// //                                                                 'fourthClass' : S043R7?.length == 4,
// //                                                                 'fifthClass' : S043R7?.length == 5
// //                                                              }" class="" fxLayoutAlign="center end">
// //                                                                         <div class="">
// //                                                                             <div class="">
// //                                                                                 {{S043R7?.length != 0? S043R7?.length:''}}
// //                                                                             </div>
// //                                                                         </div>
// //                                                                     </div> -->
// //                     </div>
// //                     <!-- S045 -->
// //                     <div fxLayout="row" fxLayoutAlign="center start">
// //                         <div fxFlex style="height: 60px;" class="pr-16" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="font-size-16  line-height-1 mt-8" style="text-align: center; color: black">
// //                                     S045
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S045R1)" [ngClass]="{
// //                                                                     'zeroClass' : S045R1?.length == 0,
// //                                                                     'firstClass' : S045R1?.length == 1,
// //                                                                     'secondClass' : S045R1?.length == 2,
// //                                                                     'thirdClass' : S045R1?.length == 3,
// //                                                                     'fourthClass' : S045R1?.length == 4,
// //                                                                     'fifthClass' : S045R1?.length == 5              
// //                                                                  }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S045R1)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S045R1?.length != 0? S045R1?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S045R2)" [ngClass]="{
// //                                                                     'secondClass' : S045R2?.length == 2,
// //                                                                     'zeroClass' : S045R2?.length == 0,
// //                                                                     'firstClass' : S045R2?.length == 1,
// //                                                                     'thirdClass' : S045R2?.length == 3,
// //                                                                     'fourthClass' : S045R2?.length == 4,
// //                                                                     'fifthClass' : S045R2?.length == 5
// //                                                                  }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S045R2)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S045R2?.length != 0? S045R2?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S045R3)" [ngClass]="{
// //                                                                 'zeroClass' : S045R3?.length == 0,
// //                                                                 'firstClass' : S045R3?.length == 1,
// //                                                                 'secondClass' : S045R3?.length == 2,
// //                                                                 'thirdClass' : S045R3?.length == 3,
// //                                                                 'fourthClass' : S045R3?.length == 4,
// //                                                                 'fifthClass' : S045R3?.length == 5              
// //                                                              }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S045R3)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S045R3?.length != 0? S045R3?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S045R4)" [ngClass]="{
// //                                                                 'secondClass' : S045R4?.length == 2,
// //                                                                 'zeroClass' : S045R4?.length == 0,
// //                                                                 'firstClass' : S045R4?.length == 1,
// //                                                                 'thirdClass' : S045R4?.length == 3,
// //                                                                 'fourthClass' : S045R4?.length == 4,
// //                                                                 'fifthClass' : S045R4?.length == 5
// //                                                              }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S045R4)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S045R4?.length != 0? S045R4?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <!-- <div fxFlex (click)="loadSelectedContainer(S045R5)" [ngClass]="{
// //                                                             'zeroClass' : S045R5?.length == 0,
// //                                                             'firstClass' : S045R5?.length == 1,
// //                                                             'secondClass' : S045R5?.length == 2,
// //                                                             'thirdClass' : S045R5?.length == 3,
// //                                                             'fourthClass' : S045R5?.length == 4,
// //                                                             'fifthClass' : S045R5?.length == 5              
// //                                                          }" class="" fxLayoutAlign="center end">
// //                                                                         <div class="">
// //                                                                             <div class="">
// //                                                                                 {{S045R5?.length != 0? S045R5?.length:''}}
// //                                                                             </div>
// //                                                                         </div>
// //                                                                     </div>
// //                                                                     <div fxFlex (click)="loadSelectedContainer(S045R6)" [ngClass]="{
// //                                                             'secondClass' : S045R6?.length == 2,
// //                                                             'zeroClass' : S045R6?.length == 0,
// //                                                             'firstClass' : S045R6?.length == 1,
// //                                                             'thirdClass' : S045R6?.length == 3,
// //                                                             'fourthClass' : S045R6?.length == 4,
// //                                                             'fifthClass' : S045R6?.length == 5
// //                                                          }" class="" fxLayoutAlign="center end">
// //                                                                         <div class="">
// //                                                                             <div class="">
// //                                                                                 {{S045R6?.length != 0? S045R6?.length:''}}
// //                                                                             </div>
// //                                                                         </div>
// //                                                                     </div>
// //                                                                     <div fxFlex (click)="loadSelectedContainer(S045R7)" [ngClass]="{
// //                                                                 'secondClass' : S045R7?.length == 2,
// //                                                                 'zeroClass' : S045R7?.length == 0,
// //                                                                 'firstClass' : S045R7?.length == 1,
// //                                                                 'thirdClass' : S045R7?.length == 3,
// //                                                                 'fourthClass' : S045R7?.length == 4,
// //                                                                 'fifthClass' : S045R7?.length == 5
// //                                                              }" class="" fxLayoutAlign="center end">
// //                                                                         <div class="">
// //                                                                             <div class="">
// //                                                                                 {{S045R7?.length != 0? S045R7?.length:''}}
// //                                                                             </div>
// //                                                                         </div>
// //                                                                     </div> -->
// //                     </div>
// //                     <!-- S047 -->
// //                     <div fxLayout="row" fxLayoutAlign="center start">
// //                         <div fxFlex style="height: 60px;" class="pr-16" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="font-size-16  line-height-1 mt-8" style="text-align: center; color: black">
// //                                     S047
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S047R1)" [ngClass]="{
// //                                                                     'zeroClass' : S047R1?.length == 0,
// //                                                                     'firstClass' : S047R1?.length == 1,
// //                                                                     'secondClass' : S047R1?.length == 2,
// //                                                                     'thirdClass' : S047R1?.length == 3,
// //                                                                     'fourthClass' : S047R1?.length == 4,
// //                                                                     'fifthClass' : S047R1?.length == 5              
// //                                                                  }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S047R1)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S047R1?.length != 0? S047R1?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S047R2)" [ngClass]="{
// //                                                                     'secondClass' : S047R2?.length == 2,
// //                                                                     'zeroClass' : S047R2?.length == 0,
// //                                                                     'firstClass' : S047R2?.length == 1,
// //                                                                     'thirdClass' : S047R2?.length == 3,
// //                                                                     'fourthClass' : S047R2?.length == 4,
// //                                                                     'fifthClass' : S047R2?.length == 5
// //                                                                  }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S047R2)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S047R2?.length != 0? S047R2?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S047R3)" [ngClass]="{
// //                                                                 'zeroClass' : S047R3?.length == 0,
// //                                                                 'firstClass' : S047R3?.length == 1,
// //                                                                 'secondClass' : S047R3?.length == 2,
// //                                                                 'thirdClass' : S047R3?.length == 3,
// //                                                                 'fourthClass' : S047R3?.length == 4,
// //                                                                 'fifthClass' : S047R3?.length == 5              
// //                                                              }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S047R3)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S047R3?.length != 0? S047R3?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S047R4)" [ngClass]="{
// //                                                                 'secondClass' : S047R4?.length == 2,
// //                                                                 'zeroClass' : S047R4?.length == 0,
// //                                                                 'firstClass' : S047R4?.length == 1,
// //                                                                 'thirdClass' : S047R4?.length == 3,
// //                                                                 'fourthClass' : S047R4?.length == 4,
// //                                                                 'fifthClass' : S047R4?.length == 5
// //                                                              }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S047R4)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S047R4?.length != 0? S047R4?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <!-- <div fxFlex (click)="loadSelectedContainer(S047R5)" [ngClass]="{
// //                                                             'zeroClass' : S047R5?.length == 0,
// //                                                             'firstClass' : S047R5?.length == 1,
// //                                                             'secondClass' : S047R5?.length == 2,
// //                                                             'thirdClass' : S047R5?.length == 3,
// //                                                             'fourthClass' : S047R5?.length == 4,
// //                                                             'fifthClass' : S047R5?.length == 5              
// //                                                          }" class="" fxLayoutAlign="center end">
// //                                                                         <div class="">
// //                                                                             <div class="">
// //                                                                                 {{S047R5?.length != 0? S047R5?.length:''}}
// //                                                                             </div>
// //                                                                         </div>
// //                                                                     </div>
// //                                                                     <div fxFlex (click)="loadSelectedContainer(S047R6)" [ngClass]="{
// //                                                             'secondClass' : S047R6?.length == 2,
// //                                                             'zeroClass' : S047R6?.length == 0,
// //                                                             'firstClass' : S047R6?.length == 1,
// //                                                             'thirdClass' : S047R6?.length == 3,
// //                                                             'fourthClass' : S047R6?.length == 4,
// //                                                             'fifthClass' : S047R6?.length == 5
// //                                                          }" class="" fxLayoutAlign="center end">
// //                                                                         <div class="">
// //                                                                             <div class="">
// //                                                                                 {{S047R6?.length != 0? S047R6?.length:''}}
// //                                                                             </div>
// //                                                                         </div>
// //                                                                     </div>
// //                                                                     <div fxFlex (click)="loadSelectedContainer(S047R7)" [ngClass]="{
// //                                                                 'secondClass' : S047R7?.length == 2,
// //                                                                 'zeroClass' : S047R7?.length == 0,
// //                                                                 'firstClass' : S047R7?.length == 1,
// //                                                                 'thirdClass' : S047R7?.length == 3,
// //                                                                 'fourthClass' : S047R7?.length == 4,
// //                                                                 'fifthClass' : S047R7?.length == 5
// //                                                              }" class="" fxLayoutAlign="center end">
// //                                                                         <div class="">
// //                                                                             <div class="">
// //                                                                                 {{S047R7?.length != 0? S047R7?.length:''}}
// //                                                                             </div>
// //                                                                         </div>
// //                                                                     </div> -->
// //                     </div>
// //                     <!-- S049 -->
// //                     <div fxLayout="row" fxLayoutAlign="center start">
// //                         <div fxFlex style="height: 60px;" class="pr-16" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="font-size-16  line-height-1 mt-8" style="text-align: center; color: black">
// //                                     S049
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S049R1)" [ngClass]="{
// //                                                                     'zeroClass' : S049R1?.length == 0,
// //                                                                     'firstClass' : S049R1?.length == 1,
// //                                                                     'secondClass' : S049R1?.length == 2,
// //                                                                     'thirdClass' : S049R1?.length == 3,
// //                                                                     'fourthClass' : S049R1?.length == 4,
// //                                                                     'fifthClass' : S049R1?.length == 5              
// //                                                                  }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S049R1)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S049R1?.length != 0? S049R1?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S049R2)" [ngClass]="{
// //                                                                     'secondClass' : S049R2?.length == 2,
// //                                                                     'zeroClass' : S049R2?.length == 0,
// //                                                                     'firstClass' : S049R2?.length == 1,
// //                                                                     'thirdClass' : S049R2?.length == 3,
// //                                                                     'fourthClass' : S049R2?.length == 4,
// //                                                                     'fifthClass' : S049R2?.length == 5
// //                                                                  }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S049R2)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S049R2?.length != 0? S049R2?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S049R3)" [ngClass]="{
// //                                                                 'zeroClass' : S049R3?.length == 0,
// //                                                                 'firstClass' : S049R3?.length == 1,
// //                                                                 'secondClass' : S049R3?.length == 2,
// //                                                                 'thirdClass' : S049R3?.length == 3,
// //                                                                 'fourthClass' : S049R3?.length == 4,
// //                                                                 'fifthClass' : S049R3?.length == 5              
// //                                                              }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S049R3)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S049R3?.length != 0? S049R3?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S049R4)" [ngClass]="{
// //                                                                 'secondClass' : S049R4?.length == 2,
// //                                                                 'zeroClass' : S049R4?.length == 0,
// //                                                                 'firstClass' : S049R4?.length == 1,
// //                                                                 'thirdClass' : S049R4?.length == 3,
// //                                                                 'fourthClass' : S049R4?.length == 4,
// //                                                                 'fifthClass' : S049R4?.length == 5
// //                                                              }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S049R4)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S049R4?.length != 0? S049R4?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <!-- <div fxFlex (click)="loadSelectedContainer(S049R5)" [ngClass]="{
// //                                                             'zeroClass' : S049R5?.length == 0,
// //                                                             'firstClass' : S049R5?.length == 1,
// //                                                             'secondClass' : S049R5?.length == 2,
// //                                                             'thirdClass' : S049R5?.length == 3,
// //                                                             'fourthClass' : S049R5?.length == 4,
// //                                                             'fifthClass' : S049R5?.length == 5              
// //                                                          }" class="" fxLayoutAlign="center end">
// //                                                                         <div class="">
// //                                                                             <div class="">
// //                                                                                 {{S049R5?.length != 0? S049R5?.length:''}}
// //                                                                             </div>
// //                                                                         </div>
// //                                                                     </div>
// //                                                                     <div fxFlex (click)="loadSelectedContainer(S049R6)" [ngClass]="{
// //                                                             'secondClass' : S049R6?.length == 2,
// //                                                             'zeroClass' : S049R6?.length == 0,
// //                                                             'firstClass' : S049R6?.length == 1,
// //                                                             'thirdClass' : S049R6?.length == 3,
// //                                                             'fourthClass' : S049R6?.length == 4,
// //                                                             'fifthClass' : S049R6?.length == 5
// //                                                          }" class="" fxLayoutAlign="center end">
// //                                                                         <div class="">
// //                                                                             <div class="">
// //                                                                                 {{S049R6?.length != 0? S049R6?.length:''}}
// //                                                                             </div>
// //                                                                         </div>
// //                                                                     </div>
// //                                                                     <div fxFlex (click)="loadSelectedContainer(S049R7)" [ngClass]="{
// //                                                                 'secondClass' : S049R7?.length == 2,
// //                                                                 'zeroClass' : S049R7?.length == 0,
// //                                                                 'firstClass' : S049R7?.length == 1,
// //                                                                 'thirdClass' : S049R7?.length == 3,
// //                                                                 'fourthClass' : S049R7?.length == 4,
// //                                                                 'fifthClass' : S049R7?.length == 5
// //                                                              }" class="" fxLayoutAlign="center end">
// //                                                                         <div class="">
// //                                                                             <div class="">
// //                                                                                 {{S049R7?.length != 0? S049R7?.length:''}}
// //                                                                             </div>
// //                                                                         </div>
// //                                                                     </div> -->
// //                     </div>
// //                     <!-- S051 -->
// //                     <div fxLayout="row" fxLayoutAlign="center start">
// //                         <div fxFlex style="height: 60px;" class="pr-16" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="font-size-16  line-height-1 mt-8" style="text-align: center; color: black">
// //                                     S051
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S051R1)" [ngClass]="{
// //                                                                     'zeroClass' : S051R1?.length == 0,
// //                                                                     'firstClass' : S051R1?.length == 1,
// //                                                                     'secondClass' : S051R1?.length == 2,
// //                                                                     'thirdClass' : S051R1?.length == 3,
// //                                                                     'fourthClass' : S051R1?.length == 4,
// //                                                                     'fifthClass' : S051R1?.length == 5              
// //                                                                  }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S051R1)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S051R1?.length != 0? S051R1?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S051R2)" [ngClass]="{
// //                                                                     'secondClass' : S051R2?.length == 2,
// //                                                                     'zeroClass' : S051R2?.length == 0,
// //                                                                     'firstClass' : S051R2?.length == 1,
// //                                                                     'thirdClass' : S051R2?.length == 3,
// //                                                                     'fourthClass' : S051R2?.length == 4,
// //                                                                     'fifthClass' : S051R2?.length == 5
// //                                                                  }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S051R2)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S051R2?.length != 0? S051R2?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S051R3)" [ngClass]="{
// //                                                                 'zeroClass' : S051R3?.length == 0,
// //                                                                 'firstClass' : S051R3?.length == 1,
// //                                                                 'secondClass' : S051R3?.length == 2,
// //                                                                 'thirdClass' : S051R3?.length == 3,
// //                                                                 'fourthClass' : S051R3?.length == 4,
// //                                                                 'fifthClass' : S051R3?.length == 5              
// //                                                              }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S051R3)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S051R3?.length != 0? S051R3?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S051R4)" [ngClass]="{
// //                                                                 'secondClass' : S051R4?.length == 2,
// //                                                                 'zeroClass' : S051R4?.length == 0,
// //                                                                 'firstClass' : S051R4?.length == 1,
// //                                                                 'thirdClass' : S051R4?.length == 3,
// //                                                                 'fourthClass' : S051R4?.length == 4,
// //                                                                 'fifthClass' : S051R4?.length == 5
// //                                                              }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S051R4)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S051R4?.length != 0? S051R4?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <!-- <div fxFlex (click)="loadSelectedContainer(S051R5)" [ngClass]="{
// //                                                             'zeroClass' : S051R5?.length == 0,
// //                                                             'firstClass' : S051R5?.length == 1,
// //                                                             'secondClass' : S051R5?.length == 2,
// //                                                             'thirdClass' : S051R5?.length == 3,
// //                                                             'fourthClass' : S051R5?.length == 4,
// //                                                             'fifthClass' : S051R5?.length == 5              
// //                                                          }" class="" fxLayoutAlign="center end">
// //                                                                         <div class="">
// //                                                                             <div class="">
// //                                                                                 {{S051R5?.length != 0? S051R5?.length:''}}
// //                                                                             </div>
// //                                                                         </div>
// //                                                                     </div>
// //                                                                     <div fxFlex (click)="loadSelectedContainer(S051R6)" [ngClass]="{
// //                                                             'secondClass' : S051R6?.length == 2,
// //                                                             'zeroClass' : S051R6?.length == 0,
// //                                                             'firstClass' : S051R6?.length == 1,
// //                                                             'thirdClass' : S051R6?.length == 3,
// //                                                             'fourthClass' : S051R6?.length == 4,
// //                                                             'fifthClass' : S051R6?.length == 5
// //                                                          }" class="" fxLayoutAlign="center end">
// //                                                                         <div class="">
// //                                                                             <div class="">
// //                                                                                 {{S051R6?.length != 0? S051R6?.length:''}}
// //                                                                             </div>
// //                                                                         </div>
// //                                                                     </div>
// //                                                                     <div fxFlex (click)="loadSelectedContainer(S051R7)" [ngClass]="{
// //                                                                 'secondClass' : S051R7?.length == 2,
// //                                                                 'zeroClass' : S051R7?.length == 0,
// //                                                                 'firstClass' : S051R7?.length == 1,
// //                                                                 'thirdClass' : S051R7?.length == 3,
// //                                                                 'fourthClass' : S051R7?.length == 4,
// //                                                                 'fifthClass' : S051R7?.length == 5
// //                                                              }" class="" fxLayoutAlign="center end">
// //                                                                         <div class="">
// //                                                                             <div class="">
// //                                                                                 {{S051R7?.length != 0? S051R7?.length:''}}
// //                                                                             </div>
// //                                                                         </div>
// //                                                                     </div> -->
// //                     </div>
// //                     <!-- S053 -->
// //                     <div fxLayout="row" fxLayoutAlign="center start">
// //                         <div fxFlex style="height: 60px;" class="pr-16" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="font-size-16  line-height-1 mt-8" style="text-align: center; color: black">
// //                                     S053
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S053R1)" [ngClass]="{
// //                                                                     'zeroClass' : S053R1?.length == 0,
// //                                                                     'firstClass' : S053R1?.length == 1,
// //                                                                     'secondClass' : S053R1?.length == 2,
// //                                                                     'thirdClass' : S053R1?.length == 3,
// //                                                                     'fourthClass' : S053R1?.length == 4,
// //                                                                     'fifthClass' : S053R1?.length == 5              
// //                                                                  }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S053R1)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S053R1?.length != 0? S053R1?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S053R2)" [ngClass]="{
// //                                                                     'secondClass' : S053R2?.length == 2,
// //                                                                     'zeroClass' : S053R2?.length == 0,
// //                                                                     'firstClass' : S053R2?.length == 1,
// //                                                                     'thirdClass' : S053R2?.length == 3,
// //                                                                     'fourthClass' : S053R2?.length == 4,
// //                                                                     'fifthClass' : S053R2?.length == 5
// //                                                                  }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S053R2)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S053R2?.length != 0? S053R2?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S053R3)" [ngClass]="{
// //                                                                 'zeroClass' : S053R3?.length == 0,
// //                                                                 'firstClass' : S053R3?.length == 1,
// //                                                                 'secondClass' : S053R3?.length == 2,
// //                                                                 'thirdClass' : S053R3?.length == 3,
// //                                                                 'fourthClass' : S053R3?.length == 4,
// //                                                                 'fifthClass' : S053R3?.length == 5              
// //                                                              }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S053R3)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S053R3?.length != 0? S053R3?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S053R4)" [ngClass]="{
// //                                                                 'secondClass' : S053R4?.length == 2,
// //                                                                 'zeroClass' : S053R4?.length == 0,
// //                                                                 'firstClass' : S053R4?.length == 1,
// //                                                                 'thirdClass' : S053R4?.length == 3,
// //                                                                 'fourthClass' : S053R4?.length == 4,
// //                                                                 'fifthClass' : S053R4?.length == 5
// //                                                              }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S053R4)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S053R4?.length != 0? S053R4?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <!-- <div fxFlex (click)="loadSelectedContainer(S053R5)" [ngClass]="{
// //                                                             'zeroClass' : S053R5?.length == 0,
// //                                                             'firstClass' : S053R5?.length == 1,
// //                                                             'secondClass' : S053R5?.length == 2,
// //                                                             'thirdClass' : S053R5?.length == 3,
// //                                                             'fourthClass' : S053R5?.length == 4,
// //                                                             'fifthClass' : S053R5?.length == 5              
// //                                                          }" class="" fxLayoutAlign="center end">
// //                                                                         <div class="">
// //                                                                             <div class="">
// //                                                                                 {{S053R5?.length != 0? S053R5?.length:''}}
// //                                                                             </div>
// //                                                                         </div>
// //                                                                     </div>
// //                                                                     <div fxFlex (click)="loadSelectedContainer(S053R6)" [ngClass]="{
// //                                                             'secondClass' : S053R6?.length == 2,
// //                                                             'zeroClass' : S053R6?.length == 0,
// //                                                             'firstClass' : S053R6?.length == 1,
// //                                                             'thirdClass' : S053R6?.length == 3,
// //                                                             'fourthClass' : S053R6?.length == 4,
// //                                                             'fifthClass' : S053R6?.length == 5
// //                                                          }" class="" fxLayoutAlign="center end">
// //                                                                         <div class="">
// //                                                                             <div class="">
// //                                                                                 {{S053R6?.length != 0? S053R6?.length:''}}
// //                                                                             </div>
// //                                                                         </div>
// //                                                                     </div>
// //                                                                     <div fxFlex (click)="loadSelectedContainer(S053R7)" [ngClass]="{
// //                                                                 'secondClass' : S053R7?.length == 2,
// //                                                                 'zeroClass' : S053R7?.length == 0,
// //                                                                 'firstClass' : S053R7?.length == 1,
// //                                                                 'thirdClass' : S053R7?.length == 3,
// //                                                                 'fourthClass' : S053R7?.length == 4,
// //                                                                 'fifthClass' : S053R7?.length == 5
// //                                                              }" class="" fxLayoutAlign="center end">
// //                                                                         <div class="">
// //                                                                             <div class="">
// //                                                                                 {{S053R7?.length != 0? S053R7?.length:''}}
// //                                                                             </div>
// //                                                                         </div>
// //                                                                     </div> -->
// //                     </div>
// //                     <!-- S055 -->
// //                     <div fxLayout="row" fxLayoutAlign="center start">
// //                         <div fxFlex style="height: 60px;" class="pr-16" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="font-size-16  line-height-1 mt-8" style="text-align: center; color: black">
// //                                     S055
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S055R1)" [ngClass]="{
// //                                                                     'zeroClass' : S055R1?.length == 0,
// //                                                                     'firstClass' : S055R1?.length == 1,
// //                                                                     'secondClass' : S055R1?.length == 2,
// //                                                                     'thirdClass' : S055R1?.length == 3,
// //                                                                     'fourthClass' : S055R1?.length == 4,
// //                                                                     'fifthClass' : S055R1?.length == 5              
// //                                                                  }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S055R1)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S055R1?.length != 0? S055R1?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S055R2)" [ngClass]="{
// //                                                                     'secondClass' : S055R2?.length == 2,
// //                                                                     'zeroClass' : S055R2?.length == 0,
// //                                                                     'firstClass' : S055R2?.length == 1,
// //                                                                     'thirdClass' : S055R2?.length == 3,
// //                                                                     'fourthClass' : S055R2?.length == 4,
// //                                                                     'fifthClass' : S055R2?.length == 5
// //                                                                  }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S055R2)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S055R2?.length != 0? S055R2?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S055R3)" [ngClass]="{
// //                                                                 'zeroClass' : S055R3?.length == 0,
// //                                                                 'firstClass' : S055R3?.length == 1,
// //                                                                 'secondClass' : S055R3?.length == 2,
// //                                                                 'thirdClass' : S055R3?.length == 3,
// //                                                                 'fourthClass' : S055R3?.length == 4,
// //                                                                 'fifthClass' : S055R3?.length == 5              
// //                                                              }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S055R3)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S055R3?.length != 0? S055R3?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S055R4)" [ngClass]="{
// //                                                                 'secondClass' : S055R4?.length == 2,
// //                                                                 'zeroClass' : S055R4?.length == 0,
// //                                                                 'firstClass' : S055R4?.length == 1,
// //                                                                 'thirdClass' : S055R4?.length == 3,
// //                                                                 'fourthClass' : S055R4?.length == 4,
// //                                                                 'fifthClass' : S055R4?.length == 5
// //                                                              }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S055R4)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S055R4?.length != 0? S055R4?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <!-- <div fxFlex (click)="loadSelectedContainer(S055R5)" [ngClass]="{
// //                                                             'zeroClass' : S055R5?.length == 0,
// //                                                             'firstClass' : S055R5?.length == 1,
// //                                                             'secondClass' : S055R5?.length == 2,
// //                                                             'thirdClass' : S055R5?.length == 3,
// //                                                             'fourthClass' : S055R5?.length == 4,
// //                                                             'fifthClass' : S055R5?.length == 5              
// //                                                          }" class="" fxLayoutAlign="center end">
// //                                                                         <div class="">
// //                                                                             <div class="">
// //                                                                                 {{S055R5?.length != 0? S055R5?.length:''}}
// //                                                                             </div>
// //                                                                         </div>
// //                                                                     </div>
// //                                                                     <div fxFlex (click)="loadSelectedContainer(S055R6)" [ngClass]="{
// //                                                             'secondClass' : S055R6?.length == 2,
// //                                                             'zeroClass' : S055R6?.length == 0,
// //                                                             'firstClass' : S055R6?.length == 1,
// //                                                             'thirdClass' : S055R6?.length == 3,
// //                                                             'fourthClass' : S055R6?.length == 4,
// //                                                             'fifthClass' : S055R6?.length == 5
// //                                                          }" class="" fxLayoutAlign="center end">
// //                                                                         <div class="">
// //                                                                             <div class="">
// //                                                                                 {{S055R6?.length != 0? S055R6?.length:''}}
// //                                                                             </div>
// //                                                                         </div>
// //                                                                     </div>
// //                                                                     <div fxFlex (click)="loadSelectedContainer(S055R7)" [ngClass]="{
// //                                                                 'secondClass' : S055R7?.length == 2,
// //                                                                 'zeroClass' : S055R7?.length == 0,
// //                                                                 'firstClass' : S055R7?.length == 1,
// //                                                                 'thirdClass' : S055R7?.length == 3,
// //                                                                 'fourthClass' : S055R7?.length == 4,
// //                                                                 'fifthClass' : S055R7?.length == 5
// //                                                              }" class="" fxLayoutAlign="center end">
// //                                                                         <div class="">
// //                                                                             <div class="">
// //                                                                                 {{S055R7?.length != 0? S055R7?.length:''}}
// //                                                                             </div>
// //                                                                         </div>
// //                                                                     </div> -->
// //                     </div>
// //                     <!-- S057 -->
// //                     <div fxLayout="row" fxLayoutAlign="center start">
// //                         <div fxFlex style="height: 60px;" class="pr-16" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="font-size-16  line-height-1 mt-8" style="text-align: center; color: black">
// //                                     S057
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S057R1)" [ngClass]="{
// //                                                                     'zeroClass' : S057R1?.length == 0,
// //                                                                     'firstClass' : S057R1?.length == 1,
// //                                                                     'secondClass' : S057R1?.length == 2,
// //                                                                     'thirdClass' : S057R1?.length == 3,
// //                                                                     'fourthClass' : S057R1?.length == 4,
// //                                                                     'fifthClass' : S057R1?.length == 5              
// //                                                                  }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S057R1)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S057R1?.length != 0? S057R1?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S057R2)" [ngClass]="{
// //                                                                     'secondClass' : S057R2?.length == 2,
// //                                                                     'zeroClass' : S057R2?.length == 0,
// //                                                                     'firstClass' : S057R2?.length == 1,
// //                                                                     'thirdClass' : S057R2?.length == 3,
// //                                                                     'fourthClass' : S057R2?.length == 4,
// //                                                                     'fifthClass' : S057R2?.length == 5
// //                                                                  }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S057R2)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S057R2?.length != 0? S057R2?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S057R3)" [ngClass]="{
// //                                                                 'zeroClass' : S057R3?.length == 0,
// //                                                                 'firstClass' : S057R3?.length == 1,
// //                                                                 'secondClass' : S057R3?.length == 2,
// //                                                                 'thirdClass' : S057R3?.length == 3,
// //                                                                 'fourthClass' : S057R3?.length == 4,
// //                                                                 'fifthClass' : S057R3?.length == 5              
// //                                                              }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S057R3)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S057R3?.length != 0? S057R3?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S057R4)" [ngClass]="{
// //                                                                 'secondClass' : S057R4?.length == 2,
// //                                                                 'zeroClass' : S057R4?.length == 0,
// //                                                                 'firstClass' : S057R4?.length == 1,
// //                                                                 'thirdClass' : S057R4?.length == 3,
// //                                                                 'fourthClass' : S057R4?.length == 4,
// //                                                                 'fifthClass' : S057R4?.length == 5
// //                                                              }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S057R4)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S057R4?.length != 0? S057R4?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <!-- <div fxFlex (click)="loadSelectedContainer(S057R5)" [ngClass]="{
// //                                                             'zeroClass' : S057R5?.length == 0,
// //                                                             'firstClass' : S057R5?.length == 1,
// //                                                             'secondClass' : S057R5?.length == 2,
// //                                                             'thirdClass' : S057R5?.length == 3,
// //                                                             'fourthClass' : S057R5?.length == 4,
// //                                                             'fifthClass' : S057R5?.length == 5              
// //                                                          }" class="" fxLayoutAlign="center end">
// //                                                                         <div class="">
// //                                                                             <div class="">
// //                                                                                 {{S057R5?.length != 0? S057R5?.length:''}}
// //                                                                             </div>
// //                                                                         </div>
// //                                                                     </div>
// //                                                                     <div fxFlex (click)="loadSelectedContainer(S057R6)" [ngClass]="{
// //                                                             'secondClass' : S057R6?.length == 2,
// //                                                             'zeroClass' : S057R6?.length == 0,
// //                                                             'firstClass' : S057R6?.length == 1,
// //                                                             'thirdClass' : S057R6?.length == 3,
// //                                                             'fourthClass' : S057R6?.length == 4,
// //                                                             'fifthClass' : S057R6?.length == 5
// //                                                          }" class="" fxLayoutAlign="center end">
// //                                                                         <div class="">
// //                                                                             <div class="">
// //                                                                                 {{S057R6?.length != 0? S057R6?.length:''}}
// //                                                                             </div>
// //                                                                         </div>
// //                                                                     </div>
// //                                                                     <div fxFlex (click)="loadSelectedContainer(S057R7)" [ngClass]="{
// //                                                                 'secondClass' : S057R7?.length == 2,
// //                                                                 'zeroClass' : S057R7?.length == 0,
// //                                                                 'firstClass' : S057R7?.length == 1,
// //                                                                 'thirdClass' : S057R7?.length == 3,
// //                                                                 'fourthClass' : S057R7?.length == 4,
// //                                                                 'fifthClass' : S057R7?.length == 5
// //                                                              }" class="" fxLayoutAlign="center end">
// //                                                                         <div class="">
// //                                                                             <div class="">
// //                                                                                 {{S057R7?.length != 0? S057R7?.length:''}}
// //                                                                             </div>
// //                                                                         </div>
// //                                                                     </div> -->
// //                     </div>
// //                     <!-- S059 -->
// //                     <div fxLayout="row" fxLayoutAlign="center start">
// //                         <div fxFlex style="height: 60px;" class="pr-16" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="font-size-16  line-height-1 mt-8" style="text-align: center; color: black">
// //                                     S059
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S059R1)" [ngClass]="{
// //                                                                     'zeroClass' : S059R1?.length == 0,
// //                                                                     'firstClass' : S059R1?.length == 1,
// //                                                                     'secondClass' : S059R1?.length == 2,
// //                                                                     'thirdClass' : S059R1?.length == 3,
// //                                                                     'fourthClass' : S059R1?.length == 4,
// //                                                                     'fifthClass' : S059R1?.length == 5              
// //                                                                  }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S059R1)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S059R1?.length != 0? S059R1?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S059R2)" [ngClass]="{
// //                                                                     'secondClass' : S059R2?.length == 2,
// //                                                                     'zeroClass' : S059R2?.length == 0,
// //                                                                     'firstClass' : S059R2?.length == 1,
// //                                                                     'thirdClass' : S059R2?.length == 3,
// //                                                                     'fourthClass' : S059R2?.length == 4,
// //                                                                     'fifthClass' : S059R2?.length == 5
// //                                                                  }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S059R2)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S059R2?.length != 0? S059R2?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S059R3)" [ngClass]="{
// //                                                                 'zeroClass' : S059R3?.length == 0,
// //                                                                 'firstClass' : S059R3?.length == 1,
// //                                                                 'secondClass' : S059R3?.length == 2,
// //                                                                 'thirdClass' : S059R3?.length == 3,
// //                                                                 'fourthClass' : S059R3?.length == 4,
// //                                                                 'fifthClass' : S059R3?.length == 5              
// //                                                              }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S059R3)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S059R3?.length != 0? S059R3?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S059R4)" [ngClass]="{
// //                                                                 'secondClass' : S059R4?.length == 2,
// //                                                                 'zeroClass' : S059R4?.length == 0,
// //                                                                 'firstClass' : S059R4?.length == 1,
// //                                                                 'thirdClass' : S059R4?.length == 3,
// //                                                                 'fourthClass' : S059R4?.length == 4,
// //                                                                 'fifthClass' : S059R4?.length == 5
// //                                                              }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S059R4)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S059R4?.length != 0? S059R4?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <!-- <div fxFlex (click)="loadSelectedContainer(S059R5)" [ngClass]="{
// //                                                             'zeroClass' : S059R5?.length == 0,
// //                                                             'firstClass' : S059R5?.length == 1,
// //                                                             'secondClass' : S059R5?.length == 2,
// //                                                             'thirdClass' : S059R5?.length == 3,
// //                                                             'fourthClass' : S059R5?.length == 4,
// //                                                             'fifthClass' : S059R5?.length == 5              
// //                                                          }" class="" fxLayoutAlign="center end">
// //                                                                         <div class="">
// //                                                                             <div class="">
// //                                                                                 {{S059R5?.length != 0? S059R5?.length:''}}
// //                                                                             </div>
// //                                                                         </div>
// //                                                                     </div>
// //                                                                     <div fxFlex (click)="loadSelectedContainer(S059R6)" [ngClass]="{
// //                                                             'secondClass' : S059R6?.length == 2,
// //                                                             'zeroClass' : S059R6?.length == 0,
// //                                                             'firstClass' : S059R6?.length == 1,
// //                                                             'thirdClass' : S059R6?.length == 3,
// //                                                             'fourthClass' : S059R6?.length == 4,
// //                                                             'fifthClass' : S059R6?.length == 5
// //                                                          }" class="" fxLayoutAlign="center end">
// //                                                                         <div class="">
// //                                                                             <div class="">
// //                                                                                 {{S059R6?.length != 0? S059R6?.length:''}}
// //                                                                             </div>
// //                                                                         </div>
// //                                                                     </div>
// //                                                                     <div fxFlex (click)="loadSelectedContainer(S059R7)" [ngClass]="{
// //                                                                 'secondClass' : S059R7?.length == 2,
// //                                                                 'zeroClass' : S059R7?.length == 0,
// //                                                                 'firstClass' : S059R7?.length == 1,
// //                                                                 'thirdClass' : S059R7?.length == 3,
// //                                                                 'fourthClass' : S059R7?.length == 4,
// //                                                                 'fifthClass' : S059R7?.length == 5
// //                                                              }" class="" fxLayoutAlign="center end">
// //                                                                         <div class="">
// //                                                                             <div class="">
// //                                                                                 {{S059R7?.length != 0? S059R7?.length:''}}
// //                                                                             </div>
// //                                                                         </div>
// //                                                                     </div> -->
// //                     </div>

// //                 </div>
// //             </div>
// //             <div class="column1" fxFlex fxLayout="column">
// //                 <!-- Rownames -->
// //                 <div fxFlex>
// //                     <div fxLayout="row" fxLayoutAlign="center start">
// //                         <div fxFlex style=" height: 60px;" class="pr-16" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="font-size-16  line-height-1 mt-8" style="text-align: center; color: black">

// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex style=" height: 60px;" class="pr-16" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="font-size-16  line-height-1 mt-8" style="text-align: center; color: black">
// //                                     R7
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex style=" height: 60px;" class="pr-16" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="font-size-16  line-height-1 mt-8" style="text-align: center; color: black">
// //                                     R6
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex style=" height: 60px;" class="pr-16" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="font-size-16  line-height-1 mt-8" style="text-align: center; color: black">
// //                                     R5
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex style=" height: 60px;" class="pr-16" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="font-size-16  line-height-1 mt-8" style="text-align: center; color: black">
// //                                     R4
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex style=" height: 60px;" class="pr-16" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="font-size-16  line-height-1 mt-8" style="text-align: center; color: black">
// //                                     R3
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex style=" height: 60px;" class="pr-16" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="font-size-16  line-height-1 mt-8" style="text-align: center; color: black">
// //                                     R2
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex style=" height: 60px;" class="pr-16" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="font-size-16  line-height-1 mt-8" style="text-align: center; color: black">
// //                                     R1
// //                                 </div>
// //                             </div>
// //                         </div>
// //                     </div>
// //                 </div>
// //                 <div fxFlex>
// //                     <!-- S001 -->
// //                     <div fxLayout="row" fxLayoutAlign="center start">
// //                         <div fxFlex style="height: 60px;" class="pr-16" fxLayoutAlign="start center">
// //                             <div class="pbdiv-16">
// //                                 <div class="font-size-16  line-height-1 mt-8" style="text-align: center; color: black">
// //                                     S001
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex class="" fxLayoutAlign="start center">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{ 'dash.Reserved' | translate }}
// //                                 </div>
// //                             </div>
// //                         </div>

// //                         <!-- <div fxFlex (click)="loadSelectedContainer(S001R1)" [ngClass]="{
// //                                                     'zeroClass' : S001R1?.length == 0,
// //                                                     'firstClass' : S001R1?.length == 1,
// //                                                     'secondClass' : S001R1?.length == 2,
// //                                                     'thirdClass' : S001R1?.length == 3,
// //                                                     'fourthClass' : S001R1?.length == 4,
// //                                                     'fifthClass' : S001R1?.length == 5              
// //                                                  }" class="slotContainer" fxLayoutAlign="center end">
// //                                                     <div class="pbdiv-16">
// //                                                         <div class="slot">
// //                                                             {{S001R1?.length != 0? S001R1?.length:''}}
// //                                                         </div>
// //                                                     </div>
// //                                                 </div>
// //                                                 <div fxFlex (click)="loadSelectedContainer(S001R2)" [ngClass]="{
// //                                                     'secondClass' : S001R2?.length == 2,
// //                                                     'zeroClass' : S001R2?.length == 0,
// //                                                     'firstClass' : S001R2?.length == 1,
// //                                                     'thirdClass' : S001R2?.length == 3,
// //                                                     'fourthClass' : S001R2?.length == 4,
// //                                                     'fifthClass' : S001R2?.length == 5
// //                                                  }" class="slotContainer" fxLayoutAlign="center end">
// //                                                     <div class="pbdiv-16">
// //                                                         <div class="slot">
// //                                                             {{S001R2?.length != 0? S001R2?.length:''}}
// //                                                         </div>
// //                                                     </div>
// //                                                 </div>
// //                                                 <div fxFlex (click)="loadSelectedContainer(S001R3)" [ngClass]="{
// //                                                 'zeroClass' : S001R3?.length == 0,
// //                                                 'firstClass' : S001R3?.length == 1,
// //                                                 'secondClass' : S001R3?.length == 2,
// //                                                 'thirdClass' : S001R3?.length == 3,
// //                                                 'fourthClass' : S001R3?.length == 4,
// //                                                 'fifthClass' : S001R3?.length == 5              
// //                                              }" class="slotContainer" fxLayoutAlign="center end">
// //                                                     <div class="pbdiv-16">
// //                                                         <div class="slot">
// //                                                             {{S001R3?.length != 0? S001R3?.length:''}}
// //                                                         </div>
// //                                                     </div>
// //                                                 </div>
// //                                                 <div fxFlex (click)="loadSelectedContainer(S001R4)" [ngClass]="{
// //                                                 'secondClass' : S001R4?.length == 2,
// //                                                 'zeroClass' : S001R4?.length == 0,
// //                                                 'firstClass' : S001R4?.length == 1,
// //                                                 'thirdClass' : S001R4?.length == 3,
// //                                                 'fourthClass' : S001R4?.length == 4,
// //                                                 'fifthClass' : S001R4?.length == 5
// //                                              }" class="slotContainer" fxLayoutAlign="center end">
// //                                                     <div class="pbdiv-16">
// //                                                         <div class="slot">
// //                                                             {{S001R4?.length != 0? S001R4?.length:''}}
// //                                                         </div>
// //                                                     </div>
// //                                                 </div>
// //                                                 <div fxFlex (click)="loadSelectedContainer(S001R5)" [ngClass]="{
// //                                             'zeroClass' : S001R5?.length == 0,
// //                                             'firstClass' : S001R5?.length == 1,
// //                                             'secondClass' : S001R5?.length == 2,
// //                                             'thirdClass' : S001R5?.length == 3,
// //                                             'fourthClass' : S001R5?.length == 4,
// //                                             'fifthClass' : S001R5?.length == 5              
// //                                          }" class="slotContainer" fxLayoutAlign="center end">
// //                                                     <div class="pbdiv-16">
// //                                                         <div class="slot">
// //                                                             {{S001R5?.length != 0? S001R5?.length:''}}
// //                                                         </div>
// //                                                     </div>
// //                                                 </div>
// //                                                 <div fxFlex (click)="loadSelectedContainer(S001R6)" [ngClass]="{
// //                                             'secondClass' : S001R6?.length == 2,
// //                                             'zeroClass' : S001R6?.length == 0,
// //                                             'firstClass' : S001R6?.length == 1,
// //                                             'thirdClass' : S001R6?.length == 3,
// //                                             'fourthClass' : S001R6?.length == 4,
// //                                             'fifthClass' : S001R6?.length == 5
// //                                          }" class="slotContainer" fxLayoutAlign="center end">
// //                                                     <div class="pbdiv-16">
// //                                                         <div class="slot">
// //                                                             {{S001R6?.length != 0? S001R6?.length:''}}
// //                                                         </div>
// //                                                     </div>
// //                                                 </div>
// //                                                 <div fxFlex (click)="loadSelectedContainer(S001R7)" [ngClass]="{
// //                                                 'secondClass' : S001R7?.length == 2,
// //                                                 'zeroClass' : S001R7?.length == 0,
// //                                                 'firstClass' : S001R7?.length == 1,
// //                                                 'thirdClass' : S001R7?.length == 3,
// //                                                 'fourthClass' : S001R7?.length == 4,
// //                                                 'fifthClass' : S001R7?.length == 5
// //                                              }" class="slotContainer" fxLayoutAlign="center end">
// //                                                     <div class="pbdiv-16">
// //                                                         <div class="slot">
// //                                                             {{S001R7?.length != 0? S001R7?.length:''}}
// //                                                         </div>
// //                                                     </div>
// //                                                 </div> -->
// //                     </div>
// //                     <!-- S003 -->
// //                     <div fxLayout="row" fxLayoutAlign="center start">
// //                         <div fxFlex style="height: 60px;" class="pr-16" fxLayoutAlign="start center">
// //                             <div class="pbdiv-16">
// //                                 <div class="font-size-16  line-height-1 mt-8" style="text-align: center; color: black">
// //                                     S003
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex class="" fxLayoutAlign="start center">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{ 'dash.Reserved' | translate }}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <!-- <div fxFlex (click)="loadSelectedContainer(S003R1)" [ngClass]="{
// //                                                         'zeroClass' : S003R1?.length == 0,
// //                                                         'firstClass' : S003R1?.length == 1,
// //                                                         'secondClass' : S003R1?.length == 2,
// //                                                         'thirdClass' : S003R1?.length == 3,
// //                                                         'fourthClass' : S003R1?.length == 4,
// //                                                         'fifthClass' : S003R1?.length == 5              
// //                                                      }" class="slotContainer" fxLayoutAlign="center end">
// //                                                     <div class="pbdiv-16">
// //                                                         <div class="slot">
// //                                                             {{S003R1?.length != 0? S003R1?.length:''}}
// //                                                         </div>
// //                                                     </div>
// //                                                 </div>
// //                                                 <div fxFlex (click)="loadSelectedContainer(S003R2)" [ngClass]="{
// //                                                         'secondClass' : S003R2?.length == 2,
// //                                                         'zeroClass' : S003R2?.length == 0,
// //                                                         'firstClass' : S003R2?.length == 1,
// //                                                         'thirdClass' : S003R2?.length == 3,
// //                                                         'fourthClass' : S003R2?.length == 4,
// //                                                         'fifthClass' : S003R2?.length == 5
// //                                                      }" class="slotContainer" fxLayoutAlign="center end">
// //                                                     <div class="pbdiv-16">
// //                                                         <div class="slot">
// //                                                             {{S003R2?.length != 0? S003R2?.length:''}}
// //                                                         </div>
// //                                                     </div>
// //                                                 </div>
// //                                                 <div fxFlex (click)="loadSelectedContainer(S003R3)" [ngClass]="{
// //                                                     'zeroClass' : S003R3?.length == 0,
// //                                                     'firstClass' : S003R3?.length == 1,
// //                                                     'secondClass' : S003R3?.length == 2,
// //                                                     'thirdClass' : S003R3?.length == 3,
// //                                                     'fourthClass' : S003R3?.length == 4,
// //                                                     'fifthClass' : S003R3?.length == 5              
// //                                                  }" class="slotContainer" fxLayoutAlign="center end">
// //                                                     <div class="pbdiv-16">
// //                                                         <div class="slot">
// //                                                             {{S003R3?.length != 0? S003R3?.length:''}}
// //                                                         </div>
// //                                                     </div>
// //                                                 </div>
// //                                                 <div fxFlex (click)="loadSelectedContainer(S003R4)" [ngClass]="{
// //                                                     'secondClass' : S003R4?.length == 2,
// //                                                     'zeroClass' : S003R4?.length == 0,
// //                                                     'firstClass' : S003R4?.length == 1,
// //                                                     'thirdClass' : S003R4?.length == 3,
// //                                                     'fourthClass' : S003R4?.length == 4,
// //                                                     'fifthClass' : S003R4?.length == 5
// //                                                  }" class="slotContainer" fxLayoutAlign="center end">
// //                                                     <div class="pbdiv-16">
// //                                                         <div class="slot">
// //                                                             {{S003R4?.length != 0? S003R4?.length:''}}
// //                                                         </div>
// //                                                     </div>
// //                                                 </div>
// //                                                 <div fxFlex (click)="loadSelectedContainer(S003R5)" [ngClass]="{
// //                                                 'zeroClass' : S003R5?.length == 0,
// //                                                 'firstClass' : S003R5?.length == 1,
// //                                                 'secondClass' : S003R5?.length == 2,
// //                                                 'thirdClass' : S003R5?.length == 3,
// //                                                 'fourthClass' : S003R5?.length == 4,
// //                                                 'fifthClass' : S003R5?.length == 5              
// //                                              }" class="slotContainer" fxLayoutAlign="center end">
// //                                                     <div class="pbdiv-16">
// //                                                         <div class="slot">
// //                                                             {{S003R5?.length != 0? S003R5?.length:''}}
// //                                                         </div>
// //                                                     </div>
// //                                                 </div>
// //                                                 <div fxFlex (click)="loadSelectedContainer(S003R6)" [ngClass]="{
// //                                                 'secondClass' : S003R6?.length == 2,
// //                                                 'zeroClass' : S003R6?.length == 0,
// //                                                 'firstClass' : S003R6?.length == 1,
// //                                                 'thirdClass' : S003R6?.length == 3,
// //                                                 'fourthClass' : S003R6?.length == 4,
// //                                                 'fifthClass' : S003R6?.length == 5
// //                                              }" class="slotContainer" fxLayoutAlign="center end">
// //                                                     <div class="pbdiv-16">
// //                                                         <div class="slot">
// //                                                             {{S003R6?.length != 0? S003R6?.length:''}}
// //                                                         </div>
// //                                                     </div>
// //                                                 </div>
// //                                                 <div fxFlex (click)="loadSelectedContainer(S003R7)" [ngClass]="{
// //                                                     'secondClass' : S003R7?.length == 2,
// //                                                     'zeroClass' : S003R7?.length == 0,
// //                                                     'firstClass' : S003R7?.length == 1,
// //                                                     'thirdClass' : S003R7?.length == 3,
// //                                                     'fourthClass' : S003R7?.length == 4,
// //                                                     'fifthClass' : S003R7?.length == 5
// //                                                  }" class="slotContainer" fxLayoutAlign="center end">
// //                                                     <div class="pbdiv-16">
// //                                                         <div class="slot">
// //                                                             {{S003R7?.length != 0? S003R7?.length:''}}
// //                                                         </div>
// //                                                     </div>
// //                                                 </div> -->
// //                     </div>
// //                     <!-- S005 -->
// //                     <div fxLayout="row" fxLayoutAlign="center start">
// //                         <div fxFlex style="height: 60px;" class="pr-16" fxLayoutAlign="start center">
// //                             <div class="pbdiv-16">
// //                                 <div class="font-size-16  line-height-1 mt-8" style="text-align: center; color: black">
// //                                     S005
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex class="" fxLayoutAlign="start center">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{ 'dash.Reserved' | translate }}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <!-- <div fxFlex (click)="loadSelectedContainer(S005R1)" [ngClass]="{
// //                                                             'zeroClass' : S005R1?.length == 0,
// //                                                             'firstClass' : S005R1?.length == 1,
// //                                                             'secondClass' : S005R1?.length == 2,
// //                                                             'thirdClass' : S005R1?.length == 3,
// //                                                             'fourthClass' : S005R1?.length == 4,
// //                                                             'fifthClass' : S005R1?.length == 5              
// //                                                          }" class="slotContainer" fxLayoutAlign="center end">
// //                                                     <div class="pbdiv-16">
// //                                                         <div class="slot">
// //                                                             {{S005R1?.length != 0? S005R1?.length:''}}
// //                                                         </div>
// //                                                     </div>
// //                                                 </div>
// //                                                 <div fxFlex (click)="loadSelectedContainer(S005R2)" [ngClass]="{
// //                                                             'secondClass' : S005R2?.length == 2,
// //                                                             'zeroClass' : S005R2?.length == 0,
// //                                                             'firstClass' : S005R2?.length == 1,
// //                                                             'thirdClass' : S005R2?.length == 3,
// //                                                             'fourthClass' : S005R2?.length == 4,
// //                                                             'fifthClass' : S005R2?.length == 5
// //                                                          }" class="slotContainer" fxLayoutAlign="center end">
// //                                                     <div class="pbdiv-16">
// //                                                         <div class="slot">
// //                                                             {{S005R2?.length != 0? S005R2?.length:''}}
// //                                                         </div>
// //                                                     </div>
// //                                                 </div>
// //                                                 <div fxFlex (click)="loadSelectedContainer(S005R3)" [ngClass]="{
// //                                                         'zeroClass' : S005R3?.length == 0,
// //                                                         'firstClass' : S005R3?.length == 1,
// //                                                         'secondClass' : S005R3?.length == 2,
// //                                                         'thirdClass' : S005R3?.length == 3,
// //                                                         'fourthClass' : S005R3?.length == 4,
// //                                                         'fifthClass' : S005R3?.length == 5              
// //                                                      }" class="slotContainer" fxLayoutAlign="center end">
// //                                                     <div class="pbdiv-16">
// //                                                         <div class="slot">
// //                                                             {{S005R3?.length != 0? S005R3?.length:''}}
// //                                                         </div>
// //                                                     </div>
// //                                                 </div>
// //                                                 <div fxFlex (click)="loadSelectedContainer(S005R4)" [ngClass]="{
// //                                                         'secondClass' : S005R4?.length == 2,
// //                                                         'zeroClass' : S005R4?.length == 0,
// //                                                         'firstClass' : S005R4?.length == 1,
// //                                                         'thirdClass' : S005R4?.length == 3,
// //                                                         'fourthClass' : S005R4?.length == 4,
// //                                                         'fifthClass' : S005R4?.length == 5
// //                                                      }" class="slotContainer" fxLayoutAlign="center end">
// //                                                     <div class="pbdiv-16">
// //                                                         <div class="slot">
// //                                                             {{S005R4?.length != 0? S005R4?.length:''}}
// //                                                         </div>
// //                                                     </div>
// //                                                 </div>
// //                                                 <div fxFlex (click)="loadSelectedContainer(S005R5)" [ngClass]="{
// //                                                     'zeroClass' : S005R5?.length == 0,
// //                                                     'firstClass' : S005R5?.length == 1,
// //                                                     'secondClass' : S005R5?.length == 2,
// //                                                     'thirdClass' : S005R5?.length == 3,
// //                                                     'fourthClass' : S005R5?.length == 4,
// //                                                     'fifthClass' : S005R5?.length == 5              
// //                                                  }" class="slotContainer" fxLayoutAlign="center end">
// //                                                     <div class="pbdiv-16">
// //                                                         <div class="slot">
// //                                                             {{S005R5?.length != 0? S005R5?.length:''}}
// //                                                         </div>
// //                                                     </div>
// //                                                 </div>
// //                                                 <div fxFlex (click)="loadSelectedContainer(S005R6)" [ngClass]="{
// //                                                     'secondClass' : S005R6?.length == 2,
// //                                                     'zeroClass' : S005R6?.length == 0,
// //                                                     'firstClass' : S005R6?.length == 1,
// //                                                     'thirdClass' : S005R6?.length == 3,
// //                                                     'fourthClass' : S005R6?.length == 4,
// //                                                     'fifthClass' : S005R6?.length == 5
// //                                                  }" class="slotContainer" fxLayoutAlign="center end">
// //                                                     <div class="pbdiv-16">
// //                                                         <div class="slot">
// //                                                             {{S005R6?.length != 0? S005R6?.length:''}}
// //                                                         </div>
// //                                                     </div>
// //                                                 </div>
// //                                                 <div fxFlex (click)="loadSelectedContainer(S005R7)" [ngClass]="{
// //                                                         'secondClass' : S005R7?.length == 2,
// //                                                         'zeroClass' : S005R7?.length == 0,
// //                                                         'firstClass' : S005R7?.length == 1,
// //                                                         'thirdClass' : S005R7?.length == 3,
// //                                                         'fourthClass' : S005R7?.length == 4,
// //                                                         'fifthClass' : S005R7?.length == 5
// //                                                      }" class="slotContainer" fxLayoutAlign="center end">
// //                                                     <div class="pbdiv-16">
// //                                                         <div class="slot">
// //                                                             {{S005R7?.length != 0? S005R7?.length:''}}
// //                                                         </div>
// //                                                     </div>
// //                                                 </div> -->
// //                     </div>
// //                     <!-- S007 -->
// //                     <div fxLayout="row" fxLayoutAlign="center start">
// //                         <div fxFlex style="height: 60px;" class="pr-16" fxLayoutAlign="start center">
// //                             <div class="pbdiv-16">
// //                                 <div class="font-size-16  line-height-1 mt-8" style="text-align: center; color: black">
// //                                     S007
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S007R7)" [ngClass]="{
// //                             'secondClass' : S007R7?.length == 2,
// //                             'zeroClass' : S007R7?.length == 0,
// //                             'firstClass' : S007R7?.length == 1,
// //                             'thirdClass' : S007R7?.length == 3,
// //                             'fourthClass' : S007R7?.length == 4,
// //                             'fifthClass' : S007R7?.length == 5
// //                          }" class="" fxLayoutAlign="center end">
// //                             <div class="">
// //                                 <div class="">
// //                                     <!-- {{S007R7?.length != 0? S007R7?.length:''}} -->
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S007R6)" [ngClass]="{
// //                     'secondClass' : S007R6?.length == 2,
// //                     'zeroClass' : S007R6?.length == 0,
// //                     'firstClass' : S007R6?.length == 1,
// //                     'thirdClass' : S007R6?.length == 3,
// //                     'fourthClass' : S007R6?.length == 4,
// //                     'fifthClass' : S007R6?.length == 5
// //                  }" class="slotContainer" [class.fourtyFeetContainerClass]="CheckFourtyFeet(S007R6)"
// //                             fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S007R6?.length != 0? S007R6?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S007R5)" [ngClass]="{
// //                 'zeroClass' : S007R5?.length == 0,
// //                 'firstClass' : S007R5?.length == 1,
// //                 'secondClass' : S007R5?.length == 2,
// //                 'thirdClass' : S007R5?.length == 3,
// //                 'fourthClass' : S007R5?.length == 4,
// //                 'fifthClass' : S007R5?.length == 5              
// //              }" class="slotContainer" [class.fourtyFeetContainerClass]="CheckFourtyFeet(S007R5)"
// //                             fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S007R5?.length != 0? S007R5?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S007R4)" [ngClass]="{
// //             'secondClass' : S007R4?.length == 2,
// //             'zeroClass' : S007R4?.length == 0,
// //             'firstClass' : S007R4?.length == 1,
// //             'thirdClass' : S007R4?.length == 3,
// //             'fourthClass' : S007R4?.length == 4,
// //             'fifthClass' : S007R4?.length == 5
// //          }" class="slotContainer" [class.fourtyFeetContainerClass]="CheckFourtyFeet(S007R4)"
// //                             fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S007R4?.length != 0? S007R4?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S007R3)" [ngClass]="{
// //     'zeroClass' : S007R3?.length == 0,
// //     'firstClass' : S007R3?.length == 1,
// //     'secondClass' : S007R3?.length == 2,
// //     'thirdClass' : S007R3?.length == 3,
// //     'fourthClass' : S007R3?.length == 4,
// //     'fifthClass' : S007R3?.length == 5              
// //  }" class="slotContainer" [class.fourtyFeetContainerClass]="CheckFourtyFeet(S007R3)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S007R3?.length != 0? S007R3?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S007R2)" [ngClass]="{
// //     'secondClass' : S007R2?.length == 2,
// //     'zeroClass' : S007R2?.length == 0,
// //     'firstClass' : S007R2?.length == 1,
// //     'thirdClass' : S007R2?.length == 3,
// //     'fourthClass' : S007R2?.length == 4,
// //     'fifthClass' : S007R2?.length == 5
// //  }" class="slotContainer" [class.fourtyFeetContainerClass]="CheckFourtyFeet(S007R2)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S007R2?.length != 0? S007R2?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S007R1)" [ngClass]="{
// //                                         'zeroClass' : S007R1?.length == 0,
// //                                         'firstClass' : S007R1?.length == 1,
// //                                         'secondClass' : S007R1?.length == 2,
// //                                         'thirdClass' : S007R1?.length == 3,
// //                                         'fourthClass' : S007R1?.length == 4,
// //                                         'fifthClass' : S007R1?.length == 5                                                                         
// //                                      }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S007R1)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S007R1?.length != 0? S007R1?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                     </div>
// //                     <!-- S009 -->
// //                     <div fxLayout="row" fxLayoutAlign="center start">
// //                         <div fxFlex style="height: 60px;" class="pr-16" fxLayoutAlign="start center">
// //                             <div class="pbdiv-16">
// //                                 <div class="font-size-16  line-height-1 mt-8" style="text-align: center; color: black">
// //                                     S009
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S009R7)" [ngClass]="{
// //                             'secondClass' : S009R7?.length == 2,
// //                             'zeroClass' : S009R7?.length == 0,
// //                             'firstClass' : S009R7?.length == 1,
// //                             'thirdClass' : S009R7?.length == 3,
// //                             'fourthClass' : S009R7?.length == 4,
// //                             'fifthClass' : S009R7?.length == 5
// //                          }" class="" fxLayoutAlign="center end">
// //                             <div class="">
// //                                 <div class="">
// //                                     <!-- {{S009R7?.length != 0? S009R7?.length:''}} -->
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S009R6)" [ngClass]="{
// //         'secondClass' : S009R6?.length == 2,
// //         'zeroClass' : S009R6?.length == 0,
// //         'firstClass' : S009R6?.length == 1,
// //         'thirdClass' : S009R6?.length == 3,
// //         'fourthClass' : S009R6?.length == 4,
// //         'fifthClass' : S009R6?.length == 5
// //      }" class="slotContainer" [class.fourtyFeetContainerClass]="CheckFourtyFeet(S009R6)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S009R6?.length != 0? S009R6?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S009R5)" [ngClass]="{
// //     'zeroClass' : S009R5?.length == 0,
// //     'firstClass' : S009R5?.length == 1,
// //     'secondClass' : S009R5?.length == 2,
// //     'thirdClass' : S009R5?.length == 3,
// //     'fourthClass' : S009R5?.length == 4,
// //     'fifthClass' : S009R5?.length == 5              
// //  }" class="slotContainer" [class.fourtyFeetContainerClass]="CheckFourtyFeet(S009R5)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S009R5?.length != 0? S009R5?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S009R4)" [ngClass]="{
// //     'secondClass' : S009R4?.length == 2,
// //     'zeroClass' : S009R4?.length == 0,
// //     'firstClass' : S009R4?.length == 1,
// //     'thirdClass' : S009R4?.length == 3,
// //     'fourthClass' : S009R4?.length == 4,
// //     'fifthClass' : S009R4?.length == 5
// //  }" class="slotContainer" [class.fourtyFeetContainerClass]="CheckFourtyFeet(S009R4)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S009R4?.length != 0? S009R4?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S009R3)" [ngClass]="{
// //     'zeroClass' : S009R3?.length == 0,
// //     'firstClass' : S009R3?.length == 1,
// //     'secondClass' : S009R3?.length == 2,
// //     'thirdClass' : S009R3?.length == 3,
// //     'fourthClass' : S009R3?.length == 4,
// //     'fifthClass' : S009R3?.length == 5              
// //  }" class="slotContainer" [class.fourtyFeetContainerClass]="CheckFourtyFeet(S009R3)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S009R3?.length != 0? S009R3?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S009R2)" [ngClass]="{
// //     'secondClass' : S009R2?.length == 2,
// //     'zeroClass' : S009R2?.length == 0,
// //     'firstClass' : S009R2?.length == 1,
// //     'thirdClass' : S009R2?.length == 3,
// //     'fourthClass' : S009R2?.length == 4,
// //     'fifthClass' : S009R2?.length == 5
// //  }" class="slotContainer" [class.fourtyFeetContainerClass]="CheckFourtyFeet(S009R2)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S009R2?.length != 0? S009R2?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S009R1)" [ngClass]="{
// //                                         'zeroClass' : S009R1?.length == 0,
// //                                         'firstClass' : S009R1?.length == 1,
// //                                         'secondClass' : S009R1?.length == 2,
// //                                         'thirdClass' : S009R1?.length == 3,
// //                                         'fourthClass' : S009R1?.length == 4,
// //                                         'fifthClass' : S009R1?.length == 5              
// //                                      }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S009R1)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S009R1?.length != 0? S009R1?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>

// //                     </div>
// //                     <!-- S011 -->
// //                     <div fxLayout="row" fxLayoutAlign="center start">
// //                         <div fxFlex style="height: 60px;" class="pr-16" fxLayoutAlign="start center">
// //                             <div class="pbdiv-16">
// //                                 <div class="font-size-16  line-height-1 mt-8" style="text-align: center; color: black">
// //                                     S011
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S011R7)" [ngClass]="{
// //                             'secondClass' : S011R7?.length == 2 ,
// //                             'zeroClass' : S011R7?.length == 0,
// //                             'firstClass' : S011R7?.length == 1,
// //                             'thirdClass' : S011R7?.length == 3,
// //                             'fourthClass' : S011R7?.length == 4,
// //                             'fifthClass' : S011R7?.length == 5                
// //                          }" class="" fxLayoutAlign="center end">
// //                             <div class="">
// //                                 <div class="">
// //                                     <!-- {{S011R7?.length != 0? S011R7?.length:''}} -->
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S011R6)" [ngClass]="{
// //                 'secondClass' : S011R6?.length == 2,
// //                 'zeroClass' : S011R6?.length == 0,
// //                 'firstClass' : S011R6?.length == 1,
// //                 'thirdClass' : S011R6?.length == 3,
// //                 'fourthClass' : S011R6?.length == 4,
// //                 'fifthClass' : S011R6?.length == 5
// //              }" class="slotContainer" [class.fourtyFeetContainerClass]="CheckFourtyFeet(S011R6)"
// //                             fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S011R6?.length != 0? S011R6?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S011R5)" [ngClass]="{
// //         'zeroClass' : S011R5?.length == 0,
// //         'firstClass' : S011R5?.length == 1,
// //         'secondClass' : S011R5?.length == 2,
// //         'thirdClass' : S011R5?.length == 3,
// //         'fourthClass' : S011R5?.length == 4,
// //         'fifthClass' : S011R5?.length == 5              
// //      }" class="slotContainer" [class.fourtyFeetContainerClass]="CheckFourtyFeet(S011R5)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S011R5?.length != 0? S011R5?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S011R4)" [ngClass]="{
// //     'secondClass' : S011R4?.length == 2,
// //     'zeroClass' : S011R4?.length == 0,
// //     'firstClass' : S011R4?.length == 1,
// //     'thirdClass' : S011R4?.length == 3,
// //     'fourthClass' : S011R4?.length == 4,
// //     'fifthClass' : S011R4?.length == 5
// //  }" class="slotContainer" [class.fourtyFeetContainerClass]="CheckFourtyFeet(S011R4)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S011R4?.length != 0? S011R4?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S011R3)" [ngClass]="{
// //     'zeroClass' : S011R3?.length == 0,
// //     'firstClass' : S011R3?.length == 1,
// //     'secondClass' : S011R3?.length == 2,
// //     'thirdClass' : S011R3?.length == 3,
// //     'fourthClass' : S011R3?.length == 4,
// //     'fifthClass' : S011R3?.length == 5              
// //  }" class="slotContainer" [class.fourtyFeetContainerClass]="CheckFourtyFeet(S011R3)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S011R3?.length != 0? S011R3?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S011R2)" [ngClass]="{
// //                                           'secondClass' : S011R2?.length == 2,
// //                                           'zeroClass' : S011R2?.length == 0,
// //                                          'firstClass' : S011R2?.length == 1,
// //                                         'thirdClass' : S011R2?.length == 3,
// //                                         'fourthClass' : S011R2?.length == 4,
// //                                       'fifthClass' : S011R2?.length == 5
// //  }" class="slotContainer" [class.fourtyFeetContainerClass]="CheckFourtyFeet(S011R2)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S011R2?.length != 0? S011R2?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S011R1)" [ngClass]="{
// //                                             'zeroClass' : S011R1?.length == 0,
// //                                             'firstClass' : S011R1?.length == 1,
// //                                             'secondClass' : S011R1?.length == 2,
// //                                             'thirdClass' : S011R1?.length == 3,
// //                                             'fourthClass' : S011R1?.length == 4,
// //                                             'fifthClass' : S011R1?.length == 5              
// //                                          }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S011R1)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S011R1?.length != 0? S011R1?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>






// //                     </div>
// //                     <!-- S013 -->
// //                     <div fxLayout="row" fxLayoutAlign="center start">
// //                         <div fxFlex style="height: 60px;" class="pr-16" fxLayoutAlign="start center">
// //                             <div class="pbdiv-16">
// //                                 <div class="font-size-16  line-height-1 mt-8" style="text-align: center; color: black">
// //                                     S013
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S013R7)" [ngClass]="{
// //                             'secondClass' : S013R7?.length == 2,
// //                             'zeroClass' : S013R7?.length == 0,
// //                             'firstClass' : S013R7?.length == 1,
// //                             'thirdClass' : S013R7?.length == 3,
// //                             'fourthClass' : S013R7?.length == 4,
// //                             'fifthClass' : S013R7?.length == 5
// //                          }" class="" fxLayoutAlign="center end">
// //                             <div class="">
// //                                 <div class="">
// //                                     <!-- {{S013R7?.length != 0? S013R7?.length:''}} -->
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S013R6)" [ngClass]="{
// //                 'secondClass' : S013R6?.length == 2,
// //                 'zeroClass' : S013R6?.length == 0,
// //                 'firstClass' : S013R6?.length == 1,
// //                 'thirdClass' : S013R6?.length == 3,
// //                 'fourthClass' : S013R6?.length == 4,
// //                 'fifthClass' : S013R6?.length == 5
// //              }" class="slotContainer" [class.fourtyFeetContainerClass]="CheckFourtyFeet(S013R6)"
// //                             fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S013R6?.length != 0? S013R6?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S013R5)" [ngClass]="{
// //         'zeroClass' : S013R5?.length == 0,
// //         'firstClass' : S013R5?.length == 1,
// //         'secondClass' : S013R5?.length == 2,
// //         'thirdClass' : S013R5?.length == 3,
// //         'fourthClass' : S013R5?.length == 4,
// //         'fifthClass' : S013R5?.length == 5              
// //      }" class="slotContainer" [class.fourtyFeetContainerClass]="CheckFourtyFeet(S013R5)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S013R5?.length != 0? S013R5?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S013R4)" [ngClass]="{
// //     'secondClass' : S013R4?.length == 2,
// //     'zeroClass' : S013R4?.length == 0,
// //     'firstClass' : S013R4?.length == 1,
// //     'thirdClass' : S013R4?.length == 3,
// //     'fourthClass' : S013R4?.length == 4,
// //     'fifthClass' : S013R4?.length == 5
// //  }" class="slotContainer" [class.fourtyFeetContainerClass]="CheckFourtyFeet(S013R4)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S013R4?.length != 0? S013R4?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S013R3)" [ngClass]="{
// //     'zeroClass' : S013R3?.length == 0,
// //     'firstClass' : S013R3?.length == 1,
// //     'secondClass' : S013R3?.length == 2,
// //     'thirdClass' : S013R3?.length == 3,
// //     'fourthClass' : S013R3?.length == 4,
// //     'fifthClass' : S013R3?.length == 5              
// //  }" class="slotContainer" [class.fourtyFeetContainerClass]="CheckFourtyFeet(S013R3)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S013R3?.length != 0? S013R3?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S013R2)" [ngClass]="{
// //     'secondClass' : S013R2?.length == 2,
// //     'zeroClass' : S013R2?.length == 0,
// //     'firstClass' : S013R2?.length == 1,
// //     'thirdClass' : S013R2?.length == 3,
// //     'fourthClass' : S013R2?.length == 4,
// //     'fifthClass' : S013R2?.length == 5
// //  }" class="slotContainer" [class.fourtyFeetContainerClass]="CheckFourtyFeet(S013R2)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S013R2?.length != 0? S013R2?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S013R1)" [ngClass]="{
// //                                             'zeroClass' : S013R1?.length == 0,
// //                                             'firstClass' : S013R1?.length == 1,
// //                                             'secondClass' : S013R1?.length == 2,
// //                                             'thirdClass' : S013R1?.length == 3,
// //                                             'fourthClass' : S013R1?.length == 4,
// //                                             'fifthClass' : S013R1?.length == 5              
// //                                          }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S013R1)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S013R1?.length != 0? S013R1?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>

// //                     </div>
// //                     <!-- S015 -->
// //                     <div fxLayout="row" fxLayoutAlign="center start">
// //                         <div fxFlex style="height: 60px;" class="pr-16" fxLayoutAlign="start center">
// //                             <div class="pbdiv-16">
// //                                 <div class="font-size-16  line-height-1 mt-8" style="text-align: center; color: black">
// //                                     S015
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S015R7)" [ngClass]="{
// //                             'secondClass' : S015R7?.length == 2,
// //                             'zeroClass' : S015R7?.length == 0,
// //                             'firstClass' : S015R7?.length == 1,
// //                             'thirdClass' : S015R7?.length == 3,
// //                             'fourthClass' : S015R7?.length == 4,
// //                             'fifthClass' : S015R7?.length == 5
// //                          }" class="" fxLayoutAlign="center end">
// //                             <div class="">
// //                                 <div class="">
// //                                     <!-- {{S015R7?.length != 0? S015R7?.length:''}} -->
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S015R6)" [ngClass]="{
// //                 'secondClass' : S015R6?.length == 2,
// //                 'zeroClass' : S015R6?.length == 0,
// //                 'firstClass' : S015R6?.length == 1,
// //                 'thirdClass' : S015R6?.length == 3,
// //                 'fourthClass' : S015R6?.length == 4,
// //                 'fifthClass' : S015R6?.length == 5
// //              }" class="slotContainer" [class.fourtyFeetContainerClass]="CheckFourtyFeet(S015R6)"
// //                             fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S015R6?.length != 0? S015R6?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S015R5)" [ngClass]="{
// //         'zeroClass' : S015R5?.length == 0,
// //         'firstClass' : S015R5?.length == 1,
// //         'secondClass' : S015R5?.length == 2,
// //         'thirdClass' : S015R5?.length == 3,
// //         'fourthClass' : S015R5?.length == 4,
// //         'fifthClass' : S015R5?.length == 5              
// //      }" class="slotContainer" [class.fourtyFeetContainerClass]="CheckFourtyFeet(S015R5)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S015R5?.length != 0? S015R5?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S015R4)" [ngClass]="{
// //     'secondClass' : S015R4?.length == 2,
// //     'zeroClass' : S015R4?.length == 0,
// //     'firstClass' : S015R4?.length == 1,
// //     'thirdClass' : S015R4?.length == 3,
// //     'fourthClass' : S015R4?.length == 4,
// //     'fifthClass' : S015R4?.length == 5
// //  }" class="slotContainer" [class.fourtyFeetContainerClass]="CheckFourtyFeet(S015R4)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S015R4?.length != 0? S015R4?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S015R3)" [ngClass]="{
// //     'zeroClass' : S015R3?.length == 0,
// //     'firstClass' : S015R3?.length == 1,
// //     'secondClass' : S015R3?.length == 2,
// //     'thirdClass' : S015R3?.length == 3,
// //     'fourthClass' : S015R3?.length == 4,
// //     'fifthClass' : S015R3?.length == 5              
// //  }" class="slotContainer" [class.fourtyFeetContainerClass]="CheckFourtyFeet(S015R3)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S015R3?.length != 0? S015R3?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S015R2)" [ngClass]="{
// //     'secondClass' : S015R2?.length == 2,
// //     'zeroClass' : S015R2?.length == 0,
// //     'firstClass' : S015R2?.length == 1,
// //     'thirdClass' : S015R2?.length == 3,
// //     'fourthClass' : S015R2?.length == 4,
// //     'fifthClass' : S015R2?.length == 5
// //  }" class="slotContainer" [class.fourtyFeetContainerClass]="CheckFourtyFeet(S015R2)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S015R2?.length != 0? S015R2?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S015R1)" [ngClass]="{
// //                                             'zeroClass' : S015R1?.length == 0,
// //                                             'firstClass' : S015R1?.length == 1,
// //                                             'secondClass' : S015R1?.length == 2,
// //                                             'thirdClass' : S015R1?.length == 3,
// //                                             'fourthClass' : S015R1?.length == 4,
// //                                             'fifthClass' : S015R1?.length == 5              
// //                                          }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S015R1)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S015R1?.length != 0? S015R1?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>

// //                     </div>
// //                     <!-- S017 -->
// //                     <div fxLayout="row" fxLayoutAlign="center start">
// //                         <div fxFlex style="height: 60px;" class="pr-16" fxLayoutAlign="start center">
// //                             <div class="pbdiv-16">
// //                                 <div class="font-size-16  line-height-1 mt-8" style="text-align: center; color: black">
// //                                     S017
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S017R7)" [ngClass]="{
// //                             'secondClass' : S017R7?.length == 2,
// //                             'zeroClass' : S017R7?.length == 0,
// //                             'firstClass' : S017R7?.length == 1,
// //                             'thirdClass' : S017R7?.length == 3,
// //                             'fourthClass' : S017R7?.length == 4,
// //                             'fifthClass' : S017R7?.length == 5
// //                          }" class="" fxLayoutAlign="center end">
// //                             <div class="">
// //                                 <div class="">
// //                                     <!-- {{S017R7?.length != 0? S017R7?.length:''}} -->
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S017R6)" [ngClass]="{
// //                 'secondClass' : S017R6?.length == 2,
// //                 'zeroClass' : S017R6?.length == 0,
// //                 'firstClass' : S017R6?.length == 1,
// //                 'thirdClass' : S017R6?.length == 3,
// //                 'fourthClass' : S017R6?.length == 4,
// //                 'fifthClass' : S017R6?.length == 5
// //              }" class="slotContainer" [class.fourtyFeetContainerClass]="CheckFourtyFeet(S017R6)"
// //                             fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S017R6?.length != 0? S017R6?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S017R5)" [ngClass]="{
// //         'zeroClass' : S017R5?.length == 0,
// //         'firstClass' : S017R5?.length == 1,
// //         'secondClass' : S017R5?.length == 2,
// //         'thirdClass' : S017R5?.length == 3,
// //         'fourthClass' : S017R5?.length == 4,
// //         'fifthClass' : S017R5?.length == 5              
// //      }" class="slotContainer" [class.fourtyFeetContainerClass]="CheckFourtyFeet(S017R5)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S017R5?.length != 0? S017R5?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S017R4)" [ngClass]="{
// //     'secondClass' : S017R4?.length == 2,
// //     'zeroClass' : S017R4?.length == 0,
// //     'firstClass' : S017R4?.length == 1,
// //     'thirdClass' : S017R4?.length == 3,
// //     'fourthClass' : S017R4?.length == 4,
// //     'fifthClass' : S017R4?.length == 5
// //  }" class="slotContainer" [class.fourtyFeetContainerClass]="CheckFourtyFeet(S017R4)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S017R4?.length != 0? S017R4?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S017R3)" [ngClass]="{
// //     'zeroClass' : S017R3?.length == 0,
// //     'firstClass' : S017R3?.length == 1,
// //     'secondClass' : S017R3?.length == 2,
// //     'thirdClass' : S017R3?.length == 3,
// //     'fourthClass' : S017R3?.length == 4,
// //     'fifthClass' : S017R3?.length == 5              
// //  }" class="slotContainer" [class.fourtyFeetContainerClass]="CheckFourtyFeet(S017R3)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S017R3?.length != 0? S017R3?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S017R2)" [ngClass]="{
// //     'secondClass' : S017R2?.length == 2,
// //     'zeroClass' : S017R2?.length == 0,
// //     'firstClass' : S017R2?.length == 1,
// //     'thirdClass' : S017R2?.length == 3,
// //     'fourthClass' : S017R2?.length == 4,
// //     'fifthClass' : S017R2?.length == 5
// //  }" class="slotContainer" [class.fourtyFeetContainerClass]="CheckFourtyFeet(S017R2)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S017R2?.length != 0? S017R2?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S017R1)" [ngClass]="{
// //                                             'zeroClass' : S017R1?.length == 0,
// //                                             'firstClass' : S017R1?.length == 1,
// //                                             'secondClass' : S017R1?.length == 2,
// //                                             'thirdClass' : S017R1?.length == 3,
// //                                             'fourthClass' : S017R1?.length == 4,
// //                                             'fifthClass' : S017R1?.length == 5              
// //                                          }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S017R1)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S017R1?.length != 0? S017R1?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>

// //                     </div>
// //                     <!-- S019 -->
// //                     <div fxLayout="row" fxLayoutAlign="center start">
// //                         <div fxFlex style="height: 60px;" class="pr-16" fxLayoutAlign="start center">
// //                             <div class="pbdiv-16">
// //                                 <div class="font-size-16  line-height-1 mt-8" style="text-align: center; color: black">
// //                                     S019
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S019R7)" [ngClass]="{
// //                             'secondClass' : S019R7?.length == 2,
// //                             'zeroClass' : S019R7?.length == 0,
// //                             'firstClass' : S019R7?.length == 1,
// //                             'thirdClass' : S019R7?.length == 3,
// //                             'fourthClass' : S019R7?.length == 4,
// //                             'fifthClass' : S019R7?.length == 5
// //                          }" class="" fxLayoutAlign="center end">
// //                             <div class="">
// //                                 <div class="">
// //                                     <!-- {{S019R7?.length != 0? S019R7?.length:''}} -->
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S019R6)" [ngClass]="{
// //                 'secondClass' : S019R6?.length == 2,
// //                 'zeroClass' : S019R6?.length == 0,
// //                 'firstClass' : S019R6?.length == 1,
// //                 'thirdClass' : S019R6?.length == 3,
// //                 'fourthClass' : S019R6?.length == 4,
// //                 'fifthClass' : S019R6?.length == 5
// //              }" class="slotContainer" [class.fourtyFeetContainerClass]="CheckFourtyFeet(S019R6)"
// //                             fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S019R6?.length != 0? S019R6?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S019R5)" [ngClass]="{
// //         'zeroClass' : S019R5?.length == 0,
// //         'firstClass' : S019R5?.length == 1,
// //         'secondClass' : S019R5?.length == 2,
// //         'thirdClass' : S019R5?.length == 3,
// //         'fourthClass' : S019R5?.length == 4,
// //         'fifthClass' : S019R5?.length == 5              
// //      }" class="slotContainer" [class.fourtyFeetContainerClass]="CheckFourtyFeet(S019R5)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S019R5?.length != 0? S019R5?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S019R4)" [ngClass]="{
// //     'secondClass' : S019R4?.length == 2,
// //     'zeroClass' : S019R4?.length == 0,
// //     'firstClass' : S019R4?.length == 1,
// //     'thirdClass' : S019R4?.length == 3,
// //     'fourthClass' : S019R4?.length == 4,
// //     'fifthClass' : S019R4?.length == 5
// //  }" class="slotContainer" [class.fourtyFeetContainerClass]="CheckFourtyFeet(S019R4)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S019R4?.length != 0? S019R4?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S019R3)" [ngClass]="{
// //     'zeroClass' : S019R3?.length == 0,
// //     'firstClass' : S019R3?.length == 1,
// //     'secondClass' : S019R3?.length == 2,
// //     'thirdClass' : S019R3?.length == 3,
// //     'fourthClass' : S019R3?.length == 4,
// //     'fifthClass' : S019R3?.length == 5              
// //  }" class="slotContainer" [class.fourtyFeetContainerClass]="CheckFourtyFeet(S019R3)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S019R3?.length != 0? S019R3?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S019R2)" [ngClass]="{
// //     'secondClass' : S019R2?.length == 2,
// //     'zeroClass' : S019R2?.length == 0,
// //     'firstClass' : S019R2?.length == 1,
// //     'thirdClass' : S019R2?.length == 3,
// //     'fourthClass' : S019R2?.length == 4,
// //     'fifthClass' : S019R2?.length == 5
// //  }" class="slotContainer" [class.fourtyFeetContainerClass]="CheckFourtyFeet(S019R2)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S019R2?.length != 0? S019R2?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S019R1)" [ngClass]="{
// //                                             'zeroClass' : S019R1?.length == 0,
// //                                             'firstClass' : S019R1?.length == 1,
// //                                             'secondClass' : S019R1?.length == 2,
// //                                             'thirdClass' : S019R1?.length == 3,
// //                                             'fourthClass' : S019R1?.length == 4,
// //                                             'fifthClass' : S019R1?.length == 5              
// //                                          }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S019R1)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S019R1?.length != 0? S019R1?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                     </div>
// //                     <!-- S021 -->
// //                     <div fxLayout="row" fxLayoutAlign="center start">
// //                         <div fxFlex style="height: 60px;" class="pr-16" fxLayoutAlign="start center">
// //                             <div class="pbdiv-16">
// //                                 <div class="font-size-16  line-height-1 mt-8" style="text-align: center; color: black">
// //                                     S021
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S021R7)" [ngClass]="{
// //                             'secondClass' : S021R7?.length == 2,
// //                             'zeroClass' : S021R7?.length == 0,
// //                             'firstClass' : S021R7?.length == 1,
// //                             'thirdClass' : S021R7?.length == 3,
// //                             'fourthClass' : S021R7?.length == 4,
// //                             'fifthClass' : S021R7?.length == 5
// //                          }" class="" fxLayoutAlign="center end">
// //                             <div class="">
// //                                 <div class="">
// //                                     <!-- {{S021R7?.length != 0? S021R7?.length:''}} -->
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S021R6)" [ngClass]="{
// //                 'secondClass' : S021R6?.length == 2,
// //                 'zeroClass' : S021R6?.length == 0,
// //                 'firstClass' : S021R6?.length == 1,
// //                 'thirdClass' : S021R6?.length == 3,
// //                 'fourthClass' : S021R6?.length == 4,
// //                 'fifthClass' : S021R6?.length == 5
// //              }" class="slotContainer" [class.fourtyFeetContainerClass]="CheckFourtyFeet(S021R6)"
// //                             fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S021R6?.length != 0? S021R6?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S021R5)" [ngClass]="{
// //         'zeroClass' : S021R5?.length == 0,
// //         'firstClass' : S021R5?.length == 1,
// //         'secondClass' : S021R5?.length == 2,
// //         'thirdClass' : S021R5?.length == 3,
// //         'fourthClass' : S021R5?.length == 4,
// //         'fifthClass' : S021R5?.length == 5              
// //      }" class="slotContainer" [class.fourtyFeetContainerClass]="CheckFourtyFeet(S021R5)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S021R5?.length != 0? S021R5?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S021R4)" [ngClass]="{
// //     'secondClass' : S021R4?.length == 2,
// //     'zeroClass' : S021R4?.length == 0,
// //     'firstClass' : S021R4?.length == 1,
// //     'thirdClass' : S021R4?.length == 3,
// //     'fourthClass' : S021R4?.length == 4,
// //     'fifthClass' : S021R4?.length == 5
// //  }" class="slotContainer" [class.fourtyFeetContainerClass]="CheckFourtyFeet(S021R4)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S021R4?.length != 0? S021R4?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S021R3)" [ngClass]="{
// //     'zeroClass' : S021R3?.length == 0,
// //     'firstClass' : S021R3?.length == 1,
// //     'secondClass' : S021R3?.length == 2,
// //     'thirdClass' : S021R3?.length == 3,
// //     'fourthClass' : S021R3?.length == 4,
// //     'fifthClass' : S021R3?.length == 5              
// //  }" class="slotContainer" [class.fourtyFeetContainerClass]="CheckFourtyFeet(S021R3)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S021R3?.length != 0? S021R3?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S021R2)" [ngClass]="{
// //     'secondClass' : S021R2?.length == 2,
// //     'zeroClass' : S021R2?.length == 0,
// //     'firstClass' : S021R2?.length == 1,
// //     'thirdClass' : S021R2?.length == 3,
// //     'fourthClass' : S021R2?.length == 4,
// //     'fifthClass' : S021R2?.length == 5
// //  }" class="slotContainer" [class.fourtyFeetContainerClass]="CheckFourtyFeet(S021R2)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S021R2?.length != 0? S021R2?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S021R1)" [ngClass]="{
// //                                             'zeroClass' : S021R1?.length == 0,
// //                                             'firstClass' : S021R1?.length == 1,
// //                                             'secondClass' : S021R1?.length == 2,
// //                                             'thirdClass' : S021R1?.length == 3,
// //                                             'fourthClass' : S021R1?.length == 4,
// //                                             'fifthClass' : S021R1?.length == 5              
// //                                          }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S021R1)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S021R1?.length != 0? S021R1?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                     </div>
// //                     <!-- S023 -->
// //                     <div fxLayout="row" fxLayoutAlign="center start">
// //                         <div fxFlex style="height: 60px;" class="pr-16" fxLayoutAlign="start center">
// //                             <div class="pbdiv-16">
// //                                 <div class="font-size-16  line-height-1 mt-8" style="text-align: center; color: black">
// //                                     S023
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S023R7)" [ngClass]="{
// //                             'secondClass' : S023R7?.length == 2,
// //                             'zeroClass' : S023R7?.length == 0,
// //                             'firstClass' : S023R7?.length == 1,
// //                             'thirdClass' : S023R7?.length == 3,
// //                             'fourthClass' : S023R7?.length == 4,
// //                             'fifthClass' : S023R7?.length == 5
// //                          }" class="" fxLayoutAlign="center end">
// //                             <div class="">
// //                                 <div class="">
// //                                     <!-- {{S023R7?.length != 0? S023R7?.length:''}} -->
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S023R6)" [ngClass]="{
// //                 'secondClass' : S023R6?.length == 2,
// //                 'zeroClass' : S023R6?.length == 0,
// //                 'firstClass' : S023R6?.length == 1,
// //                 'thirdClass' : S023R6?.length == 3,
// //                 'fourthClass' : S023R6?.length == 4,
// //                 'fifthClass' : S023R6?.length == 5
// //              }" class="slotContainer" [class.fourtyFeetContainerClass]="CheckFourtyFeet(S023R6)"
// //                             fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S023R6?.length != 0? S023R6?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S023R5)" [ngClass]="{
// //         'zeroClass' : S023R5?.length == 0,
// //         'firstClass' : S023R5?.length == 1,
// //         'secondClass' : S023R5?.length == 2,
// //         'thirdClass' : S023R5?.length == 3,
// //         'fourthClass' : S023R5?.length == 4,
// //         'fifthClass' : S023R5?.length == 5              
// //      }" class="slotContainer" [class.fourtyFeetContainerClass]="CheckFourtyFeet(S023R5)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S023R5?.length != 0? S023R5?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S023R4)" [ngClass]="{
// //     'secondClass' : S023R4?.length == 2,
// //     'zeroClass' : S023R4?.length == 0,
// //     'firstClass' : S023R4?.length == 1,
// //     'thirdClass' : S023R4?.length == 3,
// //     'fourthClass' : S023R4?.length == 4,
// //     'fifthClass' : S023R4?.length == 5
// //  }" class="slotContainer" [class.fourtyFeetContainerClass]="CheckFourtyFeet(S023R4)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S023R4?.length != 0? S023R4?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S023R3)" [ngClass]="{
// //     'zeroClass' : S023R3?.length == 0,
// //     'firstClass' : S023R3?.length == 1,
// //     'secondClass' : S023R3?.length == 2,
// //     'thirdClass' : S023R3?.length == 3,
// //     'fourthClass' : S023R3?.length == 4,
// //     'fifthClass' : S023R3?.length == 5              
// //  }" class="slotContainer" [class.fourtyFeetContainerClass]="CheckFourtyFeet(S023R3)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S023R3?.length != 0? S023R3?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S023R2)" [ngClass]="{
// //     'secondClass' : S023R2?.length == 2,
// //     'zeroClass' : S023R2?.length == 0,
// //     'firstClass' : S023R2?.length == 1,
// //     'thirdClass' : S023R2?.length == 3,
// //     'fourthClass' : S023R2?.length == 4,
// //     'fifthClass' : S023R2?.length == 5
// //  }" class="slotContainer" [class.fourtyFeetContainerClass]="CheckFourtyFeet(S023R2)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S023R2?.length != 0? S023R2?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S023R1)" [ngClass]="{
// //                                             'zeroClass' : S023R1?.length == 0,
// //                                             'firstClass' : S023R1?.length == 1,
// //                                             'secondClass' : S023R1?.length == 2,
// //                                             'thirdClass' : S023R1?.length == 3,
// //                                             'fourthClass' : S023R1?.length == 4,
// //                                             'fifthClass' : S023R1?.length == 5              
// //                                          }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S023R1)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S023R1?.length != 0? S023R1?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>






// //                     </div>
// //                     <!-- S025 -->
// //                     <div fxLayout="row" fxLayoutAlign="center start">
// //                         <div fxFlex style="height: 60px;" class="pr-16" fxLayoutAlign="start center">
// //                             <div class="pbdiv-16">
// //                                 <div class="font-size-16  line-height-1 mt-8" style="text-align: center; color: black">
// //                                     S025
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S025R7)" [ngClass]="{
// //                             'secondClass' : S025R7?.length == 2,
// //                             'zeroClass' : S025R7?.length == 0,
// //                             'firstClass' : S025R7?.length == 1,
// //                             'thirdClass' : S025R7?.length == 3,
// //                             'fourthClass' : S025R7?.length == 4,
// //                             'fifthClass' : S025R7?.length == 5
// //                          }" class="" fxLayoutAlign="center end">
// //                             <div class="">
// //                                 <div class="">
// //                                     <!-- {{S025R7?.length != 0? S025R7?.length:''}} -->
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S025R6)" [ngClass]="{
// //                 'secondClass' : S025R6?.length == 2,
// //                 'zeroClass' : S025R6?.length == 0,
// //                 'firstClass' : S025R6?.length == 1,
// //                 'thirdClass' : S025R6?.length == 3,
// //                 'fourthClass' : S025R6?.length == 4,
// //                 'fifthClass' : S025R6?.length == 5
// //              }" class="slotContainer" [class.fourtyFeetContainerClass]="CheckFourtyFeet(S025R6)"
// //                             fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S025R6?.length != 0? S025R6?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S025R5)" [ngClass]="{
// //         'zeroClass' : S025R5?.length == 0,
// //         'firstClass' : S025R5?.length == 1,
// //         'secondClass' : S025R5?.length == 2,
// //         'thirdClass' : S025R5?.length == 3,
// //         'fourthClass' : S025R5?.length == 4,
// //         'fifthClass' : S025R5?.length == 5              
// //      }" class="slotContainer" [class.fourtyFeetContainerClass]="CheckFourtyFeet(S025R5)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S025R5?.length != 0? S025R5?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S025R4)" [ngClass]="{
// //     'secondClass' : S025R4?.length == 2,
// //     'zeroClass' : S025R4?.length == 0,
// //     'firstClass' : S025R4?.length == 1,
// //     'thirdClass' : S025R4?.length == 3,
// //     'fourthClass' : S025R4?.length == 4,
// //     'fifthClass' : S025R4?.length == 5
// //  }" class="slotContainer" [class.fourtyFeetContainerClass]="CheckFourtyFeet(S025R4)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S025R4?.length != 0? S025R4?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S025R3)" [ngClass]="{
// //     'zeroClass' : S025R3?.length == 0,
// //     'firstClass' : S025R3?.length == 1,
// //     'secondClass' : S025R3?.length == 2,
// //     'thirdClass' : S025R3?.length == 3,
// //     'fourthClass' : S025R3?.length == 4,
// //     'fifthClass' : S025R3?.length == 5              
// //  }" class="slotContainer" [class.fourtyFeetContainerClass]="CheckFourtyFeet(S025R3)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S025R3?.length != 0? S025R3?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S025R2)" [ngClass]="{
// //     'secondClass' : S025R2?.length == 2,
// //     'zeroClass' : S025R2?.length == 0,
// //     'firstClass' : S025R2?.length == 1,
// //     'thirdClass' : S025R2?.length == 3,
// //     'fourthClass' : S025R2?.length == 4,
// //     'fifthClass' : S025R2?.length == 5
// //  }" class="slotContainer" [class.fourtyFeetContainerClass]="CheckFourtyFeet(S025R2)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S025R2?.length != 0? S025R2?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S025R1)" [ngClass]="{
// //                                             'zeroClass' : S025R1?.length == 0,
// //                                             'firstClass' : S025R1?.length == 1,
// //                                             'secondClass' : S025R1?.length == 2,
// //                                             'thirdClass' : S025R1?.length == 3,
// //                                             'fourthClass' : S025R1?.length == 4,
// //                                             'fifthClass' : S025R1?.length == 5              
// //                                          }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S025R1)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S025R1?.length != 0? S025R1?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>






// //                     </div>
// //                     <!-- S027 -->
// //                     <div fxLayout="row" fxLayoutAlign="center start">
// //                         <div fxFlex style="height: 60px;" class="pr-16" fxLayoutAlign="start center">
// //                             <div class="pbdiv-16">
// //                                 <div class="font-size-16  line-height-1 mt-8" style="text-align: center; color: black">
// //                                     S027
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S027R7)" [ngClass]="{
// //                             'secondClass' : S027R7?.length == 2,
// //                             'zeroClass' : S027R7?.length == 0,
// //                             'firstClass' : S027R7?.length == 1,
// //                             'thirdClass' : S027R7?.length == 3,
// //                             'fourthClass' : S027R7?.length == 4,
// //                             'fifthClass' : S027R7?.length == 5
// //                          }" class="" fxLayoutAlign="center end">
// //                             <div class="">
// //                                 <div class="">
// //                                     <!-- {{S027R7?.length != 0? S027R7?.length:''}} -->
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S027R6)" [ngClass]="{
// //                 'secondClass' : S027R6?.length == 2,
// //                 'zeroClass' : S027R6?.length == 0,
// //                 'firstClass' : S027R6?.length == 1,
// //                 'thirdClass' : S027R6?.length == 3,
// //                 'fourthClass' : S027R6?.length == 4,
// //                 'fifthClass' : S027R6?.length == 5
// //              }" class="" fxLayoutAlign="center end">
// //                             <div class="">
// //                                 <div class="">
// //                                     <!-- {{S027R6?.length != 0? S027R6?.length:''}} -->
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S027R5)" [ngClass]="{
// //         'zeroClass' : S027R5?.length == 0,
// //         'firstClass' : S027R5?.length == 1,
// //         'secondClass' : S027R5?.length == 2,
// //         'thirdClass' : S027R5?.length == 3,
// //         'fourthClass' : S027R5?.length == 4,
// //         'fifthClass' : S027R5?.length == 5              
// //      }" class="" fxLayoutAlign="center end">
// //                             <div class="">
// //                                 <div class="">
// //                                     <!-- {{S027R5?.length != 0? S027R5?.length:''}} -->
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S027R4)" [ngClass]="{
// //     'secondClass' : S027R4?.length == 2,
// //     'zeroClass' : S027R4?.length == 0,
// //     'firstClass' : S027R4?.length == 1,
// //     'thirdClass' : S027R4?.length == 3,
// //     'fourthClass' : S027R4?.length == 4,
// //     'fifthClass' : S027R4?.length == 5
// //  }" class="slotContainer" [class.fourtyFeetContainerClass]="CheckFourtyFeet(S027R4)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S027R4?.length != 0? S027R4?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S027R3)" [ngClass]="{
// //     'zeroClass' : S027R3?.length == 0,
// //     'firstClass' : S027R3?.length == 1,
// //     'secondClass' : S027R3?.length == 2,
// //     'thirdClass' : S027R3?.length == 3,
// //     'fourthClass' : S027R3?.length == 4,
// //     'fifthClass' : S027R3?.length == 5              
// //  }" class="slotContainer" [class.fourtyFeetContainerClass]="CheckFourtyFeet(S027R3)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S027R3?.length != 0? S027R3?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S027R2)" [ngClass]="{
// //     'secondClass' : S027R2?.length == 2,
// //     'zeroClass' : S027R2?.length == 0,
// //     'firstClass' : S027R2?.length == 1,
// //     'thirdClass' : S027R2?.length == 3,
// //     'fourthClass' : S027R2?.length == 4,
// //     'fifthClass' : S027R2?.length == 5
// //  }" class="slotContainer" [class.fourtyFeetContainerClass]="CheckFourtyFeet(S027R2)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S027R2?.length != 0? S027R2?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S027R1)" [ngClass]="{
// //                                             'zeroClass' : S027R1?.length == 0,
// //                                             'firstClass' : S027R1?.length == 1,
// //                                             'secondClass' : S027R1?.length == 2,
// //                                             'thirdClass' : S027R1?.length == 3,
// //                                             'fourthClass' : S027R1?.length == 4,
// //                                             'fifthClass' : S027R1?.length == 5              
// //                                          }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S027R1)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S027R1?.length != 0? S027R1?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>






// //                     </div>
// //                     <!-- S029 -->
// //                     <div fxLayout="row" fxLayoutAlign="center start">
// //                         <div fxFlex style="height: 60px;" class="pr-16" fxLayoutAlign="start center">
// //                             <div class="pbdiv-16">
// //                                 <div class="font-size-16  line-height-1 mt-8" style="text-align: center; color: black">
// //                                     S029
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S029R7)" [ngClass]="{
// //                             'secondClass' : S029R7?.length == 2,
// //                             'zeroClass' : S029R7?.length == 0,
// //                             'firstClass' : S029R7?.length == 1,
// //                             'thirdClass' : S029R7?.length == 3,
// //                             'fourthClass' : S029R7?.length == 4,
// //                             'fifthClass' : S029R7?.length == 5
// //                          }" class="" fxLayoutAlign="center end">
// //                             <div class="">
// //                                 <div class="">
// //                                     <!-- {{S029R7?.length != 0? S029R7?.length:''}} -->
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S029R6)" [ngClass]="{
// //                 'secondClass' : S029R6?.length == 2,
// //                 'zeroClass' : S029R6?.length == 0,
// //                 'firstClass' : S029R6?.length == 1,
// //                 'thirdClass' : S029R6?.length == 3,
// //                 'fourthClass' : S029R6?.length == 4,
// //                 'fifthClass' : S029R6?.length == 5
// //              }" class="" fxLayoutAlign="center end">
// //                             <div class="">
// //                                 <div class="">
// //                                     <!-- {{S029R6?.length != 0? S029R6?.length:''}} -->
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S029R5)" [ngClass]="{
// //         'zeroClass' : S029R5?.length == 0,
// //         'firstClass' : S029R5?.length == 1,
// //         'secondClass' : S029R5?.length == 2,
// //         'thirdClass' : S029R5?.length == 3,
// //         'fourthClass' : S029R5?.length == 4,
// //         'fifthClass' : S029R5?.length == 5              
// //      }" class="" fxLayoutAlign="center end">
// //                             <div class="">
// //                                 <div class="">
// //                                     <!-- {{S029R5?.length != 0? S029R5?.length:''}} -->
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S029R4)" [ngClass]="{
// //     'secondClass' : S029R4?.length == 2,
// //     'zeroClass' : S029R4?.length == 0,
// //     'firstClass' : S029R4?.length == 1,
// //     'thirdClass' : S029R4?.length == 3,
// //     'fourthClass' : S029R4?.length == 4,
// //     'fifthClass' : S029R4?.length == 5
// //  }" class="slotContainer" [class.fourtyFeetContainerClass]="CheckFourtyFeet(S029R4)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S029R4?.length != 0? S029R4?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S029R3)" [ngClass]="{
// //     'zeroClass' : S029R3?.length == 0,
// //     'firstClass' : S029R3?.length == 1,
// //     'secondClass' : S029R3?.length == 2,
// //     'thirdClass' : S029R3?.length == 3,
// //     'fourthClass' : S029R3?.length == 4,
// //     'fifthClass' : S029R3?.length == 5              
// //  }" class="slotContainer" [class.fourtyFeetContainerClass]="CheckFourtyFeet(S029R3)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S029R3?.length != 0? S029R3?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S029R2)" [ngClass]="{
// //     'secondClass' : S029R2?.length == 2,
// //     'zeroClass' : S029R2?.length == 0,
// //     'firstClass' : S029R2?.length == 1,
// //     'thirdClass' : S029R2?.length == 3,
// //     'fourthClass' : S029R2?.length == 4,
// //     'fifthClass' : S029R2?.length == 5
// //  }" class="slotContainer" [class.fourtyFeetContainerClass]="CheckFourtyFeet(S029R2)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S029R2?.length != 0? S029R2?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S029R1)" [ngClass]="{
// //                                             'zeroClass' : S029R1?.length == 0,
// //                                             'firstClass' : S029R1?.length == 1,
// //                                             'secondClass' : S029R1?.length == 2,
// //                                             'thirdClass' : S029R1?.length == 3,
// //                                             'fourthClass' : S029R1?.length == 4,
// //                                             'fifthClass' : S029R1?.length == 5              
// //                                          }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S029R1)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S029R1?.length != 0? S029R1?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>






// //                     </div>
// //                     <!-- S031 -->
// //                     <div fxLayout="row" fxLayoutAlign="center start">
// //                         <div fxFlex style="height: 60px;" class="pr-16" fxLayoutAlign="start center">
// //                             <div class="pbdiv-16">
// //                                 <div class="font-size-16  line-height-1 mt-8" style="text-align: center; color: black">
// //                                     S031
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S031R7)" [ngClass]="{
// //                             'secondClass' : S031R7?.length == 2,
// //                             'zeroClass' : S031R7?.length == 0,
// //                             'firstClass' : S031R7?.length == 1,
// //                             'thirdClass' : S031R7?.length == 3,
// //                             'fourthClass' : S031R7?.length == 4,
// //                             'fifthClass' : S031R7?.length == 5
// //                          }" class="slotContainer" [class.fourtyFeetContainerClass]="CheckFourtyFeet(S031R7)"
// //                             fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S031R7?.length != 0? S031R7?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S031R6)" [ngClass]="{
// //                     'secondClass' : S031R6?.length == 2,
// //                     'zeroClass' : S031R6?.length == 0,
// //                     'firstClass' : S031R6?.length == 1,
// //                     'thirdClass' : S031R6?.length == 3,
// //                     'fourthClass' : S031R6?.length == 4,
// //                     'fifthClass' : S031R6?.length == 5
// //                  }" class="slotContainer" [class.fourtyFeetContainerClass]="CheckFourtyFeet(S031R6)"
// //                             fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S031R6?.length != 0? S031R6?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S031R5)" [ngClass]="{
// //                 'zeroClass' : S031R5?.length == 0,
// //                 'firstClass' : S031R5?.length == 1,
// //                 'secondClass' : S031R5?.length == 2,
// //                 'thirdClass' : S031R5?.length == 3,
// //                 'fourthClass' : S031R5?.length == 4,
// //                 'fifthClass' : S031R5?.length == 5              
// //              }" class="slotContainer" [class.fourtyFeetContainerClass]="CheckFourtyFeet(S031R5)"
// //                             fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S031R5?.length != 0? S031R5?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S031R4)" [ngClass]="{
// //             'secondClass' : S031R4?.length == 2,
// //             'zeroClass' : S031R4?.length == 0,
// //             'firstClass' : S031R4?.length == 1,
// //             'thirdClass' : S031R4?.length == 3,
// //             'fourthClass' : S031R4?.length == 4,
// //             'fifthClass' : S031R4?.length == 5
// //          }" class="slotContainer" [class.fourtyFeetContainerClass]="CheckFourtyFeet(S031R4)"
// //                             fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S031R4?.length != 0? S031R4?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S031R3)" [ngClass]="{
// //     'zeroClass' : S031R3?.length == 0,
// //     'firstClass' : S031R3?.length == 1,
// //     'secondClass' : S031R3?.length == 2,
// //     'thirdClass' : S031R3?.length == 3,
// //     'fourthClass' : S031R3?.length == 4,
// //     'fifthClass' : S031R3?.length == 5              
// //  }" class="slotContainer" [class.fourtyFeetContainerClass]="CheckFourtyFeet(S031R3)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S031R3?.length != 0? S031R3?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S031R2)" [ngClass]="{
// //     'secondClass' : S031R2?.length == 2,
// //     'zeroClass' : S031R2?.length == 0,
// //     'firstClass' : S031R2?.length == 1,
// //     'thirdClass' : S031R2?.length == 3,
// //     'fourthClass' : S031R2?.length == 4,
// //     'fifthClass' : S031R2?.length == 5
// //  }" class="slotContainer" [class.fourtyFeetContainerClass]="CheckFourtyFeet(S031R2)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S031R2?.length != 0? S031R2?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div fxFlex (click)="loadSelectedContainer(S031R1)" [ngClass]="{
// //                                         'zeroClass' : S031R1?.length == 0,
// //                                         'firstClass' : S031R1?.length == 1,
// //                                         'secondClass' : S031R1?.length == 2,
// //                                         'thirdClass' : S031R1?.length == 3,
// //                                         'fourthClass' : S031R1?.length == 4,
// //                                         'fifthClass' : S031R1?.length == 5              
// //                                      }" class="slotContainer"
// //                             [class.fourtyFeetContainerClass]="CheckFourtyFeet(S031R1)" fxLayoutAlign="center end">
// //                             <div class="pbdiv-16">
// //                                 <div class="slot">
// //                                     {{S031R1?.length != 0? S031R1?.length:''}}
// //                                 </div>
// //                             </div>
// //                         </div>






// //                     </div>
// //                 </div>
// //             </div>
// //         </div>
// //         <!-- </div> -->
// //         <!-- <div fxFlex >
// //                         <div class="" >
// //                             <img src="/assets/images/backgrounds/dashBackgroundPart3.png" alt="">
// //                         </div>
// //                     </div> -->
// //         <!-- </div> -->
// //         <!-- </div> -->
// //         <!-- </div> -->
// //     </div>

// //     <div class="contentForContent" *ngIf="tableShow">
// //         <div class="left">
// //             <h3 style="cursor:pointer; color:blue;margin-left: 5px;" (click)="goBackToDashboard()">
// //                 {{'dash.Go_Back_To_Dashboard' | translate}}</h3>
// //             <mat-card style="padding: 10px 24px 10px 24px">
// //                 <mat-card-content *ngIf="commonTableShow">
// //                     <div fxLayout="row">
// //                         <div fxFlex="50">
// //                             <h1 style="float:left; margin-left: 10px;">{{tableShowName}}</h1>
// //                         </div>
// //                         <!-- <form style="padding: 2px 10px 2px 10px" class="" autocomplete="off" fxLayout="column"
// //                             fxLayoutAlign="start" fxFlex="1 0 auto" name="form" [formGroup]="commonFilterFormGroup"
// //                             novalidate>
// //                             <div class="" fxLayout="row" fxLayoutAlign="space-between center" fxFlex="1 0 auto">
    
// //                                 <mat-form-field color="accent" class=" px-16 py-4  formField">
// //                                     <mat-label>From date</mat-label>
// //                                     <input matInput [matDatepicker]="picker1" formControlName="FROMDATE">
// //                                     <mat-datepicker-toggle matSuffix [for]="picker1"></mat-datepicker-toggle>
// //                                     <mat-datepicker #picker1></mat-datepicker>
// //                                     <mat-error
// //                                         *ngIf="commonFilterFormGroup.get('FROMDATE').touched && commonFilterFormGroup.get('FROMDATE').hasError('required')">
// //                                         From date is required
// //                                     </mat-error>
// //                                 </mat-form-field>
    
// //                                 <mat-form-field color="accent" class="px-16 py-4 formField">
// //                                     <mat-label>To Date</mat-label>
// //                                     <input matInput [matDatepicker]="picker2" formControlName="TODATE">
// //                                     <mat-datepicker-toggle matSuffix [for]="picker2"></mat-datepicker-toggle>
// //                                     <mat-datepicker #picker2 color="primary"></mat-datepicker>
// //                                     <mat-error
// //                                         *ngIf="commonFilterFormGroup.get('TODATE').touched && commonFilterFormGroup.get('TODATE').hasError('required')">
// //                                         To date is required
// //                                     </mat-error>
// //                                 </mat-form-field>
                                
// //                                     <mat-form-field class=" px-16 py-4  formField">
// //                                         <mat-select placeholder="Select Vehicle No" formControlName="VEHICLE_NO">
// //                                             <mat-option *ngFor="let vehicle of AllVehicleNos" [value]="vehicle">
// //                                                 {{vehicle}}
// //                                             </mat-option>
// //                                         </mat-select>
// //                                         <mat-error
// //                                             *ngIf="commonFilterFormGroup.get('VEHICLE_NO').touched && commonFilterFormGroup.get('VEHICLE_NO').hasError('required')">
// //                                             Vehicle No is required
// //                                         </mat-error>
// //                                     </mat-form-field>
    
// //                                 <button mat-raised-button color="accent" (click)="GetAllTransactionsBasedOnFilter()">Get
// //                                     Details</button>
// //                             </div>
// //                         </form> -->
// //                         <!-- <div fxFlex="20" style="padding-top:10px;">
// //                                 <button mat-raised-button color="accent" (click)="exportAsXLSX()">
// //                                     <mat-icon svgIcon="excel" aria-hidden="false" aria-label="Excel SVG icon">
// //                                     </mat-icon>Export XLSX
// //                                 </button>
// //                             </div> -->
// //                         <div fxFlex="50">
// //                             <mat-form-field style="width: 60%; float: right;">
// //                                 <input matInput (keyup)="applyCommonFilter($event.target.value)" placeholder="Search">
// //                             </mat-form-field>
// //                         </div>
// //                     </div>
// //                     <div fxLayout="column" class="mt-10">
// //                         <div flex class="mt-10">
// //                             <div class="data" #TABLE>
// //                                 <table class="table" mat-table [dataSource]="commonDataSource" matSort>

// //                                     <ng-container matColumnDef="BLE_ID">
// //                                         <th mat-header-cell *matHeaderCellDef mat-sort-header> BLE Id. </th>
// //                                         <td mat-cell *matCellDef="let element"> {{element.BLE_ID}} </td>
// //                                     </ng-container>

// //                                     <ng-container matColumnDef="CONTAINER_NO">
// //                                         <th mat-header-cell *matHeaderCellDef mat-sort-header>
// //                                             {{'dash.CONTAINER_NO' | translate}} </th>
// //                                         <td mat-cell *matCellDef="let element"> {{element.CONTAINER_NO}} </td>
// //                                     </ng-container>

// //                                     <ng-container matColumnDef="CONTAINER_SIZE">
// //                                         <th mat-header-cell *matHeaderCellDef mat-sort-header>
// //                                             {{'dash.CONTAINER_SIZE' | translate}}
// //                                         </th>
// //                                         <td mat-cell *matCellDef="let element"> {{element.CONTAINER_SIZE}} </td>
// //                                     </ng-container>

// //                                     <ng-container matColumnDef="CUSTOMER_NO">
// //                                         <th mat-header-cell *matHeaderCellDef mat-sort-header>
// //                                             {{'dash.CUSTOMER_NO' | translate}} </th>
// //                                         <td mat-cell *matCellDef="let element"> {{element.CUSTOMER_NO}} </td>
// //                                     </ng-container>

// //                                     <ng-container matColumnDef="CUSTOMER_NAME">
// //                                         <th mat-header-cell *matHeaderCellDef mat-sort-header>
// //                                             {{'dash.CUSTOMER_NAME' | translate}}
// //                                         </th>
// //                                         <td mat-cell *matCellDef="let element"> {{element.CUSTOMER_NAME}} </td>
// //                                     </ng-container>

// //                                     <ng-container matColumnDef="SALES_CONTRACT_NO">
// //                                         <th mat-header-cell *matHeaderCellDef mat-sort-header>
// //                                             {{'dash.SALES_CONTRACT_NO' | translate}}
// //                                         </th>
// //                                         <td mat-cell *matCellDef="let element"> {{element.SALES_CONTRACT_NO}} </td>
// //                                     </ng-container>

// //                                     <ng-container matColumnDef="BOOKING_REFERENCE">
// //                                         <th mat-header-cell *matHeaderCellDef mat-sort-header>
// //                                             {{'dash.BOOKING_REFERENCE' | translate}}
// //                                         </th>
// //                                         <td mat-cell *matCellDef="let element"> {{element.BOOKING_REFERENCE}} </td>
// //                                     </ng-container>

// //                                     <ng-container matColumnDef="LOCATION_ID">
// //                                         <th mat-header-cell *matHeaderCellDef mat-sort-header>
// //                                             {{'dash.LOCATION_ID' | translate}} </th>
// //                                         <td mat-cell *matCellDef="let element"> {{element.LOCATION_ID}} </td>
// //                                     </ng-container>


// //                                     <ng-container matColumnDef="CONTAINER_TYPE">
// //                                         <th mat-header-cell *matHeaderCellDef mat-sort-header>
// //                                             {{'dash.CONTAINER_TYPE' | translate}}
// //                                         </th>
// //                                         <td mat-cell *matCellDef="let element"> {{element.CONTAINER_TYPE}} </td>
// //                                     </ng-container>

// //                                     <ng-container matColumnDef="TYPE">
// //                                         <th mat-header-cell *matHeaderCellDef mat-sort-header>
// //                                             {{'dash.TYPE' | translate}} </th>
// //                                         <td mat-cell *matCellDef="let element"> {{element.TYPE}} </td>
// //                                     </ng-container>

// //                                     <ng-container matColumnDef="COLOR">
// //                                         <th mat-header-cell *matHeaderCellDef mat-sort-header>
// //                                             {{'dash.COLOR' | translate}} </th>
// //                                         <td mat-cell *matCellDef="let element">
// //                                             <p class="status text-truncate h6 p-4" style="width: 30px;"
// //                                                 [ngStyle]="{'background-color':element.COLOR}">

// //                                             </p>
// //                                         </td>
// //                                     </ng-container>

// //                                     <ng-container matColumnDef="IS_DAMAGE">
// //                                         <th mat-header-cell *matHeaderCellDef mat-sort-header>
// //                                             {{'dash.IS_DAMAGE' | translate}} </th>
// //                                         <td mat-cell *matCellDef="let element"> {{element.IS_DAMAGE}} </td>
// //                                     </ng-container>

// //                                     <ng-container matColumnDef="CLEAN_TYPE">
// //                                         <th mat-header-cell *matHeaderCellDef mat-sort-header>
// //                                             {{'dash.CLEAN_TYPE' | translate}} </th>
// //                                         <td mat-cell *matCellDef="let element"> {{element.CLEAN_TYPE}} </td>
// //                                     </ng-container>

// //                                     <tr mat-header-row *matHeaderRowDef="commonDisplayedColumns;sticky: true"></tr>
// //                                     <tr mat-row *matRowDef="let row; columns: commonDisplayedColumns;" matRipple
// //                                         style=" cursor: pointer;"></tr>
// //                                 </table>
// //                             </div>
// //                         </div>
// //                         <div flex>
// //                             <mat-paginator [pageSizeOptions]="[10, 20, 30]" showFirstLastButtons></mat-paginator>
// //                         </div>
// //                     </div>
// //                 </mat-card-content>
// //                 <mat-card-content *ngIf="exceptionTableShow">
// //                     <div fxLayout="row">
// //                         <div fxFlex="40">
// //                             <h1 style="float:left; margin-left: 10px;">{{tableShowName}}</h1>
// //                         </div>
// //                         <!-- <div fxFlex="20" style="padding-top:10px;">
// //                                 <button mat-raised-button color="accent" (click)="exportAsXLSX()">
// //                                     <mat-icon svgIcon="excel" aria-hidden="false" aria-label="Excel SVG icon">
// //                                     </mat-icon>Export XLSX
// //                                 </button>
// //                             </div> -->
// //                         <div fxFlex="60">
// //                             <mat-form-field style="width: 50%; float: right;">
// //                                 <input matInput (keyup)="applyExceptionFilter($event.target.value)"
// //                                     placeholder="Search">
// //                             </mat-form-field>
// //                         </div>
// //                     </div>
// //                     <div fxLayout="column" class="mt-10">
// //                         <div flex class="mt-10">
// //                             <div class="data" #TABLE>
// //                                 <table class="table" mat-table [dataSource]="exceptionDataSource" matSort>

// //                                     <ng-container matColumnDef="CONTAINER_NO">
// //                                         <th mat-header-cell *matHeaderCellDef mat-sort-header>
// //                                             {{'dash.CONTAINER_NO' | translate}} </th>
// //                                         <td mat-cell *matCellDef="let element"> {{element.CONTAINER_NO}} </td>
// //                                     </ng-container>

// //                                     <ng-container matColumnDef="CONTAINER_SIZE">
// //                                         <th mat-header-cell *matHeaderCellDef mat-sort-header>
// //                                             {{'dash.CONTAINER_SIZE' | translate}}
// //                                         </th>
// //                                         <td mat-cell *matCellDef="let element"> {{element.CONTAINER_SIZE}} </td>
// //                                     </ng-container>

// //                                     <ng-container matColumnDef="LOCATION_ID">
// //                                         <th mat-header-cell *matHeaderCellDef mat-sort-header>
// //                                             {{'dash.LOCATION_ID' | translate}} </th>
// //                                         <td mat-cell *matCellDef="let element"> {{element.LOCATION_ID}} </td>
// //                                     </ng-container>

// //                                     <ng-container matColumnDef="RGATEWAY_ID">
// //                                         <th mat-header-cell *matHeaderCellDef mat-sort-header>
// //                                             {{'dash.RGATEWAY_ID' | translate}}
// //                                         </th>
// //                                         <td mat-cell *matCellDef="let element"> {{element.RGATEWAY_ID}} </td>
// //                                     </ng-container>

// //                                     <ng-container matColumnDef="CUSTOMER_NO">
// //                                         <th mat-header-cell *matHeaderCellDef mat-sort-header>
// //                                             {{'dash.CUSTOMER_NO' | translate}} </th>
// //                                         <td mat-cell *matCellDef="let element"> {{element.CUSTOMER_NO}} </td>
// //                                     </ng-container>

// //                                     <ng-container matColumnDef="CUSTOMER_NAME">
// //                                         <th mat-header-cell *matHeaderCellDef mat-sort-header>
// //                                             {{'dash.CUSTOMER_NAME' | translate}}
// //                                         </th>
// //                                         <td mat-cell *matCellDef="let element"> {{element.CUSTOMER_NAME}} </td>
// //                                     </ng-container>



// //                                     <!-- <ng-container matColumnDef="CUSTOMER_NO">
// //                                         <th mat-header-cell *matHeaderCellDef mat-sort-header> Customer No </th>
// //                                         <td mat-cell *matCellDef="let element"> {{element.CUSTOMER_NO}} </td>
// //                                     </ng-container>
                
// //                                     <ng-container matColumnDef="CUSTOMER_NAME">
// //                                         <th mat-header-cell *matHeaderCellDef mat-sort-header> Customer Name </th>
// //                                         <td mat-cell *matCellDef="let element"> {{element.CUSTOMER_NAME}} </td>
// //                                     </ng-container>
                
// //                                     <ng-container matColumnDef="SALES_CONTRACT_NO">
// //                                         <th mat-header-cell *matHeaderCellDef mat-sort-header> Sales Contract No </th>
// //                                         <td mat-cell *matCellDef="let element"> {{element.SALES_CONTRACT_NO}} </td>
// //                                     </ng-container> -->

// //                                     <!-- 
// //                                     <ng-container matColumnDef="BOOKING_REFERENCE">
// //                                         <th mat-header-cell *matHeaderCellDef mat-sort-header> Booking Ref No </th>
// //                                         <td mat-cell *matCellDef="let element"> {{element.BOOKING_REFERENCE}} </td>
// //                                     </ng-container> -->

// //                                     <ng-container matColumnDef="EXCEPTION_MESSAGE">
// //                                         <th mat-header-cell *matHeaderCellDef mat-sort-header>
// //                                             {{'dash.EXCEPTION_MESSAGE' | translate}}
// //                                         </th>
// //                                         <td mat-cell *matCellDef="let element">
// //                                             {{element.EXCEPTION_MESSAGE? element.EXCEPTION_MESSAGE:'No Response from Gateway'}}
// //                                         </td>
// //                                     </ng-container>


// //                                     <tr mat-header-row *matHeaderRowDef="exceptionDisplayedColumns;sticky: true"></tr>
// //                                     <tr mat-row *matRowDef="let row; columns: exceptionDisplayedColumns;" matRipple>
// //                                     </tr>
// //                                 </table>
// //                             </div>
// //                         </div>
// //                         <div flex>
// //                             <mat-paginator [pageSizeOptions]="[10, 20, 30]" showFirstLastButtons></mat-paginator>
// //                         </div>
// //                     </div>
// //                 </mat-card-content>
// //             </mat-card>
// //         </div>
// //     </div>
// // </div>

// import { Component, OnInit, ViewEncapsulation, ViewChild, ɵConsole } from '@angular/core';
// import { fuseAnimations } from '@fuse/animations';
// import { AuthenticationDetails } from 'app/models/authentication_details';
// import { NotificationSnackBarComponent } from 'app/notifications/notification-snack-bar/notification-snack-bar.component';
// import { MatSnackBar, MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
// import { Router } from '@angular/router';
// import { TransactionDetails, TransactionDetailsByLocationID } from 'app/models/transaction-details';
// import { DashboardService } from 'app/services/dashboard.service';
// import { SnackBarStatus } from 'app/notifications/snackbar-status-enum';
// import { Guid } from 'guid-typescript';
// import { TranslateService, TranslatePipe } from '@ngx-translate/core';
// @Component({
//   selector: 'app-dashboard',
//   templateUrl: './dashboard.component.html',
//   styleUrls: ['./dashboard.component.scss'],
//   encapsulation: ViewEncapsulation.None,
//   animations: fuseAnimations
// })
// export class DashboardComponent implements OnInit {
//   AllTransactionDetails: TransactionDetails[] = [];
//   AllExceptionDetails: TransactionDetails[] = [];
//   AllCompletedTransactionDetails: TransactionDetails[] = [];
//   LastTransactionDetails: TransactionDetails;
//   AllTransactionDetailsByLocationID: TransactionDetailsByLocationID[] = [];
//   SelectedTransactionDeatils: TransactionDetails;
//   authenticationDetails: AuthenticationDetails;
//   notificationSnackBarComponent: NotificationSnackBarComponent;
//   IsProgressBarVisibile: boolean;
//   SetIntervalID: any;
//   parkingCount: any;
//   totalTransactionDetailsCount: number;
//   exceptionDetailsCount: number;
//   completedTransactionsCount: number;
//   availableSpaceCount: string;
//   diagramShow = true;
//   tableShow = false;
//   tableShowName: string;
//   exceptionTableShow = false;
//   commonTableShow = false;

//   S001R1: TransactionDetailsByLocationID[];
//   S003R1: TransactionDetailsByLocationID[];
//   S005R1: TransactionDetailsByLocationID[];
//   S007R1: TransactionDetailsByLocationID[];
//   S009R1: TransactionDetailsByLocationID[];
//   S011R1: TransactionDetailsByLocationID[];
//   S013R1: TransactionDetailsByLocationID[];
//   S015R1: TransactionDetailsByLocationID[];
//   S017R1: TransactionDetailsByLocationID[];
//   S019R1: TransactionDetailsByLocationID[];

//   S001R2: TransactionDetailsByLocationID[];
//   S003R2: TransactionDetailsByLocationID[];
//   S005R2: TransactionDetailsByLocationID[];
//   S007R2: TransactionDetailsByLocationID[];
//   S009R2: TransactionDetailsByLocationID[];
//   S011R2: TransactionDetailsByLocationID[];
//   S013R2: TransactionDetailsByLocationID[];
//   S015R2: TransactionDetailsByLocationID[];
//   S017R2: TransactionDetailsByLocationID[];
//   S019R2: TransactionDetailsByLocationID[];

//   S001R3: TransactionDetailsByLocationID[];
//   S003R3: TransactionDetailsByLocationID[];
//   S005R3: TransactionDetailsByLocationID[];
//   S007R3: TransactionDetailsByLocationID[];
//   S009R3: TransactionDetailsByLocationID[];
//   S011R3: TransactionDetailsByLocationID[];
//   S013R3: TransactionDetailsByLocationID[];
//   S015R3: TransactionDetailsByLocationID[];
//   S017R3: TransactionDetailsByLocationID[];
//   S019R3: TransactionDetailsByLocationID[];

//   S001R4: TransactionDetailsByLocationID[];
//   S003R4: TransactionDetailsByLocationID[];
//   S005R4: TransactionDetailsByLocationID[];
//   S007R4: TransactionDetailsByLocationID[];
//   S009R4: TransactionDetailsByLocationID[];
//   S011R4: TransactionDetailsByLocationID[];
//   S013R4: TransactionDetailsByLocationID[];
//   S015R4: TransactionDetailsByLocationID[];
//   S017R4: TransactionDetailsByLocationID[];
//   S019R4: TransactionDetailsByLocationID[];

//   S021R1: TransactionDetailsByLocationID[];
//   S023R1: TransactionDetailsByLocationID[];
//   S025R1: TransactionDetailsByLocationID[];
//   S027R1: TransactionDetailsByLocationID[];
//   S029R1: TransactionDetailsByLocationID[];
//   S031R1: TransactionDetailsByLocationID[];
//   S033R1: TransactionDetailsByLocationID[];
//   S035R1: TransactionDetailsByLocationID[];
//   S037R1: TransactionDetailsByLocationID[];
//   S039R1: TransactionDetailsByLocationID[];

//   S021R2: TransactionDetailsByLocationID[];
//   S023R2: TransactionDetailsByLocationID[];
//   S025R2: TransactionDetailsByLocationID[];
//   S027R2: TransactionDetailsByLocationID[];
//   S029R2: TransactionDetailsByLocationID[];
//   S031R2: TransactionDetailsByLocationID[];
//   S033R2: TransactionDetailsByLocationID[];
//   S035R2: TransactionDetailsByLocationID[];
//   S037R2: TransactionDetailsByLocationID[];
//   S039R2: TransactionDetailsByLocationID[];

//   S021R3: TransactionDetailsByLocationID[];
//   S023R3: TransactionDetailsByLocationID[];
//   S025R3: TransactionDetailsByLocationID[];
//   S027R3: TransactionDetailsByLocationID[];
//   S029R3: TransactionDetailsByLocationID[];
//   S031R3: TransactionDetailsByLocationID[];
//   S033R3: TransactionDetailsByLocationID[];
//   S035R3: TransactionDetailsByLocationID[];
//   S037R3: TransactionDetailsByLocationID[];
//   S039R3: TransactionDetailsByLocationID[];

//   S021R4: TransactionDetailsByLocationID[];
//   S023R4: TransactionDetailsByLocationID[];
//   S025R4: TransactionDetailsByLocationID[];
//   S027R4: TransactionDetailsByLocationID[];
//   S029R4: TransactionDetailsByLocationID[];
//   S031R4: TransactionDetailsByLocationID[];
//   S033R4: TransactionDetailsByLocationID[];
//   S035R4: TransactionDetailsByLocationID[];
//   S037R4: TransactionDetailsByLocationID[];
//   S039R4: TransactionDetailsByLocationID[];

//   S041R1: TransactionDetailsByLocationID[];
//   S043R1: TransactionDetailsByLocationID[];
//   S045R1: TransactionDetailsByLocationID[];
//   S047R1: TransactionDetailsByLocationID[];
//   S049R1: TransactionDetailsByLocationID[];
//   S051R1: TransactionDetailsByLocationID[];
//   S053R1: TransactionDetailsByLocationID[];
//   S055R1: TransactionDetailsByLocationID[];
//   S057R1: TransactionDetailsByLocationID[];
//   S059R1: TransactionDetailsByLocationID[];

//   S041R2: TransactionDetailsByLocationID[];
//   S043R2: TransactionDetailsByLocationID[];
//   S045R2: TransactionDetailsByLocationID[];
//   S047R2: TransactionDetailsByLocationID[];
//   S049R2: TransactionDetailsByLocationID[];
//   S051R2: TransactionDetailsByLocationID[];
//   S053R2: TransactionDetailsByLocationID[];
//   S055R2: TransactionDetailsByLocationID[];
//   S057R2: TransactionDetailsByLocationID[];
//   S059R2: TransactionDetailsByLocationID[];

//   S041R3: TransactionDetailsByLocationID[];
//   S043R3: TransactionDetailsByLocationID[];
//   S045R3: TransactionDetailsByLocationID[];
//   S047R3: TransactionDetailsByLocationID[];
//   S049R3: TransactionDetailsByLocationID[];
//   S051R3: TransactionDetailsByLocationID[];
//   S053R3: TransactionDetailsByLocationID[];
//   S055R3: TransactionDetailsByLocationID[];
//   S057R3: TransactionDetailsByLocationID[];
//   S059R3: TransactionDetailsByLocationID[];

//   S041R4: TransactionDetailsByLocationID[];
//   S043R4: TransactionDetailsByLocationID[];
//   S045R4: TransactionDetailsByLocationID[];
//   S047R4: TransactionDetailsByLocationID[];
//   S049R4: TransactionDetailsByLocationID[];
//   S051R4: TransactionDetailsByLocationID[];
//   S053R4: TransactionDetailsByLocationID[];
//   S055R4: TransactionDetailsByLocationID[];
//   S057R4: TransactionDetailsByLocationID[];
//   S059R4: TransactionDetailsByLocationID[];

//   S061R1: TransactionDetailsByLocationID[];
//   S063R1: TransactionDetailsByLocationID[];
//   S065R1: TransactionDetailsByLocationID[];
//   S067R1: TransactionDetailsByLocationID[];
//   S069R1: TransactionDetailsByLocationID[];
//   S071R1: TransactionDetailsByLocationID[];
//   S073R1: TransactionDetailsByLocationID[];
//   S075R1: TransactionDetailsByLocationID[];
//   S077R1: TransactionDetailsByLocationID[];
//   S079R1: TransactionDetailsByLocationID[];

//   S061R2: TransactionDetailsByLocationID[];
//   S063R2: TransactionDetailsByLocationID[];
//   S065R2: TransactionDetailsByLocationID[];
//   S067R2: TransactionDetailsByLocationID[];
//   S069R2: TransactionDetailsByLocationID[];
//   S071R2: TransactionDetailsByLocationID[];
//   S073R2: TransactionDetailsByLocationID[];
//   S075R2: TransactionDetailsByLocationID[];
//   S077R2: TransactionDetailsByLocationID[];
//   S079R2: TransactionDetailsByLocationID[];

//   S061R3: TransactionDetailsByLocationID[];
//   S063R3: TransactionDetailsByLocationID[];
//   S065R3: TransactionDetailsByLocationID[];
//   S067R3: TransactionDetailsByLocationID[];
//   S069R3: TransactionDetailsByLocationID[];
//   S071R3: TransactionDetailsByLocationID[];
//   S073R3: TransactionDetailsByLocationID[];
//   S075R3: TransactionDetailsByLocationID[];
//   S077R3: TransactionDetailsByLocationID[];
//   S079R3: TransactionDetailsByLocationID[];

//   S061R4: TransactionDetailsByLocationID[];
//   S063R4: TransactionDetailsByLocationID[];
//   S065R4: TransactionDetailsByLocationID[];
//   S067R4: TransactionDetailsByLocationID[];
//   S069R4: TransactionDetailsByLocationID[];
//   S071R4: TransactionDetailsByLocationID[];
//   S073R4: TransactionDetailsByLocationID[];
//   S075R4: TransactionDetailsByLocationID[];
//   S077R4: TransactionDetailsByLocationID[];
//   S079R4: TransactionDetailsByLocationID[];

//   S001R5: TransactionDetailsByLocationID[];
//   S003R5: TransactionDetailsByLocationID[];
//   S005R5: TransactionDetailsByLocationID[];
//   S007R5: TransactionDetailsByLocationID[];
//   S009R5: TransactionDetailsByLocationID[];
//   S011R5: TransactionDetailsByLocationID[];
//   S013R5: TransactionDetailsByLocationID[];
//   S015R5: TransactionDetailsByLocationID[];
//   S017R5: TransactionDetailsByLocationID[];
//   S019R5: TransactionDetailsByLocationID[];
//   S021R5: TransactionDetailsByLocationID[];
//   S023R5: TransactionDetailsByLocationID[];
//   S025R5: TransactionDetailsByLocationID[];
//   S027R5: TransactionDetailsByLocationID[];
//   S029R5: TransactionDetailsByLocationID[];
//   S031R5: TransactionDetailsByLocationID[];
//   S033R5: TransactionDetailsByLocationID[];
//   S035R5: TransactionDetailsByLocationID[];
//   S037R5: TransactionDetailsByLocationID[];
//   S039R5: TransactionDetailsByLocationID[];
//   S041R5: TransactionDetailsByLocationID[];
//   S043R5: TransactionDetailsByLocationID[];
//   S045R5: TransactionDetailsByLocationID[];
//   S047R5: TransactionDetailsByLocationID[];
//   S049R5: TransactionDetailsByLocationID[];
//   S051R5: TransactionDetailsByLocationID[];
//   S053R5: TransactionDetailsByLocationID[];
//   S055R5: TransactionDetailsByLocationID[];
//   S057R5: TransactionDetailsByLocationID[];
//   S059R5: TransactionDetailsByLocationID[];
//   S061R5: TransactionDetailsByLocationID[];
//   S063R5: TransactionDetailsByLocationID[];
//   S065R5: TransactionDetailsByLocationID[];
//   S067R5: TransactionDetailsByLocationID[];
//   S069R5: TransactionDetailsByLocationID[];
//   S071R5: TransactionDetailsByLocationID[];
//   S073R5: TransactionDetailsByLocationID[];
//   S075R5: TransactionDetailsByLocationID[];
//   S077R5: TransactionDetailsByLocationID[];
//   S079R5: TransactionDetailsByLocationID[];

//   S001R6: TransactionDetailsByLocationID[];
//   S003R6: TransactionDetailsByLocationID[];
//   S005R6: TransactionDetailsByLocationID[];
//   S007R6: TransactionDetailsByLocationID[];
//   S009R6: TransactionDetailsByLocationID[];
//   S011R6: TransactionDetailsByLocationID[];
//   S013R6: TransactionDetailsByLocationID[];
//   S015R6: TransactionDetailsByLocationID[];
//   S017R6: TransactionDetailsByLocationID[];
//   S019R6: TransactionDetailsByLocationID[];
//   S021R6: TransactionDetailsByLocationID[];
//   S023R6: TransactionDetailsByLocationID[];
//   S025R6: TransactionDetailsByLocationID[];
//   S027R6: TransactionDetailsByLocationID[];
//   S029R6: TransactionDetailsByLocationID[];
//   S031R6: TransactionDetailsByLocationID[];
//   S033R6: TransactionDetailsByLocationID[];
//   S035R6: TransactionDetailsByLocationID[];
//   S037R6: TransactionDetailsByLocationID[];
//   S039R6: TransactionDetailsByLocationID[];
//   S041R6: TransactionDetailsByLocationID[];
//   S043R6: TransactionDetailsByLocationID[];
//   S045R6: TransactionDetailsByLocationID[];
//   S047R6: TransactionDetailsByLocationID[];
//   S049R6: TransactionDetailsByLocationID[];
//   S051R6: TransactionDetailsByLocationID[];
//   S053R6: TransactionDetailsByLocationID[];
//   S055R6: TransactionDetailsByLocationID[];
//   S057R6: TransactionDetailsByLocationID[];
//   S059R6: TransactionDetailsByLocationID[];
//   S061R6: TransactionDetailsByLocationID[];
//   S063R6: TransactionDetailsByLocationID[];
//   S065R6: TransactionDetailsByLocationID[];
//   S067R6: TransactionDetailsByLocationID[];
//   S069R6: TransactionDetailsByLocationID[];
//   S071R6: TransactionDetailsByLocationID[];
//   S073R6: TransactionDetailsByLocationID[];
//   S075R6: TransactionDetailsByLocationID[];
//   S077R6: TransactionDetailsByLocationID[];
//   S079R6: TransactionDetailsByLocationID[];

//   S001R7: TransactionDetailsByLocationID[];
//   S003R7: TransactionDetailsByLocationID[];
//   S005R7: TransactionDetailsByLocationID[];
//   S007R7: TransactionDetailsByLocationID[];
//   S009R7: TransactionDetailsByLocationID[];
//   S011R7: TransactionDetailsByLocationID[];
//   S013R7: TransactionDetailsByLocationID[];
//   S015R7: TransactionDetailsByLocationID[];
//   S017R7: TransactionDetailsByLocationID[];
//   S019R7: TransactionDetailsByLocationID[];
//   S021R7: TransactionDetailsByLocationID[];
//   S023R7: TransactionDetailsByLocationID[];
//   S025R7: TransactionDetailsByLocationID[];
//   S027R7: TransactionDetailsByLocationID[];
//   S029R7: TransactionDetailsByLocationID[];
//   S031R7: TransactionDetailsByLocationID[];
//   S033R7: TransactionDetailsByLocationID[];
//   S035R7: TransactionDetailsByLocationID[];
//   S037R7: TransactionDetailsByLocationID[];
//   S039R7: TransactionDetailsByLocationID[];
//   S041R7: TransactionDetailsByLocationID[];
//   S043R7: TransactionDetailsByLocationID[];
//   S045R7: TransactionDetailsByLocationID[];
//   S047R7: TransactionDetailsByLocationID[];
//   S049R7: TransactionDetailsByLocationID[];
//   S051R7: TransactionDetailsByLocationID[];
//   S053R7: TransactionDetailsByLocationID[];
//   S055R7: TransactionDetailsByLocationID[];
//   S057R7: TransactionDetailsByLocationID[];
//   S059R7: TransactionDetailsByLocationID[];
//   S061R7: TransactionDetailsByLocationID[];
//   S063R7: TransactionDetailsByLocationID[];
//   S065R7: TransactionDetailsByLocationID[];
//   S067R7: TransactionDetailsByLocationID[];
//   S069R7: TransactionDetailsByLocationID[];
//   S071R7: TransactionDetailsByLocationID[];
//   S073R7: TransactionDetailsByLocationID[];
//   S075R7: TransactionDetailsByLocationID[];
//   S077R7: TransactionDetailsByLocationID[];
//   S079R7: TransactionDetailsByLocationID[];

//   S081R1: TransactionDetailsByLocationID[];
//   S083R1: TransactionDetailsByLocationID[];
//   S085R1: TransactionDetailsByLocationID[];
//   S087R1: TransactionDetailsByLocationID[];
//   S089R1: TransactionDetailsByLocationID[];
//   S091R1: TransactionDetailsByLocationID[];
//   S093R1: TransactionDetailsByLocationID[];
//   S095R1: TransactionDetailsByLocationID[];
//   S097R1: TransactionDetailsByLocationID[];
//   S099R1: TransactionDetailsByLocationID[];
//   S101R1: TransactionDetailsByLocationID[];
//   S103R1: TransactionDetailsByLocationID[];

//   S081R2: TransactionDetailsByLocationID[];
//   S083R2: TransactionDetailsByLocationID[];
//   S085R2: TransactionDetailsByLocationID[];
//   S087R2: TransactionDetailsByLocationID[];
//   S089R2: TransactionDetailsByLocationID[];
//   S091R2: TransactionDetailsByLocationID[];
//   S093R2: TransactionDetailsByLocationID[];
//   S095R2: TransactionDetailsByLocationID[];
//   S097R2: TransactionDetailsByLocationID[];
//   S099R2: TransactionDetailsByLocationID[];
//   S101R2: TransactionDetailsByLocationID[];
//   S103R2: TransactionDetailsByLocationID[];

//   S081R3: TransactionDetailsByLocationID[];
//   S083R3: TransactionDetailsByLocationID[];
//   S085R3: TransactionDetailsByLocationID[];
//   S087R3: TransactionDetailsByLocationID[];
//   S089R3: TransactionDetailsByLocationID[];
//   S091R3: TransactionDetailsByLocationID[];
//   S093R3: TransactionDetailsByLocationID[];
//   S095R3: TransactionDetailsByLocationID[];
//   S097R3: TransactionDetailsByLocationID[];
//   S099R3: TransactionDetailsByLocationID[];
//   S101R3: TransactionDetailsByLocationID[];
//   S103R3: TransactionDetailsByLocationID[];

//   S081R4: TransactionDetailsByLocationID[];
//   S083R4: TransactionDetailsByLocationID[];
//   S085R4: TransactionDetailsByLocationID[];
//   S087R4: TransactionDetailsByLocationID[];
//   S089R4: TransactionDetailsByLocationID[];
//   S091R4: TransactionDetailsByLocationID[];
//   S093R4: TransactionDetailsByLocationID[];
//   S095R4: TransactionDetailsByLocationID[];
//   S097R4: TransactionDetailsByLocationID[];
//   S099R4: TransactionDetailsByLocationID[];
//   S101R4: TransactionDetailsByLocationID[];
//   S103R4: TransactionDetailsByLocationID[];

//   S081R5: TransactionDetailsByLocationID[];
//   S083R5: TransactionDetailsByLocationID[];
//   S085R5: TransactionDetailsByLocationID[];
//   S087R5: TransactionDetailsByLocationID[];
//   S089R5: TransactionDetailsByLocationID[];
//   S091R5: TransactionDetailsByLocationID[];
//   S093R5: TransactionDetailsByLocationID[];
//   S095R5: TransactionDetailsByLocationID[];
//   S097R5: TransactionDetailsByLocationID[];
//   S099R5: TransactionDetailsByLocationID[];
//   S101R5: TransactionDetailsByLocationID[];
//   S103R5: TransactionDetailsByLocationID[];

//   S081R6: TransactionDetailsByLocationID[];
//   S083R6: TransactionDetailsByLocationID[];
//   S085R6: TransactionDetailsByLocationID[];
//   S087R6: TransactionDetailsByLocationID[];
//   S089R6: TransactionDetailsByLocationID[];
//   S091R6: TransactionDetailsByLocationID[];
//   S093R6: TransactionDetailsByLocationID[];
//   S095R6: TransactionDetailsByLocationID[];
//   S097R6: TransactionDetailsByLocationID[];
//   S099R6: TransactionDetailsByLocationID[];
//   S101R6: TransactionDetailsByLocationID[];
//   S103R6: TransactionDetailsByLocationID[];

//   S081R7: TransactionDetailsByLocationID[];
//   S083R7: TransactionDetailsByLocationID[];
//   S085R7: TransactionDetailsByLocationID[];
//   S087R7: TransactionDetailsByLocationID[];
//   S089R7: TransactionDetailsByLocationID[];
//   S091R7: TransactionDetailsByLocationID[];
//   S093R7: TransactionDetailsByLocationID[];
//   S095R7: TransactionDetailsByLocationID[];
//   S097R7: TransactionDetailsByLocationID[];
//   S099R7: TransactionDetailsByLocationID[];
//   S101R7: TransactionDetailsByLocationID[];
//   S103R7: TransactionDetailsByLocationID[];

//   isException: boolean;
//   S007R1CONTAINERSIZE: string;
//   // tslint:disable-next-line:max-line-length
//   commonDisplayedColumns = ['BLE_ID', 'CONTAINER_NO', 'CONTAINER_SIZE', 'CUSTOMER_NO', 'CUSTOMER_NAME', 'SALES_CONTRACT_NO', 'LOCATION_ID', 'BOOKING_REFERENCE', 'CONTAINER_TYPE', 'TYPE', 'COLOR', 'IS_DAMAGE', 'CLEAN_TYPE'];
//   commonDataSource: MatTableDataSource<TransactionDetails>;
//   @ViewChild(MatPaginator) commonPaginator: MatPaginator;
//   @ViewChild(MatSort) commonSort: MatSort;


//   exceptionDisplayedColumns = ['CONTAINER_NO', 'CONTAINER_SIZE', 'LOCATION_ID', 'RGATEWAY_ID', 'CUSTOMER_NO', 'CUSTOMER_NAME', 'EXCEPTION_MESSAGE'];
//   exceptionDataSource: MatTableDataSource<TransactionDetails>;
//   @ViewChild(MatPaginator) exceptionPaginator: MatPaginator;
//   @ViewChild(MatSort) exceptionSort: MatSort;

//   constructor(
//     private _router: Router,
//     public snackBar: MatSnackBar,
//     private _dashboardService: DashboardService,
//   ) {
//     this.authenticationDetails = new AuthenticationDetails();
//     this.notificationSnackBarComponent = new NotificationSnackBarComponent(this.snackBar);
//     this.IsProgressBarVisibile = true;
//     // translate.addLangs(['en', 'fr']);
//     // translate.setDefaultLang('en');

//     // const browserLang = translate.getBrowserLang();
//     // translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
//   }
//   ngOnInit(): void {
//     // Retrive authorizationData
//     const retrievedObject = localStorage.getItem('authorizationData');
//     if (retrievedObject) {
//       this.authenticationDetails = JSON.parse(retrievedObject) as AuthenticationDetails;
//     } else {
//       this._router.navigate(['/auth/login']);
//     }
//     this.GetAllTransactionDetailsCount(this.authenticationDetails.userID);
//     this.GetAllExceptionDetailsCount(this.authenticationDetails.userID);
//     this.GetAllCompletedTransactionDetailsCount(this.authenticationDetails.userID);
//     this.GetLastTransactionDetails(this.authenticationDetails.userID);
//     this.GetAllTransactionDetailsByLocationID(this.authenticationDetails.userID);
//     this.SetIntervalID = setInterval(() => {
//       this.GetAllTransactionDetailsCount(this.authenticationDetails.userID);
//       this.GetAllExceptionDetailsCount(this.authenticationDetails.userID);
//       this.GetAllCompletedTransactionDetailsCount(this.authenticationDetails.userID);
//       this.GetLastTransactionDetails(this.authenticationDetails.userID);
//     }, 60000);
//   }

//   // tslint:disable-next-line:use-life-cycle-interface
//   ngOnDestroy(): void {
//     // Unsubscribe from all subscriptions
//     if (this.SetIntervalID) {
//       clearInterval(this.SetIntervalID);
//     }
//   }

//   // tslint:disable-next-line:typedef
//   applyCommonFilter(filterValue: string) {
//     this.commonDataSource.filter = filterValue.trim().toLowerCase();
//   }

//   // tslint:disable-next-line:typedef
//   applyExceptionFilter(filterValue: string) {
//     this.exceptionDataSource.filter = filterValue.trim().toLowerCase();
//   }

//   goBackToDashboard(): void {
//     this.diagramShow = true;
//     this.tableShow = false;
//   }

//   GetAllTransactionDetailsCount(ID: Guid): void {
//     this._dashboardService.GetAllTransactionDetailsCount(ID).subscribe(
//       (data) => {
//         this.totalTransactionDetailsCount = data as number;
//         this.IsProgressBarVisibile = false;
//       },
//       (err) => {
//         this.IsProgressBarVisibile = false;
//         this.notificationSnackBarComponent.openSnackBar(err instanceof Object ? 'Something went wrong' : err, SnackBarStatus.danger);
//       }
//     );
//   }

//   GetAllTransactionDetails(ID: Guid): void {
//     this._dashboardService.GetAllTransactionDetails(ID).subscribe(
//       (data) => {
//         this.AllTransactionDetails = data as TransactionDetails[];
//         this.commonDataSource = new MatTableDataSource(this.AllTransactionDetails);
//         this.commonDataSource.paginator = this.commonPaginator;
//         this.commonDataSource.sort = this.commonSort;
//         this.IsProgressBarVisibile = false;
//       },
//       (err) => {
//         this.IsProgressBarVisibile = false;
//         this.notificationSnackBarComponent.openSnackBar(err instanceof Object ? 'Something went wrong' : err, SnackBarStatus.danger);
//       }
//     );
//   }

//   GetLastTransactionDetails(ID: Guid): void {
//     this._dashboardService.GetLastTransactionDetails(ID).subscribe(
//       (data) => {
//         this.LastTransactionDetails = data as TransactionDetails;
//         if (this.LastTransactionDetails != null) {
//           this.availableSpaceCount = this.LastTransactionDetails.AVAILABLE_SPACE;
//           if (this.availableSpaceCount === null) {
//             this.availableSpaceCount = '0';
//           }
//         }
//         else {
//           this.availableSpaceCount = '0';
//         }

//       },
//       (err) => {
//         this.IsProgressBarVisibile = false;
//         this.notificationSnackBarComponent.openSnackBar(err instanceof Object ? 'Something went wrong' : err, SnackBarStatus.danger);
//       }
//     );
//   }

//   GetAllExceptionDetailsCount(ID: Guid): void {
//     this._dashboardService.GetAllExceptionDetailsCount(ID).subscribe(
//       (data) => {
//         this.exceptionDetailsCount = data as number;
//         console.log(this.exceptionDetailsCount);
//         this.IsProgressBarVisibile = false;
//       },
//       (err) => {
//         this.IsProgressBarVisibile = false;
//         this.notificationSnackBarComponent.openSnackBar(err instanceof Object ? 'Something went wrong' : err, SnackBarStatus.danger);
//       }
//     );
//   }

//   GetAllExceptionDetails(ID: Guid): void {
//     this._dashboardService.GetAllExceptionDetails(ID).subscribe(
//       (data) => {
//         this.AllExceptionDetails = data as TransactionDetails[];
//         this.exceptionDetailsCount = this.AllExceptionDetails.length;
//         this.exceptionDataSource = new MatTableDataSource(this.AllExceptionDetails);
//         this.exceptionDataSource.paginator = this.exceptionPaginator;
//         this.exceptionDataSource.sort = this.exceptionSort;
//         this.IsProgressBarVisibile = false;
//       },
//       (err) => {
//         this.IsProgressBarVisibile = false;
//         this.notificationSnackBarComponent.openSnackBar(err instanceof Object ? 'Something went wrong' : err, SnackBarStatus.danger);
//       }
//     );
//   }

//   GetAllCompletedTransactionDetailsCount(ID: Guid): void {
//     this._dashboardService.GetAllCompletedTransactionDetailsCount(ID).subscribe(
//       (data) => {
//         this.completedTransactionsCount = data as number;
//         console.log(this.completedTransactionsCount);
//         this.IsProgressBarVisibile = false;
//       },
//       (err) => {
//         this.IsProgressBarVisibile = false;
//         this.notificationSnackBarComponent.openSnackBar(err instanceof Object ? 'Something went wrong' : err, SnackBarStatus.danger);
//       }
//     );
//   }

//   GetAllCompletedTransactionDetails(ID: Guid): void {
//     this._dashboardService.GetAllCompletedTransactionDetails(ID).subscribe(
//       (data) => {
//         this.AllCompletedTransactionDetails = data as TransactionDetails[];
//         this.completedTransactionsCount = this.AllCompletedTransactionDetails.length;
//         this.commonDataSource = new MatTableDataSource(this.AllCompletedTransactionDetails);
//         this.commonDataSource.paginator = this.commonPaginator;
//         this.commonDataSource.sort = this.commonSort;
//         this.IsProgressBarVisibile = false;
//       },
//       (err) => {
//         this.IsProgressBarVisibile = false;
//         this.notificationSnackBarComponent.openSnackBar(err instanceof Object ? 'Something went wrong' : err, SnackBarStatus.danger);
//       }
//     );
//   }

//   GetAllTransactionDetailsByLocationID(ID: Guid): void {
//     this._dashboardService.GetAllTransactionDetailsByLocationID(ID).subscribe(
//       (data) => {
//         this.AllTransactionDetailsByLocationID = data as TransactionDetailsByLocationID[];
//                 // this.S007R1.forEach(x => {
//         //   this.S007R1CONTAINERSIZE = x.CONTAINER_SIZE;
//         // });
//         // this.S011R1.forEach(x => {
//         //   if(x.LOCATION_ID.match('S011R1'))
//         //   this.isException = true;
//         // })
//         this.S001R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S001R1') || x.LOCATION_ID.match('S002R1') || x.LOCATION_ID.match('S000R1'));
//         this.S003R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S003R1') || x.LOCATION_ID.match('S004R1') || x.LOCATION_ID.match('S002R1'));
//         this.S005R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S005R1') || x.LOCATION_ID.match('S006R1') || x.LOCATION_ID.match('S004R1'));
//         this.S007R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S007R1') || x.LOCATION_ID.match('S008R1') || x.LOCATION_ID.match('S006R1'));
//         this.S009R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S009R1') || x.LOCATION_ID.match('S010R1') || x.LOCATION_ID.match('S008R1'));
//         this.S011R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S011R1') || x.LOCATION_ID.match('S012R1') || x.LOCATION_ID.match('S010R1'));
//         this.S013R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S013R1') || x.LOCATION_ID.match('S014R1') || x.LOCATION_ID.match('S012R1'));
//         this.S015R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S015R1') || x.LOCATION_ID.match('S016R1') || x.LOCATION_ID.match('S014R1'));
//         this.S017R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S017R1') || x.LOCATION_ID.match('S018R1') || x.LOCATION_ID.match('S016R1'));
//         this.S019R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S019R1') || x.LOCATION_ID.match('S020R1') || x.LOCATION_ID.match('S018R1'));
//         this.S021R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S021R1') || x.LOCATION_ID.match('S022R1') || x.LOCATION_ID.match('S020R1'));
//         this.S023R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S023R1') || x.LOCATION_ID.match('S024R1') || x.LOCATION_ID.match('S022R1'));
//         this.S025R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S025R1') || x.LOCATION_ID.match('S026R1') || x.LOCATION_ID.match('S024R1'));
//         this.S027R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S027R1') || x.LOCATION_ID.match('S028R1') || x.LOCATION_ID.match('S026R1'));
//         this.S029R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S029R1') || x.LOCATION_ID.match('S030R1') || x.LOCATION_ID.match('S028R1'));
//         this.S031R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S031R1') || x.LOCATION_ID.match('S032R1') || x.LOCATION_ID.match('S030R1'));
//         this.S033R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S033R1') || x.LOCATION_ID.match('S034R1') || x.LOCATION_ID.match('S032R1'));
//         this.S035R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S035R1') || x.LOCATION_ID.match('S036R1') || x.LOCATION_ID.match('S034R1'));
//         this.S037R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S037R1') || x.LOCATION_ID.match('S038R1') || x.LOCATION_ID.match('S036R1'));
//         this.S039R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S039R1') || x.LOCATION_ID.match('S040R1') || x.LOCATION_ID.match('S038R1'));
//         this.S041R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S041R1') || x.LOCATION_ID.match('S042R1') || x.LOCATION_ID.match('S040R1'));
//         this.S043R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S043R1') || x.LOCATION_ID.match('S044R1') || x.LOCATION_ID.match('S042R1'));
//         this.S045R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S045R1') || x.LOCATION_ID.match('S046R1') || x.LOCATION_ID.match('S044R1'));
//         this.S047R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S047R1') || x.LOCATION_ID.match('S048R1') || x.LOCATION_ID.match('S046R1'));
//         this.S049R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S049R1') || x.LOCATION_ID.match('S050R1') || x.LOCATION_ID.match('S048R1'));
//         this.S051R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S051R1') || x.LOCATION_ID.match('S052R1') || x.LOCATION_ID.match('S050R1'));
//         this.S053R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S053R1') || x.LOCATION_ID.match('S054R1') || x.LOCATION_ID.match('S052R1'));
//         this.S055R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S055R1') || x.LOCATION_ID.match('S056R1') || x.LOCATION_ID.match('S054R1'));
//         this.S057R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S057R1') || x.LOCATION_ID.match('S058R1') || x.LOCATION_ID.match('S056R1'));
//         this.S059R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S059R1') || x.LOCATION_ID.match('S060R1') || x.LOCATION_ID.match('S058R1'));
//         this.S061R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S061R1') || x.LOCATION_ID.match('S062R1') || x.LOCATION_ID.match('S060R1'));
//         this.S063R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S063R1') || x.LOCATION_ID.match('S064R1') || x.LOCATION_ID.match('S062R1'));
//         this.S065R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S065R1') || x.LOCATION_ID.match('S066R1') || x.LOCATION_ID.match('S064R1'));
//         this.S067R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S067R1') || x.LOCATION_ID.match('S068R1') || x.LOCATION_ID.match('S066R1'));
//         this.S069R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S069R1') || x.LOCATION_ID.match('S070R1') || x.LOCATION_ID.match('S068R1'));
//         this.S071R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S071R1') || x.LOCATION_ID.match('S072R1') || x.LOCATION_ID.match('S070R1'));
//         this.S073R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S073R1') || x.LOCATION_ID.match('S074R1') || x.LOCATION_ID.match('S072R1'));
//         this.S075R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S075R1') || x.LOCATION_ID.match('S076R1') || x.LOCATION_ID.match('S074R1'));
//         this.S077R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S077R1') || x.LOCATION_ID.match('S078R1') || x.LOCATION_ID.match('S076R1'));
//         this.S079R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S079R1') || x.LOCATION_ID.match('S080R1') || x.LOCATION_ID.match('S078R1'));
//         this.S081R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S081R1') || x.LOCATION_ID.match('S082R1') || x.LOCATION_ID.match('S080R1'));
//         this.S083R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S083R1') || x.LOCATION_ID.match('S084R1') || x.LOCATION_ID.match('S082R1'));
//         this.S085R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S085R1') || x.LOCATION_ID.match('S086R1') || x.LOCATION_ID.match('S084R1'));
//         this.S087R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S087R1') || x.LOCATION_ID.match('S088R1') || x.LOCATION_ID.match('S086R1'));
//         this.S089R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S089R1') || x.LOCATION_ID.match('S090R1') || x.LOCATION_ID.match('S088R1'));
//         this.S091R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S091R1') || x.LOCATION_ID.match('S092R1') || x.LOCATION_ID.match('S090R1'));
//         this.S093R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S093R1') || x.LOCATION_ID.match('S094R1') || x.LOCATION_ID.match('S092R1'));
//         this.S095R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S095R1') || x.LOCATION_ID.match('S096R1') || x.LOCATION_ID.match('S094R1'));
//         this.S097R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S097R1') || x.LOCATION_ID.match('S098R1') || x.LOCATION_ID.match('S096R1'));
//         this.S099R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S099R1') || x.LOCATION_ID.match('S100R1') || x.LOCATION_ID.match('S098R1'));
//         this.S101R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S101R1') || x.LOCATION_ID.match('S102R1') || x.LOCATION_ID.match('S100R1'));
//         this.S103R1 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S103R1') || x.LOCATION_ID.match('S104R1') || x.LOCATION_ID.match('S102R1'));

//         this.S001R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S001R2') || x.LOCATION_ID.match('S002R2') || x.LOCATION_ID.match('S000R2'));
//         this.S003R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S003R2') || x.LOCATION_ID.match('S004R2') || x.LOCATION_ID.match('S002R2'));
//         this.S005R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S005R2') || x.LOCATION_ID.match('S006R2') || x.LOCATION_ID.match('S004R2'));
//         this.S007R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S007R2') || x.LOCATION_ID.match('S008R2') || x.LOCATION_ID.match('S006R2'));
//         this.S009R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S009R2') || x.LOCATION_ID.match('S010R2') || x.LOCATION_ID.match('S008R2'));
//         this.S011R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S011R2') || x.LOCATION_ID.match('S012R2') || x.LOCATION_ID.match('S010R2'));
//         this.S013R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S013R2') || x.LOCATION_ID.match('S014R2') || x.LOCATION_ID.match('S012R2'));
//         this.S015R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S015R2') || x.LOCATION_ID.match('S016R2') || x.LOCATION_ID.match('S014R2'));
//         this.S017R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S017R2') || x.LOCATION_ID.match('S018R2') || x.LOCATION_ID.match('S016R2'));
//         this.S019R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S019R2') || x.LOCATION_ID.match('S020R2') || x.LOCATION_ID.match('S018R2'));
//         this.S021R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S021R2') || x.LOCATION_ID.match('S022R2') || x.LOCATION_ID.match('S020R2'));
//         this.S023R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S023R2') || x.LOCATION_ID.match('S024R2') || x.LOCATION_ID.match('S022R2'));
//         this.S025R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S025R2') || x.LOCATION_ID.match('S026R2') || x.LOCATION_ID.match('S024R2'));
//         this.S027R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S027R2') || x.LOCATION_ID.match('S028R2') || x.LOCATION_ID.match('S026R2'));
//         this.S029R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S029R2') || x.LOCATION_ID.match('S030R2') || x.LOCATION_ID.match('S028R2'));
//         this.S031R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S031R2') || x.LOCATION_ID.match('S032R2') || x.LOCATION_ID.match('S030R2'));
//         this.S033R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S033R2') || x.LOCATION_ID.match('S034R2') || x.LOCATION_ID.match('S032R2'));
//         this.S035R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S035R2') || x.LOCATION_ID.match('S036R2') || x.LOCATION_ID.match('S034R2'));
//         this.S037R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S037R2') || x.LOCATION_ID.match('S038R2') || x.LOCATION_ID.match('S036R2'));
//         this.S039R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S039R2') || x.LOCATION_ID.match('S040R2') || x.LOCATION_ID.match('S038R2'));
//         this.S041R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S041R2') || x.LOCATION_ID.match('S042R2') || x.LOCATION_ID.match('S040R2'));
//         this.S043R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S043R2') || x.LOCATION_ID.match('S044R2') || x.LOCATION_ID.match('S042R2'));
//         this.S045R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S045R2') || x.LOCATION_ID.match('S046R2') || x.LOCATION_ID.match('S044R2'));
//         this.S047R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S047R2') || x.LOCATION_ID.match('S048R2') || x.LOCATION_ID.match('S046R2'));
//         this.S049R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S049R2') || x.LOCATION_ID.match('S050R2') || x.LOCATION_ID.match('S048R2'));
//         this.S051R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S051R2') || x.LOCATION_ID.match('S052R2') || x.LOCATION_ID.match('S050R2'));
//         this.S053R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S053R2') || x.LOCATION_ID.match('S054R2') || x.LOCATION_ID.match('S052R2'));
//         this.S055R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S055R2') || x.LOCATION_ID.match('S056R2') || x.LOCATION_ID.match('S054R2'));
//         this.S057R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S057R2') || x.LOCATION_ID.match('S058R2') || x.LOCATION_ID.match('S056R2'));
//         this.S059R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S059R2') || x.LOCATION_ID.match('S060R2') || x.LOCATION_ID.match('S058R2'));
//         this.S061R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S061R2') || x.LOCATION_ID.match('S062R2') || x.LOCATION_ID.match('S060R2'));
//         this.S063R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S063R2') || x.LOCATION_ID.match('S064R2') || x.LOCATION_ID.match('S062R2'));
//         this.S065R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S065R2') || x.LOCATION_ID.match('S066R2') || x.LOCATION_ID.match('S064R2'));
//         this.S067R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S067R2') || x.LOCATION_ID.match('S068R2') || x.LOCATION_ID.match('S066R2'));
//         this.S069R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S069R2') || x.LOCATION_ID.match('S070R2') || x.LOCATION_ID.match('S068R2'));
//         this.S071R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S071R2') || x.LOCATION_ID.match('S072R2') || x.LOCATION_ID.match('S070R2'));
//         this.S073R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S073R2') || x.LOCATION_ID.match('S074R2') || x.LOCATION_ID.match('S072R2'));
//         this.S075R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S075R2') || x.LOCATION_ID.match('S076R2') || x.LOCATION_ID.match('S074R2'));
//         this.S077R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S077R2') || x.LOCATION_ID.match('S078R2') || x.LOCATION_ID.match('S076R2'));
//         this.S079R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S079R2') || x.LOCATION_ID.match('S080R2') || x.LOCATION_ID.match('S078R2'));
//         this.S081R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S081R2') || x.LOCATION_ID.match('S082R2') || x.LOCATION_ID.match('S080R2'));
//         this.S083R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S083R2') || x.LOCATION_ID.match('S084R2') || x.LOCATION_ID.match('S082R2'));
//         this.S085R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S085R2') || x.LOCATION_ID.match('S086R2') || x.LOCATION_ID.match('S084R2'));
//         this.S087R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S087R2') || x.LOCATION_ID.match('S088R2') || x.LOCATION_ID.match('S086R2'));
//         this.S089R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S089R2') || x.LOCATION_ID.match('S090R2') || x.LOCATION_ID.match('S088R2'));
//         this.S091R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S091R2') || x.LOCATION_ID.match('S092R2') || x.LOCATION_ID.match('S090R2'));
//         this.S093R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S093R2') || x.LOCATION_ID.match('S094R2') || x.LOCATION_ID.match('S092R2'));
//         this.S095R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S095R2') || x.LOCATION_ID.match('S096R2') || x.LOCATION_ID.match('S094R2'));
//         this.S097R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S097R2') || x.LOCATION_ID.match('S098R2') || x.LOCATION_ID.match('S096R2'));
//         this.S099R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S099R2') || x.LOCATION_ID.match('S100R2') || x.LOCATION_ID.match('S098R2'));
//         this.S101R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S101R2') || x.LOCATION_ID.match('S102R2') || x.LOCATION_ID.match('S100R2'));
//         this.S103R2 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S103R2') || x.LOCATION_ID.match('S104R2') || x.LOCATION_ID.match('S102R2'));

//         this.S001R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S001R3') || x.LOCATION_ID.match('S002R3') || x.LOCATION_ID.match('S000R3'));
//         this.S003R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S003R3') || x.LOCATION_ID.match('S004R3') || x.LOCATION_ID.match('S002R3'));
//         this.S005R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S005R3') || x.LOCATION_ID.match('S006R3') || x.LOCATION_ID.match('S004R3'));
//         this.S007R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S007R3') || x.LOCATION_ID.match('S008R3') || x.LOCATION_ID.match('S006R3'));
//         this.S009R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S009R3') || x.LOCATION_ID.match('S010R3') || x.LOCATION_ID.match('S008R3'));
//         this.S011R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S011R3') || x.LOCATION_ID.match('S012R3') || x.LOCATION_ID.match('S010R3'));
//         this.S013R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S013R3') || x.LOCATION_ID.match('S014R3') || x.LOCATION_ID.match('S012R3'));
//         this.S015R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S015R3') || x.LOCATION_ID.match('S016R3') || x.LOCATION_ID.match('S014R3'));
//         this.S017R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S017R3') || x.LOCATION_ID.match('S018R3') || x.LOCATION_ID.match('S016R3'));
//         this.S019R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S019R3') || x.LOCATION_ID.match('S020R3') || x.LOCATION_ID.match('S018R3'));
//         this.S021R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S021R3') || x.LOCATION_ID.match('S022R3') || x.LOCATION_ID.match('S020R3'));
//         this.S023R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S023R3') || x.LOCATION_ID.match('S024R3') || x.LOCATION_ID.match('S022R3'));
//         this.S025R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S025R3') || x.LOCATION_ID.match('S026R3') || x.LOCATION_ID.match('S024R3'));
//         this.S027R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S027R3') || x.LOCATION_ID.match('S028R3') || x.LOCATION_ID.match('S026R3'));
//         this.S029R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S029R3') || x.LOCATION_ID.match('S030R3') || x.LOCATION_ID.match('S028R3'));
//         this.S031R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S031R3') || x.LOCATION_ID.match('S032R3') || x.LOCATION_ID.match('S030R3'));
//         this.S033R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S033R3') || x.LOCATION_ID.match('S034R3') || x.LOCATION_ID.match('S032R3'));
//         this.S035R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S035R3') || x.LOCATION_ID.match('S036R3') || x.LOCATION_ID.match('S034R3'));
//         this.S037R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S037R3') || x.LOCATION_ID.match('S038R3') || x.LOCATION_ID.match('S036R3'));
//         this.S039R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S039R3') || x.LOCATION_ID.match('S040R3') || x.LOCATION_ID.match('S038R3'));
//         this.S041R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S041R3') || x.LOCATION_ID.match('S042R3') || x.LOCATION_ID.match('S040R3'));
//         this.S043R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S043R3') || x.LOCATION_ID.match('S044R3') || x.LOCATION_ID.match('S042R3'));
//         this.S045R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S045R3') || x.LOCATION_ID.match('S046R3') || x.LOCATION_ID.match('S044R3'));
//         this.S047R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S047R3') || x.LOCATION_ID.match('S048R3') || x.LOCATION_ID.match('S046R3'));
//         this.S049R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S049R3') || x.LOCATION_ID.match('S050R3') || x.LOCATION_ID.match('S048R3'));
//         this.S051R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S051R3') || x.LOCATION_ID.match('S052R3') || x.LOCATION_ID.match('S050R3'));
//         this.S053R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S053R3') || x.LOCATION_ID.match('S054R3') || x.LOCATION_ID.match('S052R3'));
//         this.S055R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S055R3') || x.LOCATION_ID.match('S056R3') || x.LOCATION_ID.match('S054R3'));
//         this.S057R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S057R3') || x.LOCATION_ID.match('S058R3') || x.LOCATION_ID.match('S056R3'));
//         this.S059R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S059R3') || x.LOCATION_ID.match('S060R3') || x.LOCATION_ID.match('S058R3'));
//         this.S061R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S061R3') || x.LOCATION_ID.match('S062R3') || x.LOCATION_ID.match('S060R3'));
//         this.S063R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S063R3') || x.LOCATION_ID.match('S064R3') || x.LOCATION_ID.match('S062R3'));
//         this.S065R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S065R3') || x.LOCATION_ID.match('S066R3') || x.LOCATION_ID.match('S064R3'));
//         this.S067R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S067R3') || x.LOCATION_ID.match('S068R3') || x.LOCATION_ID.match('S066R3'));
//         this.S069R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S069R3') || x.LOCATION_ID.match('S070R3') || x.LOCATION_ID.match('S068R3'));
//         this.S071R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S071R3') || x.LOCATION_ID.match('S072R3') || x.LOCATION_ID.match('S070R3'));
//         this.S073R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S073R3') || x.LOCATION_ID.match('S074R3') || x.LOCATION_ID.match('S072R3'));
//         this.S075R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S075R3') || x.LOCATION_ID.match('S076R3') || x.LOCATION_ID.match('S074R3'));
//         this.S077R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S077R3') || x.LOCATION_ID.match('S078R3') || x.LOCATION_ID.match('S076R3'));
//         this.S079R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S079R3') || x.LOCATION_ID.match('S080R3') || x.LOCATION_ID.match('S078R3'));
//         this.S081R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S081R3') || x.LOCATION_ID.match('S082R3') || x.LOCATION_ID.match('S080R3'));
//         this.S083R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S083R3') || x.LOCATION_ID.match('S084R3') || x.LOCATION_ID.match('S082R3'));
//         this.S085R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S085R3') || x.LOCATION_ID.match('S086R3') || x.LOCATION_ID.match('S084R3'));
//         this.S087R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S087R3') || x.LOCATION_ID.match('S088R3') || x.LOCATION_ID.match('S086R3'));
//         this.S089R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S089R3') || x.LOCATION_ID.match('S090R3') || x.LOCATION_ID.match('S088R3'));
//         this.S091R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S091R3') || x.LOCATION_ID.match('S092R3') || x.LOCATION_ID.match('S090R3'));
//         this.S093R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S093R3') || x.LOCATION_ID.match('S094R3') || x.LOCATION_ID.match('S092R3'));
//         this.S095R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S095R3') || x.LOCATION_ID.match('S096R3') || x.LOCATION_ID.match('S094R3'));
//         this.S097R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S097R3') || x.LOCATION_ID.match('S098R3') || x.LOCATION_ID.match('S096R3'));
//         this.S099R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S099R3') || x.LOCATION_ID.match('S100R3') || x.LOCATION_ID.match('S098R3'));
//         this.S101R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S101R3') || x.LOCATION_ID.match('S102R3') || x.LOCATION_ID.match('S100R3'));
//         this.S103R3 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S103R3') || x.LOCATION_ID.match('S104R3') || x.LOCATION_ID.match('S102R3'));

//         this.S001R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S001R4') || x.LOCATION_ID.match('S002R4') || x.LOCATION_ID.match('S000R4'));
//         this.S003R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S003R4') || x.LOCATION_ID.match('S004R4') || x.LOCATION_ID.match('S002R4'));
//         this.S005R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S005R4') || x.LOCATION_ID.match('S006R4') || x.LOCATION_ID.match('S004R4'));
//         this.S007R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S007R4') || x.LOCATION_ID.match('S008R4') || x.LOCATION_ID.match('S006R4'));
//         this.S009R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S009R4') || x.LOCATION_ID.match('S010R4') || x.LOCATION_ID.match('S008R4'));
//         this.S011R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S011R4') || x.LOCATION_ID.match('S012R4') || x.LOCATION_ID.match('S010R4'));
//         this.S013R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S013R4') || x.LOCATION_ID.match('S014R4') || x.LOCATION_ID.match('S012R4'));
//         this.S015R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S015R4') || x.LOCATION_ID.match('S016R4') || x.LOCATION_ID.match('S014R4'));
//         this.S017R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S017R4') || x.LOCATION_ID.match('S018R4') || x.LOCATION_ID.match('S016R4'));
//         this.S019R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S019R4') || x.LOCATION_ID.match('S020R4') || x.LOCATION_ID.match('S018R4'));
//         this.S021R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S021R4') || x.LOCATION_ID.match('S022R4') || x.LOCATION_ID.match('S020R4'));
//         this.S023R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S023R4') || x.LOCATION_ID.match('S024R4') || x.LOCATION_ID.match('S022R4'));
//         this.S025R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S025R4') || x.LOCATION_ID.match('S026R4') || x.LOCATION_ID.match('S024R4'));
//         this.S027R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S027R4') || x.LOCATION_ID.match('S028R4') || x.LOCATION_ID.match('S026R4'));
//         this.S029R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S029R4') || x.LOCATION_ID.match('S030R4') || x.LOCATION_ID.match('S028R4'));
//         this.S031R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S031R4') || x.LOCATION_ID.match('S032R4') || x.LOCATION_ID.match('S030R4'));
//         this.S033R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S033R4') || x.LOCATION_ID.match('S034R4') || x.LOCATION_ID.match('S032R4'));
//         this.S035R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S035R4') || x.LOCATION_ID.match('S036R4') || x.LOCATION_ID.match('S034R4'));
//         this.S037R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S037R4') || x.LOCATION_ID.match('S038R4') || x.LOCATION_ID.match('S036R4'));
//         this.S039R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S039R4') || x.LOCATION_ID.match('S040R4') || x.LOCATION_ID.match('S038R4'));
//         this.S041R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S041R4') || x.LOCATION_ID.match('S042R4') || x.LOCATION_ID.match('S040R4'));
//         this.S043R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S043R4') || x.LOCATION_ID.match('S044R4') || x.LOCATION_ID.match('S042R4'));
//         this.S045R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S045R4') || x.LOCATION_ID.match('S046R4') || x.LOCATION_ID.match('S044R4'));
//         this.S047R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S047R4') || x.LOCATION_ID.match('S048R4') || x.LOCATION_ID.match('S046R4'));
//         this.S049R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S049R4') || x.LOCATION_ID.match('S050R4') || x.LOCATION_ID.match('S048R4'));
//         this.S051R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S051R4') || x.LOCATION_ID.match('S052R4') || x.LOCATION_ID.match('S050R4'));
//         this.S053R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S053R4') || x.LOCATION_ID.match('S054R4') || x.LOCATION_ID.match('S052R4'));
//         this.S055R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S055R4') || x.LOCATION_ID.match('S056R4') || x.LOCATION_ID.match('S054R4'));
//         this.S057R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S057R4') || x.LOCATION_ID.match('S058R4') || x.LOCATION_ID.match('S056R4'));
//         this.S059R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S059R4') || x.LOCATION_ID.match('S060R4') || x.LOCATION_ID.match('S058R4'));
//         this.S061R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S061R4') || x.LOCATION_ID.match('S062R4') || x.LOCATION_ID.match('S060R4'));
//         this.S063R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S063R4') || x.LOCATION_ID.match('S064R4') || x.LOCATION_ID.match('S062R4'));
//         this.S065R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S065R4') || x.LOCATION_ID.match('S066R4') || x.LOCATION_ID.match('S064R4'));
//         this.S067R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S067R4') || x.LOCATION_ID.match('S068R4') || x.LOCATION_ID.match('S066R4'));
//         this.S069R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S069R4') || x.LOCATION_ID.match('S070R4') || x.LOCATION_ID.match('S068R4'));
//         this.S071R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S071R4') || x.LOCATION_ID.match('S072R4') || x.LOCATION_ID.match('S070R4'));
//         this.S073R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S073R4') || x.LOCATION_ID.match('S074R4') || x.LOCATION_ID.match('S072R4'));
//         this.S075R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S075R4') || x.LOCATION_ID.match('S076R4') || x.LOCATION_ID.match('S074R4'));
//         this.S077R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S077R4') || x.LOCATION_ID.match('S078R4') || x.LOCATION_ID.match('S076R4'));
//         this.S079R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S079R4') || x.LOCATION_ID.match('S080R4') || x.LOCATION_ID.match('S078R4'));
//         this.S081R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S081R4') || x.LOCATION_ID.match('S082R4') || x.LOCATION_ID.match('S080R4'));
//         this.S083R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S083R4') || x.LOCATION_ID.match('S084R4') || x.LOCATION_ID.match('S082R4'));
//         this.S085R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S085R4') || x.LOCATION_ID.match('S086R4') || x.LOCATION_ID.match('S084R4'));
//         this.S087R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S087R4') || x.LOCATION_ID.match('S088R4') || x.LOCATION_ID.match('S086R4'));
//         this.S089R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S089R4') || x.LOCATION_ID.match('S090R4') || x.LOCATION_ID.match('S088R4'));
//         this.S091R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S091R4') || x.LOCATION_ID.match('S092R4') || x.LOCATION_ID.match('S090R4'));
//         this.S093R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S093R4') || x.LOCATION_ID.match('S094R4') || x.LOCATION_ID.match('S092R4'));
//         this.S095R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S095R4') || x.LOCATION_ID.match('S096R4') || x.LOCATION_ID.match('S094R4'));
//         this.S097R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S097R4') || x.LOCATION_ID.match('S098R4') || x.LOCATION_ID.match('S096R4'));
//         this.S099R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S099R4') || x.LOCATION_ID.match('S100R4') || x.LOCATION_ID.match('S098R4'));
//         this.S101R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S101R4') || x.LOCATION_ID.match('S102R4') || x.LOCATION_ID.match('S100R4'));
//         this.S103R4 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S103R4') || x.LOCATION_ID.match('S104R4') || x.LOCATION_ID.match('S102R4'));

//         this.S001R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S001R5') || x.LOCATION_ID.match('S002R5') || x.LOCATION_ID.match('S000R5'));
//         this.S003R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S003R5') || x.LOCATION_ID.match('S004R5') || x.LOCATION_ID.match('S002R5'));
//         this.S005R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S005R5') || x.LOCATION_ID.match('S006R5') || x.LOCATION_ID.match('S004R5'));
//         this.S007R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S007R5') || x.LOCATION_ID.match('S008R5') || x.LOCATION_ID.match('S006R5'));
//         this.S009R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S009R5') || x.LOCATION_ID.match('S010R5') || x.LOCATION_ID.match('S008R5'));
//         this.S011R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S011R5') || x.LOCATION_ID.match('S012R5') || x.LOCATION_ID.match('S010R5'));
//         this.S013R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S013R5') || x.LOCATION_ID.match('S014R5') || x.LOCATION_ID.match('S012R5'));
//         this.S015R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S015R5') || x.LOCATION_ID.match('S016R5') || x.LOCATION_ID.match('S014R5'));
//         this.S017R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S017R5') || x.LOCATION_ID.match('S018R5') || x.LOCATION_ID.match('S016R5'));
//         this.S019R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S019R5') || x.LOCATION_ID.match('S020R5') || x.LOCATION_ID.match('S018R5'));
//         this.S021R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S021R5') || x.LOCATION_ID.match('S022R5') || x.LOCATION_ID.match('S020R5'));
//         this.S023R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S023R5') || x.LOCATION_ID.match('S024R5') || x.LOCATION_ID.match('S022R5'));
//         this.S025R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S025R5') || x.LOCATION_ID.match('S026R5') || x.LOCATION_ID.match('S024R5'));
//         this.S027R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S027R5') || x.LOCATION_ID.match('S028R5') || x.LOCATION_ID.match('S026R5'));
//         this.S029R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S029R5') || x.LOCATION_ID.match('S030R5') || x.LOCATION_ID.match('S028R5'));
//         this.S031R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S031R5') || x.LOCATION_ID.match('S032R5') || x.LOCATION_ID.match('S030R5'));
//         this.S033R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S033R5') || x.LOCATION_ID.match('S034R5') || x.LOCATION_ID.match('S032R5'));
//         this.S035R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S035R5') || x.LOCATION_ID.match('S036R5') || x.LOCATION_ID.match('S034R5'));
//         this.S037R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S037R5') || x.LOCATION_ID.match('S038R5') || x.LOCATION_ID.match('S036R5'));
//         this.S039R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S039R5') || x.LOCATION_ID.match('S040R5') || x.LOCATION_ID.match('S038R5'));
//         this.S041R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S041R5') || x.LOCATION_ID.match('S042R5') || x.LOCATION_ID.match('S040R5'));
//         this.S043R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S043R5') || x.LOCATION_ID.match('S044R5') || x.LOCATION_ID.match('S042R5'));
//         this.S045R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S045R5') || x.LOCATION_ID.match('S046R5') || x.LOCATION_ID.match('S044R5'));
//         this.S047R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S047R5') || x.LOCATION_ID.match('S048R5') || x.LOCATION_ID.match('S046R5'));
//         this.S049R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S049R5') || x.LOCATION_ID.match('S050R5') || x.LOCATION_ID.match('S048R5'));
//         this.S051R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S051R5') || x.LOCATION_ID.match('S052R5') || x.LOCATION_ID.match('S050R5'));
//         this.S053R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S053R5') || x.LOCATION_ID.match('S054R5') || x.LOCATION_ID.match('S052R5'));
//         this.S055R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S055R5') || x.LOCATION_ID.match('S056R5') || x.LOCATION_ID.match('S054R5'));
//         this.S057R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S057R5') || x.LOCATION_ID.match('S058R5') || x.LOCATION_ID.match('S056R5'));
//         this.S059R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S059R5') || x.LOCATION_ID.match('S060R5') || x.LOCATION_ID.match('S058R5'));
//         this.S061R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S061R5') || x.LOCATION_ID.match('S062R5') || x.LOCATION_ID.match('S060R5'));
//         this.S063R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S063R5') || x.LOCATION_ID.match('S064R5') || x.LOCATION_ID.match('S062R5'));
//         this.S065R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S065R5') || x.LOCATION_ID.match('S066R5') || x.LOCATION_ID.match('S064R5'));
//         this.S067R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S067R5') || x.LOCATION_ID.match('S068R5') || x.LOCATION_ID.match('S066R5'));
//         this.S069R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S069R5') || x.LOCATION_ID.match('S070R5') || x.LOCATION_ID.match('S068R5'));
//         this.S071R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S071R5') || x.LOCATION_ID.match('S072R5') || x.LOCATION_ID.match('S070R5'));
//         this.S073R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S073R5') || x.LOCATION_ID.match('S074R5') || x.LOCATION_ID.match('S072R5'));
//         this.S075R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S075R5') || x.LOCATION_ID.match('S076R5') || x.LOCATION_ID.match('S074R5'));
//         this.S077R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S077R5') || x.LOCATION_ID.match('S078R5') || x.LOCATION_ID.match('S076R5'));
//         this.S079R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S079R5') || x.LOCATION_ID.match('S080R5') || x.LOCATION_ID.match('S078R5'));
//         this.S081R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S081R5') || x.LOCATION_ID.match('S082R5') || x.LOCATION_ID.match('S080R5'));
//         this.S083R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S083R5') || x.LOCATION_ID.match('S084R5') || x.LOCATION_ID.match('S082R5'));
//         this.S085R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S085R5') || x.LOCATION_ID.match('S086R5') || x.LOCATION_ID.match('S084R5'));
//         this.S087R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S087R5') || x.LOCATION_ID.match('S088R5') || x.LOCATION_ID.match('S086R5'));
//         this.S089R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S089R5') || x.LOCATION_ID.match('S090R5') || x.LOCATION_ID.match('S088R5'));
//         this.S091R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S091R5') || x.LOCATION_ID.match('S092R5') || x.LOCATION_ID.match('S090R5'));
//         this.S093R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S093R5') || x.LOCATION_ID.match('S094R5') || x.LOCATION_ID.match('S092R5'));
//         this.S095R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S095R5') || x.LOCATION_ID.match('S096R5') || x.LOCATION_ID.match('S094R5'));
//         this.S097R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S097R5') || x.LOCATION_ID.match('S098R5') || x.LOCATION_ID.match('S096R5'));
//         this.S099R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S099R5') || x.LOCATION_ID.match('S100R5') || x.LOCATION_ID.match('S098R5'));
//         this.S101R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S101R5') || x.LOCATION_ID.match('S102R5') || x.LOCATION_ID.match('S100R5'));
//         this.S103R5 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S103R5') || x.LOCATION_ID.match('S104R5') || x.LOCATION_ID.match('S102R5'));

//         this.S001R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S001R6') || x.LOCATION_ID.match('S002R6') || x.LOCATION_ID.match('S000R6'));
//         this.S003R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S003R6') || x.LOCATION_ID.match('S004R6') || x.LOCATION_ID.match('S002R6'));
//         this.S005R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S005R6') || x.LOCATION_ID.match('S006R6') || x.LOCATION_ID.match('S004R6'));
//         this.S007R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S007R6') || x.LOCATION_ID.match('S008R6') || x.LOCATION_ID.match('S006R6'));
//         this.S009R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S009R6') || x.LOCATION_ID.match('S010R6') || x.LOCATION_ID.match('S008R6'));
//         this.S011R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S011R6') || x.LOCATION_ID.match('S012R6') || x.LOCATION_ID.match('S010R6'));
//         this.S013R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S013R6') || x.LOCATION_ID.match('S014R6') || x.LOCATION_ID.match('S012R6'));
//         this.S015R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S015R6') || x.LOCATION_ID.match('S016R6') || x.LOCATION_ID.match('S014R6'));
//         this.S017R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S017R6') || x.LOCATION_ID.match('S018R6') || x.LOCATION_ID.match('S016R6'));
//         this.S019R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S019R6') || x.LOCATION_ID.match('S020R6') || x.LOCATION_ID.match('S018R6'));
//         this.S021R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S021R6') || x.LOCATION_ID.match('S022R6') || x.LOCATION_ID.match('S020R6'));
//         this.S023R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S023R6') || x.LOCATION_ID.match('S024R6') || x.LOCATION_ID.match('S022R6'));
//         this.S025R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S025R6') || x.LOCATION_ID.match('S026R6') || x.LOCATION_ID.match('S024R6'));
//         this.S027R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S027R6') || x.LOCATION_ID.match('S028R6') || x.LOCATION_ID.match('S026R6'));
//         this.S029R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S029R6') || x.LOCATION_ID.match('S030R6') || x.LOCATION_ID.match('S028R6'));
//         this.S031R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S031R6') || x.LOCATION_ID.match('S032R6') || x.LOCATION_ID.match('S030R6'));
//         this.S033R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S033R6') || x.LOCATION_ID.match('S034R6') || x.LOCATION_ID.match('S032R6'));
//         this.S035R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S035R6') || x.LOCATION_ID.match('S036R6') || x.LOCATION_ID.match('S034R6'));
//         this.S037R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S037R6') || x.LOCATION_ID.match('S038R6') || x.LOCATION_ID.match('S036R6'));
//         this.S039R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S039R6') || x.LOCATION_ID.match('S040R6') || x.LOCATION_ID.match('S038R6'));
//         this.S041R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S041R6') || x.LOCATION_ID.match('S042R6') || x.LOCATION_ID.match('S040R6'));
//         this.S043R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S043R6') || x.LOCATION_ID.match('S044R6') || x.LOCATION_ID.match('S042R6'));
//         this.S045R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S045R6') || x.LOCATION_ID.match('S046R6') || x.LOCATION_ID.match('S044R6'));
//         this.S047R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S047R6') || x.LOCATION_ID.match('S048R6') || x.LOCATION_ID.match('S046R6'));
//         this.S049R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S049R6') || x.LOCATION_ID.match('S050R6') || x.LOCATION_ID.match('S048R6'));
//         this.S051R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S051R6') || x.LOCATION_ID.match('S052R6') || x.LOCATION_ID.match('S050R6'));
//         this.S053R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S053R6') || x.LOCATION_ID.match('S054R6') || x.LOCATION_ID.match('S052R6'));
//         this.S055R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S055R6') || x.LOCATION_ID.match('S056R6') || x.LOCATION_ID.match('S054R6'));
//         this.S057R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S057R6') || x.LOCATION_ID.match('S058R6') || x.LOCATION_ID.match('S056R6'));
//         this.S059R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S059R6') || x.LOCATION_ID.match('S060R6') || x.LOCATION_ID.match('S058R6'));
//         this.S061R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S061R6') || x.LOCATION_ID.match('S062R6') || x.LOCATION_ID.match('S060R6'));
//         this.S063R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S063R6') || x.LOCATION_ID.match('S064R6') || x.LOCATION_ID.match('S062R6'));
//         this.S065R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S065R6') || x.LOCATION_ID.match('S066R6') || x.LOCATION_ID.match('S064R6'));
//         this.S067R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S067R6') || x.LOCATION_ID.match('S068R6') || x.LOCATION_ID.match('S066R6'));
//         this.S069R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S069R6') || x.LOCATION_ID.match('S070R6') || x.LOCATION_ID.match('S068R6'));
//         this.S071R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S071R6') || x.LOCATION_ID.match('S072R6') || x.LOCATION_ID.match('S070R6'));
//         this.S073R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S073R6') || x.LOCATION_ID.match('S074R6') || x.LOCATION_ID.match('S072R6'));
//         this.S075R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S075R6') || x.LOCATION_ID.match('S076R6') || x.LOCATION_ID.match('S074R6'));
//         this.S077R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S077R6') || x.LOCATION_ID.match('S078R6') || x.LOCATION_ID.match('S076R6'));
//         this.S079R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S079R6') || x.LOCATION_ID.match('S080R6') || x.LOCATION_ID.match('S078R6'));
//         this.S081R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S081R6') || x.LOCATION_ID.match('S082R6') || x.LOCATION_ID.match('S080R6'));
//         this.S083R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S083R6') || x.LOCATION_ID.match('S084R6') || x.LOCATION_ID.match('S082R6'));
//         this.S085R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S085R6') || x.LOCATION_ID.match('S086R6') || x.LOCATION_ID.match('S084R6'));
//         this.S087R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S087R6') || x.LOCATION_ID.match('S088R6') || x.LOCATION_ID.match('S086R6'));
//         this.S089R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S089R6') || x.LOCATION_ID.match('S090R6') || x.LOCATION_ID.match('S088R6'));
//         this.S091R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S091R6') || x.LOCATION_ID.match('S092R6') || x.LOCATION_ID.match('S090R6'));
//         this.S093R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S093R6') || x.LOCATION_ID.match('S094R6') || x.LOCATION_ID.match('S092R6'));
//         this.S095R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S095R6') || x.LOCATION_ID.match('S096R6') || x.LOCATION_ID.match('S094R6'));
//         this.S097R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S097R6') || x.LOCATION_ID.match('S098R6') || x.LOCATION_ID.match('S096R6'));
//         this.S099R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S099R6') || x.LOCATION_ID.match('S100R6') || x.LOCATION_ID.match('S098R6'));
//         this.S101R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S101R6') || x.LOCATION_ID.match('S102R6') || x.LOCATION_ID.match('S100R6'));
//         this.S103R6 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S103R6') || x.LOCATION_ID.match('S104R6') || x.LOCATION_ID.match('S102R6'));

//         this.S001R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S001R7') || x.LOCATION_ID.match('S002R7') || x.LOCATION_ID.match('S000R7'));
//         this.S003R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S003R7') || x.LOCATION_ID.match('S004R7') || x.LOCATION_ID.match('S002R7'));
//         this.S005R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S005R7') || x.LOCATION_ID.match('S006R7') || x.LOCATION_ID.match('S004R7'));
//         this.S007R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S007R7') || x.LOCATION_ID.match('S008R7') || x.LOCATION_ID.match('S006R7'));
//         this.S009R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S009R7') || x.LOCATION_ID.match('S010R7') || x.LOCATION_ID.match('S008R7'));
//         this.S011R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S011R7') || x.LOCATION_ID.match('S012R7') || x.LOCATION_ID.match('S010R7'));
//         this.S013R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S013R7') || x.LOCATION_ID.match('S014R7') || x.LOCATION_ID.match('S012R7'));
//         this.S015R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S015R7') || x.LOCATION_ID.match('S016R7') || x.LOCATION_ID.match('S014R7'));
//         this.S017R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S017R7') || x.LOCATION_ID.match('S018R7') || x.LOCATION_ID.match('S016R7'));
//         this.S019R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S019R7') || x.LOCATION_ID.match('S020R7') || x.LOCATION_ID.match('S018R7'));
//         this.S021R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S021R7') || x.LOCATION_ID.match('S022R7') || x.LOCATION_ID.match('S020R7'));
//         this.S023R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S023R7') || x.LOCATION_ID.match('S024R7') || x.LOCATION_ID.match('S022R7'));
//         this.S025R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S025R7') || x.LOCATION_ID.match('S026R7') || x.LOCATION_ID.match('S024R7'));
//         this.S027R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S027R7') || x.LOCATION_ID.match('S028R7') || x.LOCATION_ID.match('S026R7'));
//         this.S029R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S029R7') || x.LOCATION_ID.match('S030R7') || x.LOCATION_ID.match('S028R7'));
//         this.S031R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S031R7') || x.LOCATION_ID.match('S032R7') || x.LOCATION_ID.match('S030R7'));
//         this.S033R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S033R7') || x.LOCATION_ID.match('S034R7') || x.LOCATION_ID.match('S032R7'));
//         this.S035R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S035R7') || x.LOCATION_ID.match('S036R7') || x.LOCATION_ID.match('S034R7'));
//         this.S037R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S037R7') || x.LOCATION_ID.match('S038R7') || x.LOCATION_ID.match('S036R7'));
//         this.S039R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S039R7') || x.LOCATION_ID.match('S040R7') || x.LOCATION_ID.match('S038R7'));
//         this.S041R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S041R7') || x.LOCATION_ID.match('S042R7') || x.LOCATION_ID.match('S040R7'));
//         this.S043R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S043R7') || x.LOCATION_ID.match('S044R7') || x.LOCATION_ID.match('S042R7'));
//         this.S045R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S045R7') || x.LOCATION_ID.match('S046R7') || x.LOCATION_ID.match('S044R7'));
//         this.S047R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S047R7') || x.LOCATION_ID.match('S048R7') || x.LOCATION_ID.match('S046R7'));
//         this.S049R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S049R7') || x.LOCATION_ID.match('S050R7') || x.LOCATION_ID.match('S048R7'));
//         this.S051R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S051R7') || x.LOCATION_ID.match('S052R7') || x.LOCATION_ID.match('S050R7'));
//         this.S053R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S053R7') || x.LOCATION_ID.match('S054R7') || x.LOCATION_ID.match('S052R7'));
//         this.S055R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S055R7') || x.LOCATION_ID.match('S056R7') || x.LOCATION_ID.match('S054R7'));
//         this.S057R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S057R7') || x.LOCATION_ID.match('S058R7') || x.LOCATION_ID.match('S056R7'));
//         this.S059R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S059R7') || x.LOCATION_ID.match('S060R7') || x.LOCATION_ID.match('S058R7'));
//         this.S061R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S061R7') || x.LOCATION_ID.match('S062R7') || x.LOCATION_ID.match('S060R7'));
//         this.S063R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S063R7') || x.LOCATION_ID.match('S064R7') || x.LOCATION_ID.match('S062R7'));
//         this.S065R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S065R7') || x.LOCATION_ID.match('S066R7') || x.LOCATION_ID.match('S064R7'));
//         this.S067R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S067R7') || x.LOCATION_ID.match('S068R7') || x.LOCATION_ID.match('S066R7'));
//         this.S069R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S069R7') || x.LOCATION_ID.match('S070R7') || x.LOCATION_ID.match('S068R7'));
//         this.S071R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S071R7') || x.LOCATION_ID.match('S072R7') || x.LOCATION_ID.match('S070R7'));
//         this.S073R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S073R7') || x.LOCATION_ID.match('S074R7') || x.LOCATION_ID.match('S072R7'));
//         this.S075R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S075R7') || x.LOCATION_ID.match('S076R7') || x.LOCATION_ID.match('S074R7'));
//         this.S077R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S077R7') || x.LOCATION_ID.match('S078R7') || x.LOCATION_ID.match('S076R7'));
//         this.S079R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S079R7') || x.LOCATION_ID.match('S080R7') || x.LOCATION_ID.match('S078R7'));
//         this.S081R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S081R7') || x.LOCATION_ID.match('S082R7') || x.LOCATION_ID.match('S080R7'));
//         this.S083R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S083R7') || x.LOCATION_ID.match('S084R7') || x.LOCATION_ID.match('S082R7'));
//         this.S085R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S085R7') || x.LOCATION_ID.match('S086R7') || x.LOCATION_ID.match('S084R7'));
//         this.S087R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S087R7') || x.LOCATION_ID.match('S088R7') || x.LOCATION_ID.match('S086R7'));
//         this.S089R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S089R7') || x.LOCATION_ID.match('S090R7') || x.LOCATION_ID.match('S088R7'));
//         this.S091R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S091R7') || x.LOCATION_ID.match('S092R7') || x.LOCATION_ID.match('S090R7'));
//         this.S093R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S093R7') || x.LOCATION_ID.match('S094R7') || x.LOCATION_ID.match('S092R7'));
//         this.S095R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S095R7') || x.LOCATION_ID.match('S096R7') || x.LOCATION_ID.match('S094R7'));
//         this.S097R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S097R7') || x.LOCATION_ID.match('S098R7') || x.LOCATION_ID.match('S096R7'));
//         this.S099R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S099R7') || x.LOCATION_ID.match('S100R7') || x.LOCATION_ID.match('S098R7'));
//         this.S101R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S101R7') || x.LOCATION_ID.match('S102R7') || x.LOCATION_ID.match('S100R7'));
//         this.S103R7 = this.AllTransactionDetailsByLocationID.filter(x => x.LOCATION_ID.match('S103R7') || x.LOCATION_ID.match('S104R7') || x.LOCATION_ID.match('S102R7'));


//       },
//       (err) => {
//         this.IsProgressBarVisibile = false;
//         this.notificationSnackBarComponent.openSnackBar(err instanceof Object ? 'Something went wrong' : err, SnackBarStatus.danger);
//       }
//     );
//   }

//   loadSelectedTransactionDetails(value: string): void {
//     if (value === 'total') {
//       this.diagramShow = false;
//       this.tableShowName = 'Total Containers';
//       this.tableShow = true;
//       this.commonTableShow = true;
//       this.exceptionTableShow = false;
//       // const onlyTotalTrucks: any[] = this.AllTransactionDetails.filter(x => x.CUR_STATUS !== 'EXIT');
//       this.commonDataSource = null;
//       this.GetAllTransactionDetails(this.authenticationDetails.userID);
//     }
//     else if (value === 'completed') {
//       this.diagramShow = false;
//       this.tableShowName = 'Containers handled';
//       this.tableShow = true;
//       this.commonTableShow = true;
//       this.exceptionTableShow = false;
//       this.commonDataSource = null;
//       this.GetAllCompletedTransactionDetails(this.authenticationDetails.userID);
//     }
//     else if (value === 'exception') {
//       this.diagramShow = false;
//       this.tableShowName = 'Exceptions';
//       this.tableShow = true;
//       this.commonTableShow = false;
//       this.exceptionTableShow = true;
//       this.exceptionDataSource = null;
//       this.GetAllExceptionDetails(this.authenticationDetails.userID);
//     }
//   }
//   // *ngIf="!CheckFourtyFeet(S007R1)"
//   loadSelectedContainer(value: any): void {
//     if (value !== null) {
//       this._dashboardService.SRowData = value;
//       // const onlyParking: any[] = this.AllTransactionDetails.filter(x => x.CUR_STATUS === 'PENTRY');
//       this._router.navigate(['/dashboardDetail']);
//       console.log(value);
//     }
//   }

//   CheckFourtyFeet(value: TransactionDetailsByLocationID[]): boolean {
//     if (value && value.length) {
//      const filteredValue= value.filter(x=>x.CONTAINER_SIZE==='40');
//      if(filteredValue.length){
//        return true;
//      }
//     }
//     return false;
//   }
// }
