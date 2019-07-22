export class TransactionDetails {
    TRANS_ID: number;
    ITEM_ID: number;
    CUSTOMER_NO: string;
    TRANSPORTER: string;
    ENTRY_TIME?: Date;
    EXIT_TIME?: Date;
    CUR_STATUS: string;
    CONTAINER_NO: string;
    CONTAINER_SIZE: string;
    DESIGN: string;
    COLOR: string;
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
    FLAG: string;
    STATUS: string;
    
    SALES_CONTRACT_NO: string;
    CUSTOMER_NAME: string;
    AVAILABLE_SPACE: string;

    BOOKING_REFERENCE: string;

    ISEXCEPTION: boolean;
    EXCEPTION_MESSAGE: string;
    // [Key]
    // public int TRANS_ID { get; set; }
    // [Required]
    // public string TRUCK_ID { get; set; }
    // [Required]
    // public string VEHICLE_NO { get; set; }
    // public string TYPE { get; set; }
    // public DateTime? GENTRY_TIME { get; set; }
    // public DateTime? GEXIT_TIME { get; set; }
    // public DateTime? LENTRY_TIME { get; set; }
    // public DateTime? LEXIT_TIME { get; set; }
    // public DateTime? ULENTRY_TIME { get; set; }
    // public DateTime? ULEXIT_TIME { get; set; }
    // public DateTime? PENTRY_TIME { get; set; }
    // public DateTime? PEXIT_TIME { get; set; }
    // public string PRE_STATUS { get; set; }
    // public string CUR_STATUS { get; set; }
    // public string BAY { get; set; }
    // public string VENDOR { get; set; }
    // public string DRIVER_DETAILS { get; set; }
    // public bool ISACTIVE { get; set; }
}
export class QueueDetails {
    TRANS_ID: number;
    TRUCK_ID: string;
    VEHICLE_NO: string;
    TYPE: string;
    GENTRY_TIME?: Date;
    GEXIT_TIME?: Date;
    PENTRY_TIME?: Date;
    PEXIT_TIME?: Date;
    LENTRY_TIME?: Date;
    LEXIT_TIME?: Date;
    ULENTRY_TIME?: Date;
    ULEXIT_TIME?: Date;
    PRE_STATUS: string;
    CUR_STATUS: string;
    BAY: string;
    VENDOR: string;
    DRIVER_DETAILS: string;
    ISACTIVE: Boolean;
    TRANSPORTER_NAME: string;
    LINE_NUMBER: string;
    CUSTOMER_NAME: string;
    FG_DESCRIPTION: string;
    // [Key]
    // public int TRANS_ID { get; set; }
    // [Required]
    // public string TRUCK_ID { get; set; }
    // [Required]
    // public string VEHICLE_NO { get; set; }
    // public string TYPE { get; set; }
    // public DateTime? GENTRY_TIME { get; set; }
    // public DateTime? GEXIT_TIME { get; set; }
    // public DateTime? LENTRY_TIME { get; set; }
    // public DateTime? LEXIT_TIME { get; set; }
    // public DateTime? ULENTRY_TIME { get; set; }
    // public DateTime? ULEXIT_TIME { get; set; }
    // public DateTime? PENTRY_TIME { get; set; }
    // public DateTime? PEXIT_TIME { get; set; }
    // public string PRE_STATUS { get; set; }
    // public string CUR_STATUS { get; set; }
    // public string BAY { get; set; }
    // public string VENDOR { get; set; }
    // public string DRIVER_DETAILS { get; set; }
    // public bool ISACTIVE { get; set; }
}
export class StackDetails {
    TRANS_ID: number;
    TRUCK_ID: string;
    VEHICLE_NO: string;
    TYPE: string;
    GENTRY_TIME?: Date;
    GEXIT_TIME?: Date;
    PENTRY_TIME?: Date;
    PEXIT_TIME?: Date;
    LENTRY_TIME?: Date;
    LEXIT_TIME?: Date;
    ULENTRY_TIME?: Date;
    ULEXIT_TIME?: Date;
    PRE_STATUS: string;
    CUR_STATUS: string;
    BAY: string;
    VENDOR: string;
    DRIVER_DETAILS: string;
    ISACTIVE: Boolean;
    TRANSPORTER_NAME: string;
    LINE_NUMBER: string;
    CUSTOMER_NAME: string;
    FG_DESCRIPTION: string;

    // [Key]
    // public int TRANS_ID { get; set; }
    // [Required]
    // public string TRUCK_ID { get; set; }
    // [Required]
    // public string VEHICLE_NO { get; set; }
    // public string TYPE { get; set; }
    // public DateTime? GENTRY_TIME { get; set; }
    // public DateTime? GEXIT_TIME { get; set; }
    // public DateTime? LENTRY_TIME { get; set; }
    // public DateTime? LEXIT_TIME { get; set; }
    // public DateTime? ULENTRY_TIME { get; set; }
    // public DateTime? ULEXIT_TIME { get; set; }
    // public DateTime? PENTRY_TIME { get; set; }
    // public DateTime? PEXIT_TIME { get; set; }
    // public string PRE_STATUS { get; set; }
    // public string CUR_STATUS { get; set; }
    // public string BAY { get; set; }
    // public string VENDOR { get; set; }
    // public string DRIVER_DETAILS { get; set; }
    // public bool ISACTIVE { get; set; }
}
export class TransDetailsByID {
    TransactionDetails: TransactionDetails;
    DateDiffrence: string;
}
export class TransactionDetailsByLocationID {
    TRANS_ID: number;
    ITEM_ID: number;
    CUSTOMER_NO: string;
    TRANSPORTER: string;
    ENTRY_TIME?: Date;
    EXIT_TIME?: Date;
    CUR_STATUS: string;
    CONTAINER_NO: string;
    CONTAINER_SIZE: string;
    DESIGN: string;
    COLOR: string;
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
}
