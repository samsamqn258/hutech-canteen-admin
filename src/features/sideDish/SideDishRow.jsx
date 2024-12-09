import { format } from 'date-fns';
import Table from '../../ui/Table';
import styled from 'styled-components';
import InputChecked from '../../ui/InputChecked';
import Menus from '../../ui/Menus';
import { HiPencil, HiTrash } from 'react-icons/hi2';
import Modal from '../../ui/Modal';
import ConfirmDelete from '../../ui/ConfirmDelete';
import useCategories from '../category/useCategories';
import Spinner from '../../ui/Spinner';
import useDeleteSubCategory from './useDeleteSubCategory';

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
export default function SideDishRow({ sideDish }) {
    const {
        _id: subCategoryId,
        sideDish_name,
        price,
        isDeleted,
        createdAt,
    } = sideDish;

    return (
        <Table.Row>
            <Name>{sideDish_name}</Name>
            <Number></Number>
            <span>{format(new Date(createdAt), 'dd-MM-yyyy')}</span>
            <InputChecked isChecked={isDeleted} disabled={isDeleted} />

            <div>
                <Modal>
                    <Menus.Menu>
                        <Menus.Toggle id={subCategoryId} />
                        <Menus.List id={subCategoryId}>
                            <Menus.Button icon={<HiPencil />}>
                                Chỉnh sửa
                            </Menus.Button>
                            <Modal.Open opens="delete-subCategory">
                                <Menus.Button icon={<HiTrash />}>
                                    Xóa
                                </Menus.Button>
                            </Modal.Open>
                        </Menus.List>
                    </Menus.Menu>
                    <Modal.Window name="delete-subCategory">
                        <ConfirmDelete
                            resourceName="danh mục phụ"
                            disabled={isDeleting}
                            onConfirm={() => deleteSubCategory(subCategoryId)}
                        />
                    </Modal.Window>
                </Modal>
            </div>
        </Table.Row>
    );
}
