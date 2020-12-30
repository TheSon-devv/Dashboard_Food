import { combineReducers } from "redux";
import khachHang from "./khachHang";
import nhanVien from "./nhanVien";
import datBan from "./datBan";
import monAn from "./monAn";
import khuVuc from "./khuVuc";
import hoaDon from "./hoaDon";

export const reducers = combineReducers({
    monAn,
    khachHang,
    nhanVien,
    datBan,
    khuVuc,
    hoaDon
})