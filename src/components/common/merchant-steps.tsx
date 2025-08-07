import { Progress } from "antd";
import { useSearchParams } from "react-router-dom";

const MerchantSteps = () => {
  const [searchParams] = useSearchParams();

  return (
    <>
      <div className="playfair-display">Merchant Onboarding</div>
      <div>
        <div style={{ textAlign: "end", fontWeight: 800 }}>
          <span style={{ color: "var(--primary-color)" }}>
            step {Number(searchParams.get("step"))}
          </span>{" "}
          of 6
        </div>
        <div
          className="display-flex"
          style={{
            width: "500px",
            marginTop: -10,
          }}
        >
          <Progress
            percent={100}
            success={{
              percent: (Number(searchParams.get("step")) / 6) * 100,
              strokeColor: "var(--primary-color)",
            }}
            showInfo={false}
            strokeColor={"#1F3F0A"}
            size={{ width: 500, height: 1 }}
          />
        </div>
      </div>
    </>
  );
};

export default MerchantSteps;
