import { Table as SemanticTable } from 'semantic-ui-react';
import React from "react";


export default function Table(props) {
    const {
        children
    } = props;

    return (
        <SemanticTable
            celled
            striped

        >
            {children}
        </SemanticTable>
    );
};