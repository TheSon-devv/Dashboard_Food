import axios from "axios";

const ProductUrl = 'http://localhost:52419/api/';

export const product = (url = ProductUrl + 'Sanphams/') => {
    return {
        fetchAll: () => axios.get(url),
        fetchById: id => axios.get(url + id),
        create: newRecord => axios.post(url, newRecord),
        update: (masp, updateRecord) => axios.put(url + masp, updateRecord),
        delete: masp => axios.delete(url + masp)
    }
}

