import { useQuery } from '@tanstack/react-query';

import { getStores } from '../../services/apiStore';

export default function useStores() {
    const { data: stores, isLoading } = useQuery({
        queryKey: ['stores'],
        queryFn: () => getStores(),
    });

    return { stores, isLoading };
}
