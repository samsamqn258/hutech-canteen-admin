import Empty from '../../ui/Empty';
import Menus from '../../ui/Menus';
import Spinner from '../../ui/Spinner';
import Table from '../../ui/Table';
import LocationRow from './LocationRow';
import ProductRow from './LocationRow';
import useLocations from './useLocations';

export default function LocationTable() {
    const { locations, isLoading } = useLocations();

    if (isLoading) return <Spinner />;

    if (!locations.length) return <Empty resource="Vị trí" />;
    return (
        <Menus>
            <Table columns="1.3fr 1fr 0.8fr 0.6fr 0.6fr 0.2fr">
                <Table.Header>
                    <div>Mã</div>
                    <div>Tên địa chỉ</div>
                    <div>Ngày tạo</div>
                    <div>Kinh độ</div>
                    <div>Vĩ độ</div>
                    <div></div>
                </Table.Header>
                <Table.Body
                    data={locations}
                    render={(location) => (
                        <LocationRow location={location} key={location._id} />
                    )}
                />
            </Table>
        </Menus>
    );
}
