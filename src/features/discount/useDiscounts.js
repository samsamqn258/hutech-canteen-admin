import { useQuery } from '@tanstack/react-query';
import { getDiscounts } from '../../services/apiDiscount';

export default function useDiscounts() {
    const { isLoading, data: discounts } = useQuery({
        queryKey: ['discounts'],
        queryFn: getDiscounts,
    });

    return { isLoading, discounts };
}
