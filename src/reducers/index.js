import { combineReducers } from "redux";
import khachHang from "./khachHang";
import nhanVien from "./nhanVien";
import datBan from "./datBan";
import monAn from "./monAn";

export const reducers = combineReducers({
    monAn,
    khachHang,
    nhanVien,
    datBan
})