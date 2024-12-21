import styled from 'styled-components';

import Heading from '../../ui/Heading';
import Row from '../../ui/Row';
import EmployeeItem from './EmployeeItem';

const StyledEmployee = styled.div`
    /* Box */
    background-color: var(--color-grey-0);
    border: 1px solid var(--color-grey-100);
    border-radius: var(--border-radius-md);

    padding: 3.2rem;
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    grid-column: 3 / 5;
    padding-top: 2.4rem;
`;

const EmployeeList = styled.ul`
    overflow: scroll;
    overflow-x: hidden;

    &::-webkit-scrollbar {
        width: 0 !important;
    }
    scrollbar-width: none;
    -ms-overflow-style: none;
`;

function ListEmployee({ employees, handlerUpdateStatus }) {
    return (
        <StyledEmployee>
            <Row type="horizontal">
                <Heading as="h2">Danh sách nhân viên</Heading>
            </Row>
            <EmployeeList>
                {employees.map((employee) => (
                    <EmployeeItem
                        key={employee.id}
                        employee={employee}
                        handlerUpdateStatus={handlerUpdateStatus}
                    />
                ))}
            </EmployeeList>
        </StyledEmployee>
    );
}

export default ListEmployee;
