import { API_BASE_URL } from '../utils/constants';

const API_URL = `${API_BASE_URL}/product`;

export async function getProducts(query) {
    let res;

    if (query) {
        res = await fetch(`${API_URL}/searchELT?query=${query}`);
    } else {
        res = await fetch(`${API_URL}/getAllProducts`);
    }

    if (!res.ok) {
        throw new Error('Lỗi tìm sản phẩm');
    }

    const data = await res.json();

    return data.metaData;
}
