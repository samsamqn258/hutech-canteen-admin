import Empty from '../../ui/Empty';
import Menus from '../../ui/Menus';
import Spinner from '../../ui/Spinner';
import Table from '../../ui/Table';
import StoreRow from './StoreRow';
import useStores from './useStores';

export default function StoreTable() {
    const { stores, isLoading } = useStores();

    if (isLoading) return <Spinner />;

    if (!stores.length) return <Empty resource="Cửa hàng" />;
    return (
        <Menus>
            <Table columns="0.3fr 0.4fr 1fr 0.4fr 0.3fr 0.2fr">
                <Table.Header>
                    <div></div>
                    <div>Cửa hàng</div>
                    <div>Mô tả</div>
                    <div>Ngày tạo</div>
                    <div>Trạng thái</div>
                    <div></div>
                </Table.Header>
                <Table.Body
                    data={stores}
                    render={(store) => (
                        <StoreRow store={store} key={store._id} />
                    )}
                />
            </Table>
        </Menus>
    );
}
