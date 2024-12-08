// import Empty from '../../ui/Empty';
// import Menus from '../../ui/Menus';
// import Spinner from '../../ui/Spinner';
// import Table from '../../ui/Table';
// import SubCategoryRow from './SubCategoryRow';
// import useSubCategories from './useSubCategories';

// export default function SubCategoryTable() {
//     const { isLoading, subCategories } = useSubCategories();

//     if (isLoading) return <Spinner />;

//     if (!subCategories.length) return <Empty resource="danh mục phụ" />;
//     return (
//         <Menus>
//             <Table columns="0.4fr 0.6fr 0.8fr 1fr 1.6fr 1.4fr 0.2fr">
//                 <Table.Header>
//                     <div></div>
//                     <div>Tên danh mục phụ</div>
//                     <div>Danh mục cha</div>
//                     <div>Ngày đăng</div>
//                     <div>Trạng thái ngừng hoạt động</div>
//                     <div>Trạng thái công khai</div>
//                     <div></div>
//                 </Table.Header>
//                 <Table.Body
//                     data={subCategories}
//                     render={(subCategory) => (
//                         <SubCategoryRow
//                             subCategory={subCategory}
//                             key={subCategory._id}
//                         />
//                     )}
//                 />
//             </Table>
//         </Menus>
//     );
// }
