import React from "react";
import {Button, Icon, Table} from 'semantic-ui-react'

const IncomeTable = (props) => {
    const {
        incomes,
        handleEditIncome,
        handleDeleteIncomes
    } = props;

    return (
        <Table striped>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Description</Table.HeaderCell>
                    <Table.HeaderCell>Date</Table.HeaderCell>
                    <Table.HeaderCell>Category</Table.HeaderCell>
                    <Table.HeaderCell>Amount</Table.HeaderCell>
                    <Table.HeaderCell />
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {incomes && incomes.map((income) => (
                    <Table.Row key={income.incomeID}>
                        <Table.Cell>{income.description}</Table.Cell>
                        <Table.Cell>{income.incomeDate}</Table.Cell>
                        <Table.Cell>{income.category}</Table.Cell>
                        <Table.Cell>{income.amount}</Table.Cell>
                        <Table.Cell>
                            <Button
                                icon
                                onClick={() => handleEditIncome(income.incomeID)}
                            >
                                <Icon name='edit' />
                            </Button>
                            <Button
                                icon
                                onClick={() => handleDeleteIncomes(income.incomeID)}
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

export default IncomeTable;