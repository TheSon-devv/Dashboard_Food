import { ACTION_TYPE_HDDB } from "../actions/hoaDon";

const listHDDB = {
    HDDBList: []
}
const hoaDon = (state = listHDDB, action) => {
    switch (action.type) {
        case ACTION_TYPE_HDDB.FETCH_ALL_HDDB:
            return {
                ...state,
                HDDBList: [...action.payload]
            }

        case ACTION_TYPE_HDDB.CREATE_HDDB:
            return {
                ...state,
                HDDBList: [...state.HDDBList,action.payload]
            }

        case ACTION_TYPE_HDDB.UPDATE_HDDB:
            return {
                ...state,
                HDDBList: state.HDDBList.map(x => x.maHDDB === action.payload.maHDDB ? action.payload : x)
            }
        case ACTION_TYPE_HDDB.DELETE_HDDB:
            return {
                ...state,
                HDDBList: state.HDDBList.filter(x => x.maHDDB !== action.payload)
            }
        default:
            return state;
    }
}
export default hoaDon;