// import { useState } from 'react';
// import Button from '../../ui/Button';
// import Form from '../../ui/Form';
// import FormRow from '../../ui/FormRow';
// import Input from '../../ui/Input';
// import useCreateProduct from './useCreateProduct';
// import { useForm } from 'react-hook-form';
// import Select from '../../ui/Select';
// import useSubCategories from '../sideDish/useSubCategories';
// import SpinnerMini from '../../ui/SpinnerMini';

// export default function CreateProductForm({ onCloseModal }) {
//     const [selectSubCategory, setSelectSubCategory] = useState();
//     const { isCreating, createProduct } = useCreateProduct();
//     const { isLoading, subCategories } = useSubCategories();
//     const { register, handleSubmit, reset, formState } = useForm();

//     const options = subCategories?.map((subCategory) => ({
//         value: subCategory._id,
//         label: subCategory.sc_name,
//     }));

//     function onSubmit(data) {
//         createProduct(
//             {
//                 ...data,
//                 subCategory_id: selectSubCategory,
//                 product_thumb:
//                     'https://png.pngtree.com/png-clipart/20230325/original/pngtree-juicy-burgers-with-a-transparent-background-png-image_9002761.png',
//             },
//             {
//                 onSettled: () => {
//                     reset(), onCloseModal?.();
//                 },
//             }
//         );
//     }

//     const { errors } = formState;
//     console.log(errors);
//     return (
//         <Form
//             onSubmit={handleSubmit(onSubmit)}
//             type={onCloseModal ? 'modal' : 'regular'}
//         >
//             <FormRow label="Tên sản phẩm" error={errors?.product_name?.message}>
//                 <Input
//                     type="text"
//                     id="product_name"
//                     disabled={isCreating}
//                     {...register('product_name', {
//                         required: 'Tên sản phẩm không được bỏ trống',
//                     })}
//                     placeholder="Nhập tên sản phẩm..."
//                 />
//             </FormRow>

//             <FormRow label="Mô tả" error={errors?.product_description?.message}>
//                 <Input
//                     type="text"
//                     id="product_description"
//                     disabled={isCreating}
//                     {...register('product_description', {
//                         required: 'Mô tả không được bỏ trống',
//                     })}
//                     placeholder="Nhập mô tả sản phẩm..."
//                 />
//             </FormRow>
//             <FormRow
//                 label="Giá sản phẩm"
//                 error={errors?.product_price?.message}
//             >
//                 <Input
//                     type="text"
//                     id="product_price"
//                     disabled={isCreating}
//                     {...register('product_price', {
//                         required: 'Giá không được bỏ trống',
//                         validate: (value) =>
//                             value > 0 || 'Giá sản phẩm không được âm',
//                     })}
//                     placeholder="Nhập giá sản phẩm..."
//                 />
//             </FormRow>
//             <FormRow label="Nguyên liệu" error={errors?.ingredients?.message}>
//                 <Input
//                     type="text"
//                     id="ingredients"
//                     disabled={isCreating}
//                     {...register('ingredients', {
//                         required: 'Nguyên liệu không được bỏ trống',
//                     })}
//                     placeholder="Nhập nguyên liệu sản phẩm..."
//                 />
//             </FormRow>
//             <FormRow label="Kích thước" error={errors?.serving_size?.message}>
//                 <Input
//                     type="text"
//                     id="serving_size"
//                     disabled={isCreating}
//                     {...register('serving_size', {
//                         required: 'Kích thước không được bỏ trống',
//                     })}
//                     placeholder="Nhập kích thước sản phẩm..."
//                 />
//             </FormRow>
//             <FormRow
//                 label="Đánh giá"
//                 error={errors?.product_ratingAverage?.message}
//             >
//                 <Input
//                     type="text"
//                     id="product_ratingAverage"
//                     disabled={isCreating}
//                     {...register('product_ratingAverage', {
//                         required: 'Đánh giá không được bỏ trống',
//                         validate: (value) =>
//                             value > 0 || 'Đánh giá sản phẩm không được âm',
//                     })}
//                     placeholder="Nhập đánh giá sản phẩm..."
//                 />
//             </FormRow>
//             <FormRow
//                 label="Thời gian làm món"
//                 error={errors?.preparation_time?.message}
//             >
//                 <Input
//                     type="text"
//                     id="preparation_time"
//                     disabled={isCreating}
//                     {...register('preparation_time', {
//                         required: 'Thời gian làm món không được bỏ trống',
//                     })}
//                     placeholder="Nhập..."
//                 />
//             </FormRow>
//             <FormRow
//                 label="Cách sử dụng"
//                 error={errors?.product_usage?.message}
//             >
//                 <Input
//                     type="text"
//                     id="product_usage"
//                     disabled={isCreating}
//                     {...register('product_usage', {
//                         required: 'Cách sử dụng không được bỏ trống',
//                     })}
//                     placeholder="Nhập..."
//                 />
//             </FormRow>
//             <FormRow
//                 label="Số lượng trong kho"
//                 error={errors?.inven_stock?.message}
//             >
//                 <Input
//                     type="text"
//                     id="inven_stock"
//                     disabled={isCreating}
//                     {...register('inven_stock', {
//                         required: 'Số lượng trong kho không được bỏ trống',
//                         validate: (value) =>
//                             value > 0 ||
//                             'Số lượng trong kho không được là số âm',
//                     })}
//                     placeholder="Nhập..."
//                 />
//             </FormRow>
//             <FormRow label="Tên danh mục">
//                 {isLoading ? (
//                     <SpinnerMini />
//                 ) : (
//                     <Select
//                         options={options}
//                         key={options.value}
//                         disabled={isCreating}
//                         value={selectSubCategory}
//                         onChange={(e) => setSelectSubCategory(e.target.value)}
//                     />
//                 )}
//             </FormRow>
//             <FormRow>
//                 <Button
//                     variation="secondary"
//                     type="reset"
//                     onClick={() => onCloseModal?.()}
//                 >
//                     Hủy
//                 </Button>
//                 <Button disabled={isCreating}>Thêm</Button>
//             </FormRow>
//         </Form>
//     );
// }
