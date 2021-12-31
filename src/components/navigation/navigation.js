import React from "react";
import "./navigation.scss";
import PropTypes from "prop-types";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@material-ui/core/ListItemText";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineProject } from "react-icons/ai";
import { FaPowerOff } from "react-icons/fa";
import { BiTimer } from "react-icons/bi";
import { MdPlaylistAddCheck, MdGridView, MdDashboard } from "react-icons/md";
import Switch from "../shared/switch";
import { useNavigate } from "react-router-dom";
import { IconButton } from "@material-ui/core";
import { GetTheme } from "../../selectors/navigation";
import { SetMode } from "../../actions/navigationAction";
import { SetUserInfo } from "../../actions/loginAction";
import { SetCounter } from "../../actions/counterAction";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import CloseIcon from "@mui/icons-material/Close";
import {
  SetCartDetails,
  SetProductCategories,
  SetProducts,
} from "../../actions/productAction";
import { SetTodoList } from "../../actions/todoAction";
import MenuDropdown from "../shared/menuDropdown";

const Navigation = ({ dashboardView, handleNavigation }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const switchValue = useSelector(GetTheme);
  const handleMode = () => {
    dispatch(SetMode(!switchValue));
  };
  const handleLogout = () => {
    navigate("/");
    dispatch(SetUserInfo({}));
    dispatch(SetCounter(0));
    dispatch(SetProducts([]));
    dispatch(SetProductCategories([]));
    dispatch(SetCartDetails([]));
    dispatch(SetTodoList([]));
  };
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    setOpen(false);
  };

  const action = (
    <React.Fragment>
      {/* <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button> */}
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );
  return (
    <div className="p-3 text-center listGroup">
      <div className="d-flex flex-row justify-content-between">
        <h3 className="m-0">UTILITY APP</h3>
        {/* <IconButton
          color="primary"
          aria-label="upload picture"
          onClick={handleLogout}
          component="span"
          className={`px-2 py-1 ${switchValue ? "text-white" : "text-dark"}`}
        >
          <FaPowerOff />
        </IconButton> */}
        <MenuDropdown handleLogout={handleLogout} />
      </div>
      <div>
        <Button onClick={handleClick}>Open simple snackbar</Button>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          TransitionComponent="SlideTransition"
          message="Note archived"
          action={action}
        />
      </div>
      <hr />
      <div className="d-flex align-items-baseline justify-content-center">
        <AiOutlineProject />
        <h5
          className={`mb-0 mx-2 ${
            switchValue ? "overViewDark" : "overViewLight"
          }`}
        >
          Project Overview
        </h5>
        <Switch
          isOn={switchValue}
          onColor="rgb(40 170 87)"
          handleToggle={handleMode}
        />
      </div>
      <hr />
      <List>
        <ListItem
          className={`p-0 my-1 ${
            dashboardView === "dashboard" ? "listItem" : ""
          }`}
        >
          <ListItemButton
            onClick={() => handleNavigation("dashboard")}
            className={`d-flex flex-row align-items-center p-2 ${
              dashboardView === "dashboard"
                ? switchValue
                  ? "activeDark"
                  : "activeLight"
                : ""
            } ${switchValue ? "listItemDark" : "listItemLight"}`}
          >
            <MdDashboard size={25} />
            <ListItemText primary="Dashboard" className="ms-1" />
          </ListItemButton>
        </ListItem>
        <ListItem
          className={`p-0 my-1 ${
            dashboardView === "productList" ? "listItem" : ""
          }`}
        >
          <ListItemButton
            onClick={() => handleNavigation("productList")}
            className={`d-flex flex-row align-items-center p-2 ${
              dashboardView === "productList" ||
              dashboardView === "productDetail"
                ? switchValue
                  ? "activeDark"
                  : "activeLight"
                : ""
            } ${switchValue ? "listItemDark" : "listItemLight"}`}
          >
            <MdGridView size={25} />
            <ListItemText primary="Product List" className="ms-1" />
          </ListItemButton>
        </ListItem>
        <ListItem
          className={`p-0 my-1 ${
            dashboardView === "todoList" ? "listItem" : ""
          }`}
        >
          <ListItemButton
            onClick={() => handleNavigation("todoList")}
            className={`d-flex flex-row align-items-center p-2 ${
              dashboardView === "todoList"
                ? switchValue
                  ? "activeDark"
                  : "activeLight"
                : ""
            } ${switchValue ? "listItemDark" : "listItemLight"}`}
          >
            <MdPlaylistAddCheck size={25} />
            <ListItemText primary="Todo List" className="ms-1" />
          </ListItemButton>
        </ListItem>
        <ListItem
          className={`p-0 my-1 ${
            dashboardView === "todoList" ? "listItem" : ""
          }`}
        >
          <ListItemButton
            onClick={() => handleNavigation("bookList")}
            className={`d-flex flex-row align-items-center p-2 ${
              dashboardView === "bookList"
                ? switchValue
                  ? "activeDark"
                  : "activeLight"
                : ""
            } ${switchValue ? "listItemDark" : "listItemLight"}`}
          >
            <MdPlaylistAddCheck size={25} />
            <ListItemText primary="Book List" className="ms-1" />
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );
};

Navigation.propTypes = {
  handleNavigation: PropTypes.func.isRequired,
  dashboardView: PropTypes.string,
};

export default Navigation;
