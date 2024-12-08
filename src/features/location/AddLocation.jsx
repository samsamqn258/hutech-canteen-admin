import Button from '../../ui/Button';
import Modal from '../../ui/Modal';
import CreateLocationForm from './CreateLocationForm';
import CreateProductForm from './CreateLocationForm';

export default function AddLocation() {
    return (
        <Modal>
            <Modal.Open opens="location-forms">
                <Button>
                    <span>Thêm địa chỉ</span>
                </Button>
            </Modal.Open>
            <Modal.Window name="location-forms">
                <CreateLocationForm />
            </Modal.Window>
        </Modal>
    );
}
