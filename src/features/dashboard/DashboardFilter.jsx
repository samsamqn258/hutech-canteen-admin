import Filter from '../../ui/Filter';

function DashboardFilter() {
    return (
        <Filter
            filterField="last"
            options={[
                { value: '7_days', label: '7 ngày trước' },
                { value: '1_month', label: '1 tháng trước' },
                // { value: '3_months', label: '3 Tháng trước' },
                { value: '6_months', label: '6 tháng trước' },
                // { value: '9_months', label: '9 Tháng trước' },
                { value: '1_year', label: '1 năm trước' },
                // { value: '2_years', label: '2 Năm trước' },
            ]}
        />
    );
}

export default DashboardFilter;
