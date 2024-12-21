import Empty from '../../ui/Empty';
import Menus from '../../ui/Menus';
import Spinner from '../../ui/Spinner';
import Table from '../../ui/Table';
import DiscountRow from './DiscountRow';
import useDiscounts from './useDiscounts';

export default function DiscountTable() {
    const { isLoading, discounts } = useDiscounts();

    if (isLoading) return <Spinner />;

    if (!discounts.length) return <Empty resource="giảm giá" />;

    return (
        <Menus>
            <Table columns="0.3fr 1fr 0.3fr 0.4fr 0.5fr 0.5fr 0.5fr 0.2fr">
                <Table.Header>
                    <div></div>
                    <div>Mã code</div>
                    <div>Giảm</div>
                    <div>Giá tối thiểu</div>
                    <div>Giảm tối đa</div>
                    <div>Lượt sử dụng</div>
                    <div>Ngày hết hạn</div>
                    <div></div>
                </Table.Header>
                <Table.Body
                    data={discounts}
                    render={(discount) => (
                        <DiscountRow discount={discount} key={discount._id} />
                    )}
                />
            </Table>
        </Menus>
    );
}
