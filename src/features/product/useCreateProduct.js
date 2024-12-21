import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createUpdateProduct } from '../../services/apiProduct';
import toast from 'react-hot-toast';
export default function useCreateProduct() {
    const queryClient = useQueryClient();

    const { mutate: createProduct, isLoading: isCreating } = useMutation({
        mutationFn: createUpdateProduct,
        onSuccess: () => {
            queryClient.invalidateQueries(['products']);
            toast.success('Thêm sản phảm thành công');
        },
        onError: (err) => toast.error(err.message),
    });

    return { createProduct, isCreating };
}
