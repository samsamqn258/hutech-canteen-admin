import { API_BASE_URL } from '../utils/constants';

const API_URL = `${API_BASE_URL}/discount`;

export async function getDiscounts() {
    try {
        const authData = JSON.parse(localStorage.getItem('authData'));
        const { accessToken } = authData;
        const res = await fetch(`${API_URL}/getValidDiscounts`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: accessToken,
            },
        });

        if (!res.ok) throw Error('API_URL đã sai');

        const data = await res.json();

        return data.metaData;
    } catch {
        throw Error('Lỗi tìm danh sách giảm giá không thành công');
    }
}

export async function createUpdateDiscount(newDiscount, id) {
    try {
        let res;
        const authData = JSON.parse(localStorage.getItem('authData'));
        const { accessToken } = authData;

        const {
            discount_name,
            image,
            discount_code,
            discount_start_date,
            discount_end_date,
            discount_value_type,
            discount_value,
            min_order_value,
            maximum_discount_value,
            max_total_uses,
            max_uses_per_user,
            applicable_to,
            discount_content,
        } = newDiscount;

        console.log(discount_end_date, discount_start_date);

        const formData = new FormData();

        formData.append('discount_name', discount_name);
        formData.append('discount_code', discount_code);
        formData.append('discount_start_date', discount_start_date);
        formData.append('discount_end_date', discount_end_date);
        formData.append('discount_value_type', discount_value_type);
        formData.append('discount_value', discount_value);
        formData.append('min_order_value', min_order_value);
        formData.append('maximum_discount_value', maximum_discount_value);
        formData.append('max_total_uses', max_total_uses);
        formData.append('max_uses_per_user', max_uses_per_user);
        formData.append('applicable_to', applicable_to);
        formData.append('discount_content', discount_content);

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

        if (!res.ok) throw Error('Thêm đánh giá không thành công');

        const data = await res.json();

        return data;
    } catch {
        throw Error('Lỗi tìm thêm đánh giá không thành công');
    }
}

export async function deleteDiscount(id) {
    const authData = JSON.parse(localStorage.getItem('authData'));
    const { accessToken } = authData;
    try {
        const res = await fetch(`${API_URL}/softDelete/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Authorization: accessToken,
            },
        });
        console.log(res);
        if (!res.ok) throw Error('Xóa mã giảm giá không thành công');

        const data = await res.json();

        return data;
    } catch {
        throw Error('Xóa mã giảm giá không thành công đang tồn tại sản phẩm');
    }
}
