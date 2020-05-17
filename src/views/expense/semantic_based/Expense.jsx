import React from 'react'
import ExpenseOverviewTable from "./ExpenseOverviewTable";
import ExpenseTable from "./ExpenseTable";
import {Button} from 'primereact/button';

export default function Expense() {
    return (
        <>
            <ExpenseOverviewTable />
            <Button label='Add Expense' icon='pi pi-plus' iconPos='left' />
            <ExpenseTable />
        </>
    );
}
