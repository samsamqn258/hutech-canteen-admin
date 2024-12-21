import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { updateStatus } from '../../services/apiUser';

export default function useUpdateStatus() {
    const queryClient = useQueryClient();
    const { mutate: updateUser, isLoading: isUpdating } = useMutation({
        mutationFn: ({ id }) => updateStatus(id),

        onSuccess: () => {
            queryClient.invalidateQueries(['manages']);
            queryClient.invalidateQueries(['employees']);

            toast.success('Cập nhật thành công');
        },

        onError: (err) => toast.error(err.message),
    });

    return { updateUser, isUpdating };
}
