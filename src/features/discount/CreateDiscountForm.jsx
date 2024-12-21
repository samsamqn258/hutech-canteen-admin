import { useForm } from 'react-hook-form';
import Button from '../../ui/Button';
import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import FileInput from '../../ui/FileInput';
import useCreateDiscount from './useCreateDiscount';

export default function CreateDiscountForm({
    discountToUpdate = {},
    onCloseModal,
}) {
    const { isCreating, createDiscount } = useCreateDiscount();
    // const { updateCategory, isUpdating } = useUpdateCategory();

    const isWorking = isCreating;

    const { _id: updateId, ...updateValues } = discountToUpdate;

    const isEditSession = Boolean(updateId);

    const { register, handleSubmit, reset, formState } = useForm({
        defaultValues: isEditSession ? updateValues : {},
    });

    function onSubmit(data) {
        const image = data.image[0];
        if (isEditSession) return;
        // updateCategory(
        //     { newCategory: { ...data, image }, id: updateId },
        //     {
        //         onSuccess: (data) => {
        //             reset(), onCloseModal?.();
        //         },
        //     }
        // );
        else
            createDiscount(
                {
                    ...data,
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
            <FormRow
                label="Tên chương trình"
                error={errors?.discount_name?.message}
            >
                <Input
                    type="text"
                    id="discount_name"
                    disabled={isWorking}
                    {...register('discount_name', {
                        required: 'Tên chương trình không được bỏ trống',
                    })}
                    placeholder="Nhập tên chương trình..."
                />
            </FormRow>
            <FormRow label="Mã code" error={errors?.discount_code?.message}>
                <Input
                    type="text"
                    id="discount_code"
                    disabled={isWorking}
                    {...register('discount_code', {
                        required: 'Mã code không được bỏ trống',
                    })}
                    placeholder="Nhập mã code..."
                />
            </FormRow>

            <FormRow
                label="Ngày bắt đầu"
                error={errors?.discount_start_date?.message}
            >
                <Input
                    type="date"
                    id="discount_start_date"
                    disabled={isWorking}
                    {...register('discount_start_date', {
                        required: 'Ngày bắt đầu không được bỏ trống',
                    })}
                    placeholder="Nhập ngày bắt đầu..."
                />
            </FormRow>
            <FormRow
                label="Ngày kết thúc"
                error={errors?.discount_end_date?.message}
            >
                <Input
                    type="date"
                    id="discount_end_date"
                    disabled={isWorking}
                    {...register('discount_end_date', {
                        required: 'Ngày kết thúc không được bỏ trống',
                    })}
                    placeholder="Nhập ngày kết thúc..."
                />
            </FormRow>

            <FormRow
                label="Đơn vị giảm"
                error={errors?.discount_value_type?.message}
            >
                <Input
                    type="text"
                    id="discount_value_type"
                    disabled={isWorking}
                    {...register('discount_value_type', {
                        required: 'Đơn vị giảm không được bỏ trống',
                    })}
                    placeholder="Nhập Đơn vị giảm..."
                />
            </FormRow>

            <FormRow
                label="Giá trị giảm"
                error={errors?.discount_value?.message}
            >
                <Input
                    type="text"
                    id="discount_value"
                    disabled={isWorking}
                    {...register('discount_value', {
                        required: 'Giá trị giảm không được bỏ trống',
                    })}
                    placeholder="Nhập Giá trị giảm..."
                />
            </FormRow>

            <FormRow
                label="Giá tối thiểu"
                error={errors?.min_order_value?.message}
            >
                <Input
                    type="text"
                    id="min_order_value"
                    disabled={isWorking}
                    {...register('min_order_value', {
                        required: 'Giá tối thiểu không được bỏ trống',
                    })}
                    placeholder="Nhập Giá tối thiểu..."
                />
            </FormRow>

            <FormRow
                label="Giảm tối đa"
                error={errors?.maximum_discount_value?.message}
            >
                <Input
                    type="text"
                    id="maximum_discount_value"
                    disabled={isWorking}
                    {...register('maximum_discount_value', {
                        required: 'Giảm tối đa không được bỏ trống',
                    })}
                    placeholder="Nhập Giảm tối đa..."
                />
            </FormRow>

            <FormRow
                label="Lượt sử dụng"
                error={errors?.max_total_uses?.message}
            >
                <Input
                    type="text"
                    id="max_total_uses"
                    disabled={isWorking}
                    {...register('max_total_uses', {
                        required: 'Lượt sử dụng không được bỏ trống',
                    })}
                    placeholder="Nhập Lượt sử dụng..."
                />
            </FormRow>

            <FormRow
                label="Lượt sử dụng tối đa"
                error={errors?.max_uses_per_user?.message}
            >
                <Input
                    type="text"
                    id="max_uses_per_user"
                    disabled={isWorking}
                    {...register('max_uses_per_user', {
                        required: 'Lượt sử dụng tối đa không được bỏ trống',
                    })}
                    placeholder="Nhập Lượt sử dụng tối đa..."
                />
            </FormRow>

            <FormRow label="Áp dụng cho" error={errors?.applicable_to?.message}>
                <Input
                    type="text"
                    id="applicable_to"
                    disabled={isWorking}
                    {...register('applicable_to', {
                        required: 'Áp dụng cho không được bỏ trống',
                    })}
                    placeholder="Nhập Áp dụng cho..."
                />
            </FormRow>

            <FormRow
                label="Nội dung giảm giá"
                error={errors?.discount_content?.message}
            >
                <Input
                    type="text"
                    id="discount_content"
                    disabled={isWorking}
                    {...register('discount_content', {
                        required: 'Nội dung giảm giá không được bỏ trống',
                    })}
                    placeholder="Nhập Nội dung giảm giá..."
                />
            </FormRow>

            <FormRow label={'Ảnh'}>
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
