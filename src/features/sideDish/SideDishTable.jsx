import Empty from '../../ui/Empty';
import Menus from '../../ui/Menus';
import Spinner from '../../ui/Spinner';
import Table from '../../ui/Table';
import SideDishRow from './SideDishRow';
import useSideDishes from './useSideDishes';

export default function SideDishTable() {
    const { sideDishes, isLoading } = useSideDishes();
    if (isLoading) return <Spinner />;

    if (!sideDishes.length) return <Empty resource="sản phẩm phụ" />;
    return (
        <Menus>
            <Table columns="1.6fr 0.6fr 1fr 0.4fr  0.2fr">
                <Table.Header>
                    <div>Tên danh mục phụ</div>
                    <div>Chi phí</div>
                    <div>Ngày đăng</div>
                    <div>Trạng thái ngừng hoạt động</div>
                    <div></div>
                </Table.Header>
                <Table.Body
                    data={sideDishes}
                    render={(sideDish) => (
                        <SideDishRow sideDish={sideDish} key={sideDish._id} />
                    )}
                />
            </Table>
        </Menus>
    );
}
