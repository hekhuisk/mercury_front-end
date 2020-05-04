import React from "react";
import { Table as SemanticTable } from 'semantic-ui-react';

export default function Row(props) {
    return <SemanticTable.Row>{props.children}</SemanticTable.Row>;
}