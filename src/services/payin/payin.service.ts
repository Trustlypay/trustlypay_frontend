import { AxiosX } from "../../utils/axios";
import type { IDetailedTxnSummary } from "./interface/detailed-txn-summary.interface";

export const payinService = {
  detailedTxnSummary: async (
    fromDate: string,
    toDate: string,
    pageNumber: number,
    pageSize: number
  ): Promise<IDetailedTxnSummary[]> => {
    const query = `?fromDate=${fromDate}&toDate=${toDate}&pageNumber=${pageNumber}&pageSize=${pageSize}`;

    const response = await AxiosX.get(
      `/dashboard-payin/detailed-txn-summary${query}`
    );

    return response.data;
  },
};
