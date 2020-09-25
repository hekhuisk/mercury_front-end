import React from 'react';
import MUITableCell from '@material-ui/core/TableCell';
import MUITableRow from '@material-ui/core/TableRow';
import MUITableHead from '@material-ui/core/TableHead';
import MUITableSortLabel from "@material-ui/core/TableSortLabel";

const TableHead = (props) => {
    const {
        classes,
        columnHeaders,
        order,
        orderBy,
        onRequestSort
    } = props;

    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (
        <MUITableHead>
            <MUITableRow>
                {columnHeaders.map((columnHeader) => (
                    <MUITableCell
                        key={columnHeader.id}
                        align={columnHeader.numeric ? 'right' : 'left'}
                        padding={columnHeader.disablePadding ? 'none' : 'default'}
                        sortDirection={orderBy === columnHeader.id ? order : false}
                    >
                        <MUITableSortLabel
                            active={orderBy === columnHeader.id}
                            direction={orderBy === columnHeader.id ? order : 'asc'}
                            onClick={createSortHandler(columnHeader.id)}
                        >
                            {columnHeader.label}
                        </MUITableSortLabel>
                    </MUITableCell>
                ))}
            </MUITableRow>
        </MUITableHead>
    );
};

export default TableHead;