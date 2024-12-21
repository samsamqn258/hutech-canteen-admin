import styled from 'styled-components';
import DashboardBox from './DashboardBox';
import Heading from '../../ui/Heading';
import {
    Area,
    AreaChart,
    CartesianGrid,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts';

const StyledSalesChart = styled(DashboardBox)`
    grid-column: 1 / -1;

    /* Hack to change grid line colors */
    & .recharts-cartesian-grid-horizontal line,
    & .recharts-cartesian-grid-vertical line {
        stroke: var(--color-grey-300);
    }
`;

export default function SalesChart({ bestSelling, numDays }) {
    const numDaysMap = {
        '7_days': 7,
        '1_month': 30,
        '6_months': 180,
        '1_year': 365,
    };

    const date = numDaysMap[numDays] || 7;

    const data = bestSelling?.map((product) => ({
        date: product.product_name,
        totalSales: product.totalRevenue || 0,
        quantity: product.totalQuantity || 0,
    }));

    const colors = {
        totalSales: { stroke: '#4f46e5', fill: '#c7d2fe' },
        quantity: { stroke: '#16a34a', fill: '#dcfce7' },
        text: '#374151',
        background: '#fff',
    };

    return (
        <StyledSalesChart>
            <Heading as="h2">Sản phẩm bán chạy ({date} ngày gần đây)</Heading>
            <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={data}>
                    <XAxis
                        dataKey="date"
                        tick={{ fill: colors.text }}
                        tickLine={{ stroke: colors.text }}
                    />
                    <YAxis
                        unit="đ"
                        tick={{ fill: colors.text }}
                        tickLine={{ stroke: colors.text }}
                    />
                    <CartesianGrid strokeDasharray="4" />
                    <Tooltip
                        contentStyle={{ backgroundColor: colors.background }}
                    />
                    <Area
                        dataKey="totalSales"
                        type="monotone"
                        stroke={colors.totalSales.stroke}
                        fill={colors.totalSales.fill}
                        strokeWidth={2}
                        name="Tổng doanh thu"
                        unit="đ"
                    />
                    <Area
                        dataKey="quantity"
                        type="monotone"
                        stroke={colors.quantity.stroke}
                        fill={colors.quantity.fill}
                        strokeWidth={2}
                        name="Số lượng bán"
                        unit=""
                    />
                </AreaChart>
            </ResponsiveContainer>
        </StyledSalesChart>
    );
}
