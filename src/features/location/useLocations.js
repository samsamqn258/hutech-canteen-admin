import { useQuery } from '@tanstack/react-query';
import { getLocations } from '../../services/apiLocation';

export default function useLocations() {
    const { data: locations, isLoading } = useQuery({
        queryKey: ['locations'],
        queryFn: () => getLocations(),
    });

    return { locations, isLoading };
}
