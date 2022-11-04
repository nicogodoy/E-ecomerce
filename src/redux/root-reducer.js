import { combineReducers } from "redux";
import stepsReducer from "./step/step.reducers";
import schoolReducer from "./schools/schools.reducers";
import productsReducer from "./products/product.reducer";

export default combineReducers({
  step: stepsReducer,
  school: schoolReducer,
  products: productsReducer,
});
