import { khachHang } from "./api";

export const ACTION_TYPE_KHACH_HANG = {
    CREATE_KHACH_HANG : 'CREATE_KHACH_HANG',
    UPDATE_KHACH_HANG : 'UPDATE_KHACH_HANG',
    DELETE_KHACH_HANG : 'DELETE_KHACH_HANG',
    FETCH_ALL_KHACH_HANG : 'FETCH_ALL_KHACH_HANG'
}

const formateData = data => ({
    ...data
})

export const fetchAllKhachHang = () => dispatch => {
    khachHang().fetchAllKhachHang()
        .then(
            response => {
                console.log(response)
                dispatch({
                    type: ACTION_TYPE_KHACH_HANG.FETCH_ALL_KHACH_HANG,
                    payload: response.data
                })
            })
        .catch(err => console.log(err))

}

export const createKhachHang = (data) => dispatch => {
    data = formateData(data)
    khachHang().createKhachHang(data)
        .then(res => {
            dispatch({
                type : ACTION_TYPE_KHACH_HANG.CREATE_KHACH_HANG,
                payload: res.data
            });
        })
            .catch(err => console.log(err))
}

export const updateKhachHang = (maKH,data) => dispatch => {
    data = formateData(data)
    khachHang().updateKhachHang(maKH,data)
        .then(res => {
            dispatch({
                type : ACTION_TYPE_KHACH_HANG.UPDATE_KHACH_HANG,
                payload: {maKH,...data}
            })
        })
        .catch(err => console.log(err))
}

export const DeleteKhachHang = (maKH,data) => dispatch => {
    khachHang().deleteKhachHang(maKH)
        .then(res => {
            dispatch({
                type : ACTION_TYPE_KHACH_HANG.DELETE_KHACH_HANG,
                payload: maKH
            })
        })
        .catch(err => console.log(err))
}