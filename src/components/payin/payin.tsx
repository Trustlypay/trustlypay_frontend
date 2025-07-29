import { useNavigate } from "react-router-dom";
import { routeMapMini } from "../../route-map";

const Payin = () => {
  const navigate = useNavigate();
  return (
    <div className="main">
      <div className="section-header">
        <div className="font-size-32 playfair-display">Pay In</div>
        <div className="sub-route-items">
          <button
            className="sub-route"
            onClick={() => {
              navigate(routeMapMini.detailedTransactions);
            }}
          >
            Detailed Transactions
          </button>
          <button className="sub-route">Update Transactions</button>
          <button className="sub-route">Check Status</button>
        </div>
      </div>
      <div style={{ border: "1px dashed #CFD8D7 " }}></div>
      <div></div>
    </div>
  );
};

export default Payin;
