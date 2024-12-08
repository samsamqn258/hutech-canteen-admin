import { API_BASE_URL } from '../utils/constants';

const API_URL = `${API_BASE_URL}/openningHours`;

export async function getOpeningHours() {
    try {
        const res = await fetch(`${API_URL}/getAll`);

        if (!res.ok) throw Error('Lấy thời gian không thành công');

        const data = await res.json();

        return data.metaData;
    } catch (err) {
        console.error('Không thể lấy thời gian', err);
        throw new Error(err);
    }
}
