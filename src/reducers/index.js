import { combineReducers } from "redux";
import product from "./product";
import khachHang from "./khachHang";

export const reducers = combineReducers({
    product,
    khachHang
})