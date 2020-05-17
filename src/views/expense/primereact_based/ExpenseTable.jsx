import React from 'react'
import {Table} from "semantic-ui-react";
import ExpenseRow from "./ExpenseRow";

const ExpenseTable = (props) => {
    const rowProps = {
        cost: 10.01,
        date: '05/12/2020',
        description: 'Lowes',
        majorCategory: 'Home',
        majorPurchase: false,
        paymentSource: 'Cash',
        receipt: false,
        subCategory: 'Lawn/Garden'
    }

    return (
        <Table striped celled fixed compact>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Date</Table.HeaderCell>
                    <Table.HeaderCell>Description</Table.HeaderCell>
                    <Table.HeaderCell>Category</Table.HeaderCell>
                    <Table.HeaderCell>Major Purchase</Table.HeaderCell>
                    <Table.HeaderCell>Payment Source</Table.HeaderCell>
                    <Table.HeaderCell>Cost</Table.HeaderCell>
                    <Table.HeaderCell />
                </Table.Row>
            </Table.Header>
            <Table.Body>
                <ExpenseRow {...rowProps} />
                <ExpenseRow {...rowProps} majorPurchase />
                <ExpenseRow {...rowProps} receipt />
                <ExpenseRow {...rowProps} receipt majorPurchase />
            </Table.Body>
        </Table>
    );
}

export default ExpenseTable;

// Major category
// Sub category
// Vendor
// Expense amount
// Pic of receipt
// Date
// Edit button
// major purchase check box?
// is recurring?
// delete
