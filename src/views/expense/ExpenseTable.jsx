import React from "react";
import {Button, Icon, Table} from 'semantic-ui-react'
import MoneyDisplay from "../../components/MoneyDisplay";
import DateDisplay from "../../components/DateDisplay";
import {useSelector} from "react-redux";
import { categorySelectors } from "../../redux/category";
import { paymentSourceSelectors } from "../../redux/paymentSource";

const ExpenseTable = (props) => {
    const {
        expenses,
        handleEditExpense,
        handleDeleteExpense
    } = props;

    const getExpenseCategoryName = useSelector(categorySelectors.makeGetExpenseCategoryName);
    const getPaymentSourceName = useSelector(paymentSourceSelectors.makeGetPaymentSourceName);

    return (
        <Table striped>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Description</Table.HeaderCell>
                    <Table.HeaderCell>Date</Table.HeaderCell>
                    <Table.HeaderCell>Category</Table.HeaderCell>
                    <Table.HeaderCell>Payment Source</Table.HeaderCell>
                    <Table.HeaderCell>Amount</Table.HeaderCell>
                    <Table.HeaderCell>Major Purchase</Table.HeaderCell>
                    <Table.HeaderCell />
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {expenses && expenses.map((expense) => (
                    <Table.Row key={expense.expenseID}>
                        <Table.Cell>{expense.description}</Table.Cell>
                        <Table.Cell><DateDisplay date={expense.expenseDate} /></Table.Cell>
                        <Table.Cell>{getExpenseCategoryName(expense.mainCategoryID, expense.subCategoryID)}</Table.Cell>
                        <Table.Cell>{getPaymentSourceName(expense.paymentSourceID)}</Table.Cell>
                        <Table.Cell><MoneyDisplay amount={expense.amount.amount} currency={expense.amount.currency} /></Table.Cell>
                        <Table.Cell>{expense.majorPurchase ? 'Yes' : undefined}</Table.Cell>
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