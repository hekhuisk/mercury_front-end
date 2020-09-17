import React from "react";
import ExpenseRow from "./ExpenseRow";
import Table from "../../../components/table/Table";

const ExpenseTable = () => {
    const columns = React.useMemo(
        () => [
            {
                label: 'Description',
                key: 'description'
            },
            {
                label: 'Date',
                key: 'date'
            },
            {
                label: 'Cost',
                key: 'cost',
                numeric: true
            },
        ],
        []
    )

    const data = [
        {
            'description': 'Expense 1',
            'date': '02/05/2020',
            'cost': '$5.00'
        },
        {
            'description': 'Expense 2',
            'date': '02/03/2020',
            'cost': '$2.50'
        },
    ];

    return (
        <Table
            columns={columns}
            data={data}
            RowRenderer={ExpenseRow}
            hasActionColumn
        />
    );
};

export default ExpenseTable;