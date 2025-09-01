import { AxiosX } from "../../utils/axios";
import type {
  IDetailedTxnSummary,
  Paginate,
} from "./interface/detailed-txn-summary.interface";

export const payinService = {
  detailedTxnSummary: async (
    fromDate: string,
    toDate: string,
    pageNumber: number,
    pageSize: number,
    searchTransactionIDText?: string,
    searchUTRText?: string,
    searchUDF1Text?: string
  ): Promise<Paginate<IDetailedTxnSummary[]>> => {
    let query = `?fromDate=${fromDate}&toDate=${toDate}&pageNumber=${pageNumber}&pageSize=${pageSize}`;

    if (searchTransactionIDText) {
      query += `&transactionId=${searchTransactionIDText}`;
    }

    if (searchUTRText) {
      query += `&utr=${searchUTRText}`;
    }

    if (searchUDF1Text) {
      query += `&udf1=${searchUDF1Text}`;
    }

    const response = await AxiosX.get(
      `/dashboard-payin/detailed-txn-summary${query}`
    );

    return response.data;
  },
};
