import Empty from '../../ui/Empty';
import Menus from '../../ui/Menus';
import Spinner from '../../ui/Spinner';
import Table from '../../ui/Table';
import InventoryRow from './InventoryRow';
import useInventories from './useInventories';

export default function InventoryTable() {
    const { isLoading, inventories } = useInventories();

    if (isLoading) return <Spinner />;

    if (!inventories.length) return <Empty resource="kho hàng" />;

    return (
        <Menus>
            <Table columns="0.3fr 0.6fr 0.5fr 0.5fr 0.5fr  0.6fr 0.2fr">
                <Table.Header>
                    <div></div>
                    <div>Tên sản phẩm</div>
                    <div>Hàng tồn kho</div>
                    <div>Giá sản phẩm</div>
                    <div>Điểm quy đổi</div>

                    <div>Lượng hàng tối thiểu</div>
                    <div></div>
                </Table.Header>
                <Table.Body
                    data={inventories}
                    render={(inventory) => (
                        <InventoryRow
                            inventory={inventory}
                            key={inventory._id}
                        />
                    )}
                />
            </Table>
        </Menus>
    );
}
