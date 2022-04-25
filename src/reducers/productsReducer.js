import {
  GET_PRODUCTS,
  ADD_PRODUCT,
  SET_NEW_PRODUCTS,
  SET_LOADING,
  SET_PRODUCT_CATEGORIES,
  SET_PRODUCT_DETAIL,
  ADD_TO_CART,
  SET_CART_DETAILS,
} from "../actions/actiontypes.const";
import { DEFAULT_PRODUCTS_STATE } from "../store/state";

const productReducer = (state = DEFAULT_PRODUCTS_STATE, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return state;
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, ...action.product],
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.loading,
      };
    case SET_NEW_PRODUCTS:
      return {
        ...state,
        newproducts: [...action.products],
      };
    case SET_PRODUCT_CATEGORIES:
      return {
        ...state,
        productcategories: [...action.categories],
      };
    case SET_PRODUCT_DETAIL:
      return {
        ...state,
        productDetail: action.detail,
      };
    case ADD_TO_CART:
      state.cart.push(action.product);
      const totalPrice = state.cart.reduce(function (accumulator, item) {
        return accumulator + item.price;
      }, 0);
      return {
        ...state,
        cart: state.cart,
        totalPrice: totalPrice,
      };
    case SET_CART_DETAILS:
      const cartPrice = state.cart.reduce(function (accumulator, item) {
        return accumulator + item.price;
      }, 0);
      return {
        ...state,
        cart: action.productList,
        totalPrice: cartPrice,
      };
    default:
      return state;
  }
};

export default productReducer;
