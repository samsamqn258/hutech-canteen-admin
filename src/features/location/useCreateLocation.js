import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { createLocation as createLocationApi } from '../../services/apiLocation';
export default function useCreateLocation() {
    const queryClient = useQueryClient();
    const { mutate: createLocation, isLoading: isCreating } = useMutation({
        mutationFn: createLocationApi,
        onSuccess: () => {
            toast.success('Tạo vị trí thành công');
            queryClient.invalidateQueries(['locations']);
        },
        onError: (error) => {
            toast.error(error.message);
        },
    });

    return { createLocation, isCreating };
}
