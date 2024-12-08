import OpeningHourTable from '../features/openingHour/OpeningHourTable';
import Heading from '../ui/Heading';
import Row from '../ui/Row';

export default function OpeningHour() {
    return (
        <>
            <Row type="horizontal">
                <Heading as="h1">Giờ hoạt động</Heading>

                {/* <AddLocation /> */}
            </Row>
            <Row>
                <OpeningHourTable />
            </Row>
        </>
    );
}
