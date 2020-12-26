import axios from "axios";

const Url = 'http://localhost:52419/api/';

export const monAn = (url = Url + 'MonAn/') => {
    return {
        fetchAllMonAn: () => axios.get(url),
        fetchByIdMonAn: maMonAn => axios.get(url + maMonAn),
        createMonAn: newMonAn => axios.post(url, newMonAn),
        updateMonAn: (maMonAn, updateMonAn) => axios.put(url + maMonAn, updateMonAn),
        deleteMonAn: maMonAn => axios.delete(url + maMonAn)
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

export const nhanVien = (url = Url + 'NhanVien/') => {
    return {
        fetchAllNhanVien: () => axios.get(url),
        fetchByIdNhanVien: maNV => axios.get(url + maNV),
        createNhanVien: newMaNV => axios.post(url, newMaNV),
        updateNhanVien: (maNV, updateMaNV) => axios.put(url + maNV, updateMaNV),
        deleteNhanVien: maNV => axios.delete(url + maNV)
    }
}

export const datBan = (url = Url + 'DatBan/') => {
    return {
        fetchAllDatBan: () => axios.get(url),
        fetchByIdDatBan: maBan => axios.get(url + maBan),
        createDatBan: newMaBan => axios.post(url, newMaBan),
        updateDatBan: (maBan, updateMaBan) => axios.put(url + maBan, updateMaBan),
        deleteDatBan: maBan => axios.delete(url + maBan)
    }
}
