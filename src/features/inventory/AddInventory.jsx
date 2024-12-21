import Button from '../../ui/Button';
import Modal from '../../ui/Modal';
import CreateInventoryForm from './CreateInventoryForm';

export default function AddInventory() {
    return (
        <Modal>
            <Modal.Open opens="inventory-forms">
                <Button>
                    <span>Thêm kho</span>
                </Button>
            </Modal.Open>
            <Modal.Window name="inventory-forms">
                <CreateInventoryForm />
            </Modal.Window>
        </Modal>
    );
}
