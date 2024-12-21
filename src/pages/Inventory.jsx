import AddInventory from '../features/inventory/AddInventory';
import InventoryTable from '../features/inventory/InventoryTable';
import SelectShop from '../features/inventory/SelectShop';
import Heading from '../ui/Heading';
import Row from '../ui/Row';

export default function Inventory() {
    return (
        <>
            <Row type="horizontal">
                <Heading as="h1">Tất cả kho hàng</Heading>

                <Row type="horizontal">
                    <SelectShop />
                    <AddInventory />
                </Row>
            </Row>
            <Row>
                <InventoryTable />
            </Row>
        </>
    );
}
