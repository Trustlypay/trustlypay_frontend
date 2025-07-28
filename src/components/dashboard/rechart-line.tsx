import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "0",
    success: 2400,
    pending: 4000,
    failed: 2400,
  },
  {
    name: "3",
    success: 1398,
    pending: 3000,
    failed: 2210,
  },
  {
    name: "6",
    success: 9800,
    pending: 8000,
    failed: 2290,
  },
  {
    name: "9",
    success: 3908,
    pending: 2780,
    failed: 2000,
  },
  {
    name: "12",
    success: 4800,
    pending: 1890,
    failed: 2181,
  },
  {
    name: "15",
    success: 3800,
    pending: 8790,
    failed: 2500,
  },
  {
    name: "18",
    success: 4300,
    pending: 9490,

    failed: 2100,
  },
  {
    name: "21",
    success: 4800,
    pending: 1890,
    failed: 2181,
  },
];

export default function TransactionLinechart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        data={data}
        margin={{
          top: 5,
          right: 5,
          left: 5,
          bottom: 5,
        }}
      >
        <XAxis dataKey="name" tick={{ fontSize: 12 }} />
        <YAxis tick={{ fontSize: 12 }} />
        <Legend
          content={(props: any) => {
            const { payload } = props;
            const sorted = [...payload].sort((a, b) =>
              b.value.localeCompare(a.value)
            );
            return (
              <ul
                style={{
                  display: "flex",
                  gap: "48px",
                  justifyContent: "center",
                }}
              >
                {sorted.map((entry, index) => (
                  <li key={index} style={{ color: entry.color }}>
                    {entry.value}
                  </li>
                ))}
              </ul>
            );
          }}
        />
        <Line
          type="monotone"
          dataKey="success"
          stroke="#6EB83D"
          strokeWidth={4}
        />
        <Line
          type="monotone"
          dataKey="pending"
          stroke="#EFA00B"
          strokeWidth={4}
        />
        <Line
          type="monotone"
          dataKey="failed"
          stroke="#FC5130"
          strokeWidth={4}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
