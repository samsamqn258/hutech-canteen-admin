import { useMutation, useQueryClient } from '@tanstack/react-query';

import toast from 'react-hot-toast';
import { deleteProduct as deleteProductApi } from '../../services/apiProduct';
export function useDeleteProduct() {
    const queryClient = useQueryClient();
    const { isLoading: isDeleting, mutate: deleteProduct } = useMutation({
        mutationFn: deleteProductApi,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['products'],
            });
            toast.success('Đã xóa sản phẩm thành công');
        },
        onError: (error) => {
            toast.error(error.message);
        },
    });

    return { isDeleting, deleteProduct };
}
