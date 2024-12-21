import React, { useEffect, useState } from 'react';
import useStores from '../store/useStores';
import SpinnerMini from '../../ui/SpinnerMini';
import Select from '../../ui/Select';
import { useSearchParams } from 'react-router-dom';

export default function SelectShop() {
    const [searchParams, setSearchParams] = useSearchParams();

    const { stores, isLoading: isStoring } = useStores();

    // Lấy shopID từ URL hoặc ID của cửa hàng đầu tiên
    const currentStoreID = searchParams.get('shopID') || stores?.[0]?._id || '';
    const [selectedStore, setSelectedStore] = useState(currentStoreID);

    useEffect(() => {
        if (!searchParams.get('shopID') && stores?.length > 0) {
            // Cập nhật URL với shopID đầu tiên nếu chưa có
            setSearchParams({ shopID: stores[0]._id });
            setSelectedStore(stores[0]._id);
        }
    }, [stores, searchParams, setSearchParams]);

    const optionStores =
        stores?.map((store) => ({
            value: store._id,
            label: store.shop_name,
        })) || [];

    return (
        <div>
            {isStoring ? (
                <SpinnerMini />
            ) : (
                <Select
                    options={optionStores}
                    value={selectedStore}
                    onChange={(value) => {
                        setSelectedStore(value);
                        setSearchParams({ shopID: value }); // Cập nhật searchParams khi thay đổi
                    }}
                />
            )}
        </div>
    );
}
