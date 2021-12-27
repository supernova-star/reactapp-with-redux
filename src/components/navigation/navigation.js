import React, { useState, useEffect } from "react";
import "./navigation.scss";
import PropTypes from "prop-types";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@material-ui/core/ListItemText";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineProject } from "react-icons/ai";
import { BiTimer } from "react-icons/bi";
import { MdPlaylistAddCheck, MdGridView } from "react-icons/md";
import Switch from "../shared/switch";
import { GetTheme } from "../../selectors/navigation";
import { SetMode } from "../../actions/navigationAction";

const Navigation = ({ dashboardView, handleNavigation }) => {
  const dispatch = useDispatch();
  const switchValue = useSelector(GetTheme);
  const handleMode = () => {
    dispatch(SetMode(!switchValue));
  };
  return (
    <div className="p-3 text-center listGroup">
      <h3>NEW PROJECT</h3>
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
          className={`p-0 ${dashboardView === "dashboard" ? "listItem" : ""}`}
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
            <BiTimer />
            <ListItemText primary="Dashboard" className="ms-1" />
          </ListItemButton>
        </ListItem>
        <ListItem
          className={`p-0 ${dashboardView === "productList" ? "listItem" : ""}`}
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
            <MdGridView />
            <ListItemText primary="Product List" className="ms-1" />
          </ListItemButton>
        </ListItem>
        <ListItem
          className={`p-0 ${dashboardView === "todoList" ? "listItem" : ""}`}
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
            <MdPlaylistAddCheck />
            <ListItemText primary="Todo List" className="ms-1" />
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
