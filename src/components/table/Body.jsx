import React from "react";
import { Table as SemanticTable } from 'semantic-ui-react';

export default function Body(props) {
    return <SemanticTable.Body>{props.children}</SemanticTable.Body>;
}