import { useState } from 'react';
import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import useCreateSubCategory from './useCreateSubCategory';
import Button from '../../ui/Button';
import Select from '../../ui/Select';
import useCategories from '../category/useCategories';
import SpinnerMini from '../../ui/SpinnerMini';

export default function CreateSideDishForm({ onCloseModal }) {
    const [subCategoryName, setSubCategoryName] = useState();
    const [selectedCategory, setSelectedCategory] = useState();
    const { isCreating, createSubCategory } = useCreateSubCategory();
    const { isLoading, categories } = useCategories();

    const options = categories.map((category) => ({
        value: category._id,
        label: category.meals,
    }));

    function handleSubmit() {
        if (!subCategoryName) return;
        createSubCategory(
            {
                subCategoryName,
                selectedCategory,
            },
            {
                onSettled: () => {
                    setSubCategoryName('');
                    onCloseModal?.();
                },
            }
        );
    }

    return (
        <Form onSubmit={handleSubmit} type={onCloseModal ? 'modal' : 'regular'}>
            <FormRow label="Tên danh mục phụ">
                <Input
                    type="text"
                    id="name"
                    value={subCategoryName}
                    placeholder="Nhập tên danh mục phụ..."
                    disabled={isCreating}
                    onChange={(e) => setSubCategoryName(e.target.value)}
                />
            </FormRow>
            <FormRow label="Danh mục cha">
                {isLoading ? (
                    <SpinnerMini />
                ) : (
                    <Select
                        value={selectedCategory}
                        options={options}
                        key={options.value}
                        disabled={isCreating}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                    />
                )}
            </FormRow>
            <FormRow>
                {/* onClick={() => onCloseModal?.()} */}
                <Button
                    variation="secondary"
                    type="reset"
                    disabled={isCreating}
                >
                    Hủy
                </Button>
                <Button disabled={isCreating}>Thêm</Button>
            </FormRow>
        </Form>
    );
}
