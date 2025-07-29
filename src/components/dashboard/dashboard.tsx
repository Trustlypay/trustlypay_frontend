import "./dashboard.css";
import { DatePicker, Select, Table, type TimeRangePickerProps } from "antd";
import TransactionsCards from "./transactions-cards";
import TransactionsGraphs from "./transactions-graphs";
import dayjs from "dayjs";

const rangePresets: TimeRangePickerProps["presets"] = [
  { label: "Last 7 Days", value: [dayjs().add(-7, "d"), dayjs()] },
  { label: "Last 14 Days", value: [dayjs().add(-14, "d"), dayjs()] },
  { label: "Last 30 Days", value: [dayjs().add(-30, "d"), dayjs()] },
  { label: "Last 90 Days", value: [dayjs().add(-90, "d"), dayjs()] },
];

const Dashboard = () => {
  return (
    <div className="main">
      <div className="welcome playfair-display">I Welcome, Kiran</div>
      <div className="pay-in">
        <div className="pay-in-overview-section">
          <div className="font-size-32 playfair-display">Pay In Overview</div>
          <div style={{ display: "flex", gap: "15px" }}>
            <DatePicker.RangePicker
              showTime
              presets={[
                {
                  label: (
                    <span aria-label="Current Time to End of Day">
                      Now ~ EOD
                    </span>
                  ),
                  value: () => [dayjs(), dayjs().endOf("day")], // 5.8.0+ support function
                },
                ...rangePresets,
              ]}
            />
            <Select style={{ width: "120px" }} defaultValue={"m1"}>
              <Select.Option value="m1">m1</Select.Option>
              <Select.Option value="m2">m2</Select.Option>
              <Select.Option value="m3">m3</Select.Option>
              <Select.Option value="m4">m4</Select.Option>
            </Select>
            <button className="update-btn">Update</button>
          </div>
        </div>
        <TransactionsCards />
        <TransactionsGraphs />
      </div>
      <div style={{ border: "1px dashed white" }}></div>
      <div className="pay-in">
        <div className="pay-in-overview-section">
          <div className="font-size-32 playfair-display">Pay Out Overview</div>
        </div>
        <TransactionsCards />
        <TransactionsGraphs />

        <div style={{ border: "1px dashed white" }}></div>
        <Table />
      </div>
    </div>
  );
};

export default Dashboard;
