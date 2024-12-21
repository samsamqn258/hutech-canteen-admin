import { useQuery } from '@tanstack/react-query';
import { getEmployees } from '../../services/apiUser';

export default function useEmployees() {
    const { data: employees, isLoading } = useQuery({
        queryKey: ['employees'],
        queryFn: getEmployees,
    });

    return { employees, isLoading };
}
