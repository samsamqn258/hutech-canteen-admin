import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteLocation as deleteLocationApi } from '../../services/apiLocation';
import toast from 'react-hot-toast';
export function useDeleteLocation() {
    const queryClient = useQueryClient();
    const { isLoading: isDeleting, mutate: deleteLocation } = useMutation({
        mutationFn: deleteLocationApi,

        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['locations'],
            });
            toast.success('Đã xóa vị trí thành công');
        },
        onError: (error) => {
            toast.error(error.message);
        },
    });

    return { isDeleting, deleteLocation };
}
