import { format } from 'date-fns';
import Table from '../../ui/Table';
import styled from 'styled-components';
import InputChecked from '../../ui/InputChecked';
import Menus from '../../ui/Menus';
import { HiPencil, HiTrash } from 'react-icons/hi2';
import Modal from '../../ui/Modal';
import ConfirmDelete from '../../ui/ConfirmDelete';
import { useDeleteCategory } from './useDeleteCategory';
import CreateCategoryForm from './CreateCategoryForm';

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
export default function CategoryRow({ category }) {
    const { isDeleting, deleteCategory } = useDeleteCategory();
    const {
        _id: categoryId,
        category_name,
        isPublished,
        category_images,
        isDeleted,
        createdAt,
    } = category;
    return (
        <Table.Row>
            <Img src={category_images} />
            <CategoryName>{category_name}</CategoryName>
            <span>{format(new Date(createdAt), 'dd-MM-yyyy')}</span>
            <InputChecked isChecked={isPublished} disabled={isPublished} />
            <InputChecked isChecked={isDeleted} disabled={isDeleted} />
            <div>
                <Modal>
                    <Menus.Menu>
                        <Menus.Toggle id={categoryId} />
                        <Menus.List id={categoryId}>
                            <Modal.Open opens="update-category">
                                <Menus.Button icon={<HiPencil />}>
                                    Chỉnh sửa
                                </Menus.Button>
                            </Modal.Open>
                            <Modal.Open opens="delete-category">
                                <Menus.Button icon={<HiTrash />}>
                                    Xóa
                                </Menus.Button>
                            </Modal.Open>
                        </Menus.List>
                        <Modal.Window name="update-category">
                            <CreateCategoryForm categoryToUpdate={category} />
                        </Modal.Window>
                        <Modal.Window name="delete-category">
                            <ConfirmDelete
                                resourceName="danh mục"
                                disabled={isDeleting}
                                onConfirm={() => deleteCategory(categoryId)}
                            />
                        </Modal.Window>
                    </Menus.Menu>
                </Modal>
            </div>
        </Table.Row>
    );
}
