import { TmEnums } from './tm.enums';

declare namespace EsType {
    interface ImageSearchResponse {
        id: string;
        score: number;
        metadata: {
            tmName: string;
            applicationNumber: string;
            registrationNumber: string;
            tmOffice: TmEnums.TrademarkOffice;
        }
    }
}

export {
    EsType
}