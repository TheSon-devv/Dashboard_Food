import { ACTION_TYPE_KHACH_HANG } from "../actions/khachHang";

const listKhachHang = {
    khachHanglist: []
}
const khachHang = (state = listKhachHang, action) => {
    switch (action.type) {
        case ACTION_TYPE_KHACH_HANG.FETCH_ALL_KHACH_HANG:
            return {
                ...state,
                khachHanglist: [...action.payload]
            }

        case ACTION_TYPE_KHACH_HANG.CREATE_KHACH_HANG:
            return {
                ...state,
                khachHanglist: [...state.khachHanglist, action.payload]
            }

        case ACTION_TYPE_KHACH_HANG.UPDATE_KHACH_HANG:
            return {
                ...state,
                khachHanglist: state.khachHanglist.map(x => x.maKH === action.payload.maKH ? action.payload : x)
            }
        case ACTION_TYPE_KHACH_HANG.DELETE_KHACH_HANG:
            return {
                ...state,
                khachHanglist: state.khachHanglist.filter(x => x.maKH !== action.payload)
            }
        default:
            return state;
    }
}
export default khachHang;