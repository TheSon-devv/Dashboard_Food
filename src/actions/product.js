import {product} from "./api";

export const ACTION_TYPE = {
    CREATE: 'CREATE',
    UPDATE: 'UPDATE',
    DELETE: 'DELETE',
    FETCH_ALL: 'FETCH_ALL'
}

const formateData = data => ({
    ...data
})

export const fetchAll = () => dispatch => {
    product().fetchAll()
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

export const create = (data) => dispatch => {
    data = formateData(data)
    product().create(data)
        .then(res => {
            dispatch({
                type : ACTION_TYPE.CREATE,
                payload: res.data
            });
        })
            .catch(err => console.log(err))
}

export const update = (id,data) => dispatch => {
    data = formateData(data)
    product().update(id,data)
        .then(res => {
            dispatch({
                type : ACTION_TYPE.UPDATE,
                payload: {id,...data}
            })
        })
        .catch(err => console.log(err))
}

export const Delete = (masp,data) => dispatch => {
    product().delete(masp)
        .then(res => {
            dispatch({
                type : ACTION_TYPE.DELETE,
                payload: masp
            })
        })
        .catch(err => console.log(err))
}