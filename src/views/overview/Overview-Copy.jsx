import React from "react";
import * as overviewAPI from "../../api/OverviewAPI";
import OverviewTable from "./OverviewTable";
import {categorySelectors} from "../../redux/category";
import OverallOverviewTable from "./OverallOverviewTable";

const Overview = () => {
    const [overview, setOverview] = React.useState();

    const handleGetOverview = async (year) => {
        setOverview(await overviewAPI.getOverview(year));
    }

    React.useEffect(() => {
        handleGetOverview(2020);
    }, []);

    return (
        <div>
            <h1>Year: 2020</h1>
            <h2>Incomes</h2>
            <OverviewTable
                makeGetCategoryName={categorySelectors.makeGetIncomeCategoryName}
                monthlyTotals={overview && overview.incomeMonthlyTotals}
            />
            <h2>Expenses</h2>
            <OverviewTable
                makeGetCategoryName={categorySelectors.makeGetExpenseCategoryName}
                monthlyTotals={overview && overview.expenseMonthlyTotals}
            />
        </div>
    );
};

export default Overview;