import { combineReducers } from "redux";
import product from "./product";
import khachHang from "./khachHang";
import nhanVien from "./nhanVien";

export const reducers = combineReducers({
    product,
    khachHang,
    nhanVien
})