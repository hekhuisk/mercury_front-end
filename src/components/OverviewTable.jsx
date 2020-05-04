import React from "react";

import Cell from "./table/Cell";
import Header from "./table/Header";
import Row from "./table/Row";
import Body from "./table/Body";
import Table from "./table/Table";

export default function OverviewTable(props) {
    return (
        <Table>
            <Header>
                <Cell colSpan={2}></Cell>
                <Cell colSpan={1}>JAN</Cell>
                <Cell colSpan={1}>FEB</Cell>
                <Cell colSpan={1}>MAR</Cell>
                <Cell colSpan={1}>APR</Cell>
                <Cell colSpan={1}>MAY</Cell>
                <Cell colSpan={1}>JUN</Cell>
                <Cell colSpan={1}>JUL</Cell>
                <Cell colSpan={1}>AUG</Cell>
                <Cell colSpan={1}>SEP</Cell>
                <Cell colSpan={1}>OCT</Cell>
                <Cell colSpan={1}>NOV</Cell>
                <Cell colSpan={1}>DEC</Cell>
            </Header>

            <Body>
                {props.children}
            </Body>
        </Table>
    );
}