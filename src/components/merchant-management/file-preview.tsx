import { useEffect, useState } from "react";
import { Modal, Spin } from "antd";
import { usePreviewDocumentByFileIdInFilePreview } from "../../services/aws-file-upload/aws-file-upload.hook";

type IFilePreview = {
  fileTitle: string;
  onClose: () => void;
  filePreview: boolean;
};

const FilePreview = ({ fileTitle, onClose, filePreview }: IFilePreview) => {
  const [previewData, setPreviewData] = useState<{
    url: string;
    fileExtension: string;
  }>();
  const [loadingForPreview, setLoadingForPreview] = useState<boolean>(true);

  const { refetch } = usePreviewDocumentByFileIdInFilePreview(20);

  useEffect(() => {
    const updatePreviewData = async () => {
      try {
        const updatedResult = await refetch();
        if (updatedResult.isSuccess) {
          setPreviewData({
            url: URL.createObjectURL(updatedResult.data.buffer),
            fileExtension: updatedResult.data.fileExtension,
          });
          setLoadingForPreview(false);
        } else if (updatedResult.isError) {
          setPreviewData(undefined);
          setLoadingForPreview(false);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    updatePreviewData();
  }, [refetch]);

  return (
    <Modal
      open={filePreview}
      destroyOnClose
      title={fileTitle}
      footer={null}
      onCancel={onClose}
      style={{ top: 0, height: "100%" }}
      width={"100%"}
    >
      <div>
        <div
          style={{
            minHeight: "100%",
            height: "89vh",
            overflowY: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {loadingForPreview ? (
            <Spin></Spin>
          ) : (
            (() => {
              switch (previewData?.fileExtension) {
                case "image/png":
                case "image/jpeg":
                  return <img width={"100%"} src={previewData?.url} />;

                case "application/pdf":
                  return (
                    <iframe
                      title="ok"
                      src={previewData?.url}
                      width="100%"
                      height="100%"
                    ></iframe>
                  );

                default:
                  return <p>Preview is not available</p>;
              }
            })()
          )}
        </div>
      </div>
    </Modal>
  );
};

export default FilePreview;
