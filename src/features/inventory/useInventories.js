import { useQuery } from '@tanstack/react-query';
import { getInventories } from '../../services/apiInventory';
import { useSearchParams } from 'react-router-dom';

export default function useInventories() {
    const [searchParams] = useSearchParams();
    const shopID = searchParams.get('shopID') || 'defaultShopID';

    const { isLoading, data: inventories } = useQuery({
        queryKey: ['inventories', shopID],
        queryFn: () => getInventories(shopID),
    });

    return { isLoading, inventories };
}
