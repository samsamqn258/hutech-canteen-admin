// import { useMutation } from '@tanstack/react-query';
// import { createCategory as createCategoryApi } from '../../services/apiCategory';
// import toast from 'react-hot-toast';
// export default function useCreateCategory() {
//     const { isLoading: isCreating, mutate: createCategory } = useMutation({
//         mutationFn: createCategoryApi,
//         onSuccess: () => {
//             toast.success('Danh mục đã thêm thành công');
//         },
//         onError: (error) => {
//             toast.error(error.message);
//         },
//     });

//     return { isCreating, createCategory };
// }
