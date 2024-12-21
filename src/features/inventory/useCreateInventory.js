import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { createUpdateInventory } from '../../services/apiInventory';
export default function useCreateInventory() {
    const queryClient = useQueryClient();
    const { mutate: createInventory, isLoading: isCreating } = useMutation({
        mutationFn: createUpdateInventory,
        onSuccess: () => {
            toast.success('Tạo kho hàng thành công');
            queryClient.invalidateQueries(['inventories']);
        },
        onError: (error) => {
            toast.error(error.message);
        },
    });

    return { createInventory, isCreating };
}
