import styled from 'styled-components';
import Button from '../../ui/Button';

const StyledTodayItem = styled.li`
    display: grid;
    grid-template-columns: 1rem 1fr 1fr 4rem 10rem;
    gap: 1.2rem;
    align-items: center;

    font-size: 1.4rem;
    padding: 0.8rem 0;
    border-bottom: 1px solid var(--color-grey-100);

    &:first-child {
        border-top: 1px solid var(--color-grey-100);
    }
`;

const Guest = styled.div`
    font-weight: 600;
`;
const Gmail = styled.div`
    font-weight: 400;
`;
const ShopName = styled.div`
    font-weight: 400;
`;

const Status = styled.div`
    background-color: ${(props) =>
        props.status === 'active'
            ? 'var(--color-green-700)'
            : 'var(--color-red-700)'};

    width: 10px;
    height: 10px;
    border-radius: 50%;
`;

export default function ManagerItem({ manager, handlerUpdateStatus }) {
    const { _id, name, email, status, shop_name } = manager;

    const onUpdate = () => {
        handlerUpdateStatus(_id);
    };
    return (
        <StyledTodayItem>
            <Status status={status}></Status>
            <Guest>{name}</Guest>
            <Gmail>{email}</Gmail>
            <ShopName>{shop_name}</ShopName>
            <Button onClick={onUpdate}>
                {status === 'active' ? 'Ẩn' : 'Hiện'}
            </Button>
        </StyledTodayItem>
    );
}
