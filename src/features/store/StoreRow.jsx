import { format } from 'date-fns';
import Table from '../../ui/Table';
import styled from 'styled-components';
import Menus from '../../ui/Menus';
import { HiPencil, HiTrash } from 'react-icons/hi2';
import Modal from '../../ui/Modal';
import CreateStoreForm from './CreateStoreForm';

const Img = styled.img`
    display: block;
    width: 8rem;
    object-fit: cover;
    border-radius: 10%;
`;

const Name = styled.div`
    font-size: 1.6rem;
    font-weight: 600;
    color: var(--color-grey-600);
`;

const Description = styled.div`
    font-size: 1.4rem;
    color: var(--color-grey-500);
`;

const Status = styled.div`
    font-size: 1.5rem;
    font-weight: 500;
    color: var(--color-grey-0);
    background-color: var(--color-green-700);
    border-radius: 8px;
    display: flex;
    align-items: center;
    padding: 0.4rem;
    justify-content: center;
`;

export default function StoreRow({ store }) {
    const {
        _id: storeID,
        shop_name,
        status,
        shop_image,
        description,
        createdAt,
        location_id,
        opening_hours,
    } = store;

    return (
        <Table.Row>
            <Img src={shop_image} />
            <Name>{shop_name}</Name>
            <Description>{description}</Description>
            <span>{format(new Date(createdAt), 'dd-MM-yyyy')}</span>
            <Status>{status === 'active' && 'Hoạt động'}</Status>
            <div>
                <Modal>
                    <Menus.Menu>
                        <Menus.Toggle id={storeID} />
                        <Menus.List id={storeID}>
                            <Modal.Open opens="update-store">
                                <Menus.Button icon={<HiPencil />}>
                                    Chỉnh sửa
                                </Menus.Button>
                            </Modal.Open>

                            <Modal.Open opens="delete-store">
                                <Menus.Button icon={<HiTrash />}>
                                    Xóa
                                </Menus.Button>
                            </Modal.Open>
                        </Menus.List>

                        <Modal.Window name="update-store">
                            <CreateStoreForm storeToUpdate={store} />
                        </Modal.Window>
                    </Menus.Menu>
                </Modal>
            </div>
        </Table.Row>
    );
}
