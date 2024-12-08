import AddLocation from '../features/location/AddLocation';
import LocationTable from '../features/location/LocationTable';
import Heading from '../ui/Heading';
import Row from '../ui/Row';

export default function Location() {
    return (
        <>
            <Row type="horizontal">
                <Heading as="h1">Tất cả các địa chỉ</Heading>

                <AddLocation />
            </Row>
            <Row>
                <LocationTable />
            </Row>
        </>
    );
}
