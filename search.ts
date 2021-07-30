import { TmEnums } from './tm.enums';

declare namespace TmSearch {
  namespace Request { }

  interface MiddlewareResponse {
    query: string;
    results: Array<DbRes.TmIndexUserFacing | DbRes.TmDetailsUserFacing>;
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
}

declare namespace DbRes {
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
    codeRegistrationDate?: string;
    expiryDate?: string;
    markCurrentStatusCode?: string;
    kindMark?: string;
    markCurrentStatusDate?: string;
    markFeature?: string;
    registrationNumber?: string;
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

  interface TmDetails {
    ST13: string;
    appeals: Array<any>;
    applicants: Array<{
      addressDetails: {
        countryCode: string;
      },
      fullAddress: string,
      fullName: string;
    }>;
    cancelations: Array<any>;
    exhibitionPriority: Array<any>;
    goodsAndServicesList: Array<{
      goodAndServices: {
        goodAndServiceList: Array<{
          niceClass: string;
          goodsAndServices: Array<{
            term: string;
          }>
        }>
      },
      language: string;
    }>;
    imageCrawled: boolean;
    insertionDateTime: string;
    internationalRegistrationTransformation: Array<any>;
    officeLastUpdateDate: string;
    officeLogoUrl: string;
    officeNumberOfTradeMark: string;
    officeUrl: string;
    oppositions: Array<any>;
    priority: Array<any>;
    publication: Array<{
      date: string;
      section: string;
    }>;
    renewals: Array<any>;
    representatives: Array<{
      addressDetails: {
        countryCode: string;
      },
      fullAddress: string,
      fullName: string;
    }>;
    seniority: Array<any>;
    sound: Array<any>;
    threeDModel: Array<any>;
    tmOfficeURL: string;
    tradeMark: TmIndexUserFacing;
    video: Array<any>;
    viennaCodes: Array<any>;
    _id: string;
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

export { TmSearch, DbRes };
