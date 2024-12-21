import Button from '../../ui/Button';
import Modal from '../../ui/Modal';
import CreateProductForm from './CreateProductForm';

export default function AddProduct() {
    return (
        <Modal>
            <Modal.Open opens="product-forms">
                <Button>
                    <span>Thêm sản phẩm</span>
                </Button>
            </Modal.Open>
            <Modal.Window name="product-forms">
                <CreateProductForm />
            </Modal.Window>
        </Modal>
    );
}
