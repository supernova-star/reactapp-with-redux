import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { GetTheme } from "../../selectors/navigation";
import { GetAllProducts } from "../../selectors/product";
import { RemoveProduct } from "../../actions/productAction";
import "./addToCart.scss";

const AddToCart = () => {
  const dispatch = useDispatch();
  const theme = useSelector(GetTheme);
  const products = useSelector(GetAllProducts);
  const { cart, totalPrice } = products;
  const handleRemoveItem = (itemId) => {
    dispatch(RemoveProduct(itemId));
  };
  return (
    <div className="addtocartContainer">
      <p
        className={`text-center m-auto ${
          theme ? "cardheaderLight" : "cardheaderDark"
        }`}
      >
        Add To Cart
      </p>
      <hr />
      <div className="products overflow-auto">
        {cart.map((item) => (
          <div
            className={`p-2 m-2 rounded ${
              theme ? "cartproductDark" : "cartproductLight"
            }`}
          >
            <p className="title">{item.title}</p>
            <div className="d-flex flex-row justify-content-between">
              <span className="title">Price : {item.price}$</span>
              <span
                class={`badge remove ${
                  theme
                    ? "bg-light removeDark text-dark"
                    : " removeLight text-light"
                } `}
                onClick={() => handleRemoveItem(item.id)}
              >
                Remove Item
              </span>
            </div>
          </div>
        ))}
        {cart.length === 0 && (
          <div className="emptyCart text-center">Your cart is empty! </div>
        )}
      </div>
      <hr />
      <div className={` ${theme ? "totalPriceLight" : "totalPriceDark"}`}>
        Total: {totalPrice.toFixed(2)}$
      </div>
    </div>
  );
};

export default AddToCart;
