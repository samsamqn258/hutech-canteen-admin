import styled from 'styled-components';
import SignupEmployeeForm from '../features/authentication/SignupEmployeeForm';
import SignupManagerForm from '../features/authentication/SignupManagerForm';

import Heading from '../ui/Heading';
import Row from '../ui/Row';

const StyledUsers = styled.div`
    margin-top: 20px;
    display: flex;
    gap: 1.4rem;
`;

export default function Users() {
    return (
        <>
            <Heading as="h1">Tạo tài khoản </Heading>
            <StyledUsers>
                <Row>
                    <Heading as="h2">Tài khoản quản lý</Heading>
                    <SignupManagerForm />
                </Row>
                <Row>
                    <Heading as="h2">Tài khoản nhân viên</Heading>
                    <SignupEmployeeForm />
                </Row>
            </StyledUsers>
        </>
    );
}
