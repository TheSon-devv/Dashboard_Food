import { nhanVien } from "./api";

export const ACTION_TYPE_NHAN_VIEN = {
    CREATE_NHAN_VIEN : 'CREATE_NHAN_VIEN',
    UPDATE_NHAN_VIEN: 'UPDATE_NHAN_VIEN',
    DELETE_NHAN_VIEN : 'DELETE_NHAN_VIEN',
    FETCH_ALL_NHAN_VIEN : 'FETCH_ALL_NHAN_VIEN'
}

const formateData = data => ({
    ...data
})


export const fetchAllNhanVien = () => dispatch => {
    nhanVien().fetchAllNhanVien()
        .then(
            response => {
                console.log(response)
                dispatch({
                    type: ACTION_TYPE_NHAN_VIEN.FETCH_ALL_NHAN_VIEN,
                    payload: response.data
                })
            })
        .catch(err => console.log(err))

}

export const createNhanVien = (data) => dispatch => {
    data = formateData(data)
    nhanVien().createNhanVien(data)
        .then(res => {
            dispatch({
                type : ACTION_TYPE_NHAN_VIEN.CREATE_NHAN_VIEN,
                payload: res.data
            });
        })
            .catch(err => console.log(err))
}

export const updateNhanVien = (maNV,data) => dispatch => {
    data = formateData(data)
    nhanVien().updateNhanVien(maNV,data)
        .then(res => {
            dispatch({
                type : ACTION_TYPE_NHAN_VIEN.UPDATE_NHAN_VIEN,
                payload: {maNV,...data}
            })
        })
        .catch(err => console.log(err))
}

export const DeleteNhanVien = (maNV,data) => dispatch => {
    nhanVien().deleteNhanVien(maNV)
        .then(res => {
            dispatch({
                type : ACTION_TYPE_NHAN_VIEN.DELETE_NHAN_VIEN,
                payload: maNV
            })
        })
        .catch(err => console.log(err))
}