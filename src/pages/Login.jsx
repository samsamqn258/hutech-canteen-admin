import styled from 'styled-components';
import Logo from '../ui/Logo';
import Heading from '../ui/Heading';
import LoginForm from '../features/authentication/LoginForm';

const LoginLayout = styled.main`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    gap: 2.8rem;
    justify-content: center;
    align-items: center;
    background-color: var(--color-grey-50);
`;

export default function Login() {
    return (
        <LoginLayout>
            <Logo />
            <Heading as="h1">Đăng nhập tài khoản</Heading>
            <LoginForm />
        </LoginLayout>
    );
}
