import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { createUpdateProduct } from '../../services/apiProduct';
export default function useUpdateProduct() {
    const queryClient = useQueryClient();
    const { mutate: updateProduct, isLoading: isUpdating } = useMutation({
        mutationFn: ({ newProduct, id }) => createUpdateProduct(newProduct, id),
        onSuccess: () => {
            queryClient.invalidateQueries(['products']);
            toast.success('Cập nhật sản phẩm thành công');
        },
        onError: (err) => toast.error(err.message),
    });

    return { updateProduct, isUpdating };
}
