import React from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

const ExpenseRow = (props) => {
    const {
        rowData
    } = props;

    return (
        <TableRow
            key={rowData.description}
        >
            <TableCell >{rowData.description}</TableCell>
            <TableCell >{rowData.date}</TableCell>
            <TableCell>{rowData.category}</TableCell>
            <TableCell>{rowData.paymentSource}</TableCell>
            <TableCell align="right">{rowData.cost}</TableCell>
            <TableCell align="center">
                <IconButton aria-label="filter list">
                    <EditIcon />
                </IconButton>
                <IconButton aria-label="filter list">
                    <DeleteIcon />
                </IconButton>
            </TableCell>
        </TableRow>
    );
};

export default ExpenseRow;