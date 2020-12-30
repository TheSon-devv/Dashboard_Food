import { admin } from "./api";

export const ACTION_TYPE_ADMIN = {
    CREATE_ADMIN: 'CREATE_ADMIN',
    FETCH_ALL_ADMIN : 'FETCH_ALL_ADMIN'
}

export const fetchAllAdmin = () => dispatch => {
    admin().fetchAllAdmin()
        .then(
            response => {
                console.log(response)
                dispatch({
                    type: ACTION_TYPE_ADMIN.FETCH_ALL_ADMIN,
                    payload: response.data
                })
            })
        .catch(err => console.log(err))

}

export const createAdmin = (data) => dispatch => {
    admin().createAdmin(data)
        .then(res => {
            dispatch({
                type : ACTION_TYPE_ADMIN.CREATE_ADMIN,
                payload: res.data
            });
        })
            .catch(err => console.log(err))
}