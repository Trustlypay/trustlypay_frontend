import { AxiosX } from "../../utils/axios";

export const awsFileUpload = {
  previewDocumentByFileId: async (
    fileId: number
  ): Promise<{ buffer: Blob; fileExtension: string }> => {
    const response = await AxiosX.get(
      `awsfileupload/preview-document-in-system/${fileId}`,
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
};
