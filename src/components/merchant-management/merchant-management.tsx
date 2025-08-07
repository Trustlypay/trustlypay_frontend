import { useNavigate } from "react-router-dom";
import { routeMapMini } from "../../route-map";

const MerchantManagement = () => {
  const navigate = useNavigate();

  return (
    <div className="main scrollbar">
      <div className="section-header">
        <div className="playfair-display">Merchant Management</div>
        <div className="sub-route-items">
          <button
            className="sub-route"
            onClick={() => {
              navigate(`${routeMapMini.merchantManagementStep1}?step=1`);
            }}
          >
            <img src="/add-merchant.png" />
            Add Merchant
          </button>
        </div>
      </div>
    </div>
  );
};

export default MerchantManagement;
