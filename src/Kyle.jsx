import React from 'react';

import {TabMenu} from 'primereact/tabmenu';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';

class Kyle extends React.Component {
    constructor() {
        super();
        this.state = {
            items: [
                {label: 'Overview'},
                {label: 'Expenses'},
                {label: 'Income'}
            ],
            overview: [
                {rowDescription: 'Total Income', jan: '', feb: '', mar: '', apr: '', may: '', jun: '', jul: '', aug: '', sep: '', oct: '', nov: '', dec: ''},
                {rowDescription: 'Total Expenses', jan: '', feb: '', mar: '', apr: '', may: '', jun: '', jul: '', aug: '', sep: '', oct: '', nov: '', dec: ''},
                {rowDescription: 'Budget', jan: '', feb: '', mar: '', apr: '', may: '', jun: '', jul: '', aug: '', sep: '', oct: '', nov: '', dec: ''},
                {rowDescription: 'Budget Over / Under', jan: '', feb: '', mar: '', apr: '', may: '', jun: '', jul: '', aug: '', sep: '', oct: '', nov: '', dec: ''},
                {rowDescription: 'Est Savings (Income - Budget)', jan: '', feb: '', mar: '', apr: '', may: '', jun: '', jul: '', aug: '', sep: '', oct: '', nov: '', dec: ''},
                {rowDescription: 'Actual Savings (Income - Expenses)', jan: '', feb: '', mar: '', apr: '', may: '', jun: '', jul: '', aug: '', sep: '', oct: '', nov: '', dec: ''}
            ]
        };
    }

    render() {
        return (
            <>
                <TabMenu model={this.state.items} />
                <DataTable value={this.state.overview} >
                    <Column field="rowDescription" />
                    <Column field="jan" header="JAN" />
                    <Column field="feb" header="FEB" />
                    <Column field="mar" header="MAR" />
                    <Column field="apr" header="APR" />
                    <Column field="may" header="MAY" />
                    <Column field="jun" header="JUN" />
                    <Column field="jul" header="JUL" />
                    <Column field="aug" header="AUG" />
                    <Column field="sep" header="SEP" />
                    <Column field="oct" header="OCT" />
                    <Column field="nov" header="NOV" />
                    <Column field="dec" header="DEC" />
                </DataTable>
            </>

        );
    }
}

export default Kyle;
