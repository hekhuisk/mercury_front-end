import React from 'react'
import { Table } from 'semantic-ui-react'

const TableExampleCelledStriped = () => (
    <Table
        celled
        striped
    >
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell colSpan={2}></Table.HeaderCell>
                <Table.HeaderCell colSpan={1}>JAN</Table.HeaderCell>
                <Table.HeaderCell colSpan={1}>FEB</Table.HeaderCell>
                <Table.HeaderCell colSpan={1}>MAR</Table.HeaderCell>
                <Table.HeaderCell colSpan={1}>APR</Table.HeaderCell>
                <Table.HeaderCell colSpan={1}>MAY</Table.HeaderCell>
                <Table.HeaderCell colSpan={1}>JUN</Table.HeaderCell>
                <Table.HeaderCell colSpan={1}>JUL</Table.HeaderCell>
                <Table.HeaderCell colSpan={1}>AUG</Table.HeaderCell>
                <Table.HeaderCell colSpan={1}>SEP</Table.HeaderCell>
                <Table.HeaderCell colSpan={1}>OCT</Table.HeaderCell>
                <Table.HeaderCell colSpan={1}>NOV</Table.HeaderCell>
                <Table.HeaderCell colSpan={1}>DEC</Table.HeaderCell>
            </Table.Row>
        </Table.Header>

        <Table.Body>
            <Table.Row>
                <Table.Cell colSpan={2}>Total Income</Table.Cell>
                <Table.Cell colSpan={1}>$1</Table.Cell>
                <Table.Cell colSpan={1}>$2</Table.Cell>
                <Table.Cell colSpan={1}></Table.Cell>
                <Table.Cell colSpan={1}></Table.Cell>
                <Table.Cell colSpan={1}></Table.Cell>
                <Table.Cell colSpan={1}></Table.Cell>
                <Table.Cell colSpan={1}></Table.Cell>
                <Table.Cell colSpan={1}></Table.Cell>
                <Table.Cell colSpan={1}></Table.Cell>
                <Table.Cell colSpan={1}></Table.Cell>
                <Table.Cell colSpan={1}></Table.Cell>
                <Table.Cell colSpan={1}></Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell colSpan={2}>Total Expenses</Table.Cell>
                <Table.Cell colSpan={1}></Table.Cell>
                <Table.Cell colSpan={1}></Table.Cell>
                <Table.Cell colSpan={1}></Table.Cell>
                <Table.Cell colSpan={1}></Table.Cell>
                <Table.Cell colSpan={1}></Table.Cell>
                <Table.Cell colSpan={1}></Table.Cell>
                <Table.Cell colSpan={1}></Table.Cell>
                <Table.Cell colSpan={1}></Table.Cell>
                <Table.Cell colSpan={1}></Table.Cell>
                <Table.Cell colSpan={1}></Table.Cell>
                <Table.Cell colSpan={1}></Table.Cell>
                <Table.Cell colSpan={1}></Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell colSpan={2}>Budget</Table.Cell>
                <Table.Cell colSpan={1}></Table.Cell>
                <Table.Cell colSpan={1}></Table.Cell>
                <Table.Cell colSpan={1}></Table.Cell>
                <Table.Cell colSpan={1}></Table.Cell>
                <Table.Cell colSpan={1}></Table.Cell>
                <Table.Cell colSpan={1}></Table.Cell>
                <Table.Cell colSpan={1}></Table.Cell>
                <Table.Cell colSpan={1}></Table.Cell>
                <Table.Cell colSpan={1}></Table.Cell>
                <Table.Cell colSpan={1}></Table.Cell>
                <Table.Cell colSpan={1}></Table.Cell>
                <Table.Cell colSpan={1}></Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell colSpan={2}>Budget Over / Under</Table.Cell>
                <Table.Cell colSpan={1}></Table.Cell>
                <Table.Cell colSpan={1}></Table.Cell>
                <Table.Cell colSpan={1}></Table.Cell>
                <Table.Cell colSpan={1}></Table.Cell>
                <Table.Cell colSpan={1}></Table.Cell>
                <Table.Cell colSpan={1}></Table.Cell>
                <Table.Cell colSpan={1}></Table.Cell>
                <Table.Cell colSpan={1}></Table.Cell>
                <Table.Cell colSpan={1}></Table.Cell>
                <Table.Cell colSpan={1}></Table.Cell>
                <Table.Cell colSpan={1}></Table.Cell>
                <Table.Cell colSpan={1}></Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell colSpan={2}>Est Savings (Income - Budget)</Table.Cell>
                <Table.Cell colSpan={1}></Table.Cell>
                <Table.Cell colSpan={1}></Table.Cell>
                <Table.Cell colSpan={1}></Table.Cell>
                <Table.Cell colSpan={1}></Table.Cell>
                <Table.Cell colSpan={1}></Table.Cell>
                <Table.Cell colSpan={1}></Table.Cell>
                <Table.Cell colSpan={1}></Table.Cell>
                <Table.Cell colSpan={1}></Table.Cell>
                <Table.Cell colSpan={1}></Table.Cell>
                <Table.Cell colSpan={1}></Table.Cell>
                <Table.Cell colSpan={1}></Table.Cell>
                <Table.Cell colSpan={1}></Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell colSpan={2}>Actual Savings (Income - Expenses)</Table.Cell>
                <Table.Cell colSpan={1}></Table.Cell>
                <Table.Cell colSpan={1}></Table.Cell>
                <Table.Cell colSpan={1}></Table.Cell>
                <Table.Cell colSpan={1}></Table.Cell>
                <Table.Cell colSpan={1}></Table.Cell>
                <Table.Cell colSpan={1}></Table.Cell>
                <Table.Cell colSpan={1}></Table.Cell>
                <Table.Cell colSpan={1}></Table.Cell>
                <Table.Cell colSpan={1}></Table.Cell>
                <Table.Cell colSpan={1}></Table.Cell>
                <Table.Cell colSpan={1}></Table.Cell>
                <Table.Cell colSpan={1}></Table.Cell>
            </Table.Row>
        </Table.Body>
    </Table>
)

export default TableExampleCelledStriped