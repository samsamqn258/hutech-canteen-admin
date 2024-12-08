import { useState } from 'react';
import Form from '../../ui/Form';
import FormRowVertical from '../../ui/FormRowVertical';
import Input from '../../ui/Input';
import useLogin from './useLogin';
import SpinnerMini from '../../ui/SpinnerMini';
import Button from '../../ui/Button';

export default function LoginForm() {
    const [email, setEmail] = useState('ADMIN@gmail.com');
    const [password, setPassword] = useState('123456');
    const { isLoading, login } = useLogin();
    function handleSubmit(e) {
        e.preventDefault();
        if (!email || !password) return;
        login(
            { email, password },
            {
                onSettled: () => {
                    setEmail('');
                    setPassword('');
                },
            }
        );
    }
    return (
        <Form onSubmit={handleSubmit}>
            <FormRowVertical label="Tài khoản">
                <Input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isLoading}
                />
            </FormRowVertical>
            <FormRowVertical label="Mật khẩu">
                <Input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={isLoading}
                />
            </FormRowVertical>
            <FormRowVertical>
                <Button>{isLoading ? <SpinnerMini /> : 'Đăng nhập'}</Button>
            </FormRowVertical>
        </Form>
    );
}
