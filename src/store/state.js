export const DEFAULT_COUNT_STATE = {
  count: 0,
};

export const DEFAULT_TODO_STATE = {
  todoList: ["Throw the trash", "Finish the homework", "Get Groceries"],
};

export const DEFAULT_PRODUCTS_STATE = {
  products: ["Antara"],
  newproducts: [],
  loading: false,
  productcategories: [],
  productDetail: {},
  cart: [],
  totalPrice: 0,
};

export const DEFAULT_NAVIGATION_STATE = {
  mode: false,
  toastDetails: {
    theme: "",
    position: "",
    type: "success",
    message: "",
  },
};

export const DEFAULT_LOGIN_STATE = {
  userList: [],
  currentUserInfo: {},
  spinner: false,
};

export const DEFAULT_STORE_STATE = {
  counter: DEFAULT_COUNT_STATE,
  products: DEFAULT_PRODUCTS_STATE,
};
