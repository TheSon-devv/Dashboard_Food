import { ACTION_TYPE_ADMIN } from "../actions/admin";

const listAdmin = {
    adminList: []
}
const admin = (state = listAdmin, action) => {
    switch (action.type) {
        case ACTION_TYPE_ADMIN.FETCH_ALL_ADMIN:
            return {
                ...state,
                adminList: [...action.payload]
            }

        case ACTION_TYPE_ADMIN.CREATE_ADMIN:
            return {
                ...state,
                adminList: [...state.adminList, action.payload]
            }
        default:
            return state;
    }
}
export default admin;