import React from 'react'
import ExpenseOverviewTable from "./ExpenseOverviewTable";
import ExpenseTable from "./ExpenseTable";
import {Button} from "semantic-ui-react";

export default function Expense() {
    return (
        <>
            <ExpenseOverviewTable />
            <Button content='Add Expense' icon='add' labelPosition='right' />
            <ExpenseTable />
        </>
    );
}
