import React from 'react'

import {DataTable} from 'primereact/datatable';
import {Column} from "primereact/column";
import {Button} from "primereact/button";

const ExpenseTable = (props) => {
    const rowProps = [{
        cost: 10.01,
        date: '05/12/2020',
        description: 'Lowe\'s',
        majorCategory: 'Home',
        majorPurchase: true,
        paymentSource: 'Cash',
        receipt: true,
        subCategory: 'Lawn/Garden',
        category: 'Home - Lawn/Garden'
    }];

    return (
        <DataTable value={rowProps}>
            <Column field="date" header="Date" />
            <Column field="description" header="Description" />
            <Column header="Category" body={(rowData) => `${rowData.majorCategory} - ${rowData.subCategory}`}/>
            <Column field="majorPurchase" header="Major Purchase" body={(rowData) => rowData.majorPurchase && <i className="pi pi-check"/>}/>
            <Column field="paymentSource" header="Payment Source" />
            <Column header="Cost" body={(rowData) => <>{rowData.receipt && <Button icon="pi pi-file-o" className="p-button-secondary"/>} {`$${rowData.cost}`}</>}/>
            <Column body={() => <><Button icon="pi pi-pencil" className="p-button-secondary"/><Button icon="pi pi-trash" className="p-button-secondary"/></>}/>
        </DataTable>

        // <Table striped celled fixed compact>
        //     <Table.Header>
        //         <Table.Row>
        //             <Table.HeaderCell>Date</Table.HeaderCell>
        //             <Table.HeaderCell>Description</Table.HeaderCell>
        //             <Table.HeaderCell>Category</Table.HeaderCell>
        //             <Table.HeaderCell>Major Purchase</Table.HeaderCell>
        //             <Table.HeaderCell>Payment Source</Table.HeaderCell>
        //             <Table.HeaderCell>Cost</Table.HeaderCell>
        //             <Table.HeaderCell />
        //         </Table.Row>
        //     </Table.Header>
        //     <Table.Body>
        //         <ExpenseRow {...rowProps} />
        //         <ExpenseRow {...rowProps} majorPurchase />
        //         <ExpenseRow {...rowProps} receipt />
        //         <ExpenseRow {...rowProps} receipt majorPurchase />
        //     </Table.Body>
        // </Table>
    );
}

export default ExpenseTable;

// Major category
// Sub category
// Vendor
// Expense amount
// Pic of receipt
// Date
// Edit button
// major purchase check box?
// is recurring?
// delete
