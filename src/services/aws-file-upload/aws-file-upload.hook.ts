import { useMutation, useQuery } from "@tanstack/react-query";
import { awsFileUpload } from "./aws-file-upload";
import type { RcFile } from "antd/es/upload";

export const usePreviewDocumentByFileIdInFilePreview = (
  fileUploadId: number
) => {
  return useQuery({
    queryKey: ["fileUploadService.previewDocumentByFileId"],
    queryFn: async () => awsFileUpload.previewDocumentByFileId(fileUploadId),
  });
};

export const useUploadNewFile = () => {
  return useMutation({
    mutationFn: (args: {
      file: RcFile;
      onSuccess: (
        data: {
          fileUploadedId: number;
        },
        variables: {
          file: RcFile;
        }
      ) => void;
      onError: () => void;
    }) => {
      return awsFileUpload.uploadNewFile(args.file);
    },
    onError: (_error, variables) => {
      variables.onError();
    },
    onSuccess: (data, variables) => {
      variables.onSuccess(data, variables);
    },
  });
};
