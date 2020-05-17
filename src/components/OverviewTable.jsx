import React from 'react'
import {Table} from 'semantic-ui-react'
import OverviewRow from "./OverviewRow";

export default function OverviewTable(props) {
    const {
        children,
        tableData,
        totalsRow
    } = props;

    return (
        <Table
            celled
            fixed
        >
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell width={3}></Table.HeaderCell>
                    <Table.HeaderCell width={1} textAlign={'center'}>JAN</Table.HeaderCell>
                    <Table.HeaderCell width={1} textAlign={'center'}>FEB</Table.HeaderCell>
                    <Table.HeaderCell width={1} textAlign={'center'}>MAR</Table.HeaderCell>
                    <Table.HeaderCell width={1} textAlign={'center'}>APR</Table.HeaderCell>
                    <Table.HeaderCell width={1} textAlign={'center'}>MAY</Table.HeaderCell>
                    <Table.HeaderCell width={1} textAlign={'center'}>JUN</Table.HeaderCell>
                    <Table.HeaderCell width={1} textAlign={'center'}>JUL</Table.HeaderCell>
                    <Table.HeaderCell width={1} textAlign={'center'}>AUG</Table.HeaderCell>
                    <Table.HeaderCell width={1} textAlign={'center'}>SEP</Table.HeaderCell>
                    <Table.HeaderCell width={1} textAlign={'center'}>OCT</Table.HeaderCell>
                    <Table.HeaderCell width={1} textAlign={'center'}>NOV</Table.HeaderCell>
                    <Table.HeaderCell width={1} textAlign={'center'}>DEC</Table.HeaderCell>
                    <Table.HeaderCell width={1} textAlign={'center'}></Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {tableData
                    ?
                    <>
                        {tableData.map( row =>
                            <OverviewRow
                                rowName={row.rowName}
                                monthlyTotals={row.monthlyTotals}
                            />
                        )}
                        {/*{totalsRow &&*/}
                        {/*    <OverviewRow*/}
                        {/*        rowName="Totals"*/}
                        {/*        monthlyTotals={row.monthlyTotals}*/}
                        {/*    />*/}
                        {/*}*/}
                    </>
                    :
                    children
                }
            </Table.Body>
        </Table>
    );
}
