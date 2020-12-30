import { ACTION_TYPE_NHAN_VIEN } from "../actions/nhanVien";

const listNhanVien = {
    nhanVienList: []
}
const nhanVien = (state = listNhanVien, action) => {
    switch (action.type) {
        case ACTION_TYPE_NHAN_VIEN.FETCH_ALL_NHAN_VIEN:
            return {
                ...state,
                nhanVienList: [...action.payload]
            }

        case ACTION_TYPE_NHAN_VIEN.CREATE_NHAN_VIEN:
            return {
                ...state,
                nhanVienList: [...state.nhanVienList,action.payload]
            }

        case ACTION_TYPE_NHAN_VIEN.UPDATE_NHAN_VIEN:
            return {
                ...state,
                nhanVienList: state.nhanVienList.map(x => x.maNV === action.payload.maNV ? action.payload : x)
            }
        case ACTION_TYPE_NHAN_VIEN.DELETE_NHAN_VIEN:
            return {
                ...state,
                nhanVienList: state.nhanVienList.filter(x => x.maNV !== action.payload)
            }
        default:
            return state;
    }
}
export default nhanVien;