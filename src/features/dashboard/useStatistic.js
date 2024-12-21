import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';
import { getStatistics } from '../../services/apiOrder';

export default function useStatistic() {
    const [searchParams] = useSearchParams();

    const numDays = !searchParams.get('last')
        ? '7_days'
        : searchParams.get('last');

    const { data: statistics, isLoading } = useQuery({
        queryFn: () => getStatistics(numDays),
        queryKey: ['statistics', `last-${numDays}`],
    });

    return { statistics, isLoading, numDays };
}
