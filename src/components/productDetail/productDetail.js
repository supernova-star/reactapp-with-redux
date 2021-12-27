import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GetTheme } from "../../selectors/navigation";
import "./productDetail.scss";
import { AddToCart, RemoveProduct } from "../../actions/productAction";
import { GetAllProducts } from "../../selectors/product";
import Rating from "react-rating";
import { FaStar, FaRegStar, FaAngleLeft, FaShoppingCart } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const ProductDetail = ({ handleNavigation }) => {
  const dispatch = useDispatch();
  const products = useSelector(GetAllProducts);
  const { cart, productDetail } = products;
  const theme = useSelector(GetTheme);
  const handleAddToCart = (itemId) => {
    dispatch(AddToCart(itemId));
  };
  const handleRemove = (itemId) => {
    dispatch(RemoveProduct(itemId));
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
  return (
    <>
      {products.loading && <div class="spinner-grow m-5" role="status"></div>}
      {!products.loading && (
        <div className="rounded p-3 productdetailcontainer">
          <div
            className={`p-3 d-flex flex-column justify-content-between ${
              theme ? "productdetailcontentDark" : "productdetailcontentLight"
            }`}
          >
            <div>
              <div className="d-flex flex-row">
                <button
                  className="backIcon"
                  onClick={() => handleNavigation("productList")}
                >
                  <FaAngleLeft />
                </button>

                <h4 className="mb-2 ms-2">{productDetail.title}</h4>
              </div>

              <div className="d-flex flex-row mb-2">
                <Rating
                  className="ratingstyle"
                  emptySymbol={<FaRegStar />}
                  fullSymbol={<FaStar />}
                  initialRating={productDetail.rating.rate}
                  readonly={true}
                />
                <span>({productDetail.rating.count} Reviews)</span>
              </div>
              <hr />
              <div className=" d-flex flex-row">
                <img
                  src={productDetail.image}
                  alt={productDetail.id}
                  width="450"
                  height="440"
                  className="p-3"
                />
                <div className="productData ms-5 d-flex flex-column">
                  <strong className="fs-5">Product Detail: </strong>
                  <p className="lead fs-4">{productDetail.description}</p>
                  <strong className="fs-5">Category: </strong>
                  <span className="lead fs-4 mb-2">
                    {productDetail.category}
                  </span>
                  <span className="d-inline-block mb-3">
                    <h1 class="display-4">{productDetail.price} $</h1>
                  </span>
                </div>
              </div>
            </div>
            {!isInCart(productDetail.id) && (
              <button
                onClick={() => handleAddToCart(productDetail.id)}
                className=" d-flex flex-row align-items-center justify-content-center btn cartButton fs-4"
              >
                <FaShoppingCart className="me-3" />
                Add To Cart
              </button>
            )}
            {isInCart(productDetail.id) && (
              <button
                onClick={() => handleRemove(productDetail.id)}
                className=" d-flex flex-row align-items-center justify-content-center btn cartButton fs-4"
              >
                <MdDelete className="me-3" />
                Remove
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetail;
