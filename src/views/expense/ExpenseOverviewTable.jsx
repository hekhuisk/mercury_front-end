import React from 'react'
import OverviewTable from '../../components/OverviewTable'
import ExpenseOverviewRow from "./ExpenseOverviewRow";

export default function ExpenseOverviewTable() {
    return (
        <OverviewTable>
            <ExpenseOverviewRow majorCategoryName={'Home'}/>
        </OverviewTable>
    );
}
