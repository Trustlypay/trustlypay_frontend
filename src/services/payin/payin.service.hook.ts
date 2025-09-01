import { useQuery } from "@tanstack/react-query";
import { payinService } from "./payin.service";
import { AxiosX } from "../../utils/axios";

export const useDetailedPayInSummary = () => {
  return useQuery({
    queryKey: ["payinService.detailedPayInSummary"],
    queryFn: async (): Promise<any[]> => {
      const response = await AxiosX.get(
        `/dashboard-payin/dashboard-payin-summary`
      );

      return response.data;
    },
  });
};

export const useDetailedTxnSummary = (
  fromDate: string,
  toDate: string,
  pageNumber: number,
  pageSize: number,
  searchTransactionIDText?: string,
  searchUTRText?: string,
  searchUDF1Text?: string
) => {
  return useQuery({
    queryKey: [
      "payinService.detailedTxnSummary",
      fromDate,
      toDate,
      pageNumber,
      pageSize,
      searchTransactionIDText,
      searchUTRText,
      searchUDF1Text,
    ],
    queryFn: async () =>
      await payinService.detailedTxnSummary(
        fromDate,
        toDate,
        pageNumber,
        pageSize,
        searchTransactionIDText,
        searchUTRText,
        searchUDF1Text
      ),
  });
};
