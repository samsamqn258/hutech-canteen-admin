import { useState } from 'react';
import Button from '../../ui/Button';
import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import { useForm } from 'react-hook-form';
import Select from '../../ui/Select';
import SpinnerMini from '../../ui/SpinnerMini';
import useCreateStore from './useCreateStore';
import useOpeningHours from '../openingHour/useOpeningHours';
import useLocations from '../location/useLocations';
import FileInput from '../../ui/FileInput';
import useUpdateStore from './useUpdateStore';

export default function CreateStoreForm({ storeToUpdate = {}, onCloseModal }) {
    const { createStore, isCreating } = useCreateStore();
    const { updateStore, isUpdating } = useUpdateStore();

    const isWorking = isCreating || isUpdating;

    const [selectOpeningHour, setSelectOpeningHour] = useState();
    const [selectLocation, setSelectLocation] = useState();
    const { openingHours, isOpeningHours } = useOpeningHours();
    const { locations, isLocating } = useLocations();

    const { _id: updateId, ...updateValues } = storeToUpdate;

    const isEditSession = Boolean(updateId);

    const { register, handleSubmit, reset, formState } = useForm({
        defaultValues: isEditSession ? updateValues : {},
    });

    const optionOpeningHours = [
        { value: '', label: 'Vui lòng chọn' },
        ...(openingHours?.map((openingHour) => ({
            value: openingHour._id,
            label: openingHour.name,
        })) || []),
    ];

    const optionLocations = [
        { value: '', label: 'Vui lòng chọn' },
        ...(locations?.map((location) => ({
            value: location._id,
            label: location.location_name,
        })) || []),
    ];
    function onSubmit(data) {
        const image = data.image[0];
        if (isEditSession)
            updateStore(
                { newStore: { ...data, image }, id: updateId },
                {
                    onSuccess: (data) => {
                        reset(), onCloseModal?.();
                    },
                }
            );
        else
            createStore(
                {
                    ...data,
                    location_id: selectLocation,
                    opening_hours: selectOpeningHour,
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
            <FormRow label="Tên cửa hàng" error={errors?.shop_name?.message}>
                <Input
                    type="text"
                    id="shop_name"
                    disabled={isWorking}
                    {...register('shop_name', {
                        required: 'Tên cửa hàng không được bỏ trống',
                    })}
                    placeholder="Nhập tên cửa hàng..."
                />
            </FormRow>

            <FormRow label="Mô tả" error={errors?.description?.message}>
                <Input
                    type="text"
                    id="description"
                    disabled={isWorking}
                    {...register('description', {
                        required: 'Mô tả không được bỏ trống',
                    })}
                    placeholder="Nhập mô tả..."
                />
            </FormRow>

            <FormRow label="Tên vị trí">
                {isOpeningHours ? (
                    <SpinnerMini />
                ) : (
                    <Select
                        options={optionLocations}
                        key={optionLocations.value}
                        disabled={isWorking}
                        value={selectOpeningHour}
                        onChange={(e) => setSelectOpeningHour(e.target.value)}
                    />
                )}
            </FormRow>

            <FormRow label="Tên giờ hoạt động">
                {isLocating ? (
                    <SpinnerMini />
                ) : (
                    <Select
                        options={optionOpeningHours}
                        key={optionOpeningHours.value}
                        disabled={isWorking}
                        value={selectLocation}
                        onChange={(e) => setSelectLocation(e.target.value)}
                    />
                )}
            </FormRow>
            <FormRow label={'Ảnh cửa hàng'}>
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
