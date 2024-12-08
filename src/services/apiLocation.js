import { API_BASE_URL } from '../utils/constants';

const API_URL = `${API_BASE_URL}/location`;

export async function getLocations() {
    try {
        const res = await fetch(`${API_URL}/getAll`);

        if (!res.ok) throw Error('Lấy vị trí không thành công');

        const data = await res.json();

        return data.metaData;
    } catch (err) {
        console.error('Không thể lấy vị trí', err);
        throw new Error(err);
    }
}

export async function createLocation(newLocation) {
    const authData = JSON.parse(localStorage.getItem('authData'));
    const { accessToken } = authData;
    try {
        const res = await fetch(`${API_URL}/create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: accessToken,
            },
            body: JSON.stringify(newLocation),
        });
        if (!res.ok) throw Error('Tạo vị trí không thành công');

        const data = await res.json();

        return data;
    } catch (err) {
        console.error('Không thể tạo vị trí', err);
        throw new Error(err);
    }
}

export async function deleteLocation(id) {
    const authData = JSON.parse(localStorage.getItem('authData'));
    const { accessToken } = authData;
    try {
        const res = await fetch(`${API_URL}/delete/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Authorization: accessToken,
            },
        });
        console.log(res);
        if (!res.ok) throw Error('Xóa vị trí không thành công');

        const data = await res.json();

        return data;
    } catch {
        throw new Error('Xóa vị trí không thành công');
    }
}
