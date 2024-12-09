import Empty from '../../ui/Empty';
import Menus from '../../ui/Menus';
import Spinner from '../../ui/Spinner';
import Table from '../../ui/Table';
import CategoryRow from './CategoryRow';
import useCategories from './useCategories';

export default function CategoryTable() {
    const { isLoading, categories } = useCategories();

    if (isLoading) return <Spinner />;

    if (!categories.length) return <Empty resource="danh mục" />;

    return (
        <Menus>
            <Table columns="0.4fr 0.8fr 1fr 1.6fr 1.4fr 0.2fr">
                <Table.Header>
                    <div></div>
                    <div>Tên danh mục</div>
                    <div>Ngày đăng</div>
                    <div>Trạng thái ngừng hoạt động</div>
                    <div>Trạng thái công khai</div>
                    <div></div>
                </Table.Header>
                <Table.Body
                    data={categories}
                    render={(category) => (
                        <CategoryRow category={category} key={category._id} />
                    )}
                />
            </Table>
        </Menus>
    );
}
