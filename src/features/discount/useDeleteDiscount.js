import { useMutation, useQueryClient } from '@tanstack/react-query';

import toast from 'react-hot-toast';
import { deleteDiscount as deleteDiscountApi } from '../../services/apiDiscount';
export function useDeleteDiscount() {
    const queryClient = useQueryClient();
    const { isLoading: isDeleting, mutate: deleteDiscount } = useMutation({
        mutationFn: deleteDiscountApi,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['discounts'],
            });
            toast.success('Đã xóa mã giảm giá thành công');
        },
        onError: (error) => {
            toast.error(error.message);
        },
    });

    return { isDeleting, deleteDiscount };
}
