import { capitalizeFirstLetter } from "../../utils/first-letter-cap";
import { useNavigate } from "react-router-dom";

const MainContentHeader = ({ title }: { title: string }) => {
  const navigate = useNavigate();
  return (
    <div className="main-content-header">
      <div className="playfair-display"> {title}</div>
      <div style={{ display: "flex", gap: "1px" }}>
        {location.pathname
          .slice(1)
          .split("/")
          .map((item, index, arr) =>
            index === arr.length - 1 ? (
              <div style={{ fontSize: "14px" }}>
                {capitalizeFirstLetter(item)}
              </div>
            ) : (
              <div
                style={{ fontSize: "14px", color: " #666666" }}
                onClick={() => {
                  navigate(`/${item}`);
                }}
              >{`${capitalizeFirstLetter(item)} / `}</div>
            )
          )}
      </div>
    </div>
  );
};

export default MainContentHeader;
