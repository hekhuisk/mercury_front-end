import React from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

const ExpenseRow = (props) => {
    const {
        rowData: expense,
        handleEditExpense,
        handleDeleteExpense
    } = props;

    return (
        <TableRow
            key={expense.expenseID}
        >
            <TableCell >{expense.description}</TableCell>
            <TableCell >{expense.date}</TableCell>
            <TableCell>{expense.category}</TableCell>
            <TableCell>{expense.paymentSource}</TableCell>
            <TableCell align="right">{expense.cost}</TableCell>
            <TableCell align="center">
                <IconButton onClick={() => handleEditExpense(expense.expenseID)}>
                    <EditIcon />
                </IconButton>
                <IconButton onClick={() => handleDeleteExpense(expense.expenseID)}>
                    <DeleteIcon />
                </IconButton>
            </TableCell>
        </TableRow>
    );
};

export default ExpenseRow;
