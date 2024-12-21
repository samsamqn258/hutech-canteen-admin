import { useMutation, useQueryClient } from '@tanstack/react-query';

import toast from 'react-hot-toast';
import { signUpManager as signUpManagerApi } from '../../services/apiUser';

export function useSignupManager() {
    const queryClient = useQueryClient();
    const { mutate: signupManager, isLoading } = useMutation({
        mutationFn: signUpManagerApi,
        onSuccess: (user) => {
            queryClient.invalidateQueries(['manages']);
            toast.success('Tạo tài khoản quản lý thành công');
        },
    });

    return { signupManager, isLoading };
}
