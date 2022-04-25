import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GetTheme } from "../../selectors/navigation";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import {
  fetchProducts,
  fetchCategories,
  GetProductsByCategory,
  GetProductDetail,
  SetToCart,
  SetCartDetails,
  RemoveProduct,
} from "../../actions/productAction";
import { GetAllProducts } from "../../selectors/product";
import { MdDelete } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import ProductLoader from "../../assets/svg/productLoader.svg";
import "./product.scss";

const Products = ({ handleNavigation }) => {
  const dispatch = useDispatch();
  const mode = useSelector(GetTheme);
  const products = useSelector(GetAllProducts);
  // const toastDetails = useSelector((state) => state.navigation.toastDetails);
  const { newproducts, productcategories, loading, cart } = products;
  // const handleToast = useRef(null);
  useEffect(() => {
    if (newproducts.length === 0) {
      dispatch(fetchProducts());
      dispatch(fetchCategories());
    }
  }, [dispatch, newproducts.length]);

  const handleproductsByCategory = (e) => {
    dispatch(GetProductsByCategory(e.target.value));
  };

  const getProductDetails = async (productId) => {
    dispatch(GetProductDetail(productId));
    handleNavigation("productDetail");
  };

  const handleAddToCart = async (event, itemId) => {
    event.stopPropagation();
    const isProductInCart = cart.filter((item) => item.id === itemId);
    if (isProductInCart.length === 0) {
      const selectedProduct = newproducts.filter((item) => item.id === itemId);
      dispatch(SetToCart(selectedProduct[0]));
    }
  };

  const isInCart = (itemId) => {
    let inCart = false;
    const productIndex = cart.findIndex((item) => item.id === itemId);
    if (productIndex !== -1) {
      inCart = true;
    } else {
      inCart = false;
    }
    return inCart;
  };

  const handleRemove = (event, itemId) => {
    event.stopPropagation();
    const productIndex = cart.findIndex((item) => item.id === itemId);
    cart.splice(productIndex, 1);
    dispatch(SetCartDetails(cart));
    // dispatch(RemoveProduct(itemId));
  };

  return (
    <div
      className={`rounded p-3 ${
        mode ? "productcontainerDark" : "productcontainerLight"
      }`}
    >
      <h4 className={`mb-3 ${mode ? "text-white" : "text-dark"}`}>
        Products List
      </h4>
      <div>
        <span>
          <strong>
            <h5 className={mode ? "text-white" : "text-dark"}>
              Fetch By Categories:
            </h5>
          </strong>
        </span>
        <ButtonGroup variant="outlined" aria-label=" outlined button group">
          <Button onClick={handleproductsByCategory} value="getAllProducts">
            Get All Products
          </Button>
          {productcategories.map((category) => (
            <Button value={category} onClick={handleproductsByCategory}>
              {category}
            </Button>
          ))}
        </ButtonGroup>
        {/* <div class="btn-group" role="group" aria-label="Basic example">
          <button
            type="button"
            class="btn text-capitalize"
            onClick={handleproductsByCategory}
            value="getAllProducts"
          >
            Get All Products
          </button>
          {productcategories.map((category) => (
            <button
              type="button"
              class="btn text-capitalize"
              onClick={handleproductsByCategory}
              c
            >
              {category}
            </button>
          ))}
        </div> */}
      </div>
      {loading && (
        <div className="d-flex flex-row justify-content-center align-items-center py-5">
          <img src={ProductLoader} alt="spinner" className="mt-5" />
        </div>
      )}
      {!loading && (
        <div className="d-flex flex-row flex-wrap overflow-auto mt-2 productContent">
          {newproducts.map((item) => (
            <div
              className="product p-2 rounded my-2 mx-4"
              onClick={() => getProductDetails(item.id)}
            >
              <div className="d-flex flex-row">
                <div className="imageContainer">
                  <img
                    src={item.image}
                    alt={item.id}
                    width="125"
                    height="130"
                  />
                </div>

                <div className="d-flex flex-column py-2 ms-5 w-100 justify-content-between prodDetails">
                  <span>{item.title}</span>
                  <div className="d-flex flex-row justify-content-between">
                    <span class="badge w-50 me-2 fs-6">{item.price} $</span>
                    {isInCart(item.id) && (
                      <span
                        class="badge bg-danger fs-6"
                        onClick={(event) => handleRemove(event, item.id)}
                      >
                        <MdDelete />
                      </span>
                    )}
                    {!isInCart(item.id) && (
                      <span
                        class="badge fs-6"
                        onClick={(event) => handleAddToCart(event, item.id)}
                      >
                        <FaShoppingCart />
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
