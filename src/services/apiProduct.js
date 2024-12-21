import { API_BASE_URL } from '../utils/constants';

const API_URL = `${API_BASE_URL}/product`;

export async function getProducts(query) {
    let res;

    if (query) {
        res = await fetch(`${API_URL}/searchELT?query=${query}`);
    } else {
        res = await fetch(`${API_URL}/getAllProductsWeb`);
    }

    if (!res.ok) {
        throw new Error('Lỗi tìm sản phẩm');
    }

    const data = await res.json();

    console.log(data);

    return data.metaData.products;
}

export async function createUpdateProduct(newProduct, id) {
    try {
        let res;
        const authData = JSON.parse(localStorage.getItem('authData'));
        const { accessToken } = authData;

        const {
            product_name,
            product_description,
            ingredients,
            product_usage,
            category_id,
            product_price,
            product_ratingAverage,
            preparation_time,
            image,
            shop_ids,
            sideDish_id,
        } = newProduct;

        const formData = new FormData();

        formData.append('product_name', product_name);
        formData.append('product_description', product_description);
        formData.append('ingredients', ingredients);
        formData.append('product_usage', product_usage);
        formData.append('category_id', category_id);
        formData.append('product_price', product_price);
        formData.append('product_ratingAverage', product_ratingAverage);
        formData.append('preparation_time', preparation_time);

        if (!id) {
            if (shop_ids && Array.isArray(shop_ids)) {
                shop_ids.forEach((shop_id) => {
                    formData.append('shop_ids[]', shop_id);
                });
            }

            if (sideDish_id && Array.isArray(sideDish_id)) {
                sideDish_id.forEach((side_dish) => {
                    formData.append('sideDish_id[]', side_dish);
                });
            }
        }

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
        throw Error('Lỗi  thêm  sản phẩm không thành công');
    }
}

export async function deleteProduct(id) {
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
        if (!res.ok) throw new Error('Xóa sản phẩm không thành công');

        const data = await res.json();
        console.log(data);
        return data;
    } catch {
        throw new Error('Xóa sản phẩm không thành công');
    }
}
