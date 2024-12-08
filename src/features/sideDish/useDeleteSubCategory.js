// import { useMutation, useQueryClient } from '@tanstack/react-query';
// import { deleteSubCategory as deleteSubCategoryApi } from '../../services/apiSideDish';
// import toast from 'react-hot-toast';

// export default function useDeleteSubCategory() {
//     const queryClient = useQueryClient();
//     const { mutate: deleteSubCategory, isLoading: isDeleting } = useMutation({
//         mutationFn: deleteSubCategoryApi,
//         onSuccess: () => {
//             toast.success('Xóa danh mục sản phẩm phụ thành công');
//             queryClient.invalidateQueries({
//                 queryKey: ['subcategories'],
//             });
//         },
//         onError: (err) => toast.error(err.message),
//     });

//     return { deleteSubCategory, isDeleting };
// }
