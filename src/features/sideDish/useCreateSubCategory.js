// import { useMutation } from '@tanstack/react-query';
// import { createSubCategory as createSubCategoryApi } from '../../services/apiSideDish';
// import toast from 'react-hot-toast';
// export default function useCreateSubCategory() {
//     const { mutate: createSubCategory, isLoading: isCreating } = useMutation({
//         mutationFn: createSubCategoryApi,
//         onSuccess: () => {
//             toast.success('Tạo danh mục sản phẩm phụ thành công');
//         },
//         onError: (error) => {
//             toast.error(error.message);
//         },
//     });

//     return { isCreating, createSubCategory };
// }
