// import { format } from 'date-fns';
// import Table from '../../ui/Table';
// import styled from 'styled-components';
// import InputChecked from '../../ui/InputChecked';
// import Menus from '../../ui/Menus';
// import { HiPencil, HiTrash } from 'react-icons/hi2';
// import Modal from '../../ui/Modal';
// import ConfirmDelete from '../../ui/ConfirmDelete';
// import useCategories from '../category/useCategories';
// import Spinner from '../../ui/Spinner';
// import useDeleteSubCategory from './useDeleteSubCategory';

// const Img = styled.img`
//     display: block;
//     width: 6.4rem;
//     object-fit: cover;
//     border-radius: 50%;
// `;

// const Name = styled.div`
//     font-size: 1.6rem;
//     font-weight: 600;
//     color: var(--color-grey-600);
// `;
// export default function SubCategoryRow({ subCategory }) {
//     const { isLoading, categories } = useCategories();
//     const { isDeleting, deleteSubCategory } = useDeleteSubCategory();
//     if (isLoading) return <Spinner />;
//     const {
//         _id: subCategoryId,
//         sc_name: subCategoryName,
//         parentCategory: parentCategoryId,
//         draft,
//         publish,
//         createdAt,
//     } = subCategory;

//     const findCategoryName = categories.find(
//         (name) => name._id === parentCategoryId
//     );

//     return (
//         <Table.Row>
//             <Img src="logo.jpg" />
//             <Name>{subCategoryName}</Name>
//             <Name>{findCategoryName?.meals}</Name>

//             <span>{format(new Date(createdAt), 'dd-MM-yyyy')}</span>
//             <InputChecked isChecked={draft} disabled={draft} />
//             <InputChecked isChecked={publish} disabled={publish} />
//             <div>
//                 <Modal>
//                     <Menus.Menu>
//                         <Menus.Toggle id={subCategoryId} />
//                         <Menus.List id={subCategoryId}>
//                             <Menus.Button icon={<HiPencil />}>
//                                 Chỉnh sửa
//                             </Menus.Button>
//                             <Modal.Open opens="delete-subCategory">
//                                 <Menus.Button icon={<HiTrash />}>
//                                     Xóa
//                                 </Menus.Button>
//                             </Modal.Open>
//                         </Menus.List>
//                     </Menus.Menu>
//                     <Modal.Window name="delete-subCategory">
//                         <ConfirmDelete
//                             resourceName="danh mục phụ"
//                             disabled={isDeleting}
//                             onConfirm={() => deleteSubCategory(subCategoryId)}
//                         />
//                     </Modal.Window>
//                 </Modal>
//             </div>
//         </Table.Row>
//     );
// }
