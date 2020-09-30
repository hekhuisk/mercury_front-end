import React from "react";
import ExpenseRow from "./ExpenseRow";
import DataTable from "../../../components/table/DataTable";

const columnHeaders = [
    { id: 'description', numeric: false, disablePadding: true, label: 'Description' },
    { id: 'date', numeric: false, disablePadding: false, label: 'Date' },
    { id: 'category', numeric: false, disablePadding: false, label: 'Category' },
    { id: 'paymentSource', numeric: false, disablePadding: false, label: 'Payment Source' },
    { id: 'cost', numeric: true, disablePadding: false, label: 'Cost' },
    { id: 'actions', numeric: false, disablePadding: false, label: '' },
];

const ExpenseTable = (props) => {
    const {
        expenses,
        handleEditExpense,
        handleDeleteExpense
    } = props;

    return (
        <DataTable
            columnHeaders={columnHeaders}
            data={expenses}
            RowRenderer={ExpenseRow}
            rowProps={{
                handleEditExpense,
                handleDeleteExpense
            }}
        />
    );
};

export default ExpenseTable;