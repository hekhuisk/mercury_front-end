import React from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

const PaymentSourceRow = (props) => {
    const {
        rowData: paymentSource,
        handleEditPaymentSource,
        handleDeletePaymentSource
    } = props;

    return (
        <TableRow
            key={paymentSource.paymentSourceID}
        >
            <TableCell >{paymentSource.name}</TableCell>
            <TableCell >{paymentSource.website}</TableCell>
            <TableCell align="center">
                <IconButton onClick={() => handleEditPaymentSource(paymentSource.paymentSourceID)}>
                    <EditIcon />
                </IconButton>
                <IconButton onClick={() => handleDeletePaymentSource(paymentSource.paymentSourceID)}>
                    <DeleteIcon />
                </IconButton>
            </TableCell>
        </TableRow>
    );
};

export default PaymentSourceRow;