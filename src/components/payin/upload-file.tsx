import React from "react";
import { UploadOutlined } from "@ant-design/icons";
import type { UploadProps } from "antd";
import { Button, Upload, App } from "antd";

const UploadFile: React.FC = () => {
  const { message } = App.useApp();

  const props: UploadProps = {
    name: "file",
    action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
    headers: {
      authorization: "authorization-text",
    },
    beforeUpload: (file) => {
      const isFileValidType = [
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        "application/vnd.ms-excel",
      ].includes(file.type);

      if (!isFileValidType) {
        message.error("Only Xls, Xlsx files can be uploaded");
      }

      return isFileValidType || Upload.LIST_IGNORE;
    },
    onChange(info) {
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    maxCount: 1,
  };

  return (
    <Upload {...props} style={{ textAlign: "center" }}>
      <Button icon={<UploadOutlined />}>Click to Upload</Button>
      <br /> Only Xls, Xlsx files can be uploaded
    </Upload>
  );
};

export default UploadFile;
