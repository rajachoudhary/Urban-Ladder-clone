import { combineReducers } from "redux";
import { Product_reducer } from "./Allproduct/product.reducer";
import { User_reducer } from "./User/user.reducer";

export const rootReducer = combineReducers({
  allproduct: Product_reducer,
  User: User_reducer,
});
