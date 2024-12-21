import { format } from 'date-fns';
import Table from '../../ui/Table';
import styled from 'styled-components';
import Menus from '../../ui/Menus';
import { HiPencil, HiTrash } from 'react-icons/hi2';
import Modal from '../../ui/Modal';
import ConfirmDelete from '../../ui/ConfirmDelete';
import { formatCurrency } from '../../utils/helpers';
import { useDeleteDiscount } from './useDeleteDiscount';

const Img = styled.img`
    display: block;
    width: 6.4rem;
    object-fit: cover;
    border-radius: 50%;
`;

const CategoryName = styled.div`
    font-size: 1.6rem;
    font-weight: 600;
    color: var(--color-grey-600);
`;

const Number = styled.div`
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--color-grey-600);
`;
export default function DiscountRow({ discount }) {
    const { isDeleting, deleteDiscount } = useDeleteDiscount();
    const {
        _id: discountId,
        discount_code,
        discount_end_date,
        discount_value,
        min_order_value,
        maximum_discount_value,
        max_uses_per_user,
        discount_image,
    } = discount;
    return (
        <Table.Row>
            <Img src={discount_image} />
            <CategoryName>{discount_code}</CategoryName>
            <Number>{discount_value}%</Number>
            <Number>{formatCurrency(min_order_value)}</Number>
            <Number>{formatCurrency(maximum_discount_value)}</Number>
            <Number>Tối đa {max_uses_per_user} lần</Number>

            <span>{format(new Date(discount_end_date), 'dd-MM-yyyy')}</span>
            <div>
                <Modal>
                    <Menus.Menu>
                        <Menus.Toggle id={discountId} />
                        <Menus.List id={discountId}>
                            <Modal.Open opens="update-discount">
                                <Menus.Button icon={<HiPencil />}>
                                    Chỉnh sửa
                                </Menus.Button>
                            </Modal.Open>
                            <Modal.Open opens="delete-discount">
                                <Menus.Button icon={<HiTrash />}>
                                    Xóa
                                </Menus.Button>
                            </Modal.Open>
                        </Menus.List>
                        {/* <Modal.Window name="update-category">
                            <CreateCategoryForm categoryToUpdate={category} />
                        </Modal.Window> */}
                        <Modal.Window name="delete-discount">
                            <ConfirmDelete
                                resourceName="mã giảm giá"
                                disabled={isDeleting}
                                onConfirm={() => deleteDiscount(discountId)}
                            />
                        </Modal.Window>
                    </Menus.Menu>
                </Modal>
            </div>
        </Table.Row>
    );
}
