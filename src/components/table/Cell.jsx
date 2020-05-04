import React from "react";
import { Table as SemanticTable } from 'semantic-ui-react';

export default function Cell(props) {
    const {
        children,
        colSpan,
        headerCell,
        ...otherProps
    } = props;

    if (headerCell) {
        return <SemanticTable.HeaderCell colSpan={colSpan} {...otherProps}>{children}</SemanticTable.HeaderCell>
    }
    return (
        <SemanticTable.Cell colSpan={colSpan} {...otherProps}>{children}</SemanticTable.Cell>
    );
}