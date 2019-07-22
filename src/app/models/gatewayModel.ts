export class ConfigurationObj {
    // TRUCKID: number;
    // LAT: string;
    // LON: string;
    // ISACTIVE: boolean;
    // CREATED_ON: Date;
    ID: number;
    TYPE: string; 
    STATION: string;
    ENTRY_ID: string;
    EXIT_ID: string;
    GATEWAY_ID: string;
    STACK: string;
    CREATED_BY: string;
    CREATED_ON: Date;
}
export class StackUpdateObj {
    // TRUCKID: number;
    // LAT: string;
    // LON: string;
    // ISACTIVE: boolean;
    // CREATED_ON: Date;
    ID: number;
    TYPE: string; 
    STATION: string;
    ENTRY_ID: string;
    EXIT_ID: string;
    GATEWAY_ID: string;
    STACK: string;
    CREATED_BY: string;
    CREATED_ON: Date;
}

export class QApproveObj {
    // TRUCKID: number;
    // LAT: string;
    // LON: string;
    // ISACTIVE: boolean;
    // CREATED_ON: Date;
    REQUEST_ID: number;
    USER: string;
    REQUEST_TYPE: string;
    SELECTED_ITEM: string;
    REQUEST_COMMENT: string;
    APPROVE_COMMENT: string;
    CREATED_ON: Date;
    STATUS: string;
    
}
export class RANGEOBJ{
    BLE_ID: string;
    ISRANGE: boolean;
}
export class GPSTrackingObj {
    TRUCK_ID: number;
    LAT: string;
    LON: string;
    ISACTIVE: boolean;
    CREATED_ON: Date;
}
export class QRequestObj {
    REQUEST_ID: number;
    USER: string;
    REQUEST_TYPE: string;
    SELECTED_ITEM: string;
    REQUEST_COMMENT: string;
}

