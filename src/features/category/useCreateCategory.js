import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createUpdateCategory } from '../../services/apiCategory';
import toast from 'react-hot-toast';
export default function useCreateCategory() {
    const queryClient = useQueryClient();

    const { isLoading: isCreating, mutate: createCategory } = useMutation({
        mutationFn: createUpdateCategory,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['categories'],
            });
            toast.success('Danh mục đã thêm thành công');
        },
        onError: (error) => {
            toast.error(error.message);
        },
    });

    return { isCreating, createCategory };
}
