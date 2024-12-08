// import { format } from 'date-fns';
// import Table from '../../ui/Table';
// import styled from 'styled-components';
// // import InputChecked from '../../ui/InputChecked';
// // import Menus from '../../ui/Menus';
// // import { HiPencil, HiTrash } from 'react-icons/hi2';
// // import Modal from '../../ui/Modal';
// // import ConfirmDelete from '../../ui/ConfirmDelete';
// // import { useDeleteCategory } from './useDeleteCategory';
// import { formatCurrency } from '../../utils/helpers';

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

// const Description = styled.div`
//     font-size: 1.4rem;
//     color: var(--color-grey-500);
// `;

// const Number = styled.div`
//     font-size: 1.5rem;
//     font-weight: 600;
//     color: var(--color-grey-600);
// `;
// export default function ProductRow({ product }) {
//     const {
//         _id: productId,
//         product_name: productName,
//         product_description: productDescription,
//         product_price: productPrice,
//         subCategory_id: subCategoryId,
//         product_ratingAverage: productRatingAverage,
//         preparation_time: preparationTime,
//         product_thumb: product_thumb,
//         createdAt,
//     } = product;
//     return (
//         <Table.Row>
//             <Img src={product_thumb} />
//             <Name>{productName}</Name>
//             <Description>{productDescription}</Description>
//             <span>{format(new Date(createdAt), 'dd-MM-yyyy')}</span>
//             <Name>asdsad</Name>
//             <Number>{formatCurrency(productPrice)}</Number>
//             <Number>{productRatingAverage} ⭐</Number>
//             <Number>{preparationTime} phút</Number>
//             <div>
//                 {/* <Modal>
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
//                 </Modal> */}
//             </div>
//         </Table.Row>
//     );
// }
