import Empty from '../../ui/Empty';
import Menus from '../../ui/Menus';
import Spinner from '../../ui/Spinner';
import Table from '../../ui/Table';
import OpeningHourRow from './OpeningHourRow';
import useOpeningHours from './useOpeningHours';

export default function OpeningHourTable() {
    const { openingHours, isLoading } = useOpeningHours();

    if (isLoading) return <Spinner />;

    if (!openingHours.length) return <Empty resource="Thời gian" />;
    return (
        <Menus>
            <Table columns="0.6fr 0.6fr 0.6fr 0.6fr 0.6fr 0.6fr 0.6fr 0.6fr 0.2fr">
                <Table.Header>
                    <div>Thứ 2</div>
                    <div>Thứ 3</div>
                    <div>Thứ 4</div>
                    <div>Thứ 5</div>
                    <div>Thứ 6</div>
                    <div>Thứ 7</div>
                    <div>Chủ nhật</div>
                    <div>Ngày tạo</div>
                    <div></div>
                </Table.Header>
                <Table.Body
                    data={openingHours}
                    render={(openingHour) => (
                        <OpeningHourRow
                            openingHour={openingHour}
                            key={openingHour._id}
                        />
                    )}
                />
            </Table>
        </Menus>
    );
}
