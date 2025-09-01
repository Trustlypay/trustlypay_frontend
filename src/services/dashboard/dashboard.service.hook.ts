import { useQuery } from "@tanstack/react-query";
import { AxiosX } from "../../utils/axios";

export const useMerchantRoutingDetails = () => {
  return useQuery({
    queryKey: ["dashboard.merchantRoutingDetails"],
    queryFn: async (): Promise<any[]> => {
      const response = await AxiosX.get(`/dashboard/merchant-routing-details`);

      return response.data;
    },
  });
};
