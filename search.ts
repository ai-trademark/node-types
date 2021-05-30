import * as TmEnums from "./tm.enums";

declare namespace TmSearch {
  namespace Request {}

  interface MiddlewareResponse {
    query: string;
    results: Array<DbRes.TmDetailsUserFacing | DbRes.TmDetailsUserFacing>;
    useCache: boolean;
    elapsedTime: number;
  }

  // TODO: Make it have more sense, e.g. review this declaration
  interface PagedResponse {
    results: Array<{
      ST13: string;
      tmName: string;
    }>;
    resultCount: number;
  }

  namespace DbRes {
    /**
     * Data that will be displayed to users.
     */
    interface TmIndexUserFacing {
      ST13: string;
      tmName: string;
      tmOffice: TmEnums.TrademarkOffice;
      tProtection: Array<TmEnums.TrademarkOffice | any>;
      applicationNumber: string;
      tradeMarkStatus: TmEnums.TrademarkStatus;
      niceClass: Array<number>;
      applicantName: Array<string>;
      applicationDate: string;
      tradeMarkType: TmEnums.TrademarkType;
    }

    /**
     * Temporary placeholding
     */
    interface TmDetailsUserFacing {
      ST13: string;
      tmName: string;
      tmOffice: TmEnums.TrademarkOffice;
      tProtection: Array<TmEnums.TrademarkOffice | any>;
      applicationNumber: string;
      tradeMarkStatus: TmEnums.TrademarkStatus;
      niceClass: Array<number>;
      applicantName: Array<string>;
      applicationDate: string;
      tradeMarkType: TmEnums.TrademarkType;
    }

    interface TmIndexRaw extends TmIndexUserFacing {
      _id: Buffer;
      markImageURI: string;
      detailImageURI: string;
      tmOfficeURL: string;
      imageCrawled: boolean;
      completedDateTime: string;
      hasDetails: boolean;
      detailCompletedDateTime: string;
    }
  }
}

export = TmSearch;
