import StoreTable from '../features/store/StoreTable';
import Heading from '../ui/Heading';
import Row from '../ui/Row';
import AddStore from '../features/store/AddStore';
export default function Store() {
    return (
        <>
            <Row type="horizontal">
                <Heading as="h1">Cửa Hàng</Heading>

                <AddStore />
            </Row>
            <Row>
                <StoreTable />
            </Row>
        </>
    );
}
