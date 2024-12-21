import { API_BASE_URL } from '../utils/constants';

const API_URL = `${API_BASE_URL}/order`;

export async function getStatistics(queryDate) {
    console.log(queryDate);
    try {
        const res = await fetch(
            `${API_URL}/getStatistics?timeRange=${queryDate}`
        );

        if (!res.ok) throw Error('Lấy doanh thu không thành công');

        const data = await res.json();

        return data.metaData;
    } catch (err) {
        console.error('Lấy doanh thu không thành công', err);
        throw new Error(err);
    }
}

export async function getBestSellingProducts(queryDate) {
    try {
        const res = await fetch(
            `${API_URL}/getBestSellingProducts?timeRange=${queryDate}`
        );
        if (!res.ok) throw Error('Lấy sản phẩm bán chạy nhất không thành công');

        const data = await res.json();

        console.log(data.metaData);
        return data.metaData;
    } catch (err) {
        console.error('Lấy sản phẩm bán chạy nhất không thành công', err);
        throw new Error(err);
    }
}
