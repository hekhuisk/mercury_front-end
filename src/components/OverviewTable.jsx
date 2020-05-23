import React from 'react'

import {Column} from "primereact/column";
import {DataTable} from "primereact/datatable";

export default function OverviewTable(props) {
    const {
        tableData,
    } = props;

    return (
        <DataTable value={tableData}>
            <Column field="rowName" />
            <Column field="monthlyTotals.jan" header="JAN" />
            <Column field="monthlyTotals.feb" header="FEB" />
            <Column field="monthlyTotals.mar" header="MAR" />
            <Column field="monthlyTotals.apr" header="APR" />
            <Column field="monthlyTotals.may" header="MAY" />
            <Column field="monthlyTotals.jun" header="JUN" />
            <Column field="monthlyTotals.jul" header="JUL" />
            <Column field="monthlyTotals.aug" header="AUG" />
            <Column field="monthlyTotals.sep" header="SEP" />
            <Column field="monthlyTotals.oct" header="OCT" />
            <Column field="monthlyTotals.nov" header="NOV" />
            <Column field="monthlyTotals.dec" header="DEC" />
            <Column body={(rowData) => Object.values(rowData.monthlyTotals).reduce((a, b) => a + b)} />
        </DataTable>

        // <Table
        //     celled
        //     fixed
        // >
        //     <Table.Header>
        //         <Table.Row>
        //             <Table.HeaderCell width={3}></Table.HeaderCell>
        //             <Table.HeaderCell width={1} textAlign={'center'}>JAN</Table.HeaderCell>
        //             <Table.HeaderCell width={1} textAlign={'center'}>FEB</Table.HeaderCell>
        //             <Table.HeaderCell width={1} textAlign={'center'}>MAR</Table.HeaderCell>
        //             <Table.HeaderCell width={1} textAlign={'center'}>APR</Table.HeaderCell>
        //             <Table.HeaderCell width={1} textAlign={'center'}>MAY</Table.HeaderCell>
        //             <Table.HeaderCell width={1} textAlign={'center'}>JUN</Table.HeaderCell>
        //             <Table.HeaderCell width={1} textAlign={'center'}>JUL</Table.HeaderCell>
        //             <Table.HeaderCell width={1} textAlign={'center'}>AUG</Table.HeaderCell>
        //             <Table.HeaderCell width={1} textAlign={'center'}>SEP</Table.HeaderCell>
        //             <Table.HeaderCell width={1} textAlign={'center'}>OCT</Table.HeaderCell>
        //             <Table.HeaderCell width={1} textAlign={'center'}>NOV</Table.HeaderCell>
        //             <Table.HeaderCell width={1} textAlign={'center'}>DEC</Table.HeaderCell>
        //             <Table.HeaderCell width={1} textAlign={'center'}></Table.HeaderCell>
        //         </Table.Row>
        //     </Table.Header>
        //     <Table.Body>
        //         {tableData
        //             ?
        //             <>
        //                 {tableData.map( row =>
        //                     <OverviewRow
        //                         rowName={row.rowName}
        //                         monthlyTotals={row.monthlyTotals}
        //                     />
        //                 )}
        //                 {/*{totalsRow &&*/}
        //                 {/*    <OverviewRow*/}
        //                 {/*        rowName="Totals"*/}
        //                 {/*        monthlyTotals={row.monthlyTotals}*/}
        //                 {/*    />*/}
        //                 {/*}*/}
        //             </>
        //             :
        //             children
        //         }
        //     </Table.Body>
        // </Table>
    );
}
