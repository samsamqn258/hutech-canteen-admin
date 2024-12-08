import { API_BASE_URL } from '../utils/constants';

const API_URL = `${API_BASE_URL}/sideDish`;

export async function getSideDishes() {
    const res = await fetch(`${API_URL}/getAll `);

    if (!res.ok) {
        throw new Error('Lỗi tìm món phụ của sản phẩm');
    }

    const data = await res.json();

    return data.metaData;
}
