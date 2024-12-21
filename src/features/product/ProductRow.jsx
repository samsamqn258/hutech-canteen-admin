import { format } from 'date-fns';
import Table from '../../ui/Table';
import styled from 'styled-components';

import Menus from '../../ui/Menus';
import { HiPencil, HiTrash } from 'react-icons/hi2';
import Modal from '../../ui/Modal';
import ConfirmDelete from '../../ui/ConfirmDelete';
import { formatCurrency } from '../../utils/helpers';
import CreateProductForm from './CreateProductForm';
import { useDeleteProduct } from './useDeleteProduct';

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

const Description = styled.div`
    font-size: 1.4rem;
    color: var(--color-grey-500);
`;

const Number = styled.div`
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--color-grey-600);
`;
export default function ProductRow({ product }) {
    const {
        _id: productId,
        product_name,
        product_description,
        product_price,
        required_points,
        product_ratingAverage,
        preparation_time,
        product_thumb,
        createdAt,
    } = product;

    console.log(product);

    const { isDeleting, deleteProduct } = useDeleteProduct();

    return (
        <Table.Row>
            <Img src={product_thumb} />
            <Name>{product_name}</Name>
            <Description>{product_description}</Description>
            <span>{format(new Date(createdAt), 'dd-MM-yyyy')}</span>
            <Number>{formatCurrency(product_price)}</Number>
            <Number>{required_points} điểm</Number>
            <Number>{product_ratingAverage} ⭐</Number>
            <Number>{preparation_time} phút</Number>
            <div>
                <Modal>
                    <Menus.Menu>
                        <Menus.Toggle id={productId} />
                        <Menus.List id={productId}>
                            <Modal.Open opens="update-product">
                                <Menus.Button icon={<HiPencil />}>
                                    Chỉnh sửa
                                </Menus.Button>
                            </Modal.Open>

                            <Modal.Open opens="delete-product">
                                <Menus.Button icon={<HiTrash />}>
                                    Xóa
                                </Menus.Button>
                            </Modal.Open>
                        </Menus.List>
                        <Modal.Window name="update-product">
                            <CreateProductForm productToUpdate={product} />
                        </Modal.Window>

                        <Modal.Window name="delete-product">
                            <ConfirmDelete
                                resourceName="sản phẩm"
                                onConfirm={() => deleteProduct(productId)}
                                disabled={isDeleting}
                            />
                        </Modal.Window>
                    </Menus.Menu>
                </Modal>
            </div>
        </Table.Row>
    );
}
