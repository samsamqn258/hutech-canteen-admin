import { useForm } from 'react-hook-form';
import Button from '../../ui/Button';
import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';

import useUpdateInventory from './useUpdateInventory';
import { useState } from 'react';
import useStores from '../store/useStores';
import useProducts from '../product/useProducts';
import SpinnerMini from '../../ui/SpinnerMini';
import Select from '../../ui/Select';
import useCreateInventory from './useCreateInventory';

export default function CreateInventoryForm({
    inventoryToUpdate = {},
    onCloseModal,
}) {
    const { createInventory, isCreating } = useCreateInventory();
    const { updateInventory, isUpdating } = useUpdateInventory();

    const { products, isLoading: isLoadingProduct } = useProducts();
    const { stores, isLoading: isStoring } = useStores();

    const optionStores = [
        { value: '', label: 'Vui lòng chọn' },
        ...(stores?.map((store) => ({
            value: store._id,
            label: store.shop_name,
        })) || []),
    ];

    const optionProducts = [
        { value: '', label: 'Vui lòng chọn' },
        ...(products?.map((product) => ({
            value: product.product_id._id,
            label: product.product_id.product_name,
        })) || []),
    ];

    const [selectProduct, setSelectProduct] = useState(() => {
        const matchedProduct = optionProducts.find(
            (product) => product.value === inventoryToUpdate?.product_id?._id
        );
        return matchedProduct ? matchedProduct.value : '';
    });

    const [selectStore, setSelectStore] = useState(() => {
        const matchedStore = optionStores.find(
            (store) => store.value === inventoryToUpdate?.shop_id
        );
        return matchedStore ? matchedStore.value : '';
    });

    const isWorking = isCreating || isUpdating;

    const { _id: updateId, ...updateValues } = inventoryToUpdate;

    const isEditSession = Boolean(updateId);

    const { register, handleSubmit, reset, formState } = useForm({
        defaultValues: isEditSession ? updateValues : {},
    });

    function onSubmit(data) {
        if (isEditSession)
            updateInventory(
                {
                    newInventory: {
                        ...data,
                        product_id: selectProduct,
                        shop_id: selectStore,
                    },
                    id: updateId,
                },
                {
                    onSuccess: (data) => {
                        reset(), onCloseModal?.();
                    },
                }
            );
        else
            createInventory(
                {
                    ...data,
                    product_id: selectProduct,
                    shop_id: selectStore,
                },
                {
                    onSettled: () => {
                        reset(), onCloseModal?.();
                    },
                }
            );
    }

    const { errors } = formState;

    return (
        <Form
            onSubmit={handleSubmit(onSubmit)}
            type={onCloseModal ? 'modal' : 'regular'}
        >
            <FormRow label="Sản phẩm" error={errors?.product_id?.message}>
                {isLoadingProduct ? (
                    <SpinnerMini />
                ) : (
                    <Select
                        options={optionProducts}
                        key={optionProducts.value}
                        disabled={isWorking}
                        value={selectProduct}
                        onChange={(value) => setSelectProduct(value)}
                    />
                )}
            </FormRow>

            <FormRow label="Chi nhánh" error={errors?.shop_id?.message}>
                {isStoring ? (
                    <SpinnerMini />
                ) : (
                    <Select
                        options={optionStores}
                        key={optionStores.value}
                        disabled={isWorking}
                        value={selectStore}
                        onChange={(value) => setSelectStore(value)}
                    />
                )}
            </FormRow>

            <FormRow label="Nhập kho hàng" error={errors?.inven_stock?.message}>
                <Input
                    type="number"
                    id="inven_stock"
                    disabled={isWorking}
                    {...register('inven_stock', {
                        required: 'Bắt buộc Nhập kho hàng',
                        min: {
                            value: 10,
                            message: 'Kho hàng phải lớn hơn 10',
                        },
                    })}
                />
            </FormRow>

            <FormRow
                label="Nhập cảnh báo ở mức tối thiểu"
                error={errors?.minStockLevel?.message}
            >
                <Input
                    type="number"
                    id="minStockLevel"
                    disabled={isWorking}
                    {...register('minStockLevel', {
                        required: 'Nhập cảnh báo ở mức tối thiểu',
                        min: {
                            value: 10,
                            message: 'Kho hàng phải lớn hơn 10',
                        },
                    })}
                />
            </FormRow>

            <FormRow>
                <Button
                    variation="secondary"
                    type="reset"
                    onClick={() => onCloseModal?.()}
                >
                    Hủy
                </Button>
                <Button disabled={isWorking}>
                    {isEditSession ? 'Chỉnh sửa' : 'Tạo mới'}
                </Button>
            </FormRow>
        </Form>
    );
}
