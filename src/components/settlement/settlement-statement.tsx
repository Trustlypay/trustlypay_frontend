import { useSearchParams } from "react-router-dom";
import MainContentHeader from "../common/main-content-header";
import AntdTable from "../common/antd-table";
import dayjs from "dayjs";
import { Progress, Typography } from "antd";
import RangePicker from "../common/range-picker";

const { Paragraph } = Typography;

const status = ["Settled", "Pending"];
const settledBy = ["Shesh", "Varun Sai", "Dinesh", "Abhishek"];

const dataSource = Array.from({ length: 500 }).map((_, i) => ({
  "Initiation Time": dayjs().add(i, "s").format("YYYY-MM-DD HH:mm:ss"),
  "Settled Time": dayjs().add(i, "s").format("YYYY-MM-DD HH:mm:ss"),
  "Settlement ID": "TPcO1qyEQJhpgP" + i * 10,
  Amount: Math.floor(Math.random() * 100000).toLocaleString("en-IN"),
  Status: status[Math.floor(Math.random() * status.length)],
  "Settled By": settledBy[Math.floor(Math.random() * settledBy.length)],
}));

const SettlementStatement = () => {
  const [searchParams] = useSearchParams();

  const columns = [
    {
      title: "Initiation Time",
      dataIndex: "Initiation Time",
      key: "Initiation Time",
    },
    {
      title: "Settled Time",
      dataIndex: "Settled Time",
      key: "Settled Time",
    },
    {
      title: "Settlement ID",
      dataIndex: "Settlement ID",
      key: "Settlement ID",
      render: (value: any) => (
        <Paragraph copyable style={{ color: "var(--primary-color)" }}>
          {value}
        </Paragraph>
      ),
    },
    {
      title: "Amount",
      dataIndex: "Amount",
      key: "Amount",
      render: (value: string) => <div>{"₹ " + value}</div>,
    },
    {
      title: "Status",
      dataIndex: "Status",
      key: "Status",
      render: (value: any) => {
        switch (value) {
          case "Settled":
            return <div className="status success-status-color">{value}</div>;
          case "Pending":
            return <div className="status pending-status-color">{value}</div>;
        }
      },
      filters: status.map((item) => {
        return { text: item, value: item };
      }),
      filterSearch: true,
      onFilter: (value: boolean | React.Key, record: any) => {
        return record.Status === (value as string);
      },
    },
    {
      title: "Settled By",
      dataIndex: "Settled By",
      key: "Settled By",
      filters: settledBy.map((item) => {
        return { text: item, value: item };
      }),
      onFilter: (value: boolean | React.Key, record: any) => {
        return record?.["Settled By"] === (value as string);
      },
    },
  ];

  return (
    <div className="main">
      <MainContentHeader
        title="Settlement Statement"
        breadcrumb={`/settlement/${searchParams
          .get("merchnat-name")
          ?.toString()} statement`}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            width: "460px",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              Total Settled Amount{" "}
              <span style={{ color: "var(--primary-color)" }}>₹ 3,684</span>
            </div>
            <div>
              Total UnSettled Amount{" "}
              <span style={{ color: "#EFA00B" }}>₹ 8,512</span>
            </div>
          </div>
          <Progress
            percent={100}
            success={{
              percent: 30,
              strokeColor: "var(--primary-color)",
            }}
            showInfo={false}
            strokeColor={"#EFA00B"}
          />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            gap: "12px",
          }}
        >
          <Paragraph style={{ margin: 0 }}>Date : </Paragraph>
          <RangePicker />
        </div>
      </div>
      <AntdTable dataSource={dataSource} columns={columns} />
    </div>
  );
};

export default SettlementStatement;
