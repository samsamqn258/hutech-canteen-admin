import { API_BASE_URL } from '../utils/constants';

const API_URL = `${API_BASE_URL}/user`;

export async function getEmployees() {
    try {
        const res = await fetch(`${API_URL}/listEmployees`);

        if (!res.ok) throw Error('Không thể lấy danh sách nhân viên');

        const data = await res.json();

        return data.metaData;
    } catch (err) {
        console.error('Không thể lấy danh sách nhân viên', err);
        throw new Error(err);
    }
}

export async function getManages() {
    try {
        const res = await fetch(`${API_URL}/listManage`);

        if (!res.ok) throw Error('Không thể lấy danh sách quản lý');

        const data = await res.json();

        return data.metaData;
    } catch (err) {
        console.error('Không thể lấy danh sách quản lý', err);
        throw new Error(err);
    }
}

export async function updateStatus(id) {
    console.log(id);
    try {
        const res = await fetch(`${API_URL}/updateStatus/${id}`, {
            method: 'PATCH',
        });
        const data = await res.json();
        return data;
    } catch (err) {
        throw new Error('Không cập nhật trạng thái nhân viên hoặc quản lý');
    }
}

export async function signUpEmployee({ name, shop_id, email, password }) {
    try {
        const authData = JSON.parse(localStorage.getItem('authData'));
        const { accessToken } = authData;
        const res = await fetch(`${API_URL}/signUpForEmployee`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: accessToken,
            },
            body: JSON.stringify({ email, password, name, shop_id }),
        });

        if (!res.ok) {
            throw new Error('Tài khoản hoặc mật khẩu không chính xác');
        }
        const data = await res.json();

        return data.metaData;
    } catch {
        throw Error('Lỗi tìm nạp dữ liệu khi đăng ký');
    }
}

export async function signUpManager({ name, shop_id, email, password }) {
    console.log(name, shop_id, email, password);
    try {
        const authData = JSON.parse(localStorage.getItem('authData'));
        const { accessToken } = authData;
        const res = await fetch(`${API_URL}/signUpForBranchManager`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: accessToken,
            },
            body: JSON.stringify({ email, password, name, shop_id }),
        });

        if (!res.ok) {
            throw new Error('Tài khoản hoặc mật khẩu không chính xác');
        }
        const data = await res.json();

        return data.metaData;
    } catch {
        throw Error('Lỗi tìm nạp dữ liệu khi đăng ký');
    }
}
