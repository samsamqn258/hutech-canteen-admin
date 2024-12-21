import styled from 'styled-components';
import Spinner from '../../ui/Spinner';
import Stats from './Stats';
import useStatistic from './useStatistic';
import useManages from '../user/useManages';
import useEmployees from '../user/useEmployees';
import ListEmployee from '../user/ListEmployee';
import ListManager from '../user/ListManager';
import useBestSellingProducts from './useBestSellingProducts';
import SalesChart from './SalesChart';
import useUpdateStatus from '../user/useUpdateStatus';
import { id } from 'date-fns/locale';

const StyledDashboardLayout = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: auto 34rem auto;
    gap: 2.4rem;
`;

export default function DashboardLayout() {
    const { statistics, isLoading: isLoadingStatictis } = useStatistic();

    const { manages, isLoading: isManageLoading } = useManages();

    const { employees, isLoading: isEmployeeLoading } = useEmployees();
    const { updateUser, isUpdating } = useUpdateStatus();

    const handlerUpdateStatus = (id) => {
        updateUser({
            id,
        });
    };

    const { bestSelling, isBestSellLoading, numDays } =
        useBestSellingProducts();

    if (
        isLoadingStatictis ||
        isManageLoading ||
        isEmployeeLoading ||
        isBestSellLoading
    )
        return <Spinner />;

    return (
        <StyledDashboardLayout>
            <Stats
                products={statistics.totalProducts}
                revenues={statistics.totalRevenue}
                orders={statistics.totalOrders}
                users={statistics.totalUsers}
            />
            <ListManager
                manages={manages}
                handlerUpdateStatus={handlerUpdateStatus}
            />
            <ListEmployee
                employees={employees}
                handlerUpdateStatus={handlerUpdateStatus}
            />

            {/* <DurationChart confirmedStay={confirmedStay} /> */}

            <SalesChart bestSelling={bestSelling} numDays={numDays} />
        </StyledDashboardLayout>
    );
}
