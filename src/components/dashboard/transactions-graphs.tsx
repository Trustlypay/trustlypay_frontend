import TransactionsPieChart from "./rchart-pie";
import TransactionLinechart from "./rechart-line";

const TransactionsGraphs = () => {
  return (
    <section
      style={{
        display: "flex",
        height: "300px",
        gap: "36px",
      }}
    >
      <div style={{ flex: 2 }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "14px",
            height: "100%",
          }}
        >
          <div>Transaction Trend</div>
          <div style={{ height: "100%" }}>
            <TransactionLinechart />
          </div>
        </div>
      </div>
      <div style={{ border: "1px dashed #CFD8D7" }}></div>
      <div style={{ flex: 1 }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "14px",
            height: "100%",
          }}
        >
          <div>Transaction Ratio </div>
          <div style={{ height: "100%" }}>
            <TransactionsPieChart />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransactionsGraphs;
