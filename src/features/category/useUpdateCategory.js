import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { createUpdateCategory } from '../../services/apiCategory';

export default function useUpdateCategory() {
    const queryClient = useQueryClient();
    const { mutate: updateCategory, isLoading: isUpdating } = useMutation({
        mutationFn: ({ newCategory, id }) =>
            createUpdateCategory(newCategory, id),

        onSuccess: () => {
            queryClient.invalidateQueries(['categories']);
            toast.success('Cập nhật danh mục thành công');
        },

        onError: (err) => toast.error(err.message),
    });

    return { updateCategory, isUpdating };
}
