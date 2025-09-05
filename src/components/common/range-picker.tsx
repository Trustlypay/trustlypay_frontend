import { DatePicker, Typography, type TimeRangePickerProps } from "antd";
import dayjs from "dayjs";

const { Paragraph } = Typography;

const rangePresets: TimeRangePickerProps["presets"] = [
  { label: "Last 7 Days", value: [dayjs().add(-7, "d"), dayjs()] },
  { label: "Last 14 Days", value: [dayjs().add(-14, "d"), dayjs()] },
  { label: "Last 30 Days", value: [dayjs().add(-30, "d"), dayjs()] },
  { label: "Last 90 Days", value: [dayjs().add(-90, "d"), dayjs()] },
];

const RangePicker = ({
  fromDate,
  toDate,
  setFromDate,
  setToDate,
}: {
  fromDate?: string;
  toDate?: string;
  setFromDate?: React.Dispatch<React.SetStateAction<string>>;
  setToDate?: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const onDateChange = (_dates: any, dateStrings: [string, string]) => {
    console.log("dateStrings", dateStrings);
    setFromDate?.(dateStrings[0]);
    setToDate?.(dateStrings[1]);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        gap: "12px",
      }}
    >
      <Paragraph style={{ margin: 0 }}>Date </Paragraph>
      <DatePicker.RangePicker
        value={[
          fromDate ? dayjs(fromDate) : null,
          toDate ? dayjs(toDate) : null,
        ]}
        showTime
        presets={[
          {
            label: (
              <span aria-label="Current Time to End of Day">Now ~ EOD</span>
            ),
            value: () => [dayjs(), dayjs().endOf("day")],
          },
          ...rangePresets,
        ]}
        onChange={onDateChange}
      />
    </div>
  );
};

export default RangePicker;
