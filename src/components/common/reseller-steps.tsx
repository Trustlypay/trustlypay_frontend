import { Progress } from "antd";
import { useSearchParams } from "react-router-dom";

const totalSteps = 4;

const ResellerSteps = () => {
  const [searchParams] = useSearchParams();

  return (
    <>
      <div className="playfair-display">Reseller Onboarding</div>
      <div>
        <div style={{ textAlign: "end", fontWeight: 800 }}>
          <span style={{ color: "var(--primary-color)" }}>
            step {Number(searchParams.get("step"))}
          </span>{" "}
          of {totalSteps}
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
              percent: (Number(searchParams.get("step")) / totalSteps) * 100,
              strokeColor: "var(--primary-color)",
            }}
            showInfo={false}
            strokeColor={"#1F3F0A"}
            size={{ width: 500, height: 3 }}
          />
        </div>
      </div>
    </>
  );
};

export default ResellerSteps;
