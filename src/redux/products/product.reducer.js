import {
  SAVE_PRODUCTS,
  SAVE_CATEGORIES,
  ADD_ORDER,
  DELETED_ORDER,
  TOTAL_ORDER
} from "./product.type";

const INITIAL_STATE = {
  products: [],
  categories: [],
  cart: [],
};

const productsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SAVE_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case SAVE_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    case ADD_ORDER:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case DELETED_ORDER:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
      case TOTAL_ORDER:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };

    default:
      return state;
  }
};

export default productsReducer;
