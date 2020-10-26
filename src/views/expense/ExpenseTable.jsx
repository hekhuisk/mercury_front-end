import React from "react";
import {Button, Icon, Table} from 'semantic-ui-react'

const ExpenseTable = (props) => {
    const {
        expenses,
        handleEditExpense,
        handleDeleteExpense
    } = props;

    return (
        <Table striped>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Description</Table.HeaderCell>
                    <Table.HeaderCell>Date</Table.HeaderCell>
                    <Table.HeaderCell>Category</Table.HeaderCell>
                    <Table.HeaderCell>Payment Source</Table.HeaderCell>
                    <Table.HeaderCell>Amount</Table.HeaderCell>
                    <Table.HeaderCell />
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {expenses && expenses.map((expense) => (
                    <Table.Row key={expense.expenseID}>
                        <Table.Cell>{expense.description}</Table.Cell>
                        <Table.Cell>{expense.expenseDate}</Table.Cell>
                        <Table.Cell>{expense.category}</Table.Cell>
                        <Table.Cell>{expense.paymentSource}</Table.Cell>
                        <Table.Cell>{expense.amount}</Table.Cell>
                        <Table.Cell>
                            <Button
                                icon
                                onClick={() => handleEditExpense(expense.expenseID)}
                            >
                                <Icon name='edit' />
                            </Button>
                            <Button
                                icon
                                onClick={() => handleDeleteExpense(expense.expenseID)}
                            >
                                <Icon name='trash alternate' />
                            </Button>
                        </Table.Cell>
                    </Table.Row>
                ))}
            </Table.Body>
        </Table>
    );
};

export default ExpenseTable;