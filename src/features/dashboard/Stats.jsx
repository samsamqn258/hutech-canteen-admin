import {
    HiOutlineBriefcase,
    HiOutlineCalendar,
    HiOutlineChartBar,
} from 'react-icons/hi';
import Stat from './Stat';
import { FaRegUser } from 'react-icons/fa';
import { HiOutlineBanknotes } from 'react-icons/hi2';
import { formatCurrency } from '../../utils/helpers';

export default function Stats({ products, revenues, orders, users }) {
    return (
        <>
            <Stat
                title="Sản phẩm bán được"
                color="blue"
                value={products}
                icon={<HiOutlineBriefcase />}
            />
            <Stat
                title="Doanh thu"
                color="green"
                value={formatCurrency(revenues)}
                icon={<HiOutlineBanknotes />}
            />
            <Stat
                title="Đơn đặt hàng"
                color="indigo"
                value={orders}
                icon={<HiOutlineCalendar />}
            />
            <Stat
                title="Lượng người mua hàng"
                color="yellow"
                value={users}
                icon={<FaRegUser />}
            />
        </>
    );
}
