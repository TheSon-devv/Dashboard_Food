import { ACTION_TYPE_NHA_HANG } from "../actions/nhaHang";

const listNhaHang= {
    nhaHangList: []
}
const nhaHang = (state = listNhaHang, action) => {
    switch (action.type) {
        case ACTION_TYPE_NHA_HANG.FETCH_ALL_NHA_HANG:
            return {
                ...state,
                nhaHangList: [...action.payload]
            }
        default:
            return state;
    }
}
export default nhaHang;