import { loaiMonAn } from "./api";

export const ACTION_TYPE_LOAI_MON = {
    FETCH_ALL_LOAI_MON: 'FETCH_ALL_LOAI_MON'
}

export const fetchAllLMA = () => dispatch => {
    loaiMonAn().fetchAllLMA()
        .then(
            response => {
                console.log(response)
                dispatch({
                    type: ACTION_TYPE_LOAI_MON.FETCH_ALL_LOAI_MON,
                    payload: response.data
                })
            })
        .catch(err => console.log(err))

}