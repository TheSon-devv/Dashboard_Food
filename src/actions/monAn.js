import {monAn} from "./api";

export const ACTION_TYPE = {
    CREATE: 'CREATE',
    UPDATE: 'UPDATE',
    DELETE: 'DELETE',
    FETCH_ALL: 'FETCH_ALL'
}

const formateData = data => ({
    ...data
})

export const fetchAllMonAn = () => dispatch => {
    monAn().fetchAllMonAn()
        .then(
            response => {
                console.log(response)
                dispatch({
                    type: ACTION_TYPE.FETCH_ALL,
                    payload: response.data
                })
            })
        .catch(err => console.log(err))

}

export const createMonAn = (data) => dispatch => {
    data = formateData(data)
    monAn().createMonAn(data)
        .then(res => {
            dispatch({
                type : ACTION_TYPE.CREATE,
                payload: res.data
            });
        })
            .catch(err => console.log(err))
}

export const updateMonAn = (maMonAn,data) => dispatch => {
    data = formateData(data)
    monAn().updateMonAn(maMonAn,data)
        .then(res => {
            dispatch({
                type : ACTION_TYPE.UPDATE,
                payload: {maMonAn,...data}
            })
        })
        .catch(err => console.log(err))
}

export const DeleteMonAn = (maMonAn,data) => dispatch => {
    monAn().deleteMonAn(maMonAn)
        .then(res => {
            dispatch({
                type : ACTION_TYPE.DELETE,
                payload: maMonAn
            })
        })
        .catch(err => console.log(err))
}