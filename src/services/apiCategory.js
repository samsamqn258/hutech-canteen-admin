import { API_BASE_URL } from '../utils/constants';

const API_URL = `${API_BASE_URL}/category`;

export async function getCategories() {
    try {
        const res = await fetch(`${API_URL}/all`);
        if (!res.ok) throw Error('API_URL đã sai');

        const data = await res.json();

        return data.metaData;
    } catch {
        throw Error('Lỗi tìm danh mục sản phẩm không thành công');
    }
}

export async function createUpdateCategory(newCategory, id) {
    try {
        let res;
        const authData = JSON.parse(localStorage.getItem('authData'));
        const { accessToken } = authData;

        const { category_name, image } = newCategory;

        const formData = new FormData();

        formData.append('category_name', category_name);

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
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Authorization: accessToken,
            },
        });
        console.log(res);
        if (!res.ok) throw Error('Xóa danh mục không thành công');

        const data = await res.json();

        return data;
    } catch {
        throw Error('Xóa danh mục không thành công đang tồn tại sản phẩm');
    }
}
