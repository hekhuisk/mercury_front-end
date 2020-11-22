import React from "react";
import {Table} from 'semantic-ui-react'
import MoneyDisplay from "../MoneyDisplay";

const MoneyCell = (props) => (
    <Table.Cell textAlign='right' selectable><MoneyDisplay amount={props.amount} /></Table.Cell>
);

const OverallOverviewTable = (props) => {
    const {
        overview
    } = props;

    return (
        <Table celled columns={14}>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell />
                    <Table.HeaderCell>JAN</Table.HeaderCell>
                    <Table.HeaderCell>FEB</Table.HeaderCell>
                    <Table.HeaderCell>MAR</Table.HeaderCell>
                    <Table.HeaderCell>APR</Table.HeaderCell>
                    <Table.HeaderCell>MAY</Table.HeaderCell>
                    <Table.HeaderCell>JUN</Table.HeaderCell>
                    <Table.HeaderCell>JUL</Table.HeaderCell>
                    <Table.HeaderCell>AUG</Table.HeaderCell>
                    <Table.HeaderCell>SEP</Table.HeaderCell>
                    <Table.HeaderCell>OCT</Table.HeaderCell>
                    <Table.HeaderCell>NOV</Table.HeaderCell>
                    <Table.HeaderCell>DEC</Table.HeaderCell>
                    <Table.HeaderCell />
                </Table.Row>
            </Table.Header>
            <Table.Body>
                <Table.Row>
                    <Table.Cell>Total Income</Table.Cell>
                    <MoneyCell amount={0} />
                    <MoneyCell amount={0} />
                    <MoneyCell amount={0} />
                    <MoneyCell amount={0} />
                    <MoneyCell amount={0} />
                    <MoneyCell amount={0} />
                    <MoneyCell amount={0} />
                    <MoneyCell amount={0} />
                    <MoneyCell amount={0} />
                    <MoneyCell amount={0} />
                    <MoneyCell amount={0} />
                    <MoneyCell amount={0} />
                    <MoneyCell amount={0} />
                </Table.Row>
                <Table.Row>
                    <Table.Cell>Total Expenses</Table.Cell>
                    <MoneyCell amount={0} />
                    <MoneyCell amount={0} />
                    <MoneyCell amount={0} />
                    <MoneyCell amount={0} />
                    <MoneyCell amount={0} />
                    <MoneyCell amount={0} />
                    <MoneyCell amount={0} />
                    <MoneyCell amount={0} />
                    <MoneyCell amount={0} />
                    <MoneyCell amount={0} />
                    <MoneyCell amount={0} />
                    <MoneyCell amount={0} />
                    <MoneyCell amount={0} />
                </Table.Row>
                <Table.Row>
                    <Table.Cell>Budget</Table.Cell>
                    <MoneyCell amount={0} />
                    <MoneyCell amount={0} />
                    <MoneyCell amount={0} />
                    <MoneyCell amount={0} />
                    <MoneyCell amount={0} />
                    <MoneyCell amount={0} />
                    <MoneyCell amount={0} />
                    <MoneyCell amount={0} />
                    <MoneyCell amount={0} />
                    <MoneyCell amount={0} />
                    <MoneyCell amount={0} />
                    <MoneyCell amount={0} />
                    <MoneyCell amount={0} />
                </Table.Row>
                <Table.Row>
                    <Table.Cell>Budget Over / Under</Table.Cell>
                    <MoneyCell amount={0} />
                    <MoneyCell amount={0} />
                    <MoneyCell amount={0} />
                    <MoneyCell amount={0} />
                    <MoneyCell amount={0} />
                    <MoneyCell amount={0} />
                    <MoneyCell amount={0} />
                    <MoneyCell amount={0} />
                    <MoneyCell amount={0} />
                    <MoneyCell amount={0} />
                    <MoneyCell amount={0} />
                    <MoneyCell amount={0} />
                    <MoneyCell amount={0} />
                </Table.Row>
                <Table.Row>
                    <Table.Cell>Est. Savings (Income - Budget)</Table.Cell>
                    <MoneyCell amount={0} />
                    <MoneyCell amount={0} />
                    <MoneyCell amount={0} />
                    <MoneyCell amount={0} />
                    <MoneyCell amount={0} />
                    <MoneyCell amount={0} />
                    <MoneyCell amount={0} />
                    <MoneyCell amount={0} />
                    <MoneyCell amount={0} />
                    <MoneyCell amount={0} />
                    <MoneyCell amount={0} />
                    <MoneyCell amount={0} />
                    <MoneyCell amount={0} />
                </Table.Row>
                <Table.Row>
                    <Table.Cell>Actual Savings (Income - Expense)</Table.Cell>
                    <MoneyCell amount={0} />
                    <MoneyCell amount={0} />
                    <MoneyCell amount={0} />
                    <MoneyCell amount={0} />
                    <MoneyCell amount={0} />
                    <MoneyCell amount={0} />
                    <MoneyCell amount={0} />
                    <MoneyCell amount={0} />
                    <MoneyCell amount={0} />
                    <MoneyCell amount={0} />
                    <MoneyCell amount={0} />
                    <MoneyCell amount={0} />
                    <MoneyCell amount={0} />
                </Table.Row>
            </Table.Body>
        </Table>
    );
};

export default OverallOverviewTable;