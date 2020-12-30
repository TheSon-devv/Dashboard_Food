import { ACTION_TYPE_KHU_VUC } from "../actions/khuVuc";

const listKhuVuc = {
    khuVucList: []
}
const khuVuc = (state = listKhuVuc, action) => {
    switch (action.type) {
        case ACTION_TYPE_KHU_VUC.FETCH_ALL_KHU_VUC:
            return {
                ...state,
                khuVucList: [...action.payload]
            }
        default:
            return state;
    }
}
export default khuVuc;