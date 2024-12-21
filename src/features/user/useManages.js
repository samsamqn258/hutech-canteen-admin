import { useQuery } from '@tanstack/react-query';
import { getManages } from '../../services/apiUser';

export default function useManages() {
    const { data: manages, isLoading } = useQuery({
        queryKey: ['manages'],
        queryFn: getManages,
    });

    return { manages, isLoading };
}
