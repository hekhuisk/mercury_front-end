import React from "react";
import PaymentSourceRow from "./PaymentSourceRow";
import DataTable from "../../../components/table/DataTable";

const columnHeaders = [
    { id: 'name', numeric: false, disablePadding: true, label: 'Name' },
    { id: 'website', numeric: false, disablePadding: false, label: 'Website' },
    { id: 'actions', numeric: false, disablePadding: false, label: '' },
];

const PaymentSourceTable = (props) => {
    const {
        paymentSources,
        handleEditPaymentSource,
        handleDeletePaymentSource
    } = props;

    return (
        <DataTable
            columnHeaders={columnHeaders}
            data={paymentSources}
            RowRenderer={PaymentSourceRow}
            rowProps={{
                handleEditPaymentSource,
                handleDeletePaymentSource
            }}
        />
    );
};

export default PaymentSourceTable;