import Empty from '../../ui/Empty';
import Menus from '../../ui/Menus';
import Spinner from '../../ui/Spinner';
import Table from '../../ui/Table';
import ProductRow from './ProductRow';
import useProducts from './useProducts';

export default function ProductTable() {
    const { isLoading, products } = useProducts();

    if (isLoading) return <Spinner />;

    if (!products.length) return <Empty resource="sản phẩm" />;
    return (
        <Menus>
            <Table columns="0.4fr 0.6fr 1.2fr 0.6fr 0.4fr 0.4fr 0.4fr 0.4fr 0.2fr">
                <Table.Header>
                    <div></div>
                    <div>Tên sản phẩm</div>
                    <div>Mô tả</div>
                    <div>Ngày đăng</div>
                    <div>Giá</div>
                    <div>Điểm đổi thưởng</div>
                    <div>Điểm đánh giá</div>
                    <div>Thời gian chuẩn bị món</div>
                    <div></div>
                </Table.Header>
                <Table.Body
                    data={products}
                    render={(product) => (
                        <ProductRow
                            product={product.product_id}
                            key={product.product_id._id}
                        />
                    )}
                />
            </Table>
        </Menus>
    );
}
