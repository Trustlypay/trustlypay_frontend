import { DatePicker, type TimeRangePickerProps } from "antd";
import dayjs from "dayjs";

const rangePresets: TimeRangePickerProps["presets"] = [
  { label: "Last 7 Days", value: [dayjs().add(-7, "d"), dayjs()] },
  { label: "Last 14 Days", value: [dayjs().add(-14, "d"), dayjs()] },
  { label: "Last 30 Days", value: [dayjs().add(-30, "d"), dayjs()] },
  { label: "Last 90 Days", value: [dayjs().add(-90, "d"), dayjs()] },
];

const RangePicker = () => {
  return (
    <DatePicker.RangePicker
      showTime
      presets={[
        {
          label: <span aria-label="Current Time to End of Day">Now ~ EOD</span>,
          value: () => [dayjs(), dayjs().endOf("day")],
        },
        ...rangePresets,
      ]}
    />
  );
};

export default RangePicker;
