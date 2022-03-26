import {combineReducers} from "redux";
import { Product_reducer } from "./Allproduct/product.reducer";

export const rootReducer = combineReducers({
    allproduct : Product_reducer
})