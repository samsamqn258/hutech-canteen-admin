import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { createUpdateSideDish } from '../../services/apiSideDish';

export default function useDeleteSubCategory() {
    const queryClient = useQueryClient();
    const { mutate: deleteSubCategory, isLoading: isDeleting } = useMutation({
        mutationFn: ({ newSideDish, id }) =>
            createUpdateSideDish(newSideDish, id),
        onSuccess: () => {
            toast.success('Cập nhật sản phẩm phụ thành công');
            queryClient.invalidateQueries({
                queryKey: ['subcategories'],
            });
        },
        onError: (err) => toast.error(err.message),
    });

    return { deleteSubCategory, isDeleting };
}
