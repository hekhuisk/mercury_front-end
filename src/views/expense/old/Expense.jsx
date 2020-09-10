import React from 'react'
import ExpenseOverviewTable from "./ExpenseOverviewTable";
import ExpenseTable from "./ExpenseTable";
import {Button} from "primereact/button";
import ExpenseForm from "./ExpenseForm";

export default function Expense() {
    return (
        <>
            <ExpenseOverviewTable />
            <ExpenseForm/>
            <Button label="Add Expense" icon="pi pi-plus" />
            <ExpenseTable />
        </>
    );
}
