import { useQuery } from "@tanstack/react-query";
import { awsFileUpload } from "./aws-file-upload.service";

export const usePreviewDocumentByFileIdInFilePreview = (
  fileUploadId: number
) => {
  return useQuery({
    queryKey: ["fileUploadService.previewDocumentByFileId"],
    queryFn: async () => awsFileUpload.previewDocumentByFileId(fileUploadId),
  });
};
