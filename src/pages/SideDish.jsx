import Heading from '../ui/Heading';
import Row from '../ui/Row';
import AddSideDish from '../features/sideDish/AddSideDish';
import SideDishTable from '../features/sideDish/SideDishTable';

export default function SideDish() {
    return (
        <>
            <Row type="horizontal">
                <Heading as="h1">Danh sách sản phẩm phụ</Heading>
                <AddSideDish />
            </Row>
            <Row>
                <SideDishTable />
            </Row>
        </>
    );
}
