import React from 'react'
import OverviewRow from "./OverviewRow";

import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {ColumnGroup} from 'primereact/columngroup';
import {Row} from 'primereact/row';

export default function OverviewTable(props) {
    const {
        tableData
    } = props;

    let headerGroup = <ColumnGroup>
        <Row>
            <Column colSpan={3}></Column>
            <Column colSpan={1} textAlign={'center'} header="JAN" />
            <Column colSpan={1} textAlign={'center'} header="FEB" />
            <Column colSpan={1} textAlign={'center'} header="MAR" />
            <Column colSpan={1} textAlign={'center'} header="APR" />
            <Column colSpan={1} textAlign={'center'} header="MAY" />
            <Column colSpan={1} textAlign={'center'} header="JUN" />
            <Column colSpan={1} textAlign={'center'} header="JUL" />
            <Column colSpan={1} textAlign={'center'} header="AUG" />
            <Column colSpan={1} textAlign={'center'} header="SEP" />
            <Column colSpan={1} textAlign={'center'} header="OCT" />
            <Column colSpan={1} textAlign={'center'} header="NOV" />
            <Column colSpan={1} textAlign={'center'} header="DEC" />
            <Column colSpan={1} textAlign={'center'} />
        </Row>
    </ColumnGroup>;

    return (
        <DataTable value={tableData} >
            <Column field="rowName" colSpan={1}/>
            <Column field="monthlyTotals.jan" colSpan={1} textAlign={'center'} header="JAN" />
            <Column field="monthlyTotals.feb" colSpan={1} textAlign={'center'} header="FEB" />
            <Column field="monthlyTotals.mar" colSpan={1} textAlign={'center'} header="MAR" />
            <Column field="monthlyTotals.apr" colSpan={1} textAlign={'center'} header="APR" />
            <Column field="monthlyTotals.may" colSpan={1} textAlign={'center'} header="MAY" />
            <Column field="monthlyTotals.jun" colSpan={1} textAlign={'center'} header="JUN" />
            <Column field="monthlyTotals.jul" colSpan={1} textAlign={'center'} header="JUL" />
            <Column field="monthlyTotals.aug" colSpan={1} textAlign={'center'} header="AUG" />
            <Column field="monthlyTotals.sep" colSpan={1} textAlign={'center'} header="SEP" />
            <Column field="monthlyTotals.oct" colSpan={1} textAlign={'center'} header="OCT" />
            <Column field="monthlyTotals.nov" colSpan={1} textAlign={'center'} header="NOV" />
            <Column field="monthlyTotals.dec" colSpan={1} textAlign={'center'} header="DEC" />
            <Column field="rowTotal" colSpan={1} textAlign={'center'} />
        </DataTable>
    );
}
