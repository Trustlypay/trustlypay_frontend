import { useQuery } from "@tanstack/react-query";
import { payinService } from "./payin.service";

export const useDetailedTxnSummary = (
  fromDate: string,
  toDate: string,
  pageNumber: number,
  pageSize: number
) => {
  return useQuery({
    queryKey: [
      "payinService.detailedTxnSummary",
      fromDate,
      toDate,
      pageNumber,
      pageSize,
    ],
    queryFn: async () =>
      await payinService.detailedTxnSummary(
        fromDate,
        toDate,
        pageNumber,
        pageSize
      ),
  });
};

export const useDetailedPayInSummary = () => {
  return useQuery({
    queryKey: ["payinService.detailedPayInSummary"],
    queryFn: async () => await payinService.detailedPayInSummary(),
  });
};
