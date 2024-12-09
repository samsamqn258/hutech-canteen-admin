import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteCategory as deleteCategoryApi } from '../../services/apiCategory';
import toast from 'react-hot-toast';
export function useDeleteCategory() {
    const queryClient = useQueryClient();
    const { isLoading: isDeleting, mutate: deleteCategory } = useMutation({
        mutationFn: deleteCategoryApi,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['categories'],
            });
            toast.success('Đã xóa danh mục thành công');
        },
        onError: (error) => {
            toast.error(error.message);
        },
    });

    return { isDeleting, deleteCategory };
}
