import { useForm } from 'react-hook-form';
import Button from '../../ui/Button';
import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import { useSignupEmployee } from '../user/useSignupEmployee';
import useStores from '../store/useStores';
import { useState } from 'react';
import SpinnerMini from '../../ui/SpinnerMini';
import Select from '../../ui/Select';

// Email regex: /\S+@\S+\.\S+/

function SignupEmployeeForm() {
    const { signupEmployee, isLoadingSignup } = useSignupEmployee();
    const { stores, isLoadingStore } = useStores();

    const [selectStore, setSelectStore] = useState('');

    const { register, formState, handleSubmit, reset } = useForm();

    const optionStores = [
        { value: '', label: 'Vui lòng chọn' },
        ...(stores?.map((store) => ({
            value: store._id,
            label: store.shop_name,
        })) || []),
    ];

    const { errors } = formState;

    function onSubmit(data) {
        signupEmployee(
            { ...data, shop_id: selectStore },
            {
                onSettled: () => reset(),
            }
        );
    }
    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <FormRow label="Tên nhân viên" error={errors?.name?.message}>
                <Input
                    type="text"
                    id="name"
                    disabled={isLoadingSignup}
                    {...register('name', {
                        required: 'Vui lòng điền trường này!',
                    })}
                />
            </FormRow>

            <FormRow label="Địa chỉ Email" error={errors?.email?.message}>
                <Input
                    type="email"
                    id="email"
                    disabled={isLoadingSignup}
                    {...register('email', {
                        required: 'Vui lòng điền trường này!',
                        pattern: {
                            value: /\S+@\S+\.\S+/,
                            message: 'Vui lòng điền đúng định dạng email',
                        },
                    })}
                />
            </FormRow>

            <FormRow label="Mật khẩu" error={errors?.password?.message}>
                <Input
                    type="password"
                    id="password"
                    disabled={isLoadingSignup}
                    {...register('password', {
                        required: 'Vui lòng điền trường này',
                        minLength: {
                            value: 6,
                            message: 'Mật khẩu cần ít nhất 6 ký tự',
                        },
                    })}
                />
            </FormRow>

            <FormRow label="Chọn chi nhánh">
                {isLoadingStore ? (
                    <SpinnerMini />
                ) : (
                    <Select
                        options={optionStores}
                        key={optionStores.value}
                        disabled={isLoadingSignup}
                        value={selectStore}
                        onChange={(values) => setSelectStore(values)}
                    />
                )}
            </FormRow>

            <FormRow>
                {/* type is an HTML attribute! */}
                <Button
                    variation="secondary"
                    type="reset"
                    disabled={isLoadingSignup}
                >
                    Hủy
                </Button>
                <Button disabled={isLoadingSignup}>Tạo</Button>
            </FormRow>
        </Form>
    );
}

export default SignupEmployeeForm;
