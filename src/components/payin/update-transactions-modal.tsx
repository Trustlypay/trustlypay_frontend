import React, { useState } from "react";
import { Button, Modal } from "antd";

const UpdateTransactionsModal: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button type="primary" onClick={showModal}>
          Open Modal
        </Button>
      </div>
      <Modal
        closable={false}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={
          <div style={{ textAlign: "center" }}>
            <Button type="primary" onClick={() => setIsModalOpen(false)}>
              Done
            </Button>
          </div>
        }
      >
        <div style={{ textAlign: "center" }}>
          <img src="/tick-mark.png" style={{ padding: "50px" }} />
          <div style={{ fontSize: "20px" }}> 126 Transactions</div>
          <div style={{ fontSize: "20px" }}>
            Updated Chargeback/Success/Refund Successfully
          </div>
          <div style={{ margin: "20px" }}> Download Transaction List</div>
          <div className="flex-gap-8px">
            <img src="/icon-attachment.svg" style={{ filter: "invert(1)" }} />
            transaction_getstatus list.xls
            <img src="/download-icon.svg" style={{ filter: "invert(1)" }} />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default UpdateTransactionsModal;
