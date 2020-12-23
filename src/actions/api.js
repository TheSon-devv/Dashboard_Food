import axios from "axios";

const Url = 'http://localhost:52419/api/';

export const product = (url = Url + 'Sanphams/') => {
    return {
        fetchAll: () => axios.get(url),
        fetchById: id => axios.get(url + id),
        create: newRecord => axios.post(url, newRecord),
        update: (masp, updateRecord) => axios.put(url + masp, updateRecord),
        delete: masp => axios.delete(url + masp)
    }
}


export const khachHang = (url = Url + 'KhachHang/') => {
    return {
        fetchAllKhachHang: () => axios.get(url),
        fetchByIdKhachHang: maKH => axios.get(url + maKH),
        createKhachHang: newMaKH => axios.post(url, newMaKH),
        updateKhachHang: (maKH, updateMaKH) => axios.put(url + maKH, updateMaKH),
        deleteKhachHang: maKH => axios.delete(url + maKH)
    }
}
