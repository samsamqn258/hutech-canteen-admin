import styled from 'styled-components';

import Heading from '../../ui/Heading';
import Row from '../../ui/Row';
import ManagerItem from './ManagerItem';

const StyledManager = styled.div`
    /* Box */
    background-color: var(--color-grey-0);
    border: 1px solid var(--color-grey-100);
    border-radius: var(--border-radius-md);

    padding: 3.2rem;
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    grid-column: 1 / span 2;
    padding-top: 2.4rem;
`;

const ManagerList = styled.ul`
    overflow: scroll;
    overflow-x: hidden;

    &::-webkit-scrollbar {
        width: 0 !important;
    }
    scrollbar-width: none;
    -ms-overflow-style: none;
`;

function ListManager({ manages, handlerUpdateStatus }) {
    return (
        <StyledManager>
            <Row type="horizontal">
                <Heading as="h2">Danh sách quản lý</Heading>
            </Row>
            <ManagerList>
                {manages.map((manager) => (
                    <ManagerItem
                        key={manager.id}
                        manager={manager}
                        handlerUpdateStatus={handlerUpdateStatus}
                    />
                ))}
            </ManagerList>
        </StyledManager>
    );
}

export default ListManager;
