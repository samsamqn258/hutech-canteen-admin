import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { deleteInventory as deleteInventoryApi } from '../../services/apiInventory';
export function useDeleteInventory() {
    const queryClient = useQueryClient();
    const { isLoading: isDeleting, mutate: deleteInventory } = useMutation({
        mutationFn: deleteInventoryApi,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['inventories'],
            });
            toast.success('Đã xóa kho hàng thành công');
        },
        onError: (error) => {
            toast.error(error.message);
        },
    });

    return { isDeleting, deleteInventory };
}
