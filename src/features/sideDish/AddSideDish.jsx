import Button from '../../ui/Button';
import Modal from '../../ui/Modal';
import CreateSideDishForm from './CreateSideDishForm';
import CreateSubCategoryForm from './CreateSideDishForm';

export default function AddSideDish() {
    return (
        <Modal>
            <Modal.Open opens="sideDish-forms">
                <Button>
                    <span>Thêm sản phẩm phụ</span>
                </Button>
            </Modal.Open>
            <Modal.Window name="sideDish-forms">
                <CreateSideDishForm />
            </Modal.Window>
        </Modal>
    );
}
