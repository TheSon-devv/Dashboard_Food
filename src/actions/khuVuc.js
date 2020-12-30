import { khuVuc } from "./api";

export const ACTION_TYPE_KHU_VUC = {
    FETCH_ALL_KHU_VUC: 'FETCH_ALL_KHU_VUC'
}


export const fetchAllKhuVuc = () => dispatch => {
    khuVuc().fetchAllKhuVuc()
        .then(
            response => {
                console.log(response)
                dispatch({
                    type: ACTION_TYPE_KHU_VUC.FETCH_ALL_KHU_VUC,
                    payload: response.data
                })
            })
        .catch(err => console.log(err))

}