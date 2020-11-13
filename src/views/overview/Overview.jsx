import React from "react";
import * as overviewAPI from "../../api/OverviewAPI";
import OverviewTable from "./OverviewTable";
import {categorySelectors} from "../../redux/category";

const Overview = () => {
    const [overview, setOverview] = React.useState({
        expenseMonthlyTotals: [],
        incomeMonthlyTotals: []
    });

    const handleGetOverview = async (year) => {
        setOverview(await overviewAPI.getOverview(year));
    }

    React.useEffect(() => {
        handleGetOverview(2020);
    }, []);

    return (
        <div>
            <label>Incomes</label>
            <OverviewTable
                makeGetCategoryName={categorySelectors.makeGetIncomeCategoryName}
                monthlyTotals={overview.incomeMonthlyTotals}
            />
            <label>Expenses</label>
            <OverviewTable
                makeGetCategoryName={categorySelectors.makeGetExpenseCategoryName}
                monthlyTotals={overview.expenseMonthlyTotals}
            />
        </div>
    );
};

export default Overview;