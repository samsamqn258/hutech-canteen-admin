import { API_BASE_URL } from '../utils/constants';

const API_URL = `${API_BASE_URL}/category`;

export async function getCategories() {
    try {
        const res = await fetch(`${API_URL}/listPublish`);
        if (!res.ok) throw Error('API_URL đã sai');

        const data = await res.json();

        return data.metaData;
    } catch {
        throw Error('Lỗi tìm danh mục sản phẩm không thành công');
    }
}

export async function createCategory(newCategory) {
    const authData = JSON.parse(localStorage.getItem('authData'));
    const { accessToken } = authData;
    try {
        const res = await fetch(`${API_URL}/create`, {
            method: 'POST',
            body: JSON.stringify(newCategory),
            headers: {
                'Content-Type': 'application/json',
                Authorization: accessToken,
            },
        });

        if (!res.ok) throw Error('Thêm sản phẩm không thành công');

        const data = await res.json();

        return data;
    } catch {
        throw Error('Lỗi tìm thêm danh mục sản phẩm không thành công');
    }
}

export async function deleteCategory(id) {
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
        if (!res.ok) throw Error('Xóa sản phẩm không thành công');

        const data = await res.json();

        return data;
    } catch {
        throw Error('Danh mục không thể xóa bởi vì nó có danh mục con');
    }
}
