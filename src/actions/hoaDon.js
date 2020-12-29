import { hoaDon } from "./api";

export const ACTION_TYPE_HDDB = {
    CREATE_HDDB : 'CREATE_HDDB',
    UPDATE_HDDB: 'UPDATE_HDDB',
    DELETE_HDDB : 'DELETE_HDDB',
    FETCH_ALL_HDDB: 'FETCH_ALL_HDDB'
}

const formateData = data => ({
    ...data
})


export const fetchAllHDDB = () => dispatch => {
    hoaDon().fetchAllHDDB()
        .then(
            response => {
                console.log(response)
                dispatch({
                    type: ACTION_TYPE_HDDB.FETCH_ALL_HDDB,
                    payload: response.data
                })
            })
        .catch(err => console.log(err))

}

export const createHDDB = (data) => dispatch => {
    data = formateData(data)
    hoaDon().createHDDB(data)
        .then(res => {
            dispatch({
                type : ACTION_TYPE_HDDB.CREATE_HDDB,
                payload: res.data
            });
        })
            .catch(err => console.log(err))
}

export const updateHDDB = (maHDDB,data) => dispatch => {
    data = formateData(data)
    hoaDon().updateHDDB(maHDDB,data)
        .then(res => {
            dispatch({
                type : ACTION_TYPE_HDDB.UPDATE_HDDB,
                payload: {maHDDB,...data}
            })
        })
        .catch(err => console.log(err))
}

export const DeleteHDDB = (maHDDB,data) => dispatch => {
    hoaDon().deleteHDDB(maHDDB)
        .then(res => {
            dispatch({
                type : ACTION_TYPE_HDDB.DELETE_HDDB,
                payload: maHDDB
            })
        })
        .catch(err => console.log(err))
}