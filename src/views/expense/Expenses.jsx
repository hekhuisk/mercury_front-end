import React from "react";
import * as expenseAPI from "../../api/ExpenseAPI";
import ExpenseTable from "./ExpenseTable";
import SaveExpenseModal from "./SaveExpenseModal";
import { Button, Header, Icon } from "semantic-ui-react";

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
            <Header>
                Expenses
            </Header>
            <Button
                icon
                labelPosition='left'
                onClick={handleAddExpense}
            >
                <Icon name='add' />
                Add Expense
            </Button>
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