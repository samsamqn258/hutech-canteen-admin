import { useState } from 'react';
import Button from '../../ui/Button';
import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import useCreateProduct from './useCreateProduct';
import useUpdateProduct from './useUpdateProduct';

import { useForm } from 'react-hook-form';
import Select from '../../ui/Select';
import SpinnerMini from '../../ui/SpinnerMini';
import useSideDishes from '../sideDish/useSideDishes';
import useStores from '../store/useStores';
import useCategories from '../category/useCategories';
import FileInput from '../../ui/FileInput';

export default function CreateProductForm({
    productToUpdate = {},
    onCloseModal,
}) {
    const { createProduct, isCreating } = useCreateProduct();
    const { updateProduct, isUpdating } = useUpdateProduct();

    const isWorking = isCreating || isUpdating;

    const [selectCategory, setSelectCategory] = useState('');
    const [selectSideDish, setSelectSideDish] = useState([]);
    const [selectStore, setSelectStore] = useState([]);

    const { sideDishes, isLoading: isSideDishing } = useSideDishes();
    const { stores, isLoading: isStoring } = useStores();
    const { isLoading: isCategoring, categories } = useCategories();

    const { _id: updateId, ...updateValues } = productToUpdate;

    const isEditSession = Boolean(updateId);

    const { register, handleSubmit, reset, formState } = useForm({
        defaultValues: isEditSession ? updateValues : {},
    });

    const optionSideDishes = [
        { value: '', label: 'Vui lòng chọn' },
        ...(sideDishes?.map((sideDish) => ({
            value: sideDish._id,
            label: sideDish.sideDish_name,
        })) || []),
    ];

    const optionStores = [
        { value: '', label: 'Vui lòng chọn' },
        ...(stores?.map((store) => ({
            value: store._id,
            label: store.shop_name,
        })) || []),
    ];

    const optionCategories = [
        { value: '', label: 'Vui lòng chọn' },
        ...(categories?.map((category) => ({
            value: category._id,
            label: category.category_name,
        })) || []),
    ];

    function onSubmit(data) {
        const image = data.image[0];
        if (isEditSession)
            updateProduct(
                { newProduct: { ...data, image }, id: updateId },
                {
                    onSuccess: (data) => {
                        reset(), onCloseModal?.();
                    },
                }
            );
        else
            createProduct(
                {
                    ...data,
                    category_id: selectCategory,
                    shop_ids: selectStore,
                    sideDish_id: selectSideDish,
                    image,
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
            <FormRow label="Tên sản phẩm" error={errors?.product_name?.message}>
                <Input
                    type="text"
                    id="product_name"
                    disabled={isWorking}
                    {...register('product_name', {
                        required: 'Tên sản phẩm không được bỏ trống',
                    })}
                    placeholder="Nhập tên sản phẩm..."
                />
            </FormRow>

            <FormRow label="Mô tả" error={errors?.product_description?.message}>
                <Input
                    type="text"
                    id="product_description"
                    disabled={isWorking}
                    {...register('product_description', {
                        required: 'Mô tả không được bỏ trống',
                    })}
                    placeholder="Nhập mô tả..."
                />
            </FormRow>

            <FormRow label="Nguyên liệu" error={errors?.ingredients?.message}>
                <Input
                    type="text"
                    id="ingredients"
                    disabled={isWorking}
                    {...register('ingredients', {
                        required: 'nguyên liệu không được bỏ trống',
                    })}
                    placeholder="Nhập nguyên liệu..."
                />
            </FormRow>

            <FormRow
                label="Thời gian chuẩn bị món"
                error={errors?.preparation_time?.message}
            >
                <Input
                    type="number"
                    id="preparation_time"
                    disabled={isWorking}
                    {...register('preparation_time', {
                        required: 'Bắt buộc Thời gian chuẩn bị món',
                        min: {
                            value: 0,
                            message: 'Thời gian chuẩn bị món phải lớn hơn 0',
                        },
                    })}
                />
            </FormRow>

            <FormRow
                label="Cách sử dụng"
                error={errors?.product_usage?.message}
            >
                <Input
                    type="text"
                    id="product_usage"
                    disabled={isWorking}
                    {...register('product_usage', {
                        required: 'Cách sử dụng không được bỏ trống',
                    })}
                    placeholder="Nhập cách sử dụng..."
                />
            </FormRow>

            <FormRow label="Giá" error={errors?.product_price?.message}>
                <Input
                    type="number"
                    id="product_price"
                    disabled={isWorking}
                    {...register('product_price', {
                        required: 'Bắt buộc nhập giá',
                        min: {
                            value: 1,
                            message: 'Giá phải lớn hơn 1',
                        },
                    })}
                />
            </FormRow>

            <FormRow
                label="Điểm đánh giá"
                error={errors?.product_ratingAverage?.message}
            >
                <Input
                    type="number"
                    id="product_ratingAverage"
                    disabled={isWorking}
                    {...register('product_ratingAverage', {
                        required: 'Bắt buộc nhập điểm',
                        min: {
                            value: 4,
                            message: 'Điểm phải lớn hơn 4 để tăng xu hướng',
                        },
                    })}
                />
            </FormRow>

            <FormRow label="Danh mục">
                {isCategoring ? (
                    <SpinnerMini />
                ) : (
                    <Select
                        options={optionCategories}
                        key={optionCategories.value}
                        disabled={isWorking}
                        value={selectCategory}
                        onChange={(value) => setSelectCategory(value)}
                    />
                )}
            </FormRow>

            {isEditSession || (
                <FormRow label="Cửa hàng">
                    {isStoring ? (
                        <SpinnerMini />
                    ) : (
                        <Select
                            options={optionStores}
                            key={optionStores.value}
                            multiple={true}
                            disabled={isWorking}
                            value={selectStore}
                            onChange={(values) => setSelectStore(values)}
                        />
                    )}
                </FormRow>
            )}

            {isEditSession || (
                <FormRow label="Món phụ">
                    {isSideDishing ? (
                        <SpinnerMini />
                    ) : (
                        <Select
                            options={optionSideDishes}
                            key={optionSideDishes.value}
                            multiple={true}
                            disabled={isWorking}
                            value={selectSideDish}
                            onChange={(values) => setSelectSideDish(values)}
                        />
                    )}
                </FormRow>
            )}

            <FormRow label={'Ảnh sản phẩm'}>
                <FileInput
                    id="image"
                    accept="image/*"
                    {...register('image', {
                        required: 'Vui lòng chọn hình ảnh',
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
