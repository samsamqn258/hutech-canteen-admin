import Button from '../../ui/Button';
import Modal from '../../ui/Modal';
import CreateStoreForm from './CreateStoreForm';

export default function AddStore() {
    return (
        <Modal>
            <Modal.Open opens="store-forms">
                <Button>
                    <span>Thêm cửa hàng</span>
                </Button>
            </Modal.Open>
            <Modal.Window name="store-forms">
                <CreateStoreForm />
            </Modal.Window>
        </Modal>
    );
}
