import { ACTION_TYPE_DAT_BAN } from "../actions/datBan";

const listDatBan = {
    datBanList: []
}
const datBan = (state = listDatBan, action) => {
    switch (action.type) {
        case ACTION_TYPE_DAT_BAN.FETCH_ALL_DAT_BAN:
            return {
                ...state,
                datBanList: [...action.payload]
            }

        case ACTION_TYPE_DAT_BAN.CREATE_DAT_BAN:
            return {
                ...state,
                datBanList: [...state.datBanList,action.payload]
            }

        case ACTION_TYPE_DAT_BAN.UPDATE_DAT_BAN:
            return {
                ...state,
                datBanList: state.datBanList.map(x => x.maBan === action.payload.maBan ? action.payload : x)
            }
        case ACTION_TYPE_DAT_BAN.DELETE_DAT_BAN:
            return {
                ...state,
                datBanList: state.datBanList.filter(x => x.maBan !== action.payload)
            }
        default:
            return state;
    }
}
export default datBan;