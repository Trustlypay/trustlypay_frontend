import { useQuery } from "@tanstack/react-query";
import { AxiosX } from "../../utils/axios";

export const useDetailedPayOutSummary = () => {
  return useQuery({
    queryKey: ["payOutService.detailedPayOutSummary"],
    queryFn: async (): Promise<any[]> => {
      const response = await AxiosX.get(
        `/dashboard-payout/dashboard-payout-summary`
      );

      return response.data;
    },
  });
};
