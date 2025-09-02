import { AxiosX } from "../../utils/axios";
import type { RcFile } from "antd/es/upload";

export const awsFileUpload = {
  previewDocumentByFileId: async (
    fileId: number
  ): Promise<{ buffer: Blob; fileExtension: string }> => {
    const response = await AxiosX.get(
      `/awsfileupload/preview-document-in-system/${fileId}`,
      {
        responseType: "blob",
      }
    );

    if (!response.headers["content-type"]) {
      throw new Error("File Type not found in response header");
    }

    return {
      buffer: response.data,
      fileExtension: response.headers["content-type"],
    };
  },

  uploadNewFile: async (file: RcFile): Promise<{ fileUploadedId: number }> => {
    const form = new FormData();
    form.append("file", file);

    const response = await AxiosX.post<number>(
      `/awsfileupload/upload-file-to-system`,
      form
    );

    return { fileUploadedId: response.data };
  },
};
