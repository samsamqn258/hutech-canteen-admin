import { useMutation, useQueryClient } from '@tanstack/react-query';

import toast from 'react-hot-toast';
import { signUpEmployee as signUpEmployeeApi } from '../../services/apiUser';

export function useSignupEmployee() {
    const queryClient = useQueryClient();

    const { mutate: signupEmployee, isLoading } = useMutation({
        mutationFn: signUpEmployeeApi,
        onSuccess: (user) => {
            queryClient.invalidateQueries(['employees']);
            toast.success('Tạo tài khoản nhân viên thành công');
        },
    });

    return { signupEmployee, isLoading };
}
