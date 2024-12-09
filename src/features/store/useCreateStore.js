import { useMutation, useQueryClient } from '@tanstack/react-query';

import toast from 'react-hot-toast';
import { createUpdateStore } from '../../services/apiStore';
export default function useCreateStore() {
    const queryClient = useQueryClient();
    const { mutate: createStore, isLoading: isCreating } = useMutation({
        mutationFn: createUpdateStore,
        onSuccess: () => {
            queryClient.invalidateQueries(['stores']);
            toast.success('Thêm cửa hàng thành công');
        },
        onError: (err) => toast.error(err.message),
    });

    return { createStore, isCreating };
}
