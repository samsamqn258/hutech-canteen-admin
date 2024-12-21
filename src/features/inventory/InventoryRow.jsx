import Table from '../../ui/Table';
import styled from 'styled-components';
import Menus from '../../ui/Menus';
import { HiPencil, HiTrash } from 'react-icons/hi2';
import Modal from '../../ui/Modal';
import ConfirmDelete from '../../ui/ConfirmDelete';
import { formatCurrency } from '../../utils/helpers';
import CreateInventoryForm from './CreateInventoryForm';
import { useDeleteInventory } from './useDeleteInventory';

const Img = styled.img`
    display: block;
    width: 6.4rem;
    object-fit: cover;
    border-radius: 50%;
`;

const Name = styled.div`
    font-size: 1.6rem;
    font-weight: 600;
    color: var(--color-grey-600);
`;

const Number = styled.div`
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--color-grey-600);
`;
export default function InventoryRow({ inventory }) {
    const {
        _id: inventoryId,
        product_id,
        inven_stock,
        shop_id,
        minStockLevel,
    } = inventory;

    const { product_name, product_thumb, product_price, required_points, _id } =
        product_id;

    const { isDeleting, deleteInventory } = useDeleteInventory();
    return (
        <Table.Row>
            <Img src={product_thumb} />
            <Name>{product_name}</Name>
            <Number>{inven_stock}</Number>
            <Number>{formatCurrency(product_price)}</Number>
            <Number>{required_points} điểm</Number>

            <Number>{minStockLevel}</Number>

            <div>
                <Modal>
                    <Menus.Menu>
                        <Menus.Toggle id={inventoryId} />
                        <Menus.List id={inventoryId}>
                            <Modal.Open opens="update-inventory">
                                <Menus.Button icon={<HiPencil />}>
                                    Chỉnh sửa
                                </Menus.Button>
                            </Modal.Open>
                            <Modal.Open opens="delete-inventory">
                                <Menus.Button icon={<HiTrash />}>
                                    Xóa
                                </Menus.Button>
                            </Modal.Open>
                        </Menus.List>
                        <Modal.Window name="update-inventory">
                            <CreateInventoryForm
                                inventoryToUpdate={inventory}
                            />
                        </Modal.Window>{' '}
                        <Modal.Window name="delete-inventory">
                            <ConfirmDelete
                                resourceName="kho hàng"
                                disabled={isDeleting}
                                onConfirm={() =>
                                    deleteInventory({
                                        shop_id,
                                        product_id: _id,
                                    })
                                }
                            />
                        </Modal.Window>
                    </Menus.Menu>
                </Modal>
            </div>
        </Table.Row>
    );
}
