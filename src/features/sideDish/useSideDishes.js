import { useQuery } from '@tanstack/react-query';
import { getSideDishes } from '../../services/apiSideDish';

export default function useSideDishes() {
    const { data: sideDishes, isLoading } = useQuery({
        queryFn: getSideDishes,
        queryKey: ['side-dishes'],
    });

    return { sideDishes, isLoading };
}
