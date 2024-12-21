import { API_BASE_URL } from '../utils/constants';

const API_URL = `${API_BASE_URL}/inventory`;

export async function getInventories(shopID) {
    try {
        const res = await fetch(`${API_URL}/getListProducts/${shopID}`);

        if (!res.ok) {
            throw new Error('Lỗi tìm kho');
        }

        const data = await res.json();

        return data.metaData;
    } catch (err) {
        throw new Error('Không tìm thấy kho hàng nào');
    }
}

export async function createUpdateInventory(newInventory, id) {
    try {
        let res;
        const authData = JSON.parse(localStorage.getItem('authData'));
        const { accessToken } = authData;
        console.log(newInventory, id);
        if (id) {
            res = await fetch(`${API_URL}/update/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: accessToken,
                },
                body: JSON.stringify(newInventory),
            });
        } else {
            res = await fetch(`${API_URL}/add`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: accessToken,
                },
                body: JSON.stringify(newInventory),
            });
        }

        if (!res.ok) throw new Error('Thêm kho hàng không thành công');

        const data = await res.json();

        return data;
    } catch {
        throw Error('Lỗi  thêm  kho hàng không thành công');
    }
}

export async function deleteInventory({ shop_id, product_id }) {
    const authData = JSON.parse(localStorage.getItem('authData'));
    const { accessToken } = authData;
    try {
        const res = await fetch(`${API_URL}/softDelete`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Authorization: accessToken,
            },
            body: JSON.stringify({ shop_id, product_id }),
        });
        if (!res.ok) throw new Error('Xóa kho hàng không thành công');

        const data = await res.json();

        return data;
    } catch {
        throw new Error('Xóa kho hàng không thành công');
    }
}
