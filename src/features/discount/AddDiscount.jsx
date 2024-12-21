import Button from '../../ui/Button';
import Modal from '../../ui/Modal';
import CreateDiscountForm from './CreateDiscountForm';

export default function AddDiscount() {
    return (
        <Modal>
            <Modal.Open opens="discount-forms">
                <Button>
                    <span>Thêm giảm giá</span>
                </Button>
            </Modal.Open>
            <Modal.Window name="discount-forms">
                <CreateDiscountForm />
            </Modal.Window>
        </Modal>
    );
}
