import { useQuery } from '@tanstack/react-query';
import { getOpeningHours } from '../../services/apiOpeningHour';

export default function useOpeningHours() {
    const { data: openingHours, isLoading } = useQuery({
        queryKey: ['opening-hours'],
        queryFn: () => getOpeningHours(),
    });

    return { openingHours, isLoading };
}
