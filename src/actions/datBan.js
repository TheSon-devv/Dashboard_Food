import { datBan } from "./api";

export const ACTION_TYPE_DAT_BAN = {
    CREATE_DAT_BAN : 'CREATE_DAT_BAN',
    UPDATE_DAT_BAN: 'UPDATE_DAT_BAN',
    DELETE_DAT_BAN : 'DELETE_DAT_BAN',
    FETCH_ALL_DAT_BAN: 'FETCH_ALL_DAT_BAN'
}

const formateData = data => ({
    ...data
})


export const fetchAllDatBan = () => dispatch => {
    datBan().fetchAllDatBan()
        .then(
            response => {
                console.log(response)
                dispatch({
                    type: ACTION_TYPE_DAT_BAN.FETCH_ALL_DAT_BAN,
                    payload: response.data
                })
            })
        .catch(err => console.log(err))

}

export const createDatBan = (data) => dispatch => {
    data = formateData(data)
    datBan().createDatBan(data)
        .then(res => {
            dispatch({
                type : ACTION_TYPE_DAT_BAN.CREATE_DAT_BAN,
                payload: res.data
            });
        })
            .catch(err => console.log(err))
}

export const updateDatBan = (maBan,data) => dispatch => {
    data = formateData(data)
    datBan().updateDatBan(maBan,data)
        .then(res => {
            dispatch({
                type : ACTION_TYPE_DAT_BAN.UPDATE_DAT_BAN,
                payload: {maBan,...data}
            })
        })
        .catch(err => console.log(err))
}

export const DeleteDatBan = (maBan,data) => dispatch => {
    datBan().deleteDatBan(maBan)
        .then(res => {
            dispatch({
                type : ACTION_TYPE_DAT_BAN.DELETE_DAT_BAN,
                payload: maBan
            })
        })
        .catch(err => console.log(err))
}