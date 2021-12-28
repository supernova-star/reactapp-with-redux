import React, { useState } from "react";
import Navigation from "../navigation";
import Products from "../products";
import { useDispatch, useSelector } from "react-redux";
import ProductDetail from "../productDetail";
import Todo from "../todo";
import Dashboard from "../dashboard";
import AddToCart from "../addToCart";
import { GetTheme } from "../../selectors/navigation";
import { GetAllProducts } from "../../selectors/product";
import { FaShoppingCart } from "react-icons/fa";
import "./home.scss";
import { SetUserInfo } from "../../actions/loginAction";

const Home = () => {
  const dispatch = useDispatch();
  const switchValue = useSelector(GetTheme);
  const [isOpen, setisOpen] = useState(false);
  const [dashboardView, setdashboardView] = useState("dashboard");
  const products = useSelector(GetAllProducts);
  const { cart } = products;
  const handleAddtoCart = () => {
    setisOpen(!isOpen);
  };
  const handleNavigation = (value) => {
    setdashboardView(value);
  };

  const entries = performance.getEntriesByType("navigation");
  if (
    entries.map((nav) => nav.type)[0] === "reload" &&
    window.location.pathname === "/home"
  ) {
    const user = window.sessionStorage.getItem("user");
    dispatch(SetUserInfo(JSON.parse(user)));
  }

  return (
    <div>
      <div className="d-flex flex-row">
        <div
          className={`col-sm-2 ${
            switchValue ? "navigationDark" : "navigationLight"
          }`}
        >
          <Navigation
            dashboardView={dashboardView}
            handleNavigation={handleNavigation}
          />
        </div>
        <div
          className={`col-sm-10 ${
            switchValue ? "contentDark" : "contentLight"
          }`}
        >
          {dashboardView === "dashboard" && <Dashboard />}
          {dashboardView === "productList" && (
            <Products handleNavigation={handleNavigation} />
          )}
          {dashboardView === "todoList" && <Todo />}
          {dashboardView === "productDetail" && (
            <ProductDetail handleNavigation={handleNavigation} />
          )}
        </div>
        <div
          className={`d-flex flex-row position-absolute overflow-hidden cartView `}
        >
          <button className="btn btn-cart" onClick={handleAddtoCart}>
            <FaShoppingCart />
            <span className="mx-1">({cart.length})</span>
          </button>
          <div
            className={` ${switchValue ? "addtocartDark" : "addtocartLight"} ${
              isOpen ? "openCart" : "closeCart"
            }`}
          >
            <AddToCart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
