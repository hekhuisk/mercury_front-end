import React from "react";
import OverviewRow from "../../components/OverviewRow";

export default function ExpenseOverviewRow(props) {
    const {
        categoryName
    } = props;

    const subcategoryProps1 = {
        rowName: 'Mortgage',
        textAlign: 'right',
        monthlyTotals: {
            jan: 0,
            feb: 1,
            mar: 2,
            apr: 3,
            may: 4,
            jun: 5,
            jul: 6,
            aug: 7,
            sep: 8,
            oct: 9,
            nov: 10,
            dec: 11
        }
    };

    const subcategoryProps2 = {
        rowName: 'Home Insurance',
        textAlign: 'right',
        monthlyTotals: {
            jan: 0,
            feb: 0,
            mar: 0,
            apr: 0,
            may: 0,
            jun: 0,
            jul: 0,
            aug: 0,
            sep: 0,
            oct: 0,
            nov: 0,
            dec: 0
        }
    };

    return (
        <OverviewRow
            expandable
            rowName={categoryName}
            monthlyTotals={{
                jan: 0,
                feb: 0,
                mar: 0,
                apr: 0,
                may: 0,
                jun: 0,
                jul: 0,
                aug: 0,
                sep: 0,
                oct: 0,
                nov: 0,
                dec: 0
            }}
        >
            <OverviewRow {...subcategoryProps1} />
            <OverviewRow {...subcategoryProps2} />
        </OverviewRow>
    );
}