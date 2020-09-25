import React from "react";
import ExpenseRow from "./ExpenseRow";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import FilterListIcon from "@material-ui/icons/FilterList";
import AddIcon from "@material-ui/icons/Add";
import DataTable from "../../../components/table/DataTable";
import TableToolbar from "../../../components/table/TableToolbar";

const columnHeaders = [
    { id: 'description', numeric: false, disablePadding: true, label: 'Description' },
    { id: 'date', numeric: false, disablePadding: false, label: 'Date' },
    { id: 'category', numeric: false, disablePadding: false, label: 'Category' },
    { id: 'paymentSource', numeric: false, disablePadding: false, label: 'Payment Source' },
    { id: 'cost', numeric: true, disablePadding: false, label: 'Cost' },
    { id: 'actions', numeric: false, disablePadding: false, label: '' },
];

function createData(description, date, category, paymentSource, cost) {
    return { description, date, category, paymentSource, cost };
}

const data = [
    createData('Gemmens', '10/10/2020', 'Home - Maintenance', 'Visa', 4.30),
    createData('Mobile', '10/10/2020', 'Vehicle - Gas', 'Visa', 10.50),
    createData('Meijer', '10/10/2020', 'Grocery', 'Visa', 50.10),
];

const ExpenseTable = (props) => {
    const {
        handleAddExpense
    } = props;

    const ExpenseTableToolbar = () =>
        <TableToolbar>
            <Typography style={{flex: '1 1 100%'}} variant="h6" id="tableTitle" component="div">
                Expenses
            </Typography>

            <Button
                variant="contained"
                color="secondary"
                startIcon={<FilterListIcon />}
            >
                Filter List
            </Button>
            <Button
                variant="contained"
                color="secondary"
                startIcon={<AddIcon />}
                onClick={handleAddExpense}
            >
                Add Expense
            </Button>
        </TableToolbar>;

    return (
        <DataTable
            columnHeaders={columnHeaders}
            data={data}
            RowRenderer={ExpenseRow}
            TableToolbar={ExpenseTableToolbar}
        />
    );
};

export default ExpenseTable;