import React from 'react'

import MUITable from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';


import { useTable } from 'react-table'
import TableToolbar from "./TableToolbar";
import TableHead from "./TableHead";

const Table = (props) => {
    const {
        columns,
        data,
        hasCheckboxColumn,
        RowRenderer
    } = props;

    const [selected, setSelected] = React.useState([]);

    const handleSelectAllClick = (event) => {
        const newSelecteds = event.target.checked ? data.map((n) => n.description) : [];
        setSelected(newSelecteds);
    };

    const isRowSelected = (description) => selected.indexOf(description) !== -1;

    const handleRowClick = (event, description) => {
        const selectedIndex = selected.indexOf(description);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, description);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }

        setSelected(newSelected);
    };

    return (
        <Paper style={{margin: '10px'}}>
            <TableToolbar />
            <TableContainer>
                <MUITable>
                    <TableHead
                        columns={columns}
                        rowCount={data.length}
                        hasCheckboxColumn={hasCheckboxColumn}
                        onSelectAllClick={handleSelectAllClick}
                        numberOfRowsSelected={selected.length}
                    />
                    {data.map((rowData) => {
                        return (
                            <RowRenderer
                                rowData={rowData}
                                handleRowClick={handleRowClick}
                                isRowSelected={isRowSelected(rowData.description)}
                            />
                        )
                    })}
                </MUITable>
            </TableContainer>
        </Paper>
    );
};

function OldTable({ columns, data }) {
    // Use the state and functions returned from useTable to build your UI
    const { getTableProps, headerGroups, rows, prepareRow } = useTable({
        columns,
        data,
    });


    // Render the UI for your table
    return (
        <Paper style={{margin: '10px'}}>
        <MUITable {...getTableProps()}>
            <TableHead>
                {headerGroups.map(headerGroup => (
                    <TableRow {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <TableCell {...column.getHeaderProps()}>
                                {column.render('Header')}
                            </TableCell>
                        ))}
                    </TableRow>
                ))}
            </TableHead>
            <TableBody>
                {rows.map((row, i) => {
                    prepareRow(row)
                    return (
                        <TableRow {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return (
                                    <TableCell {...cell.getCellProps()}>
                                        {cell.render('Cell')}
                                    </TableCell>
                                )
                            })}
                        </TableRow>
                    )
                })}
            </TableBody>
        </MUITable>
        </Paper>
    )
}

export default Table;
