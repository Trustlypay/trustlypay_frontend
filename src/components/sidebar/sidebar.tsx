import { useState } from "react";
import "./sidebar.css";
import { routeMapMini } from "../../route-map";
import { useLocation, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleMouseEnter = () => {
    setExpanded(true);
  };

  const onMouseLeave = () => {
    setExpanded(false);
  };

  const array = [
    {
      image: "/dashboard.svg",
      title: "Dashboard",
      activeImage: "/active/dashboard.png",
      route: routeMapMini.dashboard,
    },
    {
      image: "/payin.svg",
      title: "Pay-In",
      activeImage: "/active/payin.png",
      route: routeMapMini.payin,
    },
    {
      image: "/settlement.svg",
      title: "Settlement",
      activeImage: "/active/settlement.png",
      route: routeMapMini.settlement,
    },
    {
      image: "/payout.svg",
      title: "Pay-Out",
      activeImage: "/active/payout.png",
      route: routeMapMini.payout,
    },
    {
      image: "/technical.svg",
      title: "Technical",
      activeImage: "/active/technical.png",
      route: routeMapMini.technical,
    },
    {
      image: "/merchant-management.svg",
      title: "Merchant Management",
      activeImage: "/active/merchant-management.png",
      route: routeMapMini.merchantManagement,
    },
    {
      image: "/complaince-security.svg",
      title: "Complaince/Security",
      activeImage: "/active/complaince-security.png",
      route: routeMapMini.complainceSecurity,
    },
    {
      image: "/reseller.svg",
      title: "Reseller",
      activeImage: "/active/reseller.png",
      route: routeMapMini.reseller,
    },
    {
      image: "/reports.svg",
      title: "Reports",
      activeImage: "/active/reports.png",
      route: routeMapMini.reports,
    },
    {
      image: "/access-management.svg",
      title: "Access-Management",
      activeImage: "/active/access-management.png",
      route: routeMapMini.accessManagement,
    },
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
              <img
                src={
                  location.pathname.includes(item.route)
                    ? item.activeImage
                    : item.image
                }
              />
            </div>
          ) : (
            <div
              className="item-label current-item"
              onClick={() => {
                navigate(item.route);
              }}
            >
              <img
                src={
                  location.pathname.includes(item.route)
                    ? item.activeImage
                    : item.image
                }
              />
              <div className="ellipsis-text">{item.title}</div>
            </div>
          )
        )}
      </ul>
    </aside>
  );
};

export default Sidebar;
