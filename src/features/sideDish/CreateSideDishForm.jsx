import { useState } from 'react';
import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import useCreateSideDish from './useCreateSideDish';
import useUpdateSideDish from './useUpdateSideDish';

import Button from '../../ui/Button';
import Select from '../../ui/Select';
import SpinnerMini from '../../ui/SpinnerMini';
import { useForm } from 'react-hook-form';

export default function CreateSideDishForm({
    sideDishToUpdate = {},
    onCloseModal,
}) {
    const { createSideDish, isCreating } = useCreateSideDish();
    const { updateSideDish, isUpdating } = useUpdateSideDish();

    const isWorking = isCreating || isUpdating;

    const { _id: updateId, ...updateValues } = sideDishToUpdate;

    const isEditSession = Boolean(updateId);

    const { register, handleSubmit, reset, formState } = useForm({
        defaultValues: isEditSession ? updateValues : {},
    });

    function onSubmit(data) {
        if (isEditSession)
            updateSideDish(
                { newStore: { ...data }, id: updateId },
                {
                    onSuccess: (data) => {
                        reset(), onCloseModal?.();
                    },
                }
            );
        else
            createSideDish(
                {
                    ...data,
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
            <FormRow label="Tên món phụ" error={errors?.sideDish_name?.message}>
                <Input
                    type="text"
                    id="sideDish_name"
                    disabled={isWorking}
                    {...register('sideDish_name', {
                        required: 'Tên món phụ không được bỏ trống',
                    })}
                    placeholder="Nhập tên món phụ..."
                />
            </FormRow>

            <FormRow label="Chi phí" error={errors?.price?.message}>
                <Input
                    type="number"
                    id="price"
                    disabled={isWorking}
                    {...register('price', {
                        required: 'Bắt buộc nhập giá',
                        min: {
                            value: 1,
                            message: 'Giá phải lớn hơn 1',
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
