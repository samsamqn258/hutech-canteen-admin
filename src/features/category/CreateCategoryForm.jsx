import { useForm } from 'react-hook-form';
import Button from '../../ui/Button';
import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import useCreateCategory from './useCreateCategory';
import useUpdateCategory from './useUpdateCategory';
import FileInput from '../../ui/FileInput';

export default function CreateCategoryForm({
    categoryToUpdate = {},
    onCloseModal,
}) {
    const { isCreating, createCategory } = useCreateCategory();
    const { updateCategory, isUpdating } = useUpdateCategory();

    const isWorking = isCreating || isUpdating;

    const { _id: updateId, ...updateValues } = categoryToUpdate;

    const isEditSession = Boolean(updateId);

    console.log('Đây nè ', categoryToUpdate, isEditSession);

    const { register, handleSubmit, reset, formState } = useForm({
        defaultValues: isEditSession ? updateValues : {},
    });

    function onSubmit(data) {
        const image = data.image[0];
        if (isEditSession)
            updateCategory(
                { newCategory: { ...data, image }, id: updateId },
                {
                    onSuccess: (data) => {
                        reset(), onCloseModal?.();
                    },
                }
            );
        else
            createCategory(
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
                label="Tên danh mục"
                error={errors?.category_name?.message}
            >
                <Input
                    type="text"
                    id="shop_name"
                    disabled={isWorking}
                    {...register('category_name', {
                        required: 'Tên danh mục không được bỏ trống',
                    })}
                    placeholder="Nhập tên danh mục..."
                />
            </FormRow>

            <FormRow label={'Ảnh danh mục'}>
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
