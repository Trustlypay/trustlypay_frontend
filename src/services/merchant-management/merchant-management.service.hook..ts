import { useQuery } from "@tanstack/react-query";
import { AxiosX } from "../../utils/axios";
import type { IMerchantManagementState } from "./interfaces/merchant-management-state.interface";
import type { IMerchantManagementBusinessCategory } from "./interfaces/merchant-management-business-category.interface";
import type { IMerchantManagementBusinessSubCategory } from "./interfaces/merchant-management-business-sub-category.interface";
import type { IMerchantManagementBusinessType } from "./interfaces/merchant-management-business-type.interface";
import type { IMerchantManagementMonthlyExpenditure } from "./interfaces/merchant-management-monthly-expenditure.interface";

export const useGetMerchantManagementState = () => {
  return useQuery({
    queryKey: ["merchantManagement.getMerchantManagementState"],
    queryFn: async (): Promise<IMerchantManagementState[]> => {
      const response = await AxiosX.get(
        `/merchant-management/merchant-management-state`
      );

      return response.data;
    },
  });
};

export const useGetMerchantManagementBusinessCategory = () => {
  return useQuery({
    queryKey: ["merchantManagement.getMerchantManagementBusinessCategory"],
    queryFn: async (): Promise<IMerchantManagementBusinessCategory[]> => {
      const response = await AxiosX.get(
        `/merchant-management/merchant-management-business-category`
      );

      return response.data;
    },
  });
};

export const useGetMerchantManagementBusinessSubCategory = () => {
  return useQuery({
    queryKey: ["merchantManagement.getMerchantManagementBusinessSubCategory"],
    queryFn: async (): Promise<IMerchantManagementBusinessSubCategory[]> => {
      const response = await AxiosX.get(
        `/merchant-management/merchant-management-business-sub-category`
      );

      return response.data;
    },
  });
};

export const useGetMerchantManagementBusinessType = () => {
  return useQuery({
    queryKey: ["merchantManagement.getMerchantManagementBusinessType"],
    queryFn: async (): Promise<IMerchantManagementBusinessType[]> => {
      const response = await AxiosX.get(
        `/merchant-management/merchant-management-business-type`
      );

      return response.data;
    },
  });
};

export const useGetMerchantManagementMonthlyExpenditure = () => {
  return useQuery({
    queryKey: ["merchantManagement.getMerchantManagementMonthlyExpenditure"],
    queryFn: async (): Promise<IMerchantManagementMonthlyExpenditure[]> => {
      const response = await AxiosX.get(
        `/merchant-management/merchant-management-monthly-expenditure`
      );

      return response.data;
    },
  });
};
