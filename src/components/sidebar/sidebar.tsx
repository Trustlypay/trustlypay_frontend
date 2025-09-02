import "./sidebar.css";
import { routeMapMini } from "../../route-map";
import { useLocation, useNavigate } from "react-router-dom";
import { RolePermissionsEnum } from "./role-permissions.enum";
import UserContext, { type IUserContext } from "../user-context";
import { useContext } from "react";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const userContext: IUserContext = useContext(UserContext);

  const array = [
    {
      image: "/dashboard.svg",
      title: "Dashboard",
      activeImage: "/active/dashboard.png",
      route: routeMapMini.dashboard,
      allowed_role_permissions: Object.values(RolePermissionsEnum),
    },
    {
      image: "/payin.svg",
      title: "Pay-In",
      activeImage: "/active/payin.png",
      route: routeMapMini.payin,
      allowed_role_permissions: [
        RolePermissionsEnum.admin,
        RolePermissionsEnum.support,
      ],
    },
    {
      image: "/settlement.svg",
      title: "Settlement",
      activeImage: "/active/settlement.png",
      route: routeMapMini.settlement,
      allowed_role_permissions: [
        RolePermissionsEnum.admin,
        RolePermissionsEnum.support,
      ],
    },
    {
      image: "/payout.svg",
      title: "Pay-Out",
      activeImage: "/active/payout.png",
      route: routeMapMini.payout,
      allowed_role_permissions: [
        RolePermissionsEnum.admin,
        RolePermissionsEnum.support,
      ],
    },
    {
      image: "/technical.svg",
      title: "Technical",
      activeImage: "/active/technical.png",
      route: routeMapMini.technical,
      allowed_role_permissions: [
        RolePermissionsEnum.admin,
        RolePermissionsEnum.tech,
      ],
    },
    {
      image: "/merchant-management.svg",
      title: "Merchant Management",
      activeImage: "/active/merchant-management.png",
      route: routeMapMini.merchantManagement,
      allowed_role_permissions: [
        RolePermissionsEnum.admin,
        RolePermissionsEnum.tech,
        RolePermissionsEnum.compliance,
      ],
    },
    {
      image: "/complaince-security.svg",
      title: "Complaince/Security",
      activeImage: "/active/complaince-security.png",
      route: routeMapMini.complainceSecurity,
      allowed_role_permissions: [
        RolePermissionsEnum.admin,
        RolePermissionsEnum.tech,
        RolePermissionsEnum.compliance,
      ],
    },
    {
      image: "/reseller.svg",
      title: "Reseller",
      activeImage: "/active/reseller.png",
      route: routeMapMini.reseller,
      allowed_role_permissions: [
        RolePermissionsEnum.admin,
        RolePermissionsEnum.tech,
        RolePermissionsEnum.compliance,
      ],
    },
    {
      image: "/reports.svg",
      title: "Reports",
      activeImage: "/active/reports.png",
      route: routeMapMini.reports,
      allowed_role_permissions: [
        RolePermissionsEnum.admin,
        RolePermissionsEnum.support,
      ],
    },
    {
      image: "/access-management.svg",
      title: "Access-Management",
      activeImage: "/active/access-management.png",
      route: routeMapMini.accessManagement,
      allowed_role_permissions: [RolePermissionsEnum.admin],
    },
  ];

  return (
    <aside className="sidebar">
      <ul className="sidebar-items">
        {array
          ?.filter((item) =>
            item.allowed_role_permissions?.some((el) =>
              userContext?.userDetails?.role_permission?.includes(el)
            )
          )
          .map((item) => (
            <div
              key={item.title}
              className={`item-label ${
                location.pathname.includes(item.route) ? "current-item" : ""
              }`}
              onClick={() => navigate(item.route)}
            >
              <img
                src={
                  location.pathname.includes(item.route)
                    ? item.activeImage
                    : item.image
                }
                alt={item.title}
              />
              <div className="ellipsis-text">{item.title}</div>
            </div>
          ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
