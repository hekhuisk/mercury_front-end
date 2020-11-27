import React from "react";
import * as expenseAPI from "../../api/ExpenseAPI";
import ExpenseTable from "./ExpenseTable";
import SaveExpenseModal from "./SaveExpenseModal";
import { Button, Header, Icon } from "semantic-ui-react";
import {useSelector} from "react-redux";
import {userSelectors} from "../../redux/user";

const Expenses = () => {
    // Save expense modal state
    const [open, setOpen] = React.useState(false);
    const [expenseID, setExpenseID] = React.useState(0);

    const userID = useSelector(userSelectors.getUserID);

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

    const handleAddExpenseSave = async (expense) => {
        const categoryIDs = JSON.parse(expense.category);

        expense = {
            ...expense,
            ...categoryIDs,
            userID,
            expenseID
        }

        delete expense.category;

        console.log(expense);

        expenseID > 0
            ? await expenseAPI.updateExpense(expense.expenseID, expense)
            : await expenseAPI.createExpense(expense);

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

    const handleDeleteExpense = async (expenseID) => {
        await expenseAPI.deleteExpense(expenseID);
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