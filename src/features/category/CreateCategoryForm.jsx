// import { useState } from 'react';
// import Button from '../../ui/Button';
// import Form from '../../ui/Form';
// import FormRow from '../../ui/FormRow';
// import Input from '../../ui/Input';
// import useCreateCategory from './useCreateCategory';

// export default function CreateCategoryForm({ onCloseModal }) {
//     const [meals, setMeals] = useState('');
//     const { isCreating, createCategory } = useCreateCategory();

//     function handleSubmit() {
//         if (!meals) return;

//         createCategory(
//             { meals },
//             {
//                 onSuccess: () => {
//                     setMeals('');
//                     onCloseModal?.();
//                 },
//             }
//         );
//     }

//     return (
//         <Form onSubmit={handleSubmit} type={onCloseModal ? 'modal' : 'regular'}>
//             <FormRow label="Tên danh mục">
//                 <Input
//                     type="text"
//                     id="name"
//                     value={meals}
//                     placeholder="Nhập tên danh mục..."
//                     onChange={(e) => setMeals(e.target.value)}
//                 />
//             </FormRow>
//             <FormRow>
//                 <Button
//                     variation="secondary"
//                     type="reset"
//                     onClick={() => onCloseModal?.()}
//                 >
//                     Cancel
//                 </Button>
//                 <Button disabled={isCreating}>Thêm</Button>
//             </FormRow>
//         </Form>
//     );
// }
