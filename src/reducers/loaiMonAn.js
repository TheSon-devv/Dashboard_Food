import { ACTION_TYPE_LOAI_MON } from "../actions/loaiMonAn";

const listLMA= {
    LMAList: []
}
const loaiMonAn = (state = listLMA, action) => {
    switch (action.type) {
        case ACTION_TYPE_LOAI_MON.FETCH_ALL_LOAI_MON:
            return {
                ...state,
                LMAList: [...action.payload]
            }
        default:
            return state;
    }
}
export default loaiMonAn;