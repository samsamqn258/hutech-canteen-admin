import Button from '../../ui/Button';
import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import { useForm } from 'react-hook-form';
import Select from '../../ui/Select';
import SpinnerMini from '../../ui/SpinnerMini';
import useCreateLocation from './useCreateLocation';

export default function CreateLocationForm({ onCloseModal }) {
    const { createLocation, isCreating } = useCreateLocation();
    const { register, handleSubmit, reset, formState } = useForm();

    function onSubmit(data) {
        createLocation(
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
            <FormRow label="Tên vị trí" error={errors?.location_name?.message}>
                <Input
                    type="text"
                    id="location_name"
                    disabled={isCreating}
                    {...register('location_name', {
                        required: 'Tên vị trí không được bỏ trống',
                    })}
                    placeholder="Nhập tên vị trí..."
                />
            </FormRow>

            <FormRow label="Mô tả" error={errors?.description?.message}>
                <Input
                    type="text"
                    id="description"
                    disabled={isCreating}
                    {...register('description', {
                        required: 'Mô tả không được bỏ trống',
                    })}
                    placeholder="Nhập mô tả vị trí..."
                />
            </FormRow>
            <FormRow label="Kinh độ" error={errors?.longitude?.message}>
                <Input
                    type="text"
                    id="longitude"
                    disabled={isCreating}
                    {...register('longitude', {
                        required: 'Kinh độ không được bỏ trống',
                    })}
                    placeholder="Nhập kinh độ..."
                />
            </FormRow>
            <FormRow label="Vĩ dộ" error={errors?.latitude?.message}>
                <Input
                    type="text"
                    id="latitude"
                    disabled={isCreating}
                    {...register('latitude', {
                        required: 'Vĩ độ không được bỏ trống',
                    })}
                    placeholder="Nhập vĩ độ..."
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
                <Button disabled={isCreating}>Thêm</Button>
            </FormRow>
        </Form>
    );
}
