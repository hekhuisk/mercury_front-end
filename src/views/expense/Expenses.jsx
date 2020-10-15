import React from "react";
import Button from '@material-ui/core/Button';
import * as expenseAPI from "../../api/ExpenseAPI";
import Typography from "@material-ui/core/Typography";
import AddIcon from "@material-ui/icons/Add";
import Toolbar from "../../components/table/TableToolbar";
import ExpenseTable from "./table/ExpenseTable";
import SaveExpenseDialog from "./SaveExpenseDialog";
import SaveExpenseModal from "./SaveExpenseModal";

const Expenses = () => {
    // Save expense modal state
    const [open, setOpen] = React.useState(false);
    const [expenseID, setExpenseID] = React.useState(0);

    const [expenses, setExpenses] = React.useState([]);

    const fetchExpenses = async () => {
        setExpenses(await expenseAPI.getAllExpenses());
    };

    React.useEffect(() => {
        fetchExpenses();
    }, []);

    const handleClose = () => {
        setOpen(false);
        fetchExpenses();
    };

    const handleAddExpenseSave = (expense) => {
        expenseID > 0
            ? expenseAPI.updateExpense(expense)
            : expenseAPI.createExpense(expense);

        handleClose();
    };

    const handleAddExpense = () => {
        setExpenseID(0);
        setOpen(true);
    };

    const handleEditExpense = (expenseID) => {
        setExpenseID(expenseID);
        setOpen(true);
    };

    const handleDeleteExpense = (expenseID) => {
        expenseAPI.deleteExpense(expenseID);
        handleClose();
    }

    return (
        <div>
            <Toolbar>
                <Typography style={{flex: '1 1 100%'}} variant="h6" id="tableTitle" component="div">
                    Expenses
                </Typography>
                <Button
                    variant="contained"
                    color="secondary"
                    startIcon={<AddIcon />}
                    onClick={handleAddExpense}
                >
                    Add Expense
                </Button>
            </Toolbar>
            <ExpenseTable
                handleEditExpense={handleEditExpense}
                handleDeleteExpense={handleDeleteExpense}
                expenses={expenses}
            />
            <SaveExpenseModal
                open={open}
                onClose={handleClose}
                onSave={handleAddExpenseSave}
                expenseID={expenseID}
            />
        </div>
    );
};

export default Expenses;