import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { createUpdateInventory } from '../../services/apiInventory';
export default function useUpdateInventory() {
    const queryClient = useQueryClient();
    const { mutate: updateInventory, isLoading: isUpdating } = useMutation({
        mutationFn: ({ newInventory, id }) =>
            createUpdateInventory(newInventory, id),
        onSuccess: () => {
            toast.success('Cập nhật thành công');
            queryClient.invalidateQueries(['inventories']);
        },
        onError: (error) => {
            toast.error(error.message);
        },
    });

    return { updateInventory, isUpdating };
}
