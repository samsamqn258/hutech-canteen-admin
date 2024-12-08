// import { format } from 'date-fns';
// import Table from '../../ui/Table';
// import styled from 'styled-components';
// import InputChecked from '../../ui/InputChecked';
// import Menus from '../../ui/Menus';
// import { HiPencil, HiTrash } from 'react-icons/hi2';
// import Modal from '../../ui/Modal';
// import ConfirmDelete from '../../ui/ConfirmDelete';
// import { useDeleteCategory } from './useDeleteCategory';

// const Img = styled.img`
//     display: block;
//     width: 6.4rem;
//     object-fit: cover;
//     border-radius: 50%;
// `;

// const CategoryName = styled.div`
//     font-size: 1.6rem;
//     font-weight: 600;
//     color: var(--color-grey-600);
// `;
// export default function CategoryRow({ category }) {
//     const { isDeleting, deleteCategory } = useDeleteCategory();
//     const {
//         _id: categoryId,
//         meals: categoryName,
//         draft,
//         publish,
//         createdAt,
//     } = category;
//     return (
//         <Table.Row>
//             <Img src="logo.jpg" />
//             <CategoryName>{categoryName}</CategoryName>
//             <span>{format(new Date(createdAt), 'dd-MM-yyyy')}</span>
//             <InputChecked isChecked={draft} disabled={draft} />
//             <InputChecked isChecked={publish} disabled={publish} />
//             <div>
//                 <Modal>
//                     <Menus.Menu>
//                         <Menus.Toggle id={categoryId} />
//                         <Menus.List id={categoryId}>
//                             <Menus.Button icon={<HiPencil />}>
//                                 Chỉnh sửa
//                             </Menus.Button>
//                             <Modal.Open opens="delete-category">
//                                 <Menus.Button icon={<HiTrash />}>
//                                     Xóa
//                                 </Menus.Button>
//                             </Modal.Open>
//                         </Menus.List>
//                     </Menus.Menu>
//                     <Modal.Window name="delete-category">
//                         <ConfirmDelete
//                             resourceName="danh mục"
//                             disabled={isDeleting}
//                             onConfirm={() => deleteCategory(categoryId)}
//                         />
//                     </Modal.Window>
//                 </Modal>
//             </div>
//         </Table.Row>
//     );
// }
