import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createUpdateDiscount } from '../../services/apiDiscount';
import toast from 'react-hot-toast';
export default function useCreateDiscount() {
    const queryClient = useQueryClient();

    const { isLoading: isCreating, mutate: createDiscount } = useMutation({
        mutationFn: createUpdateDiscount,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['discounts'],
            });
            toast.success('Mã giảm giá đã thêm thành công');
        },
        onError: (error) => {
            toast.error(error.message);
        },
    });

    return { isCreating, createDiscount };
}
