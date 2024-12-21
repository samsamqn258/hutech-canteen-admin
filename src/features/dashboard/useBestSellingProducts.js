import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';
import { getBestSellingProducts } from '../../services/apiOrder';

export default function useBestSellingProducts() {
    const [searchParams] = useSearchParams();

    const numDays = !searchParams.get('last')
        ? '7_days'
        : searchParams.get('last');

    const { data: bestSelling, isLoading } = useQuery({
        queryFn: () => getBestSellingProducts(numDays),
        queryKey: ['best-selling-products', `last-${numDays}`],
    });

    return { bestSelling, isLoading, numDays };
}
