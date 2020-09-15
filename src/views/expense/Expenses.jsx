import React from "react";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import ExpenseTable from "./table/ExpenseTable";

const Expenses = () => {

    return (
        <div>
            <Button
                variant="contained"
                color="secondary"
                startIcon={<AddIcon />}
            >
                Add Expense
            </Button>
            <ExpenseTable />
        </div>
    );
};

export default Expenses;