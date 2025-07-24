import { useState } from "react";
import "./sidebar.css";

const Sidebar = () => {
  const [expanded, setExpanded] = useState(false);

  const handleMouseEnter = () => {
    setExpanded(true);
  };

  const onMouseLeave = () => {
    setExpanded(false);
  };

  const array = [
    { image: "/dashboard.svg", title: "Dashboard" },
    { image: "/payin.svg", title: "Pay-In" },
    { image: "/settlement.svg", title: "Settlement" },
    { image: "/payout.svg", title: "Pay-Out" },
    { image: "/technical.svg", title: "Technical" },
    { image: "/merchant-management.svg", title: "Merchant Management" },
    { image: "/complaince-security.svg", title: "Complaince/Security" },
    { image: "/reseller.svg", title: "Reseller" },
    { image: "/reports.svg", title: "Reports" },
    { image: "/access-management.svg", title: "Access-Management" },
  ];

  return (
    <aside className="sidebar">
      <ul
        className="sidebar-items"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {array.map((item) =>
          !expanded ? (
            <div className="item-label">
              <img src={item.image} />
            </div>
          ) : (
            <div className="item-label">
              <img src={item.image} />
              <div className="ellipsis-text">{item.title}</div>
            </div>
          )
        )}
      </ul>
    </aside>
  );
};

export default Sidebar;
