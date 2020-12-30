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

export const khuVuc = (url = Url + 'KhuVuc/') => {
    return {
        fetchAllKhuVuc: () => axios.get(url),
        fetchByIdKhuVuc: maKV => axios.get(url + maKV)
    }
}

export const hoaDon = (url = Url + 'HoaDonDatBan/') => {
    return {
        fetchAllHDDB: () => axios.get(url),
        fetchByIdHDDB: maHDDB => axios.get(url + maHDDB),
        createHDDB: newMaHDDB => axios.post(url, newMaHDDB),
        updateHDDB: (maHDDB, updateHDDB) => axios.put(url + maHDDB, updateHDDB),
        deleteHDDB: maHDDB => axios.delete(url + maHDDB)
    }
}

export const admin = (url = Url + 'Admin/') => {
    return {
        fetchAllAdmin: () => axios.get(url),
        fetchByIdAdmin: id => axios.get(url + id),
        createAdmin: newId => axios.post(url, newId),
    }
}


export const loaiMonAn = (url = Url + 'LoaiMonAn/') => {
    return {
        fetchAllLMA: () => axios.get(url),
        fetchByIdLMA: maLoai => axios.get(url + maLoai)
    }
}

export const nhaHang = (url = Url + 'NhaHang/') => {
    return {
        fetchAllNhaHang: () => axios.get(url),
        fetchByIdNhaHang: maNH => axios.get(url + maNH)
    }
}