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
      <h4
        className={`display-6 text-center m-2 ${
          theme ? "cardheaderLight" : "cardheaderDark"
        }`}
      >
        Add To Cart
      </h4>
      <hr />
      <div className="products overflow-auto">
        {cart.map((item) => (
          <div
            className={`p-2 m-2 rounded ${
              theme ? "cartproductDark" : "cartproductLight"
            }`}
          >
            <h6>{item.title}</h6>
            <div className="d-flex flex-row justify-content-between">
              <span>Price : {item.price}$</span>
              <span
                class={`badge remove ${
                  theme ? "bg-light text-dark" : " removeLight text-light"
                } `}
                onClick={() => handleRemoveItem(item.id)}
              >
                Remove Item
              </span>
            </div>
          </div>
        ))}
        {cart.length === 0 && (
          <div className="emptyCart p-2 m-2 text-center">
            Your cart is empty!{" "}
          </div>
        )}
      </div>
      <hr />
      <div className={`p-3 ${theme ? "totalPriceLight" : "totalPriceDark"}`}>
        Total: {totalPrice.toFixed(2)}$
      </div>
    </div>
  );
};

export default AddToCart;
