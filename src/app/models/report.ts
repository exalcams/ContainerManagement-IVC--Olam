import { Guid } from 'guid-typescript';

export class ReportDetails {

    // public int ITEM_ID { get; set; }
    // [Required]
    // public int TRANS_ID { get; set; }
    // public string BLE_ID { get; set; }
    // public string PLANT { get; set; }
    // public string CUSTOMER_NO { get; set; }
    // public string CUSTOMER_NAME { get; set; }
    // public string SALES_CONTRACT_NO { get; set; }
    // public string TRANSPORTER { get; set; }
    // public string CONTAINER_NO { get; set; }
    // public string CONTAINER_SIZE { get; set; }
    // public string CONTAINER_TYPE { get; set; }
    // public string LOCATION_ID { get; set; }
    // public string TYPE { get; set; }
    // public string COLOR { get; set; }
    // public string IS_DAMAGE { get; set; }
    // public string CLEAN_TYPE { get; set; }
    // public string AVAILABLE_SPACE { get; set; }
    // public string BOOKING_REFERENCE { get; set; }
    // public string SEAL_NUMBER { get; set; }
    // public string RELEASE_ORDER_NUMBER { get; set; }
    // public string CUR_STATUS { get; set; }
    // public string FLAG { get; set; }
    // public bool ISACTIVE { get; set; }
    // public string STATUS { get; set; }
    // public DateTime? ENTRY_TIME { get; set; }
    // public DateTime? EXIT_TIME { get; set; }
    // public DateTime? CREATED_ON { get; set; }
    // public string CREATED_BY { get; set; }
    // public DateTime? MODIFIED_ON { get; set; }
    // public string MODIFIED_BY { get; set; }
    // public string RGATEWAY_ID { get; set; }
    // public string CUR_GATEWAY_ID { get; set; }
    // public string CUR_RSS_VALUE { get; set; }
    // public string EXCEPTION_MESSAGE { get; set; }
    // public bool IS_EXCEPTION { get; set; }
    // public string ISRANGE { get; set; }
    TRANS_ID: number;
    ITEM_ID: number;
    CUSTOMER_NO: string;
    TRANSPORTER: string;
    ENTRY_TIME?: Date;
    EXIT_TIME?: Date;
    CUR_STATUS: string;
    CONTAINER_NO: string;
    CONTAINER_TYPE: string;
    CONTAINER_SIZE: string;
    DESIGN: string;
    COLOR: string;
    TYPE: string;
    IS_DAMAGE:string;
    BLE_ID:string;
    ISACTIVE: Boolean;
    LOCATION_ID: string;
    LINE_NUMBER: string;
    RELEASE_ORDER_NUMBER: string;
    CLEAN_TYPE: string;
    SEAL_NUMBER: string;

    DRIVER_NAME: string;
    DRIVER_DOB: string;
    LICENSE_NUMBER: string;
    LICENSE_EXPIRY: string;
    HELPER_NAME: string;
    HELPER_DOB: string;
    HELPER_ID_EXPIRY: string;
    RETURNABLE_GOODS: string;

    TRANSPORT_VENDOR: string;
    GATE_NUMBER: string;
    TRANSACTION_TYPE: string;

    SALES_CONTRACT_NO: string;
    CUSTOMER_NAME: string;
    AVAILABLE_SPACE: string;
    BOOKING_REFERENCE: string;
}
export class ReportFilters
{
    UserID: Guid;
    FROMDATE?: Date;
    TODATE?: Date;
    CONTAINER: string;
    CUSTOMER: string;
}
//          public Guid UserID { get; set; }
// public string CUSTOMER { get; set; }
// public string CONTAINER { get; set; }
// public DateTime FROMDATE { get; set; }
// public DateTime TODATE { get; set; }


    // public int ITEM_ID { get; set; }
    // public int TRANS_ID { get; set; }
    // public string BLE_ID { get; set; }
    // public string CUSTOMER_NO { get; set; }
    // public string TRANSPORTER { get; set; }
    // public string PLANT { get; set; }
    // public string CONTAINER_NO { get; set; }
    // public string CONTAINER_SIZE { get; set; }
    // public string DESIGN { get; set; }
    // public string TYPE { get; set; }
    // public string COLOR { get; set; }
    // public string IS_DAMAGE { get; set; }
    // public string CLEAN_TYPE { get; set; }
    // public string SEAL_NUMBER { get; set; }
    // public string LOCATION_ID { get; set; }
    // public string RELEASE_ORDER_NUMBER { get; set; }
    // public DateTime? ENTRY_TIME { get; set; }
    // public DateTime? EXIT_TIME { get; set; }
    // public string CUR_STATUS { get; set; }
    // public string FLAG { get; set; }
    // public bool ISACTIVE { get; set; }
    // public string DRIVER_NAME { get; set; }
    // public string DRIVER_DOB { get; set; }
    // public string LICENSE_NUMBER { get; set; }
    // public string LICENSE_EXPIRY { get; set; }
    // public string HELPER_NAME { get; set; }
    // public string HELPER_DOB { get; set; }
    // public string HELPER_ID_EXPIRY { get; set; }
    // public string TRANSPORT_VENDOR { get; set; }
    // public string RETURNABLE_GOODS { get; set; }
    // public string GATE_NUMBER { get; set; }
    // public string TRANSACTION_TYPE { get; set; }
