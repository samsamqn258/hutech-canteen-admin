import { API_BASE_URL } from '../utils/constants';

const API_URL = `${API_BASE_URL}/shop`;

export async function getStores() {
    try {
        const res = await fetch(`${API_URL}/getAll`);

        if (!res.ok) throw Error('Lấy cửa hàng không thành công');

        const data = await res.json();

        return data.metaData;
    } catch (err) {
        console.error('Không thể lấy cửa hàng', err);
        throw new Error(err);
    }
}

export async function createUpdateStore(newStore, id) {
    try {
        let res;
        const authData = JSON.parse(localStorage.getItem('authData'));
        const { accessToken } = authData;
        const { shop_name, location_id, image, opening_hours, description } =
            newStore;

        console.log(' Giữ liệu mới vào', newStore, id);

        const formData = new FormData();

        formData.append('shop_name', shop_name);
        formData.append('location_id', location_id);
        formData.append('opening_hours', opening_hours);
        formData.append('description', description);

        if (image) {
            formData.append('file', image);
        }

        if (id) {
            res = await fetch(`${API_URL}/update/${id}`, {
                method: 'PATCH',
                headers: {
                    Authorization: accessToken,
                },
                body: formData,
            });
        } else {
            res = await fetch(`${API_URL}/create`, {
                method: 'POST',
                headers: {
                    Authorization: accessToken,
                },
                body: formData,
            });
        }

        if (!res.ok) throw new Error('Cập nhật cửa hàng không thành công');

        const data = await res.json();

        return data;
    } catch {
        throw new Error('Lỗi tìm cửa hàng không thành công');
    }
}
