import React from "react";
import {Button, Icon, Table} from 'semantic-ui-react'
import DateDisplay from "../DateDisplay";
import MoneyDisplay from "../MoneyDisplay";
import {useSelector} from "react-redux";
import {categorySelectors} from "../../redux/category";

const IncomeTable = (props) => {
    const {
        incomes,
        handleEditIncome,
        handleDeleteIncomes
    } = props;

    const getIncomeCategoryName = useSelector((state) => categorySelectors.makeGetIncomeCategoryName(state, 'combo'));

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
                        <Table.Cell><DateDisplay date={income.incomeDate} /></Table.Cell>
                        <Table.Cell>{getIncomeCategoryName(income.mainCategoryID, income.subCategoryID)}</Table.Cell>
                        <Table.Cell textAlign='right'><MoneyDisplay amount={income.amount} /></Table.Cell>
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