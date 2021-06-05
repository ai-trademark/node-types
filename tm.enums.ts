declare namespace TmEnums {
  /**
   * List of WIPO associated offices taken from
   * https://www.tmdn.org/tmview/api/search/filter/offices
   */
  type TrademarkOffice =
    | "AL"
    | "AP"
    | "AR"
    | "AT"
    | "AU"
    | "BA"
    | "BG"
    | "BN"
    | "BR"
    | "BX"
    | "CA"
    | "CH"
    | "CL"
    | "CO"
    | "CR"
    | "CU"
    | "CY"
    | "CZ"
    | "DE"
    | "DK"
    | "EE"
    | "EM"
    | "ES"
    | "FI"
    | "FR"
    | "GB"
    | "GE"
    | "GR"
    | "HR"
    | "HU"
    | "IE"
    | "IL"
    | "IN"
    | "IS"
    | "IT"
    | "JO"
    | "JP"
    | "KH"
    | "KR"
    | "LA"
    | "LI"
    | "LT"
    | "LV"
    | "MA"
    | "MC"
    | "MD"
    | "ME"
    | "MK"
    | "MT"
    | "MX"
    | "MY"
    | "NO"
    | "NZ"
    | "OA"
    | "PE"
    | "PH"
    | "PL"
    | "PT"
    | "RO"
    | "RS"
    | "RU"
    | "SE"
    | "SI"
    | "SK"
    | "SM"
    | "TH"
    | "TN"
    | "TR"
    | "US"
    | "UY"
    | "WO";

  /**
   * List of WIPO trademark statuses taken from
   * https://www.tmdn.org/tmview/api/search/filter/trademarkStatuses
   */
  type TrademarkStatus = "Filed" | "Ended" | "Expired" | "Registered";

  /**
   * List of WIPO trademark types taken from
   * https://www.tmdn.org/tmview/api/search/filter/trademarkTypes
   */
  type TrademarkType =
    | "\n            Undefined\n          "
    | "3-D"
    | "Colour"
    | "Combination of colours"
    | "Combined"
    | "Figurative"
    | "General mark"
    | "Hologram"
    | "Kennfaden"
    | "Motion"
    | "Multimedia"
    | "Number"
    | "Olfactory"
    | "Other"
    | "Packing"
    | "Pattern"
    | "Position"
    | "Sound"
    | "Stylized characters"
    | "Undefined"
    | "Word";
}

export { TmEnums };
