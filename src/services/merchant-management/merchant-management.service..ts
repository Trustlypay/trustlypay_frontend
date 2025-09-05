import type { RcFile } from "antd/es/upload";
import { AxiosX } from "../../utils/axios";
import type { ICreateMerchantStep1 } from "./interfaces/create-merchant-step-1.interface";
import type { IUploadFileToSystem } from "./interfaces/upload-file-to-system.interface";
import type { ICreateMerchantStep2 } from "./interfaces/create-merchant-step-2.interface";

export const merchantManagementService = {
  createMerchantStep1: async (
    createMerchantStep1: ICreateMerchantStep1
  ): Promise<{ pk_merchant_management_id: number }> => {
    const response = await AxiosX.post(
      `/merchant-management/create-merchant-step-1`,
      createMerchantStep1
    );

    return response.data;
  },

  uploadFileToSystem: async (
    file: RcFile,
    merchantManagementId: string,
    fileFor: string
  ): Promise<IUploadFileToSystem> => {
    const form = new FormData();
    form.append("file", file);
    form.append("merchantManagementId", merchantManagementId);
    form.append("fileFor", fileFor);

    const response = await AxiosX.post(
      `/merchant-management/upload-file-to-system`,
      form,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return response.data;
  },

  createMerchantStep2: async (
    createMerchantStep2: ICreateMerchantStep2
  ): Promise<{ fk_merchant_management_id: number }> => {
    const response = await AxiosX.post(
      `/merchant-management/create-merchant-step-2`,
      createMerchantStep2
    );

    return response.data;
  },
};
