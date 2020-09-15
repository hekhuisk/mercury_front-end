import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import MUITableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';

const TableHead = (props) => {
    const {
        columns,
        hasActionColumn,
        hasCheckboxColumn,
        numberOfRowsSelected,
        onSelectAllClick,
        rowCount,
    } = props;

    return (
        <MUITableHead>
            <TableRow>
                {hasCheckboxColumn && (
                    <TableCell>
                        <Checkbox
                            indeterminate={numberOfRowsSelected > 0 && numberOfRowsSelected < rowCount}
                            checked={rowCount > 0 && numberOfRowsSelected === rowCount}
                            onChange={onSelectAllClick}
                        />
                    </TableCell>
                )}
                {hasActionColumn && (
                    <TableCell />
                )}
                {columns.map((column) => {
                    const {
                        disablePadding = false,
                        key,
                        label,
                        numeric = false
                    } = column;

                    return (
                        <TableCell
                            key={key}
                            align={numeric ? 'right' : 'left'}
                            padding={disablePadding ? 'none' : 'default'}
                        >
                            {label}
                        </TableCell>
                    );
                })}
            </TableRow>
        </MUITableHead>
    );
};

export default TableHead;