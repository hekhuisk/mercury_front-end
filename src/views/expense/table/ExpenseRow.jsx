import React from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Checkbox from "@material-ui/core/Checkbox";

const ExpenseRow = (props) => {
    const {
        handleRowClick,
        isRowSelected,
        rowData
    } = props;

    return (
        <TableRow
            hover
            onClick={(event) => handleRowClick(event, rowData.description)}
            key={rowData.description}
            selected={isRowSelected}
        >
            <TableCell padding="checkbox">
                <Checkbox
                    checked={isRowSelected}
                />
            </TableCell>
            <TableCell>{rowData.description}</TableCell>
            <TableCell>{rowData.date}</TableCell>
            <TableCell align="right">{rowData.cost}</TableCell>
        </TableRow>
    );
};

export default ExpenseRow;