import { useMutation, useQuery } from "@tanstack/react-query";
import { AxiosX } from "../../utils/axios";
import type { IMerchantManagementState } from "./interfaces/merchant-management-state.interface";
import type { IMerchantManagementBusinessCategory } from "./interfaces/merchant-management-business-category.interface";
import type { IMerchantManagementBusinessSubCategory } from "./interfaces/merchant-management-business-sub-category.interface";
import type { IMerchantManagementBusinessType } from "./interfaces/merchant-management-business-type.interface";
import type { IMerchantManagementMonthlyExpenditure } from "./interfaces/merchant-management-monthly-expenditure.interface";
import type { ICreateMerchantStep1 } from "./interfaces/create-merchant-step-1.interface";
import { merchantManagementService } from "./merchant-management.service.";
import type { RcFile } from "antd/es/upload";
import type { IUploadFileToSystem } from "./interfaces/upload-file-to-system.interface";
import type { IGetMerchantManagement } from "./interfaces/get-merchant-management.interface";
import type { IGetMerchantManagementStep } from "./interfaces/get-erchant-management-step.interface";
import type { ICreateMerchantStep2 } from "./interfaces/create-merchant-step-2.interface";

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

export const useCreateMerchantStep1 = () => {
  return useMutation({
    mutationFn: (args: {
      createMerchantStep1: ICreateMerchantStep1;
      onSuccess: (data: { pk_merchant_management_id: number }) => void;
      onError: () => void;
    }) => {
      return merchantManagementService.createMerchantStep1(
        args.createMerchantStep1
      );
    },
    onSuccess: (data, variables) => {
      variables.onSuccess(data);
    },
    onError: (_error, variables) => {
      variables.onError();
    },
  });
};

export const useUploadFileToSystem = () => {
  return useMutation({
    mutationFn: (args: {
      file: RcFile;
      merchantManagementId: string;
      fileFor: string;
      onSuccess: (data: IUploadFileToSystem) => void;
      onError: () => void;
    }) => {
      return merchantManagementService.uploadFileToSystem(
        args.file,
        args.merchantManagementId,
        args.fileFor
      );
    },
    onError: (_error, variables) => {
      variables.onError();
    },
    onSuccess: (data, variables) => {
      variables.onSuccess(data);
    },
  });
};

export const useGetMerchantManagementStep = (merchantManagementId: string) => {
  return useQuery({
    queryKey: ["merchantManagement.getMerchantManagementStep"],
    queryFn: async (): Promise<IGetMerchantManagementStep> => {
      const response = await AxiosX.get(
        `/merchant-management/get-merchant-management-step/${merchantManagementId}`
      );

      return response.data;
    },
  });
};

export const useGetMerchantManagement = () => {
  return useQuery({
    queryKey: ["merchantManagement.getMerchantManagement"],
    queryFn: async (): Promise<IGetMerchantManagement[]> => {
      const response = await AxiosX.get(
        `/merchant-management/get-merchant-management`
      );

      return response.data;
    },
  });
};

export const useCreateMerchantStep2 = () => {
  return useMutation({
    mutationFn: (args: {
      createMerchantStep2: ICreateMerchantStep2;
      onSuccess: (data: { fk_merchant_management_id: number }) => void;
      onError: () => void;
    }) => {
      return merchantManagementService.createMerchantStep2(
        args.createMerchantStep2
      );
    },
    onSuccess: (data, variables) => {
      variables.onSuccess(data);
    },
    onError: (_error, variables) => {
      variables.onError();
    },
  });
};
