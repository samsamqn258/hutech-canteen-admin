import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createUpdateStore } from '../../services/apiStore';
import toast from 'react-hot-toast';
export default function useUpdateStore() {
    const queryClient = useQueryClient();
    const { mutate: updateStore, isLoading: isUpdating } = useMutation({
        mutationFn: ({ newStore, id }) => createUpdateStore(newStore, id),
        onSuccess: () => {
            queryClient.invalidateQueries(['stores']);
            toast.success('Cập nhật cửa hàng thành công');
        },
        onError: (err) => toast.error(err.message),
    });

    return { updateStore, isUpdating };
}
