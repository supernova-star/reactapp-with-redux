import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { FaPowerOff } from "react-icons/fa";

const MenuDropdown = ({ handleLogout }) => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleProfile = () => {
    navigate("/profile");
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <FaPowerOff />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <div>
          <Button
            size="medium"
            onClick={handleProfile}
            className="w-100 justify-content-start text-dark"
          >
            Profile
          </Button>
        </div>
        <div>
          <Button
            size="medium"
            className="w-100 justify-content-start text-dark"
          >
            My account
          </Button>
        </div>
        <div>
          <Button
            size="medium"
            onClick={handleLogout}
            className="w-100 justify-content-start text-dark"
          >
            Logout
          </Button>
        </div>
      </Menu>
    </div>
  );
};

MenuDropdown.propTypes = {
  handleLogout: PropTypes.func,
};

export default MenuDropdown;
