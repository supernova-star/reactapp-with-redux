import React from "react";
import Avatar from "@mui/material/Avatar";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Nature2 from "../../assets/image/nature2.jpg";
import "./profile.scss";

import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";
import { MdHome, MdLogout } from "react-icons/md";
import { SetUserInfo } from "../../actions/loginAction";
import { GetLoginDetails } from "../../selectors/login";

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = JSON.parse(window.sessionStorage.getItem("user"));
  //   console.log("user: ", user);
  //   const loginDetails = useSelector(GetLoginDetails);
  //   const { currentUserInfo } = loginDetails;
  //   const entries = performance.getEntriesByType("navigation");
  //   if (
  //     entries.map((nav) => nav.type)[0] === "reload" &&
  //     window.location.pathname === "/profile"
  //   ) {
  //     const user = window.sessionStorage.getItem("user");
  //     dispatch(SetUserInfo(JSON.parse(user)));
  //   }
  const handleSpeedDial = (actionName) => {
    switch (actionName) {
      case "Home":
        navigate("/home");
        break;
      case "Logout":
        navigate("/");
        break;
      default:
        break;
    }
  };
  const actions = [
    { icon: <MdHome size={25} />, name: "Home" },
    { icon: <MdLogout size={25} />, name: "Logout" },
    // { icon: <PrintIcon />, name: "Print" },
    // { icon: <ShareIcon />, name: "Share" },
  ];
  return (
    <div className="p-5 profileContainer">
      <div className="profile">
        <div className="image"></div>
        <div className="profileContent position-relative bg-white p-5 mx-auto">
          <div className="d-flex flex-row">
            <Avatar
              alt="Remy Sharp"
              src={Nature2}
              sx={{ width: 100, height: 100 }}
            />
            <span className="fs-3 ms-3 mt-3">{user.name}</span>
          </div>
          <div className="d-flex flex-row mt-3 p-5 justify-content-between">
            <div className="d-flex flex-row red">
              <div className="vr me-3"></div>
              <div>
                <p className="fw-light display-6">Contact Details</p>
                <p className="m-0 fs-5">
                  Email: <span className="text-muted">{user.email}</span>
                </p>
                <p className="m-0 fs-5">
                  Mobile: <span className="text-muted">{user.phone}</span>
                </p>
              </div>
            </div>
            <div className="d-flex flex-row blue">
              <div className="vr me-3"></div>
              <div>
                <p className="fw-light display-6">Address Details</p>
                <p className="m-0 fs-5">
                  Location:{" "}
                  <span className="text-muted">{user.address.city}</span>
                </p>
                <p className="m-0 fs-5">
                  Zip:{" "}
                  <span className="text-muted">{user.address.zipcode}</span>
                </p>
                <p className="m-0 fs-5">
                  Website: <span className="text-muted">{user.website}</span>
                </p>
              </div>
            </div>
            <div className="d-flex flex-row green">
              <div className="vr me-3"></div>
              <div>
                <p className="fw-light display-6">Company Details</p>
                <p className="m-0 fs-5">
                  Company Name:{" "}
                  <span className="text-muted">{user.company.name}</span>
                </p>
                <p className="m-0 fs-5">
                  Catch Phrase:{" "}
                  <span className="text-muted">{user.company.catchPhrase}</span>
                </p>
              </div>
            </div>
          </div>
          <SpeedDial
            ariaLabel="SpeedDial basic example"
            sx={{ position: "absolute", bottom: 16, right: 16 }}
            icon={<SpeedDialIcon />}
          >
            {actions.map((action) => (
              <SpeedDialAction
                key={action.name}
                icon={action.icon}
                tooltipTitle={action.name}
                onClick={() => handleSpeedDial(action.name)}
              />
            ))}
          </SpeedDial>
        </div>
      </div>
    </div>
  );
};
export default Profile;
