import React from "react";
import OverviewRow from "../../../components/semantic_based/OverviewRow";

export default function ExpenseOverviewRow(props) {
    const {
        majorCategoryName
    } = props;

    const subCategoryProps1 = {
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

    const subCategoryProps2 = {
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
            rowName={majorCategoryName}
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
            <OverviewRow {...subCategoryProps1} />
            <OverviewRow {...subCategoryProps2} />
        </OverviewRow>
    );
}