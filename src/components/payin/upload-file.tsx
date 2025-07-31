import React from "react";
import { UploadOutlined } from "@ant-design/icons";
import type { UploadProps } from "antd";
import { Button, message, Upload } from "antd";

const UploadFile: React.FC = () => {
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
        messageApi.error(`Only Xls,Xlsx files can be uploaded`);
      }
      return isFileValidType || Upload.LIST_IGNORE;
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        messageApi.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        messageApi.error(`${info.file.name} file upload failed.`);
      }
    },
    maxCount: 1,
  };
  const [messageApi, contextHolder] = message.useMessage();

  return (
    <>
      {contextHolder}
      <Upload {...props}>
        <Button icon={<UploadOutlined />}>Click to Upload</Button>
        <br></br> Only Xls,Xlsx files can be uploaded
      </Upload>
    </>
  );
};
export default UploadFile;
