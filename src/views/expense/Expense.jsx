import React from 'react'
import ExpenseOverviewTable from "./ExpenseOverviewTable";
import ExpenseTable from "./ExpenseTable";

export default function Expense() {
    return (
        <>
            <ExpenseOverviewTable />
            <ExpenseTable />
        </>
    );
}
