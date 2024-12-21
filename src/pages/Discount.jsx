import AddDiscount from '../features/discount/AddDiscount';
import DiscountTable from '../features/discount/DiscountTable';
import Heading from '../ui/Heading';
import Row from '../ui/Row';

export default function Discount() {
    return (
        <>
            <Row type="horizontal">
                <Heading as="h1">Tất cả mã giảm giá</Heading>

                <AddDiscount />
            </Row>
            <Row>
                <DiscountTable />
            </Row>
        </>
    );
}
