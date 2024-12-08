// import { useQuery } from '@tanstack/react-query';
// import { getProducts } from '../../services/apiProduct';
// import { useSearchParams } from 'react-router-dom';

// export default function useProducts() {
//     const [searchParams] = useSearchParams();

//     const query = searchParams.get('keySearch');

//     const { data: products, isLoading } = useQuery({
//         queryFn: () => getProducts(query),
//         queryKey: ['products', query],
//     });

//     return { products, isLoading };
// }
