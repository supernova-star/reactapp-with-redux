import productsAPI from "../apis/productsAPI";
import { GetAllProducts } from "../selectors/product";
import {
  GET_PRODUCTS,
  ADD_PRODUCT,
  FETCH_ALL_PRODUCTS,
  SET_NEW_PRODUCTS,
  SET_LOADING,
  SET_PRODUCT_CATEGORIES,
  SET_PRODUCT_DETAIL,
  ADD_TO_CART,
  SET_CART_DETAILS,
} from "./actiontypes.const";

export const GetProducts = () => ({ type: GET_PRODUCTS });

export const AddProduct = (product) => ({ type: ADD_PRODUCT, product });

export const SetProducts = (products) => ({ type: SET_NEW_PRODUCTS, products });

export const SetProductCategories = (categories) => ({
  type: SET_PRODUCT_CATEGORIES,
  categories,
});

export const SetLoading = (loading) => ({ type: SET_LOADING, loading });

export const SetProductDetail = (detail) => ({
  type: SET_PRODUCT_DETAIL,
  detail,
});

export const SetToCart = (product) => ({
  type: ADD_TO_CART,
  product,
});

export const SetCartDetails = (productList) => ({
  type: SET_CART_DETAILS,
  productList,
});

export const fetchProducts = () => async (dispatch) => {
  dispatch(SetLoading(true));
  const response = await productsAPI.get("/products");
  dispatch(SetProducts(response.data));
  dispatch(SetLoading(false));
};

export const fetchCategories = () => async (dispatch) => {
  const response = await productsAPI.get("/products/categories");
  dispatch(SetProductCategories(response.data));
};

export const GetProductsByCategory = (category) => async (dispatch) => {
  if (category === "getAllProducts") {
    dispatch(fetchProducts());
  } else {
    dispatch(SetLoading(true));
    const response = await productsAPI.get(`/products/category/${category}`);
    dispatch(SetProducts(response.data));
    dispatch(SetLoading(false));
  }
};

export const GetProductDetail = (productId) => async (dispatch) => {
  dispatch(SetLoading(true));
  const response = await productsAPI.get(`/products/${productId}`);
  dispatch(SetProductDetail(response.data));
  dispatch(SetLoading(false));
};

export const AddToCart = (productId) => async (dispatch, getState) => {
  const state = getState();
  const productList = GetAllProducts(state);
  const { newproducts, cart } = productList;
  const isProductInCart = cart.filter((item) => item.id === productId);
  if (isProductInCart.length === 0) {
    const selectedProduct = newproducts.filter((item) => item.id === productId);
    dispatch(SetToCart(selectedProduct[0]));
  }
};

export const RemoveProduct = (productId) => async (dispatch, getState) => {
  const state = getState();
  const productList = GetAllProducts(state);
  const { cart } = productList;
  const productIndex = cart.findIndex((item) => item.id === productId);
  cart.splice(productIndex, 1);
  dispatch(SetCartDetails(cart));
};
