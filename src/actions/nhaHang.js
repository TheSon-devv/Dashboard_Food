import { nhaHang } from "./api";

export const ACTION_TYPE_NHA_HANG = {
    CREATE_NHA_HANG: 'CREATE_NHA_HANG',
    FETCH_ALL_NHA_HANG: 'FETCH_ALL_NHA_HANG'
}

export const fetchAllNhaHang = () => dispatch => {
    nhaHang().fetchAllNhaHang()
        .then(
            response => {
                console.log(response)
                dispatch({
                    type: ACTION_TYPE_NHA_HANG.FETCH_ALL_NHA_HANG,
                    payload: response.data
                })
            })
        .catch(err => console.log(err))

}
