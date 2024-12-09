import { API_BASE_URL } from '../utils/constants';

const API_URL = `${API_BASE_URL}/sideDish`;

export async function getSideDishes() {
    try {
        const res = await fetch(`${API_URL}/getAll `);

        if (!res.ok) {
            throw new Error('Lỗi tìm món phụ của sản phẩm');
        }

        const data = await res.json();

        return data.metaData;
    } catch (e) {
        throw new Error('Không tìm thấy danh sách món phụ nào');
    }
}

export async function createUpdateSideDish(newSideDish, id) {
    try {
        const authData = JSON.parse(localStorage.getItem('authData'));
        const { accessToken } = authData;

        let res;
        if (id) {
            res = await fetch(`${API_URL}/update/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: accessToken,
                },
                body: JSON.stringify(newSideDish),
            });
        } else {
            res = await fetch(`${API_URL}/create`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: accessToken,
                },
                body: JSON.stringify(newSideDish),
            });
        }
        if (!res.ok) throw Error('Tạo món phụ không thành công');

        const data = await res.json();

        return data;
    } catch (err) {
        console.error('Không thể tạo món phụ', err);
        throw new Error(err);
    }
}
