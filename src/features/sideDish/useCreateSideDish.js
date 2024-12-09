import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createUpdateSideDish } from '../../services/apiSideDish';
import toast from 'react-hot-toast';
export default function useCreateSideDish() {
    const queryClient = useQueryClient();
    const { mutate: createSideDish, isLoading: isCreating } = useMutation({
        mutationFn: createUpdateSideDish,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['side-dishes'],
            });
            toast.success('Tạo sản phẩm phụ thành công');
        },
        onError: (error) => {
            toast.error(error.message);
        },
    });

    return { isCreating, createSideDish };
}
